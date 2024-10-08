import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
BackgroundBeamsWithCollision;
TypewriterEffectSmooth;
function home() {
  const words = [
    {
      text: "Jasa",
    },
    {
      text: "pengerjaan",
    },
    {
      text: "tugas",
    },
    {
      text: "yang",
    },
    {
      text: "murah dan cepat.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="h-auto w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="pupple"
      />
      <Spotlight
        className="bottom-20 left-0 md:left-60 md:-top-20"
        fill="green"
      />
      <Spotlight className="top-26 left-8 md:left-60 md:-top-20" fill="blue" />

      <BackgroundBeamsWithCollision>
        <h2 className="text-xl relative z-20 mx-10 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Selamat Datang Di Web Kami{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Kami Siap Mengerjakan Tugas mu</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Kami Siap Mengerjakan Tugas mu</span>
            </div>
          </div>
          <div>
            <h1>
              <TypewriterEffectSmooth
                words={words}
                className="md:text-xs text-xs pb-5 px-10 md:px-16  tracking-[.05em] text-center"
              />
            </h1>
            {/* <h1 className="md:text-xl text-xs pb-5 px-10 md:px-16  tracking-[.05em] font-normal">
              Jasa pengerjaan tugas paling murah dan cepat. Melayani pembuatan
              tugas mulai dari sekolah s/d kuliah, serta joki skripsi dan tugas
              akhir
            </h1> */}
          </div>
          <div className="">
            <a href="">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px md:p-1 text-xs md:text-2xl font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 md:py-2 py-1 md:px-6 px-4 ring-1 ring-white/10 ">
                  <span className="italic pr-2 relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 hover:via-purple-600 hover:from-pink-600">
                    Connect Kami
                  </span>
                  <svg
                    fill="none"
                    height="30"
                    viewBox="0 0 24 24"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </a>
          </div>
        </h2>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default home;
