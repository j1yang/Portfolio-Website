import React from 'react';
import Button from '../../UI/Button/Button';

interface MainProps {
}

const Introduction: React.FC<MainProps> = ({ }) => {
  const buttons = [
    {name: "LinkedIn", link: "https://www.linkedin.com/in/jaewon-yang/"},
    {name: "Github", link: "https://github.com/j1yang"},
    {name: "Resume", link: "https://github.com/j1yang"}
  ]

  return (
    <section className='w-[100%]'>
        <h1 className="text-5xl font-semibold mt-11 mb-3">Hi, I'm Jaewon 😁<br />
          <small className="font-semibold">
          Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. <br /> 
          </small>
        </h1>
        <div className='w-[400px] flex justify-between m-auto anim'>
          {
            buttons.map((button) =>
            <Button name={button.name} link={button.link}/>
            )
          }
        </div>
      </section>
  );
};

export default Introduction;