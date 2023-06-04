import React, { useState,useEffect } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
import { Link } from 'react-scroll';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Navbar = () => {
    const [clicked,setClicked]= useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToTop =()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const shouldAddShadow = scrollTop > 0; 
  
        setIsScrolled(shouldAddShadow);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  return (
    <>

 
    <div className={isScrolled ? 'nav scrolled' : 'nav'}>
        <span  onClick={scrollToTop}>
          <img className='logo' src="../assets/userlogo.png" alt="userimg" />
        </span>
        <ul className="menuitems">
            <li className='navlinks'>
              <Link to='skills'  smooth={true} duration={500} > 
                    Skills
              </Link>
            </li>
            <li className='navlinks'>
            <Link to='experience'  smooth={true} duration={500} > 
                    Experience
              </Link>
            </li>
            <li className='navlinks'>
            <Link to='projects'  smooth={true} duration={500} > 
                    Projects
              </Link>
            </li>
            <li className='navlinks'>
            <Link to='contact'  smooth={true} duration={500} > 
                    Contact
              </Link>
            </li>
        </ul>
        <div className="toggle_icon" onClick={()=>setClicked(!clicked)}>
            {clicked?<CloseIcon/>:<DensityMediumIcon/>}
        </div>
        
    </div>
    {
      showScrollButton &&
      <button  onClick={handleScrollToTop} className='scrolltopbtn'><ArrowUpwardIcon /></button> 
    }
    </>
  )
}

export default Navbar
