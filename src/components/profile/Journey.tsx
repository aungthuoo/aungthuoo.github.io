import * as React from 'react';

export const Journey: React.VFC = () => (
  <div>
    <div className="flex justify-center items-center py-5">
      <h2 className="flex text-3xl font-extrabold">About me</h2>
    </div>
    <div className="flex justify-center items-center bg-slate-100">
      <div className="flex flex-col justify-center items-center  space-x-4">
        <article className="mt-4 mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-2xl">
          <div className="flex pb-6 items-center justify-between">
            <div className="flex">
              <a className="inline-block mr-4" href="#">
                <img
                  className="rounded-full max-w-none w-12 h-12"
                  src="https://randomuser.me/api/portraits/men/35.jpg"
                />
              </a>
              <div className="flex flex-col">
                <div>
                  <a className="inline-block text-lg font-bold" href="#">
                    Wade Warren
                  </a>
                </div>
                <div className="text-slate-500">July 17, 2018</div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold">
            Web Design templates Selection
          </h2>

          <div className="py-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="my-4 flex gap-1">
            <div className="flex flex-col gap-1 flex-1">
              <a className="flex h-2/4" href="#">
                <img
                  className="max-w-full rounded-tl-lg object-fill"
                  src="https://images.pexels.com/photos/327331/pexels-photo-327331.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                />
              </a>
              <a className="flex h-2/4" href="#">
                <img
                  className="max-w-full rounded-bl-lg object-fill"
                  src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                />
              </a>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <a className="flex h-full" href="#">
                <img
                  className="max-w-full rounded-tr-lg rounded-br-lg object-contain"
                  src="https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                />
              </a>
            </div>
          </div>

          <div className="py-4">
            <div className="flex justify-between gap-1 mb-1">
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-tl-lg"
                  src="https://images.pexels.com/photos/2457278/pexels-photo-2457278.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                />
              </a>
              <a className="flex" href="#">
                <img
                  className="max-w-full"
                  src="https://images.pexels.com/photos/1343537/pexels-photo-1343537.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                />
              </a>
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-tr-lg"
                  src="https://images.pexels.com/photos/327331/pexels-photo-327331.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                />
              </a>
            </div>
            <div className="flex justify-between gap-1">
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-bl-lg"
                  src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                />
              </a>
              <a className="flex" href="#">
                <img
                  className="max-w-full rounded-br-lg"
                  src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                />
              </a>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="py-4">
            <a className="inline-flex items-center" href="#">
              <span className="mr-2">
                <svg
                  className="fill-rose-600"
                  style={{ width: '24px', height: '24px' }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                </svg>
              </span>
              <span className="text-lg font-bold">34</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
);
