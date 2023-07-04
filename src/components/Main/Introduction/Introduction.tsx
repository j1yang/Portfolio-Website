import React from 'react';

interface MainProps {
}

const Introduction: React.FC<MainProps> = ({ }) => {
  // const buttons = [
  //   {name: "LinkedIn", link: "https://www.linkedin.com/in/jaewon-yang/"},
  //   {name: "Github", link: "https://github.com/j1yang"},
  //   {name: "Resume", link: "https://github.com/j1yang"}
  // ]

  return (
    <section className='w-[100%] p-10'>
        <h1 className="text-5xl font-semibold m-11 "><span className='link link-underline link-underline-grey'>Hi, I'm Jaewon <span className='animate-wave inline-block transform-origin-center animate-pulse'>👋</span></span><br />
          <small className="font-semibold link link-underline link-underline-grey">
          Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. <br /> 
          </small>
        </h1>
        {/* <div className='w-[400px] flex justify-between m-auto anim'>
          {
            buttons.map((button) =>
            <Button name={button.name} link={button.link}/>
            )
          }
        </div> */}
      </section>
  );
};

export default Introduction;