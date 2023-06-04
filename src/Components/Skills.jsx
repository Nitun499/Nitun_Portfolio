import SkillCard from './SkillCard'
import './Skills.css'
import { FaReact,FaBootstrap } from 'react-icons/fa';
import Slider from 'infinite-react-carousel';

const Skills = () => {
  const Skills =[
    {
      id:1,
      title:'React',
      skillicon:'../assets/react.png'
    },
    {
      id:2,
      title:'HTML',
      skillicon:'../assets/html.png'
    },
    {
      id:3,
      title:'CSS',
      skillicon:'../assets/css.png'
    },
    {
      id:4,
      title:'JavaScript',
      skillicon:'../assets/javascript.png'
    },
    {
      id:5,
      title:'C++',
      skillicon:'../assets/c++.png'
    },
    {
      id:6,
      title:'Github',
      skillicon:'../assets/github.png'
    },
    {
      id:7,
      title:'Node.js',
      skillicon:'../assets/nodejs.png'
    },
    {
      id:8,
      title:'Networking',
      skillicon:'../assets/networking.png'
    },
    {
      id:9,
      title:'Bootstrap',
      skillicon:'../assets/Bootstrap.png'
    },
    {
      id:10,
      title:'DSA',
      skillicon:'../assets/DataStructure.png'
    },
  ]

 
  return (
    <div className='container skillcontainer' id='skills'>
      <h2 className='heading' style={{textAlign:'center'}}>Skills</h2>
      <div className="wrapper-reverse">
        <div className="left ">

            <div className="skillcarousal">
            <Slider  slidesToShow={3} arrowsScroll={2} autoplay={true} autoplayScroll={2} autoplaySpeed={2000} >
              {Skills.map((item,index)=>{
                return (
                  <div>
                  <SkillCard skillicon={item.skillicon} skill={item.title} />
                </div>
                )
                
              })}
              
        </Slider>
        </div>
            
        </div>
        <div className="right">
        <img src="../assets/skillsvg2.png" alt="usersvg" />
        </div>
      </div>
      
    </div>
  )
}

export default Skills
