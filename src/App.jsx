import './App.css'

import Loader from './Components/Loader/Loader'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Events from './Components/Events/Events';
import Event from './Components/Events/Event';



function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const t1 = gsap.timeline();
  const curRef = useRef(null)

  useEffect(() => {
    t1.to('.LoadContainer .animate', {
      y: 0,
      ease: 'power4.out',
      delay: 0.2,
      duration: 1.8,
      stagger: 0.2,
      
    }).to(curRef.current, {
      y: -900,
      ease:'power4.out',
      duration:1.5,
      onComplete: ()=>{curRef.current.remove()}
    })
  }, []);

  return (
    
    <>
    <div className="container">
    

      <Loader curRef={curRef}/> 
      
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

      <Routes>  
        <Route path='/' element={<Home />}  />  
        <Route path='/events/:id' element={<Event />} />
        <Route path='/events' element={<Events />} />
        <Route path='/workingbody' element={<div style={{position:'absolute', top:'220px', left:'120px', fontSize:'40px'}}>Coming Soon!</div>} />
      </Routes>
    </div>
    </>
  )
}

export default App
