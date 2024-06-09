import * as React from 'react';

export const User: React.VFC = () => (
  <div className="py-5 dark:bg-gray-700 bg-gray-200 pt-12">
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xs">
      <div className="border-b px-4 pb-6">
        <div className="text-center my-4">
          <img
            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
            src="../../../images/profile/ato.jpeg"
            alt=""
          />
          <div className="py-2">
            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
              Aung Thu Oo
            </h3>
            <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
              <svg
                className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className=""
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              Senior Developer
            </div>
          </div>
        </div>
        <div className="flex gap-2 px-2">
          <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white text-center dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
            Download Resume
          </button>
          <button className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black text-center dark:text-white px-4 py-2">
            LinkedIn
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        <h2 className="text-3xl font-extrabold">About me</h2>
        <div className="py-4">
          <p>
            With over 15 years of experience in the software industry, I am a
            Senior Developer at Hana Microfinance, a leading provider of
            microfinance solutions in Myanmar. I leverage my full stack
            expertise to deliver scalable and user-friendly web and mobile
            applications that enhance financial inclusion and empowerment for
            millions of people.
          </p>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
          <svg
            className="h-6 w-6 text-gray-600 dark:text-gray-400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              className=""
              d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
            />
          </svg>
          <span>
            <strong className="text-black dark:text-white">12</strong> Followers
            you know
          </span>
        </div>

        <div className="my-4 flex gap-1">
          <div className="flex flex-col gap-1 flex-1">
            <a className="flex h-2/4" href="#">
              <img
                className="max-w-full rounded-tl-lg object-cover"
                src="../../../images/profile/activity-07.JPG"
              />
            </a>
            <a className="flex h-2/4" href="#">
              <img
                className="max-w-full rounded-bl-lg object-cover"
                src="../../../images/profile/activity-06.JPG"
              />
            </a>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <a className="flex h-full" href="#">
              <img
                className="max-w-full rounded-tr-lg rounded-br-lg object-contain"
                src="../../../images/profile/activity-03.jpg"
              />
            </a>
          </div>
        </div>

        <div className="py-4">
          <div className="flex justify-between gap-1 mb-1">
            <a className="flex" href="#">
              <img
                className="object-cover object-cover rounded-tl-lg"
                src="../../../images/profile/activity-10.jpg"
              />
            </a>
            <a className="flex" href="#">
              <img
                className="max-w-full object-cover"
                src="../../../images/profile/activity-08.jpg"
              />
            </a>
            <a className="flex" href="#">
              <img
                className="max-w-full object-cover rounded-tr-lg"
                src="../../../images/profile/activity-09.jpg"
              />
            </a>
          </div>
          <div className="flex justify-between gap-1">
            <a className="flex" href="#">
              <img
                className="max-w-full object-cover rounded-bl-lg"
                src="../../../images/profile/activity-01.jpg"
              />
            </a>
            <a className="flex" href="#">
              <img
                className="max-w-full object-cover  rounded-br-lg"
                src="../../../images/profile/activity-04.jpg"
              />
            </a>
          </div>
        </div>

        <div className="py-4">
          <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className=""
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </svg>
            <span>
              <strong className="text-black dark:text-white">12</strong>{' '}
              Followers you know
            </span>
          </div>

          <p>
            My core competencies include PHP, React.js, Next.js, Node.js,
            Laravel, AWS, and Docker. I have also worked with Flutter, Java,
            Microsoft Power Platform, Power App, and Socket.io on various
            projects. I enjoy collaborating with cross-functional teams,
            learning new skills, and solving challenging problems. My mission is
            to create impactful and innovative solutions that make a difference
            in the lives of people.
          </p>
        </div>

        <div className="flex">
          <div className="flex justify-end mr-2">
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/31.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/33.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt=""
            />
            <img
              className="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
              src="https://randomuser.me/api/portraits/women/42.jpg"
              alt=""
            />
            <span className="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
              +999
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
