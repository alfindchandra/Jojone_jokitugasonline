import React from "react";
import { FaMoneyCheckAlt, FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export const Order = () => {
  return (
    <section className="dark:bg-dark pt-20 ">
      <div>
        <div className="text-center mx-auto md:mx-60 ">
          <h1 className="text-4xl font-bold mb-8 relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-pink-700 via-violet-500">
            Bagaimana{" "}
            <span className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-pink-700 via-violet-500  italic">
              Cara Ordernya ??
            </span>
          </h1>
          <p className="text-gray-400 px-5">
            Kamu masih bingung bagaimana cara order jasa joki pembuatan tugas di
            jajone? Jangan khawatir! Kamu bisa menggunakan jasa joki pengerjaan
            tugas kami dengan sangat mudah dan cepat. Silahkan baca tutorial di
            bawah.
          </p>
        </div>
        <div className="mt-8 container md:px-20">
          <div className="container text-white row-auto justify-center items-center h-auto md:grid md:grid-cols-2 flex flex-col">
            <div className="flex flex-row items-center md:pr-8 my-8 mx-3">
              <div className="relative p-3 rounded-full bg-gray-900 hover:bg-cyan-900 hover:text-dark transition-colors">
                <MdMessage size={40} className=" " />
              </div>
              <div className=" flex flex-col ml-3">
                <h1 className="font-bold text-2xl mb-2 ">
                  <span className="text-gray-400">[1]</span> Chat Kami di
                  Whatsapp/Telegram
                </h1>
                <p className="text-gray-400">
                  {" "}
                  Kirim pesan ke kami di Wa/telegram: 081382176161
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center md:pr-8 my-8 mx-3">
              <div className="p-3 rounded-full bg-gray-900 hover:bg-cyan-900 hover:text-dark transition-colors">
                <HiMiniInboxArrowDown size={40} className=" " />
              </div>
              <div className="flex flex-col ml-3">
                <h1 className="font-bold text-2xl mb-2 ">
                  <span className="text-gray-400">[2]</span> Kirimkan Detail
                  Tugas
                </h1>
                <p className="text-gray-400">
                  {" "}
                  Kirimkan foto tugas kamu beserta detail dan deadlinenya
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center md:pr-8 my-8 mx-3">
              <div className="p-3 rounded-full bg-gray-900 hover:bg-cyan-900 hover:text-dark transition-colors">
                <FaMoneyCheckAlt size={40} className=" " />
              </div>
              <div className="flex flex-col ml-3">
                <h1 className="font-bold text-2xl mb-2 ">
                  <span className="text-gray-400">[3]</span> Lakukan DP
                  Pembayaran
                </h1>
                <p className="text-gray-400">
                  {" "}
                  Pembayaran bisa melalui transfer / E-wallet
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center md:pr-8 my-8 mx-3">
              <div className="p-3 rounded-full bg-gray-900 hover:bg-cyan-900 hover:text-dark transition-colors">
                <FaBed size={40} className=" " />
              </div>
              <div className="flex flex-col ml-3">
                <h1 className="font-bold text-2xl mb-2 ">
                  <span className="text-gray-400">[4]</span> Menunggu Hasil
                  Tugas
                </h1>
                <p className="text-gray-400">
                  {" "}
                  Tim kami akan segera meyelesaikian tugas kamu
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center md:pr-8 my-8 mx-3">
              <div className="p-3 rounded-full bg-gray-900 hover:bg-cyan-700 hover:text-dark transition-colors">
                <IoCheckmarkDoneCircle size={40} className=" " />
              </div>
              <div className="flex flex-col ml-3">
                <h1 className="font-bold text-2xl mb-2 ">
                  <span className="text-gray-400">[5]</span> Selamat Menikmati
                  Hasil
                </h1>
                <p className="text-gray-400">
                  {" "}
                  Tim kami akan mengirimkan tugas kamu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
