import React from 'react';
import logo from './download.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import heroImageTopRight from '/download.png'; // Replace with actual image
// import heroImageBottomRight from '/download.png';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import img from './taskImg.jpg';

const Card = () => {
  return (
    <div className=" p-3 flex justify-center min-h-screen items-center bg-gray-100">
      {/* Card Container */}
     <div className="pl-0 pr-0 max-w-[330px] bg-white shadow-lg rounded-sm  mx-auto ">
        {/* Section 1: Logo */}

        <div className="flex justify-center items-center ">
          <img src={logo} alt="Logo" className="w-28 sm:w-28 md:w-28 " />
        </div>

        {/* Section 2: Content */}
   
    
      <div className=" relative bg-[#242677] flex justify-center items-center py-5">
        {/* Background Section */}
        

              {/* Hero Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto px-2">
          
            {/* Left Section (Text Content) */}
            <div className=" text-left pl-5">
             <FontAwesomeIcon icon={faCircle} className="text-blue-600 text-[10px] ]" />
             <p className=" m-1 inline text-[12px] text-blue-600">Live Webinar</p>

             {/* Main Heading */}
             <h1 className="text-[24px] leading-[20px] pr-2 font-bold text-white pb-3">The rise of the Experience Economy</h1>
              
             {/* Sub Heading */}
             <p className="text-[10px]  text-gray-300">The 2019 CX Industry Report</p>

             {/* Presenter Section */}
             <div>
              <p className="text-[10px] uppercase text-white">Presenter</p>
              <div className="flex text-[10px] items-center space-x-2">
               <span className="font-semibold text-white">Michael Mace |</span>
               <p className=" text-white">VP. Market Strategy</p>
              </div>
   
             </div>
          
             
             {/* Watch Button */}
             <a href="#" className="mt-4 inline-block py-2 px-6 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 transition">Watch Now</a>
             </div>
            {/* Left section Completed */}
             

            
            {/* Right Section (Images) */}
         </div>
         
         <img  class=" overflow:hidden absolute z-0  md:block w-[47%] bottom-0 right-0 " src={img} alt="" />

        </div>
  
    

        {/* Section 3: More Content */}
        <div className=" flex items-center justify-center bg-white-300">
          <div className='text-[9px]  flex flex-col justify-between pl-5 pr-4 min-[480]:pr-8 pt-3 pb-5'>
               <p> Hi Daniel, </p>
               <br />
               <p>We understand that you're busy, and that is why we've made this week's webinar, 
                  2019 CX Industry Report: The rise of the Experience Economy, available online for 
                  you to watch. Feel free to share the link with your colleagues.
                </p>
                 <br /> 
                <p>Here is the link to the presentation slides.</p>
                <br />
                <p>Enjoy!</p>
                <p>UserTesting Team</p>
                <br />
                <br />
                <p>Ready to talk to us and make better CX decisions in 2019? Click here.</p>
             
          </div>  
    
        </div>

        {/* Section 4: Footer or Buttons */}

    <div className="flex flex-col items-center bg-blue-700 pt-1 pb-3 rounded-b-sm">
      {/* "Follow Us On" Text */}
      <p className="text-white text-md font-semibold mb-2">Follow Us On</p>

      {/* Social Media Icons */}
      <div className="flex space-x-1 sm:space-x-1">
        {/* Facebook */}
        <a
          href="#"
          className="text-blue-500 bg-white rounded-full w-10 p-3 flex justify-center items-center hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faFacebookF} className="text-blue-700 text-sm" />
        </a>
        {/* LinkedIn */}
        <a
          href="#"
          className="text-blue-500 bg-white rounded-full w-10 p-3 flex justify-center items-center hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700 text-sm" />
        </a>
        {/* Twitter */}
        <a
          href="#"
          className="text-blue-500 bg-white rounded-full w-10 p-3 flex justify-center items-center hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-blue-700 text-sm" />
        </a>
        {/* Instagram */}
        <a
          href="#"
          className="text-blue-500 bg-white rounded-full w-10 p-1 flex justify-center items-center hover:bg-gray-200 transition"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-blue-700 text-sm" />
        </a>
    
          
                 
     </div>
    </div>
  
  </div>
</div>
  )
}
export default Card
