import React from 'react';
import Introduction from './Introduction/Introduction';
import Projects from './Projects/Projects';
import TechStacks from '../TechStacks/TechStacks';
import Contacts from '../Contacts/Contacts';

interface MainProps {
}

const Header: React.FC<MainProps> = ({ }) => {

  return (
    <main>
      <Introduction />
      <TechStacks />
      <Projects />
      <Contacts />
    </main>
  );
};

export default Header;