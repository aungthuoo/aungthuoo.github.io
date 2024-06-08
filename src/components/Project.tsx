import * as React from 'react';

interface DataItem {
  title: string;
  description: string;
}

// Define the props interface for ChildComponent
interface ChildComponentProps {
  item: DataItem;
}

const Project: React.VFC<ChildComponentProps> = ({ item }) => {
  return (
    <article className="mb-4 break-inside break-inside-avoid p-6 rounded-xl bg-white flex flex-col bg-clip-border max-w-md">
      <div className="flex pb-6 items-center justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href="#">
            <img
              className="rounded-full max-w-none w-14 h-14"
              src="https://randomuser.me/api/portraits/women/43.jpg"
            />
          </a>
          <div className="flex flex-col">
            <div className="flex items-center">
              <a className="inline-block text-lg font-bold mr-2" href="#">
                {item.title}
              </a>
              <span className="text-slate-500">Johnson &amp; Johnson</span>
            </div>
            <div className="text-slate-500">General Electric</div>
          </div>
        </div>
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
      <h2 className="text-3xl font-extrabold">{item.title}</h2>
      <div className="py-4">
        <p>{item.description}</p>
      </div>

      <div className="pt-6">
        <div className="w-full">
          <a
            href="#"
            className="py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75"
          >
            Show more comments
          </a>
        </div>
      </div>
    </article>
  );
};
export default Project;
