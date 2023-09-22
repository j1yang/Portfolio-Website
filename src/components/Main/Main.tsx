import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Introduction from './Introduction/Introduction';
import Projects from './Projects/Projects';
import TechStacks from '../TechStacks/TechStacks';
import Contacts from '../Contacts/Contacts';
import Feedbacks from './Feedbacks/Feedbacks';
import Header from '../Header/Header';

gsap.registerPlugin(ScrollTrigger);

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const techStacksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const feedbacksRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(introductionRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: {
      trigger: introductionRef.current,
      start: 'top 80%',
      end: 'bottom 40%',
      scrub: 50 ,
      once: true
    }});

    gsap.fromTo(techStacksRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: {
      trigger: techStacksRef.current,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: 0.5,
      once: true
    }});

    gsap.fromTo(projectsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: {
      trigger: projectsRef.current,
      start: 'top 100%',
      end: 'bottom 90%',
      scrub: 0.5,
      once: true
    }});

    gsap.fromTo(feedbacksRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: {
      trigger: feedbacksRef.current,
      start: 'top 90%',
      end: 'bottom 40%',
      scrub: 0.5,
      once: true
    }});

    gsap.fromTo(contactsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: {
      trigger: contactsRef.current,
      start: 'top 100%',
      end: 'bottom 90%',
      scrub: 0.5,
      once: true
    }});
  }, []);

  return (
    <div>
      <Header title="Jaewon" />
      <main>
        <div className='mb-[12em]' ref={introductionRef}>
          <Introduction />
        </div >
        <div className='mb-[8em]' ref={techStacksRef}>
          <TechStacks />
        </div>
        <div className='mb-[1em]' ref={projectsRef}>
          <Projects />
        </div>
        <div className='mb-[8em]' ref={feedbacksRef}>
          <Feedbacks/>
        </div>
        <div ref={contactsRef}>
          <Contacts />
        </div>
      </main>
    </div>
  );
};

export default Main;
