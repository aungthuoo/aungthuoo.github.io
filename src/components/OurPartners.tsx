import * as React from 'react';
import Project from './Project';

export const OurPartners: React.VFC = () => (
  <>
    <div className="pb-16" style={{ fontFamily: 'Lato,sans-serif' }}>
      <div className="container mx-auto pt-16">
        <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
          <div className="flex justify-center text-2xl md:text-3xl font-bold py-3">
            Partners trust to me
          </div>

          <p className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
            Our success has come from being committed to the property and
            investing in the development of the product to maximize sales. At
            the same time and maintaining the integrity.
          </p>
        </div>
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/adidas-dark.png"
              alt="Adidas"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/channel-dark.png"
              alt="Chanel"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/nike-dark.png"
              alt="Nike"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/toyota-dark.png"
              alt="Toyota"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/gs1-dark.png"
              alt="GS1"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/berry-dark.png"
              alt="BlackBerry"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/min-dark.png"
              alt="Mini"
              role="img"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <img
              className="focus:outline-none"
              src="https://cdn.tuk.dev/assets/honda-dark.png"
              alt="Honda"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
