import React from 'react';
import './Projectpages.css';
import Imag1 from './images/pro1.png';
import Imag2 from './images/pro2.png';
import Imag3 from './images/pro3.png';
import Imag4 from './images/pro4.png';
import Imag5 from './images/pro5.png';
import Imag6 from './images/pro6.png';
import Imag7 from './images/pro7.png';
import Imag8 from './images/pro8.png';
import Imag9 from './images/pro9.png';
import Imag10 from './images/pro10.png';
import Imag11 from './images/pro11.png';

const Projectpage = () => {
  return (
    <div className='cont86'>
      <div className='projectcontainer1'>
        <div className='cont69'>
          <img src={Imag1} alt="" className='Imag' />
          <div className="overlay">
            <p>For my first project, I crafted a basic HTML webpage, featuring a clean layout and essential content to introduce visitors to the site's purpose or topic.</p>
            <button className="watch-live">WATCH LIVE</button>
          </div>
        </div>
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
          <img src={Imag4} alt="" className='Imag' />
          <div className="overlay">
            <p>For my fourth project, I built a chat application using HTML, CSS, and JavaScript. The app supports real-time messaging and has a sleek, intuitive design for a smooth user experience.</p>
            <button className="watch-live">WATCH LIVE</button>
          </div>
        </div>
        <div className='cont69'>
          <img src={Imag5} alt="" className='Imag' />
          <div className="overlay">
            <p>For my fifth project, I developed a simple counter application using HTML, CSS, and JavaScript. Users can increment or decrement the counter value with easy-to-use buttons, providing a straightforward way to track quantities or scores.</p>
            <button className="watch-live">WATCH LIVE</button>
          </div>
        </div>
        <div className='cont69'>
          <img src={Imag6} alt="" className='Imag' />
          <div className="overlay">
            <p>For my sixth project, I created a light bulb simulation using HTML, CSS, and JavaScript. Users can interact with the bulb to turn it on or off, showcasing dynamic visual effects and interactive functionality.</p>
            <button className="watch-live">WATCH LIVE</button>
          </div>
        </div>
        <div className='cont69'>
          <img src={Imag7} alt="" className='Imag' />
          <div className="overlay">
            <p>For my seventh project, I crafted an animation depicting the transition from a sun to a moon using HTML and CSS. The animation showcases a captivating visual journey, illustrating the change from day to night with smooth and engaging transitions.</p>
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
          <img src={Imag9} alt="" className='Imag' />
          <div className="overlay">
            <p>For my ninth project, I fashioned a sleek website solely with JavaScript, showcasing its prowess in both functionality and styling for a seamless user experience.</p>
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
        <div className='cont69'>
          <img src={Imag11} alt="" className='Imag' />
          <div className="overlay">
            <p>For my eleventh project, I implemented a complete CRUD system with user authentication using PHP for the backend and CSS for frontend styling. This project showcases the integration of backend functionality with frontend design to create fully functional sign-in, sign-up, and data management pages.</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpage;
