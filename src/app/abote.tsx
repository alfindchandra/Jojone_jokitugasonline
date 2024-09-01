import Image from "next/image";
import React from "react";

function abote() {
  return (
    <section id="clients" className="bg-black/[0.96] pt-9 pb-9 dark:bg-dark">
      <div className=" text-white p-0 md:p-8 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 w-72 md:ml-14">
          <h2 className="md:text-3xl text-xl font-bold mb-4 relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-pink-700 via-violet-500 to-yellow-500">
            TENTANG KAMI
          </h2>

          <p className="md:text-lg text-sm mb-8  text-gray-400">
            Easy To Earn Money - There are many ways to earn money in our site
            such as faucet, shortlinks, ptc, tasks, offerwalls. Level up your
            account and climb the leaderboard to earn more money and unlock new
            features. We pay you instantly or daily to your wallet or
            microwallet addresses.
          </p>
        </div>
        <div className="w-1/3 ml-9 ">
          <img
            src="/images/book11.png"
            alt="Trading Dashboard"
            className="rounded-lg shadow-lg md:mt-9 md:mb-7"
          />
        </div>
      </div>
    </section>
  );
}
export default abote;
