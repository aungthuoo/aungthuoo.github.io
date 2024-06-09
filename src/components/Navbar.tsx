import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/rafgraph/spa-github-pages#readme">
    repo readme
  </InteractiveLink>
);

export const Navbar: React.VFC = () => (
  <>
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <InteractiveLink
          to="/"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Home
        </InteractiveLink>

        {/* <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Blog
        </a> */}

        <InteractiveLink
          to="/blogs"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Blog
        </InteractiveLink>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          pricing
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Contact
        </a>
      </div>
    </nav>
  </>

  // <div>
  //   <nav
  //     className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
  //     data-twe-navbar-ref
  //   >
  //     <div className="flex w-full flex-wrap items-center justify-between px-3">
  //       <div className="ms-2">
  //         <a className="text-xl text-black dark:text-white" href="#">
  //           Profile
  //         </a>
  //       </div>
  //       <button
  //         className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
  //         type="button"
  //         data-twe-collapse-init
  //         data-twe-target="#navbarSupportedContent3"
  //         aria-controls="navbarSupportedContent3"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             viewBox="0 0 24 24"
  //             fill="currentColor"
  //           >
  //             <path
  //               fill-rule="evenodd"
  //               d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
  //               clip-rule="evenodd"
  //             />
  //           </svg>
  //         </span>
  //       </button>

  //       <div
  //         className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
  //         id="navbarSupportedContent3"
  //         data-twe-collapse-item
  //       >
  //         <div
  //           className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
  //           data-twe-navbar-nav-ref
  //         >
  //           <div
  //             className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
  //             data-twe-nav-item-ref
  //           >

  //             <InteractiveLink
  //               to="/home"
  //               className="text-black dark:text-white lg:px-2"
  //             >
  //               Home
  //             </InteractiveLink>
  //           </div>
  //           <div
  //             className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
  //             data-twe-nav-item-ref
  //           >

  //             <InteractiveLink
  //               to="/profile"
  //               className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
  //             >
  //               Profile
  //             </InteractiveLink>
  //           </div>
  //           <div
  //             className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
  //             data-twe-nav-item-ref
  //           >
  //             <a
  //               className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
  //               href="#"
  //               data-twe-nav-link-ref
  //             >
  //               Pricing
  //             </a>
  //           </div>
  //           <div
  //             className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
  //             data-twe-nav-link-ref
  //           >
  //             <a className="pointer-events-none text-black/30 dark:text-white/30 lg:px-2">
  //               Disabled
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // </div>
);
