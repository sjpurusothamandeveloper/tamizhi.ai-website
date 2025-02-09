import React, { useEffect,useRef } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../App.css"; 
import img1 from "../tamizhi1.jpg"
import img2 from "../tamizhi2.jpg"
const Landing = () => {
 //carosual section
  const carouselRef = useRef(null);
 useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone all items to create an infinite effect
    const items = Array.from(carousel.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });
  }, []);
//cards scrolldown
  const cardsRef = useRef(null);
 const scrollToCards = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
 // Default language is English
const [mylanguage, setMylanguage] = useState("English"); 
// This function is called when the user selects a new language
const handleChange = (event) => {
  const selectedLanguage = event.target.value;
  setMylanguage(selectedLanguage);
  changeLanguage(selectedLanguage);  // Call a function to handle the language change
};

// This function will perform actions when the language changes
const changeLanguage = (language) => {
  console.log(`Language changed to: ${language}`);
  // Perform any action based on the selected language
  // For example, you can translate the page content, or adjust styles based on the language
  if (language === "English") {
    // Handle English-specific logic
  } else if (language === "Tamil") {
    // Handle Tamil-specific logic
  } else if (language === "Hindi") {
    // Handle Hindi-specific logic
  }
};
 //menubar
    // Optionally, you can reset it manually somewhere else in the code, like on a different button click:
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
return (
  <div>
     { /* Header Section */}
    <header
  className="bg-[#00005A] text-white py-[13px] px-6 flex items-center justify-between w-full 
             rounded-b-[6vw] sm:rounded-b-[2vw] shadow-md">
  {/* Heading (Fixed Position) */}
  <h1 className="text-lg sm:text-2xl font-bold bg-[#00005A] text-white px-4 py-2 rounded">
    Tamizhi
  </h1>
     {/* Desktop Menu (Hidden on Mobile) */}
        <div className="ml-auto hidden md:flex gap-2 bg-[#00005A]">
          <button
            className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
            onClick={scrollToCards}>
            Services
          </button>
          <button
            className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
            onClick={() => navigate("/contact")}>
            Contact Us
          </button>
          <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Products
          </button>
        </div>

        {/* Mobile Menu Button (Always Fixed in Top Right) */}
        <button
          className="text-3xl font-bold hover:text-gray-300 absolute md:hidden top-4 right-4"
          onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </header>

      {/* Mobile Menu (Opens Below Button Without Moving Heading) */}
      {isOpen && (
        <div className="absolute top-16 right-4 md:hidden flex flex-col items-start bg-[#00005A] gap-2 p-4 rounded-lg shadow-lg">
          <button
            className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
            onClick={scrollToCards}
          >
            Services
          </button>
          <button
            className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
          <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
            Products
          </button>
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-[500px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#00005A] font-bold text-center bg-transparent text-[5vw] leading-[6vw] sm:text-[4vw] sm:leading-[5vw] md:text-[3.7vw] md:leading-[4.2vw] font-[Times_New_Roman]">
          "Travel smart & enjoy seamless <span className="font-extrabold font-[Times_New_Roman] text-[rgb(120,80,250)] bg-transparent">bag-free</span> travel"
        </div>
      </div>
    {/* our services */}
      <div  ref={cardsRef}>
        {Array.from({ length: 1 }).map((_, index) => (
          <div id={`card-${index + 1}`} key={index}>
        <h2 className="text-[2.9vw] leading-[1.4vw] font-bold text-center mb-[2.8vw] text-[#00005A] font-[Objective] pt-[8px]"   key={index}
        
        >Our Services</h2>
        <p className="text-[1.41vw] leading-[1.6vw] text-[#00005A] text-center mb-[2.8vw]">
          Airportr streamlines your experience to, through, and from the airport.
        </p>
        </div>
      ))}
      </div>
       {/* cards section */}
 <div  className="bg-white rounded-[10px]   sm:rounded-[3px] py-10">
      <div className="container mx-auto px-4 md:px-20" >
    {/* Flex container for cards */}
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      {/* Card 1 */}
      <div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3 rounded-[5vw] sm:rounded-[1.5vw] ">
        <img
          src={img1}
          alt="tamizhi1"
          className="w-full h-50 object-cover rounded-t-lg  rounded-[3vw] sm:rounded-[1.5vw]"
        />
        <h5 className="text-xl font-bold mt-4 text-white bg-[#00005A]">Departure</h5>
        <p className="text-white mt-2 bg-[#00005A]">We collect your bags from any home, hotel or office within our service area, and check them in for your flight.</p>
        <ul className="mt-4 space-y-2 bg-[#00005A]">
          <li className="flex items-center bg-[#00005A]">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2 bg-[#00005A]"
            />
            <span className="text-white mt-2 bg-[#00005A]">Skip the check-in queues</span>
          </li>
          <li className="flex items-center bg-[#00005A]">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2 text-white bg-[#00005A]"
            />
            <span className="text-white mt-2 bg-[#00005A]">Travel baggage-free to the airport</span>
          </li>
        </ul>
        <div className="mt-4 flex justify-between text-white bg-[#00005A]">
          <a href="#" className="bg-white text-[#00005A] py-2 px-4 rounded-lg hover:bg-blue-700">
            Get Price
          </a>
          <a href="https://airportr.com/en/departure/" className="text-white bg-[#00005A] hover:underline">
            Learn more
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3 rounded-[5vw] sm:rounded-[1.5vw]" >
        <img
          src={img2}
          alt="tamizhi2"
          className="w-full h-45 object-cover rounded-t-lg text-white bg-[#00005A] rounded-[3vw] sm:rounded-[1.5vw]"/>
        <h5 className="text-xl font-bold mt-4 text-white bg-[#00005A]">Arrival</h5>
        <p className="text-white bg-[#00005A]">We collect your bags straight from the plane, and deliver them to any address within our service area.</p>
        <ul className="mt-4 space-y-2 text-white bg-[#00005A]">
          <li className="flex items-center text-white bg-[#00005A]">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2 text-white bg-[#00005A]"
            />
            <span className="text-white bg-[#00005A]">No waiting for your bags after landing</span>
          </li>
          <li className="flex items-center text-white bg-[#00005A]">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2 text-white bg-[#00005A]"
            />
            <span className="text-white bg-[#00005A]">Travel hands-free to your destination</span>
          </li>
        </ul>
        <div className="mt-4 flex justify-between text-white bg-[#00005A]">
          <a href="#" className="bg-white text-[#00005A] py-2 px-4 rounded-lg hover:bg-blue-700">
            Get Price
          </a>
          <a href="https://airportr.com/en/arrival/" className="text-white bg-[#00005A] hover:underline">
            Learn more
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3   rounded-[5vw] sm:rounded-[1.5vw]">
        <img
          src="https://airportr.com/wp-content/uploads/2023/08/door_to_door_img.png"
          alt="Door-to-door"
          className="w-full h-55 object-cover rounded-t-lg  rounded-[3vw] sm:rounded-[1.5vw]"
        />
        <h5 className="text-xl font-bold mt-4 text-white bg-[#00005A]">Door-to-door</h5>
        <p className="text-white bg-[#00005A] mt-2">Combining both services, we deliver your bags from doorstep to destination for a totally seamless journey.</p>
        <ul className="mt-4 space-y-2 text-white bg-[#00005A]">
          <li className="flex items-center text-white bg-[#00005A]">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2 text-white bg-[#00005A]"
            />
            <span className="text-white bg-[#00005A]">Bag-free journey from door to door</span>
          </li>
          <li className="flex items-center text-white bg-[#00005A]">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2 text-white bg-[#00005A]"
            />
            <span className="text-white bg-[#00005A]">Seamless airport journey at both ends</span>
          </li>
        </ul>
        <div className="mt-4 flex justify-between text-white bg-[#00005A]">
          <a href="#" className="text-[#00005A] bg-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Get Price
          </a>
          <a href="https://airportr.com/en/door-to-door/" className="text-white bg-[#00005A] rounded-bl-[1px] rounded-br-[3px] hover:underline">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
         {/* text section */}
    <div className="p-[70px]">
  <h2 className="text-[2.9vw] leading-[3.5vw] font-bold text-center mb-[0.9vw] font-objective text-[#00005A]">
    Our  Partners
  </h2>
  <h5 className="text-[1.41vw] leading-[3.5vw] text-center mb-[0.9vw] font-objective text-[#00005A]">
    You can use our services when flying with some of the world's largest airlines
  </h5>
</div>
         {/* carosual section */}
<div className="landing-container overflow-hidden">
      <div
        ref={carouselRef}
        className="carousel flex gap-5 p-5 whitespace-nowrap"
        style={{
          display: "flex",
          animation: "scroll-left 15s linear infinite", // Adjust speed here
        }}
      >
        {/* Original Set of Images */}
        {[
          "https://airportr.com/wp-content/uploads/2018/05/british-airways-logo.svg",
          "https://airportr.com/wp-content/uploads/2021/09/Swiss.svg",
          "https://airportr.com/wp-content/uploads/2023/08/austrian_logo.svg",
          "https://airportr.com/wp-content/uploads/2023/10/klm_logo-cropped.svg",
          "https://airportr.com/wp-content/uploads/2023/08/edelweiss_logo.svg",
          "https://airportr.com/wp-content/uploads/2023/08/american_logo.svg",
          "https://airportr.com/wp-content/uploads/2023/08/virgin_logo.svg",
          "https://airportr.com/wp-content/uploads/2023/08/singapore_logo.svg",
          "https://airportr.com/wp-content/uploads/2023/10/easyJet-nw.svg",
        ].map((src, index) => (
          <div
            key={index}
            className="carousel-item flex-shrink-0 scroll-snap-center"
            style={{
              border: "2px solid #00005A", // Separate border for each item
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img src={src} alt={`Logo ${index}`} className="w-[13vw] h-auto" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .carousel {
          display: flex;
          white-space: nowrap;
          will-change: transform;
        }
      `}</style>
    </div>
           {/* footer*/}
           <section
           id="scroll_footer"
           className="v2_footer flex-row bg-[#00005A] h-[305px] text-white mt-[5.9vw] p-[2vw] rounded-t-[1.5vw] relative z-10">
           <div className="top flex flex-row  text-white bg-[#00005A] md:flex-row justify-between">
           <div className="bg-[#00005A] text-white p-3">
       <ul className="en flex flex-wrap pl-[1px]  space-y-3 md:space-y-0 md:space-x-6  flex flex-col md:flex-row  bg-[#00005A] ">
       <li className="bg-[#00005A] pl-[3px] pr-[40px] md:pr-0"> 
  <a href="https://airportr.com/en/refer-a-friend/" className="text-white bg-[#00005A]">
    Refer-a-friend
  </a>
</li>

         <li className="bg-[#00005A] ">
           <a href="https://airportr.com/en/terms-and-conditions/" className="text-white bg-[#00005A] ">Terms of Use</a>
         </li>
         <li className="bg-[#00005A]">
           <a href="https://airportr.com/en/privacy-policy/" className="text-white bg-[#00005A]">Privacy Policy</a>
         </li>
       </ul>
  <footer className="bg-[#00005A]  mr-[1vw]   p-[1vw]  pl-[20px] text-white py-1">
      <div className="flex justify-end  absolute right-[3vw] top-[3vw] bg-[#00005A] space-x-3 mr-[1vw]p-[1vw]  mr-1 pr-[1px] ">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-500  bg-[#00005A] transition duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-pink-500  bg-[#00005A] transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-400    bg-[#00005A] transition duration-300" />
        </a>
      </div>
    </footer>
    <div className="optin-footer  pr-[52px] w-full mt-6 bg-[#00005A]">
  <h2 className="text-lg bg-[#00005A]  pr-[52px] text-[1.7vw] pl-[22px] w-full pt-[20px] font-bold">
    Sign up for emails and receive offers and service updates
  </h2>
  <form className="optin-footer-form mt-4 bg-[#00005A] flex flex-row space-x-3">
    <div className="input w-full pl-[16px] bg-[#00005A] sm:w-auto">
      <input
        type="email"
        placeholder="Enter email"
        className="p-2 w-60 sm:w-60 border pl-[15px]  border-gray-300 rounded-md bg-[#00005A] text-black rounded-[6vw] sm:rounded-[2vw]"/>
    </div>
    <div  className=' pr-[45px] bg-[#00005A]'>
    <input
      type="submit"
      value="Opt In"
     className="p-3 bg-[#0b57d0ff] text-white  pl-[28px] pr-[28px] rounded-md cursor-pointer hover:bg-gray-200 rounded-[6vw] sm:rounded-[2vw]"/>
     </div> 
  </form>


</div>
   </div>
    </div>
      <hr className="my-6 border-gray-500" />
      <div className="bottom flex flex-col  w-full md:flex-row justify-between pl-[35px] bg-[#00005A] items-center text-center md:text-left">
        <p className=" bg-[#00005A]">Tamizhi © 2025</p>
         </div>
    </section>
    </div>
  );
};



export default Landing;