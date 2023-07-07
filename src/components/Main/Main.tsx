import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Introduction from './Introduction/Introduction';
import Projects from './Projects/Projects';
import TechStacks from '../TechStacks/TechStacks';
import Contacts from '../Contacts/Contacts';

gsap.registerPlugin(ScrollTrigger);

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const techStacksRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateOnScroll = (ref: React.RefObject<HTMLDivElement>, animation: any) => {
      if (ref.current) {
        gsap.to(ref.current, {
          opacity: 1,
          x: 0, // Change y to x for horizontal animation
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 80%',
            toggleActions: 'play none none reverse',
          },
          onComplete: () => {
            animation.kill();
          },
        });
      }
    };

    const introductionAnimation = gsap.from(introductionRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
    });
    animateOnScroll(introductionRef, introductionAnimation);

    const techStacksAnimation = gsap.from(techStacksRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
    });
    animateOnScroll(techStacksRef, techStacksAnimation);

    const projectsAnimation = gsap.from(projectsRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
    });
    animateOnScroll(projectsRef, projectsAnimation);

    const contactsAnimation = gsap.from(contactsRef.current, {
      opacity: 0,
      x: -100, // Animation from left side
      duration: 1,
    });
    animateOnScroll(contactsRef, contactsAnimation);
  }, []);

  return (
    <main>
      <div className='mb-[12em]' ref={introductionRef}>
        <Introduction />
      </div >
      <div className='mb-[8em]' ref={techStacksRef}>
        <TechStacks />
      </div>
      <div className='mb-[8em]' ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactsRef}>
        <Contacts />
      </div>
    </main>
  );
};

export default Main;
