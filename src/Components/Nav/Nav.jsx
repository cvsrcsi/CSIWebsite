import React, { useEffect, useState } from 'react'
import Logo from '../../Assets/csi.jpg'
import './nav.css'
import {Divide as Menu} from 'hamburger-react';
import { Link } from 'react-router-dom';

function Nav({isMenuOpen, setIsMenuOpen}) {


  useEffect(()=> { 

    window.addEventListener('scroll', ()=> {
      const nav = document.getElementById('navContainer');
      nav.classList.toggle('active', window.scrollY > 0 )
      nav.classList.toggle('zero', window.scrollY == 0)
    })

  }, [isMenuOpen])

  const handleMenuOpen = () => {
    // const nav = document.getElementById('navContainer');
    
    // nav.classList.toggle('active', isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
    
    console.log(isMenuOpen)
  }

  return (
    <div className='' >
      <div id='navContainer' className={`navContainer `} style={{color:isMenuOpen && '#fff' }} >
      <div className="navLogo">

        <img src={Logo} alt="" className="navImg" />
        <div className="navText">CSI AU</div>
        
      </div>

      <div className="menu mobile">
        <Menu className='mobile'  onToggle={handleMenuOpen} />
      </div>

      
      </div>

      {isMenuOpen && 
      
        <div className="Menu Container">
          <div className="overlay"></div>
          <Link onClick={()=>setIsMenuOpen(false)} to='/'>Home</Link>
          <Link onClick={()=>setIsMenuOpen(false)} to='/events'>Events</Link>
          <Link onClick={()=>setIsMenuOpen(false)} to='/workingbody'>Working Body</Link>
        </div>
      }
      
    </div>
  )
}

export default Nav