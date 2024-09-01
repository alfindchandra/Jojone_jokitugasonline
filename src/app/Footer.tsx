import React from "react";
import { FaInstagram, FaWhatsapp, FaLine, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">Jajone</span>{" "}
          </h2>
          <p className="text-gray-400">
            Jajone atau Jasa Joki Online merupakan jasa joki tugas yang bagus
            dan telah berhasil mengerjakan banyak tugas mulai dari tugas sekolah
            sampai kuliah.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <div className="h-1 w-8  bg-cyan-500 mb-4"></div>
          <ul className="space-y-2">
            {["Home", "Media Sosial", "Abote", "Cara Order", "Join Team"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <div className="h-1 w-8 bg-cyan-500 mb-4"></div>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaInstagram className="mr-2" />
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                @Jajone_Joki
              </a>
            </li>
            <li className="flex items-center">
              <FaWhatsapp className="mr-2" />
              <span className="text-gray-400">0813 3217 6161</span>
            </li>
            <li className="flex items-center">
              <FaLine className="mr-2" />
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                @Jajone_Joki
              </a>
            </li>
            <li className="flex items-center">
              <FaTwitter className="mr-2" />
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                @Jajone_Joki
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
