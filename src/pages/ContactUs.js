import "../App.css";
import React, { useState, useEffect,} from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
const navigate = useNavigate(); // Initialize navigate
const goToLandingPage = () => {
    navigate('/')
  }
   {/*form*/}
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
   // Default language is English
  const [mylanguage, setMylanguage] = useState("English"); 
  // This function is called when the user selects a new language
  const handlelanguageChange = (event) => {
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


  return (
    <div>
    {/* Header Section */}
    <header
  className="bg-[#00005A] text-white py-[13px] px-6 flex items-center justify-between w-full 
             rounded-b-[6vw] sm:rounded-b-[2vw] shadow-md">
  {/* Heading (Fixed Position) */}
  <h1 className="text-lg sm:text-2xl font-bold bg-[#00005A] text-white px-4 py-2 rounded">
    Tamizhi
  </h1>


      {/* Desktop Menu (Hidden on Mobile) */}
      <div className="ml-auto hidden md:flex gap-2 bg-[#00005A]">
        <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" onClick={goToLandingPage}>
          Services
        </button>
        <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
          onClick={() => navigate("/contact")}
        >
          ContactUs
        </button>
        <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
          Products
        </button>
      </div>

      {/* Mobile Menu Button (Always Fixed in Top Right) */}
      <button 
        className="text-3xl font-bold hover:text-gray-300 absolute md:hidden top-4 right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </header>

    {/* Mobile Menu (Opens Below Button Without Moving Heading) */}
    {isOpen && (
      <div className="absolute top-16 right-4 md:hidden flex flex-col items-start bg-[#00005A] gap-2 p-4 rounded-lg shadow-lg">
        <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700" onClick={goToLandingPage}>
          Services
        </button>
        <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
          onClick={() => navigate("/contact")}
        >
          ContactUs
        </button>
        <button className="bg-[#00005A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
          Products
        </button>
      </div>
    )}
  
      {/*form*/}
      <div className="w-full min-h-screen flex pl-4 sm:pl-[100px] items-center">
  <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-screen-lg mx-auto">
    {/* Email Field */}
    <div className="flex flex-col w-full">
      <label className="font-semibold">Your Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-3 rounded w-full sm:w-[650px] w-[150px]"
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
        className="border p-3 rounded w-full sm:w-[650px] w-[150px]"
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
        className="border p-3 rounded h-24 w-full sm:w-[650px] w-[150px]"
      ></textarea>
      <p className="text-[#00005A] text-sm">
        Kindly provide as much relevant information as possible.
      </p>
    </div>

    {/* File Upload */}
    <div className="flex flex-col w-full">
      <label className="font-semibold">Attachments</label>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="border p-3 rounded w-full sm:w-[650px] w-[150px]"
      />
      <span className="text-[#00005A] text-sm">Add file or drop files here</span>
    </div>

    {/* Submit Button */}
    <div>
      <button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 w-[1300] sm:w-[150px]  rounded-[1.5vw] sm:rounded-[2vw] mx-auto"
      >
        Submit
      </button>
    </div>
  </form>
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
       <footer className="bg-[#00005A]  mr-[1vw]  p-[1vw]  pr-[10px] text-white py-1">
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
         <div className="optin-footer w-full mt-6 bg-[#00005A]">
  <h2 className="text-lg bg-[#00005A] text-[1.7vw] pl-[22px] w-full pt-[16px]  font-bold">
    Sign up for emails and receive offers and service updates
  </h2>
  <form className="optin-footer-form mt-4 bg-[#00005A] flex flex-row space-x-3">
    <div className="input w-full pl-[16px] bg-[#00005A] sm:w-auto">
      <input
        type="email"
        placeholder="Enter email"
        className="p-2 w-60 sm:w-60 border pl-[15px]  border-gray-300 rounded-md bg-[#00005A] text-black rounded-[3vw] sm:rounded-[2vw]"/>
    </div>
    <div  className=' pr-[45px] bg-[#00005A]'>
    <input
      type="submit"
      value="Opt In"
     className="p-3 bg-[#0b57d0ff] text-white  pl-[28px] pr-[28px] rounded-md cursor-pointer hover:bg-gray-200 rounded-[3vw] sm:rounded-[2vw]"/>
     </div> 
  </form>
   </div>
   </div>
         </div>
           <hr className="my-6 border-gray-500" />
           <div className="bottom flex flex-col md:flex-row  pl-[33px] justify-between  bg-[#00005A] items-center text-center md:text-left">
           <p className=" bg-[#00005A]">Tamizhi © 2025</p>
           </div>
         </section>
    </div>
  );
};

export default ContactUs;
