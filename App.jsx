import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './component/navba'
import Image from "./assets/image.jpg"
import './App.css';

function App() {
 
  return (
    <>
    
    <Navbar />
    <img src={Image} alt="image" />
    </>
  )
};

export default App;
