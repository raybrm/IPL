import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const padding = {
    paddingRight: 5
  }
  
  return (
    <>
      <div>
        <Link style={padding} to="/calendar">Calendrier</Link>
        <Link style={padding} to="/config">Configuration</Link>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
