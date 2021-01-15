import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  return (
    <>
      <div>
        <Link  to="/calendar">Calendrier</Link>
        <Link  to="/config">Configuration</Link>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
