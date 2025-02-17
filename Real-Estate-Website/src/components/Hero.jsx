import hero_house from "../assets/hero_house.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 via-slate-400 to-blue-600 py-16 mr-10 ml-10 rounded-2xl relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center">
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left z-10"> {/* Added z-10 */}
        <h1 className="text-4xl font-bold text-gray-800">
          Build Your Dream Property
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the perfect space with our expert real estate services.
          Find your ideal home or investment today.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-lg shadow-md hover:bg-gray-700">
          Get Started
        </button>
      </div>
  
      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-end items-end">
        <img
          src={hero_house}
          alt="Property"
          width={550}
        />
      </div>
    </div>
    {/* Custom inverted border radius for bottom-right corner */}
    <div className="absolute bottom-0 right-0 sm:w-50 md:w-100 lg:w-150 h-16 bg-white rounded-tl-2xl rounded-br-2xl p-10">Our happy clients****</div> {/* Inverted bottom-right corner */}
  </section>
  

    // <section className="hero">
    //   <article className="card">
    //     {/* Author Section */}
    //     <div className="author">
    //       <div className="name">Author Name</div>
    //     </div>

    //     {/* Right Side - Image Section */}
    //     <div className="image">
    //       <div className="content flex flex-col md:flex-row items-center text-center md:text-left p-6">
    //         <div>
    //           <h1 className="text-4xl font-bold text-white">
    //             Build Your Dream Property
    //           </h1>
    //           <p className="mt-4 text-lg text-white">
    //             Discover the perfect space with our expert real estate services.
    //             Find your ideal home or investment today.
    //           </p>
    //           <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-lg shadow-md hover:bg-gray-700">
    //             Get Started
    //           </button>
    //         </div>
    //         <div>
    //           <img className="w-full md:w-1/2" src={hero_house} alt="Hero House" />
    //         </div>
    //       </div>
    //     </div>

    //     {/* More Section */}
    //     <div className="more">
    //       <div className="buttons">
    //         <button>Read More</button>
    //       </div>
    //     </div>
    //   </article>
    // </section>
  );
};

export default Hero;
