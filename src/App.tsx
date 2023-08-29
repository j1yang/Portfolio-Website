import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaArrowAltCircleUp } from 'react-icons/fa';

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isLoading, setIsLoading] = useState(true);

  const [visible,setVisible] = useState(false);
  const handleVisible = (isVisible: boolean) => {
    setIsLoading(false);
    setVisible(isVisible);
  };
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isLoading) {
      gsap.from(headerRef.current, { opacity: 0, duration: 0.7, y: -100 });
    }
  }, [isLoading]);
  return (
    <div>
      <Loading handleVisible={handleVisible}/>

      {visible && 
        <div>
          <div ref={headerRef}>
              <Header title="Jaewon" />
          </div>
          <Main/>
          <Footer text='2023'/>
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
      }
    </div>
  )
}

export default App
