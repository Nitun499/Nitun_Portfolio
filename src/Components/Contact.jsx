import './Contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Contact = () => {
  return (
    <div className='container contact_cont' id='contact'>
       <h1 className='heading ' style={{textAlign:'center'}}>Contact</h1>
       <div className="contactele_cont">
        <div className="cont_left">
            {/* <div className="svgicon">
                <img  src="../assets/contactsvg3.png" alt="usersvg" />
            </div> */}
            <h2 className='cont_heading' style={{textAlign:'center'}}>Coding Profiles</h2>
            {/* <div className="cont_icon coding_profile">
                <a className='social_icon' href="https://leetcode.com/NitunRathore/" target='_blank'>LeetCode</a>
                <a className='social_icon' href="https://auth.geeksforgeeks.org/user/nitinshivbaba499" target='_blank'>GeeksForGeeks</a>
                <a className='social_icon' href="https://www.hackerrank.com/nitinshivbaba499?hr_r=1" target='_blank'>Hackerrank</a>
            </div> */}
            <div className="outer-div">
                <div className="inner_div">
                    <div className="so_coprofilediv">
                        <div className="icon">
                            <img  src="../assets/leetcodeicon.png" alt="leetcode" />
                        </div>
                        <a href="https://leetcode.com/NitunRathore/" target='_blank' rel="noreferrer">LeetCode</a>
                    </div>
                    <div className="so_coprofilediv">
                        <div className="icon">
                            <img src="../assets/gfgicon.png" alt="gfg" />
                        </div>
                       <a href="https://auth.geeksforgeeks.org/user/nitinshivbaba499" target='_blank' rel="noreferrer">Geeksforgeeks</a>
                    </div>
                    <div className="so_coprofilediv">
                        <div className="icon">
                            <img src="../assets/hackerrankicon.png" alt="hackerrank" />
                        </div>
                        <a href="https://www.hackerrank.com/nitinshivbaba499?hr_r=1" target='_blank' rel="noreferrer">Hackerrank</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="cont_right">
        <h2 className='cont_heading' style={{textAlign:'center'}}>Social Media</h2>
            <div className="outer_div">
                <div className="inner_div">
                <div className="so_coprofilediv">
                    <div className="icon">
                        <img src="../assets/linkedinicon.png" alt="Linkedin" />
                    </div>
                    <a href="https://www.linkedin.com/in/nitunsingh/" target='_blank' rel="noreferrer">Linkedin</a>
                </div>
                <div className="so_coprofilediv">
                    <div className="icon">
                        <img src="../assets/whatsappicon.png" alt="Linkedin" />
                    </div>
                    <a href="https://wa.me/9729712499" target='_blank' rel="noreferrer">Whatsapp</a>
                </div>
                <div className="so_coprofilediv">
                    <div className="icon">
                        <img src="../assets/emailicon.png" alt="Linkedin" />
                    </div>
                    <a href="mailto:nitunsingh499@gmail.com" target='_blank' rel="noreferrer">Email</a>
                </div>
                </div>
            </div>
        </div>
        
       </div>
    </div>

  )
}

export default Contact
