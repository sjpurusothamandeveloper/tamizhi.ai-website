import React from "react";
import "../App.css"; // Ensure your styles are imported here, including the carousel styles.

const Landing = () => {
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
      <div className="bg-white py-10">
  <div className="container mx-auto px-4">
    {/* Flex container for cards */}
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-[#00005A] shadow-md rounded-lg p-6">
        <img
          src="https://airportr.com/wp-content/uploads/2023/08/departure_img.png"
          alt="Departure"
          className="w-full h-55 object-cover rounded-t-lg"
        />
        <h5 className="text-xl font-bold mt-4 text-white">Departure</h5>
        <p className="text-white mt-2">We collect your bags from any home, hotel, or office within our service area, and check them in for your flight.</p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-white">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2"
            />
            <span className="text-white">Skip the check-in queues</span>
          </li>
          <li className="flex items-center text-white">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2"
            />
            <span className="text-white">Travel baggage-free to the airport</span>
          </li>
        </ul>
        <div className="mt-4 flex justify-between text-white">
          <a href="#" className="bg-white text-[#00005A] py-2 px-4 rounded-lg hover:bg-blue-700">
            Get Price
          </a>
          <a href="https://airportr.com/en/departure/" className="text-white hover:underline">
            Learn more
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#00005A] shadow-md rounded-lg p-6">
        <img
          src="https://airportr.com/wp-content/uploads/2023/08/arrival_img.png"
          alt="Arrival"
          className="w-full h-55 object-cover rounded-t-lg"
        />
        <h5 className="text-xl font-bold mt-4 text-white">Arrival</h5>
        <p className="text-white mt-2">We collect your bags straight from the plane, and deliver them to any address within our service area.</p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-white">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2"
            />
            <span className="text-white">No waiting for your bags after landing</span>
          </li>
          <li className="flex items-center text-white">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2"
            />
            <span className="text-white">Travel hands-free to your destination</span>
          </li>
        </ul>
        <div className="mt-4 flex justify-between text-white">
          <a href="#" className="bg-white text-[#00005A] py-2 px-4 rounded-lg hover:bg-blue-700">
            Get Price
          </a>
          <a href="https://airportr.com/en/arrival/" className="text-white hover:underline">
            Learn more
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#00005A] shadow-md rounded-lg p-6">
        <img
          src="https://airportr.com/wp-content/uploads/2023/08/door_to_door_img.png"
          alt="Door-to-door"
          className="w-full h-55 object-cover rounded-t-lg"
        />
        <h5 className="text-xl font-bold mt-4 text-white">Door-to-door</h5>
        <p className="text-white mt-2">Combining both services, we deliver your bags from doorstep to destination for a totally seamless journey.</p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-white">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2"
            />
            <span className="text-white">Bag-free journey from door to door</span>
          </li>
          <li className="flex items-center text-white">
            <img
              src="https://airportr.com/wp-content/uploads/2023/08/tick.svg"
              alt=""
              className="w-4 h-4 mr-2"
            />
            <span className="text-white">Seamless airport journey at both ends</span>
          </li>
        </ul>
        <div className="mt-4 flex justify-between text-white">
          <a href="#" className="bg-white text-[#00005A] py-2 px-4 rounded-lg hover:bg-blue-700">
            Get Price
          </a>
          <a href="https://airportr.com/en/door-to-door/" className="text-white hover:underline">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Carousel Section */}
<div className="carousel flex overflow-x-auto gap-5 p-5 whitespace-nowrap scroll-snap-x mandatory">
  <div className="carousel-item flex-shrink-0 scroll-snap-center">
    <img src="https://airportr.com/wp-content/uploads/2018/05/british-airways-logo.svg" alt="British Airways" className="w-[13vw] h-auto" />
  </div>
  <div className="carousel-item flex-shrink-0 scroll-snap-center">
    <img src="https://airportr.com/wp-content/uploads/2023/08/etihad-airways-logo.svg" alt="Etihad Airways" className="w-[13vw] h-auto" />
  </div>
  <div className="carousel-item flex-shrink-0 scroll-snap-center">
    <img src="https://airportr.com/wp-content/uploads/2023/08/american-airlines-logo.svg" alt="American Airlines" className="w-[13vw] h-auto" />
  </div>
  <div className="carousel-item flex-shrink-0 scroll-snap-center">
    <img src="https://airportr.com/wp-content/uploads/2023/08/airfrance-logo.svg" alt="Air France" className="w-[13vw] h-auto" />
  </div>
  <div className="carousel-item flex-shrink-0 scroll-snap-center">
    <img src="https://airportr.com/wp-content/uploads/2023/08/klm-airlines-logo.svg" alt="KLM" className="w-[13vw] h-auto" />
  </div>
</div>

    </div>
  );
};

export default Landing;
