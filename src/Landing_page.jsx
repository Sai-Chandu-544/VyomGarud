import React, { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import BlurText from "./Text_Animation";



const images = [
  "https://cdn.pixabay.com/photo/2017/09/10/02/56/technology-2734236_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/02/07/drone-1866742_1280.jpg",
  "https://img.freepik.com/free-photo/drone-hovering-up_181624-502.jpg?t=st=1763043462~exp=1763047062~hmac=3d319cbcbad44578d81e483f17892bc527fa91884312ddcebf6c2df39924a45b&w=1480",
  "https://images.unsplash.com/photo-1456615913800-c33540eac399?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const Landing_Page = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>


      <div className="relative w-full h-screen overflow-hidden " >

        <Navbar />
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${index === current ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}


<section id="Landing_Page">
   <div className= " relative z-10 flex flex-col justify-between items-center h-[500px] md:h-[700px] text-center text-white px-4">
          <div className="pt-28 w-full">
            <BlurText delay={150} animateBy="words" direction="top" className="lg:text-5xl sm:text-2xl mb-8 flex justify-center items-center">
              Welcome to Our <span className="text-[#ff7b00] font-bold">VyomGarud</span>
            </BlurText>

            <p className="lg:text-xl sm:text-[12px] font-inter">Military-Grade UAV Systems for Precision & Autonomy</p>
          </div>
          <div className="pb-12 w-full flex justify-center">
            <a
              href="#contact"
              className="bg-[#ff7b00] text-white lg:px-8 lg:py-3 sm:px-5 sm:py-1 rounded font-semibold lg:text-lg sm:text-[12px] shadow-lg hover:bg-[#ff6a00] transition"
            >
              Request Demo
            </a>
          </div>
        </div>
 

</section>
     </div>
       





    </>

  );
};


