import * as React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import { Navbar } from './components/Navbar';

const TestBlog: React.VFC = () => {
  return (
    <div>
      <Navbar />
      <div className="py-5 pt-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-xs">
          <div className="flex flex-col">
            <div className="flex items-center">
              <a
                className="inline-block text-md font-bold mr-2 py-2 px-6 cursor-pointer text-center"
                href="#"
              >
                # Developer note
              </a>
              {/* <span className="text-slate-500">Johnson &amp; Johnson</span> */}
            </div>
          </div>
          <ReactEmbedGist
            gist="aungthuoo/93eccf3ab51cd6347e7a7aa7a3b10356"
            wrapperClass="gist__bash"
            loadingClass="loading__screen"
            titleClass="gist__title"
            // file=".bash_profile.sh"
          />
        </div>
      </div>
    </div>
  );
};

export default TestBlog;
