import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loading.css';
import { TypeAnimation } from 'react-type-animation';

interface LoadingProps {
  handleVisible: () => void;
}

const Loading: React.FC<LoadingProps> = ({ handleVisible }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;

    const tl = gsap.timeline({ onComplete: removeLoader });
    tl.to(loader, { opacity: 0, duration: 4.5, ease: "power2.inOut" }); // Adjust duration and easing as needed

    function removeLoader() {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
        handleVisible();
      }
    }
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <div className='flex flex-col'>
        <TypeAnimation
          sequence={[
            100,
            '재  원',
            400,
            'Jaewon'
          ]}
          wrapper="span"
          speed={1}
          style={{ fontSize: '3em', display: 'inline-block' }}
          repeat={0}
        />
      </div>
    </div>
  );
};

export default Loading;
