import React from 'react';
import Lottie from "lottie-react";
import lottie from '../../../assets/lottie2.json'
interface MainProps {
}

const Introduction: React.FC<MainProps> = ({ }) => {
  // const buttons = [
  //   {name: "LinkedIn", link: "https://www.linkedin.com/in/jaewon-yang/"},
  //   {name: "Github", link: "https://github.com/j1yang"},
  //   {name: "Resume", link: "https://github.com/j1yang"}
  // ]

  return (
    <section className='w-[100%] py-10 my-8 pb-14'>
        <div className='flex mb-14 pb-14'>
          <div className='w-[70%] my-auto ml-3'>
            <h1 className="text-7xl font-semibold ml-5 leading-none"><span className='link link-underline link-underline-grey'>Hi all, I'm Jaewon<span className='animate-wave inline-block transform-origin-center animate-pulse'>👋</span></span><br /></h1>
            <div className='w-[700px] mt-5 ml-6'>
              <small className="text-4xl font-semibold link link-underline link-underline-grey">
              I'm passionate WebXR Developer having experience of building Immersive Web  with JS, TS / React / Nodejs / THREEjs.
              </small>
            </div>
          </div>
        <Lottie animationData={lottie} loop={true} />
        </div>
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