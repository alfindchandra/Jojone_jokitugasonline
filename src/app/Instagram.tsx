import React from "react";

export const Instagram = () => {
  return (
    <section className="dark:bg-dark py-24">
      <div className="relative h-40 md:h-80  bg-gradient-to-r from-pink-700 via-violet-500 to-cyan-700 md:mx-20 mx-5 rounded-xl ">
        <div className="container flex flex-row ">
          <div className="-mt-16 -mr-20 w-1/2">
            <img
              src="/images/hp.png"
              alt="Trading Dashboard"
              className=" shadow-inner md:w-96 w-44"
            />
          </div>
          <div className="w-3/4 mt-10 md:text-start text-end mr-8">
            <h1 className="md:text-5xl  text-sm mb-2  relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-cyan-900 via-violet-900 to-pink-800 font-extrabold">
              Masih ragu? Yuk kepoin
            </h1>
            <h1 className="md:text-5xl text-sm mb-2 relative bg-clip-text text-transparent bg-no-repeat  bg-gradient-to-r from-yellow-600 via-red-500 to-purple-500 font-bold">
              kami di Instagram
            </h1>
            <button className="p-[2px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl" />
              <div className="md:px-8 px-4 md:py-2 py-1  bg-dark rounded-xl relative group transition duration-200 text-white hover:bg-transparent">
                {/* <span className="absolute text-xl -mt-1 -ml-8">{"<<"}</span> */}
                {""}Lit up borders
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
