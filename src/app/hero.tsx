FollowerPointerCard;
import React from "react";
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

function hero() {
  return (
    <section className="md:flex md:flex-auto flex flex-wrap -mt-8 justify-center bg-black/[0.96] pt-9 pb-9 dark:bg-dark">
      <div className="md:w-72 md:mx-4 md:my-3 w-96 mx-1 my-3">
        <div className="relative overflow-hidden h-full rounded-2xl transition dark:bg-dark duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className=" p-4">
            <div className="hover:text-blue-500">
              <h2 className="font-bold my-4 md:text-lg text-sm ">Serba Bisa</h2>
              <h1 className="text-sm -mt-4 text-zinc-500">Tugas Apapun Bisa</h1>
            </div>
            <h2 className="font-normal my-4 md:text-sm text-xs text-zinc-500">
              Kami jajone telah mengerjakan hampir 90% dari bebbagai jenis tugas
              yang pernah ditanyakan ke tim kami dengan hasil yang baik dan
              memuaskan
            </h2>
            {/* <div className="flex flex-row justify-between items-center mt-10">
              <button className="p-[2px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-5 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Masuk
                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="md:w-72 md:mx-4 md:my-3 w-96 mx-1 my-3">
        <div className="relative overflow-hidden h-full rounded-2xl transition dark:bg-dark duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className=" p-4">
            <h2 className="font-bold my-4 md:text-lg text-sm hover:text-blue-500">
              Privasi dan keamanan
            </h2>
            <h1 className="text-sm -mt-4 text-zinc-500">
              Privasi Terjaga 100%
            </h1>

            <h2 className="font-normal my-4 md:text-sm text-xs text-zinc-500">
              Kami jajone telah berkomitmen untukk selalu menjaga dan
              meningkatkan kemanan serta privasi pelanggan dalam hal apapun
              secara jelas dan tegas
            </h2>
          </div>
        </div>
      </div>
      <div className="md:w-72 md:mx-4 md:my-3 w-96 mx-1 my-3">
        <div className="relative overflow-hidden h-full rounded-2xl transition dark:bg-dark duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className=" p-4">
            <h2 className="font-bold my-4 md:text-lg text-sm hover:text-blue-500">
              Jam Kerja
            </h2>
            <h1 className="text-sm -mt-4 text-zinc-500">Layanan 24 Jam </h1>

            <h2 className="font-normal my-4 md:text-sm text-xs text-zinc-500">
              Kami jajone akan membantu mengatasi permaslahan tugasmu serta
              memberikan layanan yang baik dan cepat selama 24jam melalui{" "}
              <span className="text-white">WahatsApp</span> dan{" "}
              <span className="text-white">Telegram</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};
const blogContent1 = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};

export default hero;
