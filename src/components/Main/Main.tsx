import React from 'react';
import Introduction from './Introduction/Introduction';
import Gallery from './Gallery/Gallery';

interface MainProps {
}

const Header: React.FC<MainProps> = ({ }) => {
  const buttons = [
    {name: "LinkedIn", link: "https://www.linkedin.com/in/jaewon-yang/"},
    {name: "Github", link: "https://github.com/j1yang"},
    {name: "Resume", link: "https://github.com/j1yang"}
  ]

  return (
    <main>
      <Introduction />
      <Gallery />
    </main>
  );
};

export default Header;