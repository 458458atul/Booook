import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">  
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">  
          <div className="space-y-6">  
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 transition duration-300 ease-in-out hover:text-pink-600"> 
              Hello, welcome here to learn something  
              <span className="text-pink-500"> new everyday!!!</span>
            </h1>  
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">  
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.  
              <span className="font-medium">Dolor, et totam. Tempora amet atque expedita,</span> quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi.  
            </p>  
            <label className="input input-bordered flex items-center gap-2">  
              <svg  
                xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 16 16"  
                fill="currentColor"  
                className="w-4 h-4 text-gray-500">  
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />  
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />  
              </svg>  
              <input type="text" className="grow rounded-md border-gray-300 focus:ring focus:ring-pink-500 focus:border-pink-500" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 bg-pink-500 text-white hover:bg-pink-600 transition duration-200 ease-in-out rounded-md px-4 py-2">Get Started</button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">  
          <img  
            src={banner}  
            className="md:w-[550px] md:h-[460px] md:ml-12 object-cover rounded-lg shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"  
            alt="Banner"  
          />  
        </div>
      </div>
    </>
  );
}

export default Banner;
