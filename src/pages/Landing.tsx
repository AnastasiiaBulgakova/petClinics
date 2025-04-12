import Description from '@features/landingDescription/ui/Description';
import Greeting from '@features/landingGreeting/ui/Greeting';
import Service from '@features/landingService/ui/Service';

import Pets from '@/features/landingPets/ui/Pets';
import Contacts from '@/features/landingContacts/ui/Contacts';
import ScrollToTopButton from '@/shared/ui/scrollToTopButton/ScrollToTopButton';

const Landing = () => {
  return (
    <>
      <Greeting />
      <Pets />
      <Service />
      <Description />
      <Contacts />
      <ScrollToTopButton />
    </>
  );
};

export default Landing;
