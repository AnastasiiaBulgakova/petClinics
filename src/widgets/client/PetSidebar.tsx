import { Collapse } from 'antd';
import WrapperSidebar from '@shared/ui/wrapperSidebar/WrapperSidebar';
import AddButton from '@shared/ui/addButton/AddButton';

import { childrenItem, genExtra } from './constants';
import style from './PetSidebar.module.scss';

import { useGetAllPetsQuery } from '@/shared/services/api/client/petClient.api';
import { PetDTO } from '@/shared/services/api/client/petClientDTO';

const PetSidebar = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const addPets = () => {
    console.log('Добавить петомца');
  };
  const { data: pets = [] } = useGetAllPetsQuery();
  const items = pets.map((pet: PetDTO) => {
    return {
      key: pet.id,
      label: pet.name,
      extra: genExtra(),
      children: childrenItem,
    };
  });
  const auth = localStorage.getItem('role');

  if(auth === 'CLIENT'){
    return (
      <WrapperSidebar className={style.wrapperSidebar}>
        <div className={style.collapse}>
          <div className={style.collapse__header}>
            <div className={style.collapse__titleContainer}>
              <h2 className={style.collapse__title}>Ваши питомцы</h2>
            </div>
            <AddButton onClick={addPets} />
          </div>
          <Collapse
            className={style.collapse__collapse}
            items={items}
            onChange={onChange}
            expandIconPosition='start'
            bordered={false}
            ghost
            accordion
          />
        </div>
      </WrapperSidebar>
    );
  };
};

export default PetSidebar;
