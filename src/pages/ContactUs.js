import "../App.css";
import React, { useState, useEffect,} from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    mobilenumber: "",
    description: "",
    attachments: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData((prev) => ({ ...prev, attachments: [...files] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
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

  return (
    <div>
    <header className="bg-[#00005A] text-white py-[13px] px-6 flex justify-between items-center shadow-md" style={{ borderRadius: "0 0 1.5vw 1.5vw" }}>
        <h1 className="text-2xl font-bold bg-[#00005A] text-white px-4 py-2 rounded">Tamizhi</h1>

 <div className="ml-auto flex gap-2 bg-[#00005A]">
       <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">Services</button>
       <button
          className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
          onClick={() => navigate("/contact")} // Navigate to ContactUs page
        >
          Contact Us
        </button>
          <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">Products Us</button>
        </div>
      </header>
      <div className="w-full min-h-screen  flex pl-[100px] items-center">
  
    <form onSubmit={handleSubmit} className="space-y-4   w-full">
      {/* Email Field */}
      <div className="flex flex-col w-full">
        <label className="font-semibold">Your Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-3 rounded w-[650px]"
        />
      </div>

      {/* Mobile Number */}
      <div className="flex flex-col w-full">
        <label className="font-semibold">Mobile Number</label>
        <input
          type="number"
          name="Mobilenumber"
          value={formData.Mobilenumber}
          onChange={handleChange}
          required
          className="border p-3 rounded w-[650px]"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col w-full">
        <label className="font-semibold">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border p-3 rounded h-24 w-[650px]"
        ></textarea>
        <p className="text-[#00005A] text-sm">
          Kindly provide as much relevant information as possible.
        </p>
      </div>

      {/* File Upload */}
      <div className="flex flex-col w-full">
        <label className="font-semibold">Attachments</label>
        <input type="file" multiple onChange={handleFileChange} className="border p-3 rounded w-[650px]" />
        <span className="text-[#00005A] text-sm">Add file or drop files here</span>
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 w-[150px]">
          Submit
        </button>
      </div>
    </form>
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

export default ContactUs;
