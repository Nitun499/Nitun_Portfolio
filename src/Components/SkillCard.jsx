import './SkillCard.css'
import { FaReact } from 'react-icons/fa';


const SkillCard = ({skillicon,skill}) => {
  return (
    <div className='card'>
        <div className='icon'>
            <img  src={skillicon} alt="icon" />
        </div> 
        <p className='skillname'>{skill}</p>
    </div>
  )
}

export default SkillCard
