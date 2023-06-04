import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      Company: 'Prescientai Infotech',
      link:'https://prescientai.in',
      skills:'Reactjs,HTML,CSS,Javascript,Bootstrap,Saas',
      duration: 'May 2023 - Current',
        icon:'../assets/frontenddev2.png'
    },
    {
      title: 'Intern as Junior Security Researcher',
      Company: 'Resec Systems',
      duration: 'Jan 2023 - April 2023',
      skills:'C++, Windows API, Kali Linux, C#(Basic), Python(Basic)',
      link:'https://resecsystems.io/',
        icon:'../assets/cybersecurity.png'
    },
    {
      title: 'Data Structures & Algorithm Tutor',
      Company: 'Google Developer Student Club, UIET(PU)',
      duration: 'Sep 2022 - Dec 2022',
      link:'',
      skills:'C++,Data Structures,Algorithms,Problem Solving',
      icon:'../assets/DataStructure.png'
    },
   
   
  
    // Add more experience items as needed
  ];
  return (
    <div className='container' id='experience'>
      <h1 className='heading' style={{textAlign:'center'}}>Experience</h1>
      <div className="experience">
      {experiences.map((experience, index) => (
        <div className="experience-item" key={index}>
        <div className="leftpart">
          <h3>{experience.title}</h3>
            <p className='com_name'>{experience.Company}</p>
            <p style={{marginBottom:"0.4rem"}}><span className='skills'>Skills: </span>{experience.skills} </p>
            <p className='duration'>{experience.duration}</p>
              <a href={experience.link} target='__blank'>
                <button className='link'>Visit</button>
              </a>
        </div>
        <div className="rightpart">
        <div className='icon'>
            <img  src={experience.icon} alt="icon" />
        </div> 
        </div>
          
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default Experience
