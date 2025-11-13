import React from 'react'

export const Navbar = () => {


  return (
    <>
      <header className="flex justify-between items-center px-8 py-6 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg fixed top-0 z-50 w-screen">
       <a href="#Landing_Page"><span className="text-2xl font-bold font-poppins tracking-wide text-white lg:text-2xl md:text:xl sm:text-[16px]">VyomGarud</span></a> 
        <nav>
          <a href="#about" className="lg:mx-4 sm:mx-2 hover:text-[#ff7b00] transition lg:text-xl sm:text-[10px] md:text-[12px] text-black font-bold">About</a>
          <a href="#products" className="lg:mx-4 sm:mx-2 hover:text-[#ff7b00] transition lg:text-xl sm:text-[10px] md:text-[12px] text-black font-bold">Capabilities</a>
          <a href="#contact" className="lg:mx-4 sm:mx-2 hover:text-[#ff7b00] transition lg:text-xl sm:text-[10px] md:text-[12px] text-black font-bold">Contact</a>
        </nav>
      </header>

    </>


  )
}
