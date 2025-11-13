import React from 'react'

export const Footer = () => {
  return (
    <div>

        <section id="contact" className="py-20 bg-[#181A20] px-6">
        <h2 className="text-2xl font-bold font-montserrat text-center mb-4 text-[#ff7b00]">Contact Us</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4 bg-[#23272A] p-8 rounded-xl shadow-md">
          <input type="text" placeholder="Name" className="px-4 py-2 rounded bg-[#181A20] text-white focus:outline-none" required />
          <input type="email" placeholder="Email" className="px-4 py-2 rounded bg-[#181A20] text-white focus:outline-none" required />
          <textarea placeholder="Message" rows="4" className="px-4 py-2 rounded bg-[#181A20] text-white focus:outline-none" required />
          <button type="submit" className="bg-[#ff7b00] px-6 py-2 rounded text-white font-semibold hover:bg-orange-600 transition">
            Submit
          </button>
        </form>
        <footer className="mt-8 text-center text-gray-400 font-inter text-sm">
          VyomGarud &copy; {new Date().getFullYear()} — Military-Grade UAV Systems
        </footer>
      </section>
    </div>
  )
}
