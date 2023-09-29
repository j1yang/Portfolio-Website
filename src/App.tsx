import './App.css'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { gsap } from 'gsap';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Hide scroll when component mounts
    document.body.style.overflow = 'hidden';

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Show scroll when component unmounts
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVisible = () => {
    setTimeout(() => {
      gsap.to('.main-content', { opacity: 1, duration: 1 });
      window.scrollTo({ top: 0});
      document.body.style.overflow = 'auto'; // Show scroll after loading
    }, 100);
  };


  return (
    <div className=''>
      <Loading handleVisible={handleVisible}/>

      <div className="main-content mx-auto xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]" style={{ opacity: 0 }}>
        <Main/>
        <Footer text='Copyright ©2023 Jaewon Yang'/>
        <div className="fixed bottom-0 right-0 mb-8 mr-8">
          {showButton && (
            <button
              className="bg-slate-950 text-white py-3 px-3 rounded-full hover:scale-110 transition duration-500"
              onClick={handleButtonClick}
            >
              <FaArrowAltCircleUp style={{color: 'white', height: 20, width: 20}}/>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
