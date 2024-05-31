import React from 'react';
import { Link } from 'react-router-dom';
import './Navs.css';


const Nav = () => {
  return (
    <div className='cont1'>
      <ul className="navcontainer">
        <li className="navcomponents"><Link className="navcomponents" to="/">Home</Link></li>
        <li className="navcomponents"><Link className="navcomponents" to="/projectpages">Projects</Link></li>
        <li className="navcomponents"><Link className="navcomponents" to="/contact">Contact</Link></li>
      
      </ul>
      dfdfdf
    </div>
  );
};

export default Nav;