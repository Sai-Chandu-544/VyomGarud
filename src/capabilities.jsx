import React from 'react'

export const Capabilities = () => {
  return (
    <div>
       
      <section id="products" className="py-20 bg-[#181A20] px-6">
        <h2 className="lg:text-3xl sm:text-2xl  font-bold mb-8 font-montserrat text-center text-[#ff7b00]">Capabilities</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      
          <div className="bg-[#23272A] p-8 rounded-xl shadow-lg border-t-4 border-[#ff7b00] hover:scale-105 transition">
            <img src="/icons/drone.svg" className="h-12 mx-auto mb-4" alt="" />
            <h3 className="font-bold lg:text-xl sm:text-[15px]  mb-2">Reconnaissance Drones</h3>
            <p className="text-gray-300 sm:text-[10px]">Long-range, stealth capabilities for surveillance missions.</p>
          </div>
  
          <div className="bg-[#23272A] p-8 rounded-xl shadow-lg border-t-4 border-[#ff7b00] hover:scale-105 transition">
            <img src="/icons/ai-chip.svg" className="h-12 mx-auto mb-4" alt="" />
            <h3 className="font-bold text-xl mb-2 lg:text-xl sm:text-[15px]">Autonomous Surveillance</h3>
            <p className="text-gray-300 sm:text-[10px]">AI-powered, automated patrolling and target identification.</p>
          </div>
       
          <div className="bg-[#23272A] p-8 rounded-xl shadow-lg border-t-4 border-[#ff7b00] hover:scale-105 transition">
            <img src="/icons/box.svg" className="h-12 mx-auto mb-4" alt="" />
            <h3 className="font-bold text-xl mb-2 lg:text-xl sm:text-[15px]">Payload Delivery UAVs</h3>
            <p className="text-gray-300 sm:text-[10px]">Secure supply delivery across difficult terrain.</p>
          </div>
   
          <div className="bg-[#23272A] p-8 rounded-xl shadow-lg border-t-4 border-[#ff7b00] hover:scale-105 transition">
            <img src="/icons/integration.svg" className="h-12 mx-auto mb-4" alt="" />
            <h3 className="font-bold text-xl mb-2 lg:text-xl sm:text-[15px]">Custom Integration</h3>
            <p className="text-gray-300 sm:text-[10px]">Modular AI / sensor solutions for unique requirements.</p>
          </div>
        </div>
      </section>

    </div>
  )
}
