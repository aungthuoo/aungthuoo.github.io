import * as React from 'react';

interface Brand {
  title: string;
  image: string;
}

// Define the props interface for ChildComponent
interface ChildComponentProps {
  brand: Brand;
}

const BrandComponent: React.VFC<ChildComponentProps> = ({ brand }) => {
  return (
    <>
      {/* <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
        <img
          className="focus:outline-none max-h-16"
          src={brand.image}
          alt="Chanel"
          role="img"
        />
      </div> */}
      <div className="media flex pb-4">
        <a className="mr-4" href="#">
          <img
            className="rounded-full max-w-none w-12 h-12"
            src={brand.image}
          />
        </a>
        <div className="media-body">
          <div>
            <a className="inline-block text-base font-bold mr-2" href="#">
              Shawn
            </a>
            <span className="text-slate-500">2 days ago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
          <div className="mt-2 flex items-center">
            <a className="inline-flex items-center py-2 mr-3" href="#">
              <span className="mr-2">
                <svg
                  className="fill-rose-600"
                  style={{ width: '22px', height: '22px' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                </svg>
              </span>
              <span className="text-base font-bold">2</span>
            </a>
            <button className="py-2 px-4 font-medium hover:bg-slate-50 rounded-lg transition">
              Repply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BrandComponent;
