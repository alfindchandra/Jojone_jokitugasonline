import {
  FaUserGraduate,
  FaFileAlt,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import React from "react";

export const Metrics = () => {
  return (
    <section className="dark:bg-dark">
      <div className="dark:bg-gray-900 text-white flex md:flex-row flex-col items-center justify-around md:h-40 h-auto md:mx-20 rounded-xl">
        <div className="flex flex-col items-center">
          <FaUserGraduate size={54} className="relative text-slate-600 mb-7" />
          <p className="absolute text-4xl mt-9 font-bold ">1500</p>
          <p>Total Pelanggan</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFileAlt size={54} className="relative text-slate-600 mb-7" />
          <p className="absolute text-4xl mt-9 font-bold">4000</p>
          <p>Tugas Diselesaikan</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUniversity size={54} className="relative text-slate-600 mb-7" />
          <p className="absolute text-4xl mt-9 font-bold">125</p>
          <p>Universitas Berbeda</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers size={54} className="relative text-slate-600 mb-7" />
          <p className="absolute text-4xl mt-9 font-bold">100</p>
          <p>Tim Profesional</p>
        </div>
      </div>
    </section>
  );
};
