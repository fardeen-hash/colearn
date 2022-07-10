import React from 'react'
import home from './../image/home-1.svg';

export const Nav = () => {


    const handleclick = () => {
        console.log('ff');
    }
  return (
    <div className="box1">
        <button onClick={handleclick}>
        <img className='imgnav' src={home} alt="icon"  height="50"/>
        </button>
        <button onClick={handleclick}>
        <img className='imgnav' src={home} alt="icon"  height="50"/> 
        </button>
      
       </div>
  )
}
export default Nav;
