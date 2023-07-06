import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

function App() {
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

      {visible && <div>
        <div ref={headerRef}>
            <Header title="Jaewon" />
          </div>
      <Main/>
      <Footer text='this is footer'/></div>}
    </div>
  )
}

export default App
