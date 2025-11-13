import { useState } from 'react'
import {Navbar} from "./navbar"
import {Landing_Page} from "./Landing_page"
import {Mission_Page} from "./mission_page"
import {Capabilities} from "./capabilities"
import {Why_Page} from "./why_page"
import { Footer } from './footer'
 

function App() {
 

  return (
    <>
    <div className='bg-[#23272A] '>
      
      <Landing_Page/>
      <Mission_Page/>
      <Capabilities/>
      <Why_Page/>
      <Footer/>


    </div>


    
   
    </>
  )
}

export default App
