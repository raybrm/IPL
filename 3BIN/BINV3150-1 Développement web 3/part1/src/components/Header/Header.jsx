import React from 'react';

import Logo from './logo_haute_ecoleFs.png'

const Header = (props) => {
    return (
      <>
        <img src={Logo}></img>
        <h1>
          {props.title}
        </h1>
      </>
    )
  }

export default Header