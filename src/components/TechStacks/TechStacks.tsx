import React from 'react';
import {BiLogoJavascript,BiLogoTypescript, BiLogoReact,BiLogoNodejs,BiLogoMongodb,BiLogoFirebase,BiLogoRedux, BiLogoTailwindCss,BiLogoPython,BiLogoUnity} from 'react-icons/bi';
import {TbBrandThreejs, TbBrandCSharp} from 'react-icons/tb';
import {SiExpress, SiSvelte, SiWebpack,SiVite} from 'react-icons/si';
import {GiFeather} from 'react-icons/gi';
import Lottie from "lottie-react";
import lottie from '../../assets/tool.json'

interface TechStacksProps {
}

const TechStacks: React.FC<TechStacksProps> = ({ }) => {

  return (
    <section id='Skills' className='w-[100%] p-10 mt-14 pt-14'>
      <div className='flex justify-center'>
        <Lottie className='w-[450px]' animationData={lottie} loop={true} />
        <div className='w-[450px] ml-14 my-auto'>
        <h2 className='text-4xl font-extrabold'>What I Do</h2>
          <div className=' flex flex-col mt-6 ml-4'>
            <div className='w-[full] flex '>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoJavascript style={{color: '#666666', height: 50, width: 50}} />
                <p className='text-center text-xs'>JavaScript</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoTypescript style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>TypeScript</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <TbBrandThreejs style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>THREEjs</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoPython style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Python</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <TbBrandCSharp style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>C#</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoUnity style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Unity</p>
              </div>
            </div>
            <div className='w-[full] flex '>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoReact style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>React</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoRedux style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Redux</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <SiSvelte style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Svelte</p>
              </div>
            </div>
            <div className='w-[full] flex '>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoNodejs style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Nodejs</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <SiExpress style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>EXPRESSjs</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <GiFeather style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Feathersjs</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoMongodb style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>MongoDB</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoFirebase style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Firebase</p>
              </div>
            </div>
            <div className='w-[full] flex '>
              <div className='flex flex-col mr-4 mb-3'>
                <SiVite style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Vite</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <SiWebpack style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Webpack</p>
              </div>
              <div className='flex flex-col mr-4 mb-3'>
                <BiLogoTailwindCss style={{color: '#666666', height: 50, width: 50 }} />
                <p className='text-center text-xs'>Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;