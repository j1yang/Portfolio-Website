import React from 'react';
import Lottie from "lottie-react";
import lottie from '../../../assets/lottie_intro.json'
interface MainProps {
}

const Introduction: React.FC<MainProps> = ({ }) => {
  // const buttons = [
  //   {name: "LinkedIn", link: "https://www.linkedin.com/in/jaewon-yang/"},
  //   {name: "Github", link: "https://github.com/j1yang"},
  //   {name: "Resume", link: "https://github.com/j1yang"}
  // ]

  return (
    <div>
      {/* Mobile */}
      <section className='md:hidden'>
        <div className='flex flex-full'>
          <div className='w-[100%]'>
            <div className='mx-auto' style={{ width: '280px', height: '280px' }}>
              <Lottie animationData={lottie} loop={true} />
            </div>
            <h1 className="text-4xl font-semibold leading-none text-center "><span>Hello! My name is </span><br /></h1>
            <div className=' mt-2 w-[320px] mx-auto text-center'>
              <small className="text-6xl font-bold text-[#00ADB5]">
                Jay Yang. 
              </small>
            </div>
            <div className=' mt-4 w-[320px] mx-auto text-center'>
              <small className="text-4xl font-semibold ">
                I'm Software Developer.
              </small>
            </div>
          </div>
        </div>
      </section>
      {/* MD */}
      <section className='hidden md:block lg:hidden'>
        <div className='flex flex-full mt-14'>
          <div className='w-[100%]'>
            <div className='mx-auto mt-2' style={{ width: '300px', height: '300px' }}>
              <Lottie animationData={lottie} loop={true} />
            </div>
            <h1 className="text-4xl font-semibold leading-none text-center"><span>Hello! My name is </span><br /></h1>
            <div className=' mt-8 w-[650px] mx-auto text-center'>
              <small className="text-6xl font-semibold text-[#00ADB5]">
              Jay Yang.
              </small><br></br>
              <small className="text-4xl font-semibold ">
              I'm Software Developer.
              </small>
            </div>
          </div>
        </div>
      </section>
      <section className='hidden w-[100%] my-8 pt-[8em] lg:block'>
        <div className='flex'>
          <div className='w-[70%] my-auto ml-3'>
            <h1 className="text-6xl font-semibold ml-5 leading-none"><span>Hello! My name is </span><br /></h1>
            <div className='w-[700px] mt-8 ml-6'>
              <small className="text-8xl font-semibold text-[#00ADB5]">
              Jay Yang.
              </small>

            </div>
            <div className='w-[700px] mt-8 ml-6'>
              <small className="text-6xl font-semibold">
              I'm Software Developer.

              </small>
            </div>
          </div>
        <Lottie animationData={lottie} loop={true} />
        </div>
      </section>
    </div>
  );
};

export default Introduction;