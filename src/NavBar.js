import React from 'react';
import RenderProducts from './RenderProducts';
import { NavLink } from 'react-router-dom';


function NavBar() {
  
  return (
    
      <div className='sidenav'>

        <NavLink to= '/'>
          <h4>Home</h4>
        </NavLink>

        <NavLink to= '/stores'>
          <h4>Stores</h4>
        </NavLink>

        {/* <NavLink to= '/FlatAppleChicago'>
          <h4>FlatApple Chicago</h4>
        </NavLink>

        <NavLink to= '/FlatAppleNewYork'>
          <h4>FlatApple New York</h4>
        </NavLink> */}
      
      </div>
    );
}

export default NavBar
