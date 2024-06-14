import * as React from 'react';

interface Brand {
  title: string;
  image: string;
}

// Define the props interface for ChildComponent
interface ChildComponentProps {
  brand: Brand;
}

const FooterComponent: React.VFC<ChildComponentProps> = ({ brand }) => {
  return (
    <>
      <footer className="w-full flex justify-center flex-col py-4 text-center mt-14">
        <p className="mb-1">
          Built by
          <a
            className="font-medium underline"
            target="__blank"
            href="https://linkedin.com/in/aungthuoo"
          >
            Aung Thu Oo
          </a>
        </p>
        <p className="mb-3">
          Contact me on the different platforms and social networks
        </p>
        <div className="flex items-center justify-center">
          <a
            className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition"
            href="https://linkedin.com/in/aungthuoo"
            target="__blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9.04h3.56v11.41zM5.34 7.73a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM20.45 20.45h-3.56v-5.64c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.75H9.28V9.04h3.41v1.56h.05c.47-.9 1.6-1.84 3.28-1.84 3.5 0 4.15 2.3 4.15 5.28v6.41z" />
            </svg>
          </a>

          <a
            className="w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-300 transition"
            href="https://github.com/aungthuoo"
            target="__blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              version="1.1"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};
export default FooterComponent;
