import { useState } from 'react';
import React from 'react';
import RenderProducts from './RenderProducts';
import { NavLink } from 'react-router-dom';


function NavBar({data}) {
  
    const names = data.map((obj)=> {
      return <p key={obj.id}>{obj.name}</p>
    })
    
    return (
    <div>
      <div className='sidenav'>
       <h4><NavLink to= '/home'> Home </NavLink></h4>
       <h4><NavLink to= '/FlatAppleChicago'>FlatApple Chicago</NavLink></h4>
       <h4><NavLink to= '/FlatAppleNewYork'>FlatApple New York</NavLink></h4>
      </div>
        
     </div>   
      );
}
export default NavBar
