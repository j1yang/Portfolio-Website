import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loading.css';

interface LoadingProps {
  handleVisible: (isVisible: boolean) => void;
}

const Loading: React.FC<LoadingProps> = ({ handleVisible }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const tl = gsap.timeline({ onComplete: removeLoader });

    tl.to(loader, { opacity: 0, duration: 2 });

    // Minimum duration of 1 second (1000 milliseconds)
    const minimumDuration = 4000;
    const adjustedDuration = gsap.utils.clamp(1, minimumDuration / 1000, tl.duration());
    tl.duration(adjustedDuration);

    function removeLoader() {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
        handleVisible(true);
      }
    }
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <div className='flex flex-col'>
        <div className="loader-ripple ml-2"></div>
        <p>Welcome !</p>
      </div>
    </div>
  );
};

export default Loading;
