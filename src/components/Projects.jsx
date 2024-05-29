import React from 'react';
import './Project.css';

import Imag2 from './images/pro2.png';
import Imag3 from './images/pro3.png';
import Imag8 from './images/pro8.png';
import Imag10 from './images/pro10.png';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='projectcontainer'>
       <div className='cont86'>
      <div className='projectcontainer1'>
      
        <div className='cont69'>
          <img src={Imag2} alt="" className='Imag' />
          <div className="overlay">
            <p>
For my second project, I developed a webpage using HTML and CSS. However, the design currently lacks responsiveness, meaning it doesn't adjust well to different screen sizes.</p>
            <button className="watch-live">WATCH LIVE</button>
          </div>
        </div>
        <div className='cont69'>
          <img src={Imag3} alt="" className='Imag' />
          <div className="overlay">
            <p>For my third project, I created a calculator application using HTML, CSS, and JavaScript. The app performs basic arithmetic operations and features a clean, user-friendly interface.</p>
            <button className="watch-live">WATCH LIVE</button>
          </div>
        </div>
 <div className='cont69'>
          <img src={Imag8} alt="" className='Imag' />
          <div className="overlay">
            <p>For my eighth project, I developed a responsive portfolio website using only HTML and CSS. This portfolio effectively showcases my skills and projects, ensuring an optimal viewing experience on different devices and screen sizes without relying on JavaScript for functionality.</p>
            <button className="watch-live">WATCH LIVE</button>
          </div>
        </div>
     
        <div className='cont69'>
          <img src={Imag10} alt="" className='Imag' />
          <div className="overlay">
            <p>For my tenth project, I designed a semi-responsive website with subtle animations using HTML, CSS, and a touch of JavaScript. This blend offers a visually appealing interface while retaining simplicity and partial adaptability across different screen sizes.</p>
            <button className="watch-live">WATCH LIVE</button>
          </div>
        </div>
       
 </div>
    </div>
      
      
      <div className='see'><Link className='message seemore'  to='/projectpages'>See More</Link></div>

    </div>
  );
};

export default Projects;
