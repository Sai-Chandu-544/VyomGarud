import React from 'react'

export const Why_Page = () => {
  return (
    <div>
        
      <section className="py-20 px-8 bg-[#23272A] text-center">
        <h2 className="lg:text-2xl sm:text-xl font-bold mb-6 font-montserrat text-[#ff7b00]">Why VyomGarud?</h2>
        <ul className="flex flex-col md:flex-row justify-center gap-8 font-inter text-lg">
          <li className="bg-[#181A20] px-6 py-4 rounded-lg shadow hover:bg-[#23272A]/90 transition border-l-4 border-[#ff7b00] lg:text-xl sm:text-[12px]">
            <span className="font-bold text-[#ff7b00] ">Military-Grade Reliability</span> <p className='text-white'> with Fail-safe Systems</p>
          </li>
          <li className="bg-[#181A20] px-6 py-4 rounded-lg shadow hover:bg-[#23272A]/90 transition border-l-4 border-[#ff7b00] lg:text-xl sm:text-[12px]">
            <span className="font-bold text-[#ff7b00]">AI-Driven Precision</span> <p className='text-white'>Navigation & Targeting</p>
          </li>
          <li className="bg-[#181A20] px-6 py-4 rounded-lg shadow hover:bg-[#23272A]/90 transition border-l-4 border-[#ff7b00] lg:text-xl sm:text-[12px]">
            <span className="font-bold text-[#ff7b00]">Secure, Real-Time</span><p className='text-white'>Data Transmission</p> 
          </li>
        </ul>
      </section>
    </div>
  )
}
