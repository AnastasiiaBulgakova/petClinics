import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Modal as Popap, ConfigProvider } from 'antd';

import style from './Modal.module.scss';
import { regExEmail } from './constants';

import Button from '@/shared/ui/button/Button';

type Inputs = {
  email: string;
};

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ defaultValues: { email: '' }, mode: 'onChange' });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    reset();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem('userEmail')) return;
    const idTimeout = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);

    return () => {
      clearTimeout(idTimeout);
    };
  }, [isModalOpen]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            titleColor: '#445B60',
            titleFontSize: 40,
            fontWeightStrong: 700,
            titleLineHeight: 1.3,
            borderRadiusLG: 0,
          },
        },
      }}>
      <Popap
        title='Введите email для получения промокода'
        open={isModalOpen}
        onCancel={handleCancel}
        styles={{
          header: { textAlign: 'center', marginBottom: '3.0625rem', backgroundColor: '#8AE5F9' },
          content: { backgroundColor: '#8AE5F9' },
        }}
        className={style.popup}
        centered={true}
        closable={false}
        footer={null}
        keyboard
        width={{ xs: 360, sm: 566, md: 566, lg: 566, xl: 567, xxl: 567 }}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            className={style.inputEmail}
            placeholder='email'
            {...register('email', {
              onChange: () => isValid && localStorage.setItem('userEmail', 'true'),
              required: 'Email Address is required',
              pattern: { value: regExEmail, message: 'Введите коректный email' },
            })}
          />
          {errors.email && <span className={style.error}>{errors.email.message}</span>}
          <Button type='submit' className={style.button}>
            Отправить
          </Button>
        </form>
      </Popap>
    </ConfigProvider>
  );
};

export default Modal;
