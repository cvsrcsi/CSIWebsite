import React, { useEffect, useRef } from 'react';
import Logo from '../../Assets/csi.jpg';
import './loader.css';

function Loader({curRef}) {
  

  return (
    <div ref={curRef} className='LoadContainer'>
      <div className="logo ">
        <div className="animate">
        <img id='logoImg ' className='logoImg' src={Logo} alt="" />
        </div>
      </div>

      <div className="fade-up-text" style={{color:'white'}}>
        <div className="line1 "><div className="animate">CSI</div></div> 
        <div className="line2 "><div className="animate">CHAPTER</div></div>
        <div className="line3 "><div className="animate">AU</div></div>
      </div>
    </div>
  );
}

export default Loader;
