import React, { useState, useEffect,useRef } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../App.css"; // Ensure your styles are imported here, including the carousel styles.
const Landing = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default Language
 // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 // Function to change language when an option is clicked
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown after selecting
  };
// Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target && !event.target.closest('.dropdown')) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const carouselRef = useRef(null); // Reference to the carousel element

  useEffect(() => {
    // Function to auto-scroll the carousel
    const scrollCarousel = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Scroll the carousel by 1px

        // Reset scroll position if it reaches the end (for infinite loop effect)
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    // Set an interval to scroll the carousel every 10ms
    const intervalId = setInterval(scrollCarousel, 10);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      {/* Header Section */}
      <header className="bg-[#00005A] text-white py-[13px] px-6 flex justify-between items-center shadow-md" style={{ borderRadius: "0 0 1.5vw 1.5vw" }}>
        <h1 className="text-2xl font-bold bg-[#00005A] text-white px-4 py-2 rounded">YAMAHA</h1>
        <div className="ml-auto flex gap-2 bg-[#00005A]">
          <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">About Us</button>
          <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">Products</button>
        </div>
      </header>

      {/* Image Section */}
      <div className="relative h-[500px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#00005A] font-bold text-center bg-transparent text-[5vw] leading-[6vw] sm:text-[4vw] sm:leading-[5vw] md:text-[3.7vw] md:leading-[4.2vw] font-[Times_New_Roman]">
          "Travel smart & enjoy seamless <span className="font-extrabold font-[Times_New_Roman] text-[rgb(120,80,250)] bg-transparent">bag-free</span> travel"
        </div>
      </div>

      <div>
        <h2 className="text-[2.9vw] leading-[1.4vw] font-bold text-center mb-[2.8vw] text-[#00005A] font-[Objective] pt-[8px]">Our Services</h2>
        <p className="text-[1.41vw] leading-[1.6vw] text-[#00005A] text-center mb-[2.8vw]">
          Airportr streamlines your experience to, through, and from the airport.
        </p>
      </div>
      <div className="bg-white rounded-[10px] py-10">
  <div className="container mx-auto px-4 md:px-20">
    {/* Flex container for cards */}
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      {/* Card 1 */}
      <div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3" style={{ borderRadius: "1.1vw 1.1vw 1.1vw 1.1vw" }}>
        <img
          src="https://airportr.com/wp-content/uploads/2023/08/departure_img.png"
          alt="Departure"
          className="w-full h-55 object-cover rounded-t-lg"
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
      <div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3" style={{ borderRadius: "1.1vw 1.1vw 1.1vw 1.1vw" }}>
        <img
          src="https://airportr.com/wp-content/uploads/2023/08/arrival_img.png"
          alt="Arrival"
          className="w-full h-55 object-cover rounded-t-lg text-white bg-[#00005A]"
        />
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
      <div className="bg-[#00005A] shadow-md rounded-lg p-6 w-full md:w-1/3">
        <img
          src="https://airportr.com/wp-content/uploads/2023/08/door_to_door_img.png"
          alt="Door-to-door"
          className="w-full h-55 object-cover rounded-t-lg"
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

    <div className="p-[70px]">
  <h2 className="text-[2.9vw] leading-[3.5vw] font-bold text-center mb-[0.9vw] font-objective text-[#00005A]">
    Our Airline Partners
  </h2>
  <h5 className="text-[1.41vw] leading-[3.5vw] text-center mb-[0.9vw] font-objective text-[#00005A]">
    You can use our services when flying with some of the world's largest airlines
  </h5>
</div>


<div className="landing-container">
      {/* Carousel Section */}
      <div
        ref={carouselRef} // Reference to the carousel
        className="carousel flex overflow-x-auto gap-5 p-5 whitespace-nowrap scroll-snap-x mandatory"
      >
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2018/05/british-airways-logo.svg"
            alt="British Airways"
            className="w-[13vw] h-auto"
          />
        </div>
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2021/09/Swiss.svg"
            alt="Swiss"
            className="w-[13vw] h-auto"
          />
        </div>
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2023/08/austrian_logo.svg"
            alt="Austrian Airlines"
            className="w-[13vw] h-auto"
          />
        </div>
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2023/10/klm_logo-cropped.svg"
            alt="KLM"
            className="w-[10vw] h-auto"
          />
        </div>
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2023/08/edelweiss_logo.svg"
            alt="Edelweiss"
            className="w-[13vw] h-auto"
          />
        </div>
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2023/08/american_logo.svg"
            alt="American Airlines"
            className="w-[13vw] h-auto"
          />
        </div>
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2023/08/virgin_logo.svg"
            alt="Virgin Airlines"
            className="w-[13vw] h-auto"
          />
        </div>
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2023/08/singapore_logo.svg"
            alt="Singapore Airlines"
            className="w-[13vw] h-auto"
          />
        </div>
        <div className="carousel-item flex-shrink-0 scroll-snap-center">
          <img
            src="https://airportr.com/wp-content/uploads/2023/10/easyJet-nw.svg"
            alt="EasyJet"
            className="w-[13vw] h-auto"
          />
        </div>
      </div>
    </div>
   
    <section
      id="scroll_footer"
      className="v2_footer flex-row bg-[#00005A] h-[305px] text-white mt-[5.9vw] p-[2vw] rounded-t-[1.5vw] relative z-10">
      <div className="top flex flex-row  text-white bg-[#00005A] md:flex-row justify-between">
      <div className="bg-[#00005A] text-white p-3">
  <ul className="en flex flex-wrap justify-center md:justify-start items-center  bg-[#00005A] space-x-6">
    <li className=" bg-[#00005A]">
      <a href="https://airportr.com/en/departure/" className="text-white bg-[#00005A]">Departure</a>
    </li>
    <li className=" bg-[#00005A]">
      <a href="https://airportr.com/en/arrival/" className="text-white bg-[#00005A]">Arrival</a>
    </li>
    <li className="  bg-[#00005A]">
      <a href="https://airportr.com/en/door-to-door/" className="text-white bg-[#00005A]">Door-to-door</a>
    </li>
    <li className=" bg-[#00005A]">
      <a href="https://airportr.com/en/refer-a-friend/" className="text-white bg-[#00005A]">Refer-a-friend</a>
    </li>
    <li className=" bg-[#00005A]">
      <a href="https://airportr.com/en/terms-and-conditions/" className="text-white bg-[#00005A]">Terms of Use</a>
    </li>
    <li className=" bg-[#00005A]">
      <a href="https://airportr.com/en/privacy-policy/" className="text-white bg-[#00005A]">Privacy Policy</a>
    </li>
  </ul>

          <div className="optin-footer mt-6 bg-[#00005A]">
            <h2 className="text-lg bg-[#00005A] text-[1.7vw]  pt-[16px] font-bold">
              Sign up for emails and receive offers and service updates
            </h2>
            <form className="optin-footer-form mt-4 bg-[#00005A] flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
              <div className="input w-full bg-[#00005A] sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="p-2 w-full sm:w-64 border bg-[#00005A] border-gray-300 rounded-md text-black" style={{ borderRadius: "1.5vw 1.5vw 1.5vw 1.5vw" }} />
              </div>
              <input
                type="submit"
                value="Opt In"
                className="p-3 bg-[#0b57d0ff] text-white  pt-[ 3.8vw 7.4vw 3.8vw 9.4vw] rounded-md cursor-pointer hover:bg-gray-200 "style={{ borderRadius: "1.2vw 1.2vw 1.2vw 1.2vw"  }} />
            </form>
          </div>
        </div>

      
        <footer className="bg-[#00005A]  mr-[1vw]  p-[1vw]  pr-[10px] text-white py-1">
      <div className="flex justify-end  absolute right-[1vw] top-[1vw] bg-[#00005A] space-x-3 mr-[1vw]p-[1vw]  mr-1 pr-[1px] ">
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
    

    <footer className="bg-[#00005A] text-white py-6 mt-12">
        <div className="flex justify-center">
          {/* Dropdown Button */}
          <div className="relative inline-block text-left dropdown">
            <button
              onClick={toggleDropdown}
              className="bg-[#3498DB] text-white px-4 py-2 font-medium text-sm border-none cursor-pointer rounded-md focus:outline-none"
            >
             {selectedLanguage}
            </button>

            {/* Dropdown Content */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#f1f1f1] shadow-lg z-10 rounded-md">
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-[#ddd]"
                  onClick={() => changeLanguage('English')}
                >
                  English
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-[#ddd]"
                  onClick={() => changeLanguage('Hindi')}
                >
                  Hindi
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-[#ddd]"
                  onClick={() => changeLanguage('Tamil')}
                >
                  Tamil
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-black hover:bg-[#ddd]"
                  onClick={() => changeLanguage('French')}
                >
                  French
                </a>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
      <hr className="my-6 border-gray-500" />

      <div className="bottom flex flex-col md:flex-row justify-between  bg-[#00005A] items-center text-center md:text-left">
        <p className=" bg-[#00005A]">Airportr © 2025</p>
        <div className="flex items-center bg-[#00005A] space-x-2">
          <img
            src="https://airportr.com/wp-content/uploads/2023/08/footer_stars.svg"
            alt="Trustpilot"
            className="h-5 bg-[#00005A]"/>
          <p className=" bg-[#00005A]">Trustpilot</p>
        </div>
      </div>
    </section>
  



</div>





  );
};

export default Landing;