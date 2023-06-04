import Contact from './Contact'
import Experience from './Experience'
import './Home.css'
import Projects from './Projects'
import Skills from './Skills'
import { useRef,useEffect } from 'react'
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Frontend Developer', 'DSA Tutor','Problem Solver'],
      typeSpeed: 100,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
    <div className='container'>
    <div className="wrapper">
    <div className="left">
        <h2>Hello, My name is <span className='name'>Nitun Singh</span> </h2>
        <div style={{marginBottom:"1rem"}}>and I am a Passionate</div>
        <span className='animatedrole' ref={typedRef}></span>
     </div>
     <div className="right">
        <img src="../assets/user1.png" alt="usersvg" />
     </div>
    </div>
  </div>
    <Skills />
    <Experience/>
    {/* <Projects/> */}
    <Contact/>
    </>
  )
}

export default Home
