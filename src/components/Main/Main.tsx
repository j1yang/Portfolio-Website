import React from 'react';
import Introduction from './Introduction/Introduction';
import Gallery from './Gallery/Gallery';

interface MainProps {
}

const Header: React.FC<MainProps> = ({ }) => {

  return (
    <main>
      <Introduction />
      <Gallery />
    </main>
  );
};

export default Header;