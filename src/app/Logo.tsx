import React from "react";

function Logo() {
  return (
    <section id="clients" className="bg-black/[0.96] pt-9 pb-9 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="#"
              className="mx-1 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="/images/facebook.svg" alt="facebook" />
            </a>
            <a
              href="#"
              className="mx-4 max-w-[40px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="/images/telegram.svg" alt="Gojek" />
            </a>
            <a
              href="#"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="/images/whatsapp.svg" alt="Tokopedia" />
            </a>
            <a
              href="#"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="/images/instagram.svg" alt="traveloka" />
            </a>
            <a
              href="#"
              className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8"
            >
              <img src="/images/tiktok.svg" alt="traveloka" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logo;
