import React from 'react';
import './Homec.css'
import phone from './images/mobile.png'
import mail from './images/mail.png'
import github from './images/github.png'
import myImage from './images/WhatsApp Image 2024-04-25 at 16.35.16_b8f4f6ac.jpg'
import Projects from './Projects';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='cont2'>
      <div className='homecont1'>
        <div className="titlecontainer">
          <div className="child1"><img className='child1_1' src={myImage} alt="" /></div>
          <div className="child-container">
            <div className="child2">Mubeen Tariq 
              <div className="child3">Web Developer / FrontEnd</div>
            </div>

            <div className="child4">As a passionate front-end developer, I specialize in creating visually appealing, responsive web applications using HTML, CSS, JavaScript, and React.js. My skills include developing mobile-first designs, ensuring cross-device compatibility, and implementing best practices in UI/UX design. Proficient in version control with Git, I am committed to building accessible websites following WAI-ARIA guidelines. My portfolio features projects like a personal portfolio website, a fully functional e-commerce store, and a real-time weather app. I thrive in collaborative environments and am always eager to learn new technologies and improve my craft. Let's connect and create something amazing together! Whether it's a new project or a challenging problem, I am excited to contribute and make a positive impact.
              <div class="contact-info">
                <div className='phone'> 
                  <img src={phone} alt="" className='icons1'  />
                  Phone: +92 3100045017
                </div>
                <div className='email'> 
                  <img src={mail} alt="" className='icons1' />
                  Email: mubeentariq35951@gmail.com
                </div>
                <div className='github'>
                  <img src={github} alt="" className='icons1'  />
                  GitHub: &nbsp;<a href="https://github.com/Mubeen35951" className='navcomponents1' target='1'>github.com/Mubeen35951</a>
                </div>

                <Link className='message'  to='/contact'>Message/Email Me</Link>
      
              </div>
              <div className='pro'>
       <Projects/>
      </div>
            </div>
          </div>

        </div>

      </div>

     
    </div>
  );
};

export default Home;