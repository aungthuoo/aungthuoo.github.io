import * as React from 'react';
import BrandComponent from './BrandCompoent';
const { useState, useEffect } = React;

const OurPartnersComponent: React.VFC = () => {
  const [partner, setPartner] = useState<Partner | null>(null);

  interface BrandImage {
    title: string;
    image: string;
    link: string;
  }
  interface Partner {
    title: string;
    description: string;
    data: BrandImage[];
  }

  // Fetch the JSON data on component mount
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/aungthuoo/apis/main/brands/index.json',
    )
      .then((response) => response.json())
      .then((jsonData) => setPartner(jsonData))
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  // Display loading message if data is not yet fetched
  if (!partner) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {partner.title}
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              {partner.description}
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {partner.data.map((partner, index) => (
              <div className="text-center text-gray-500 dark:text-gray-400">
                <a href={partner.link} target="_blank">
                  <img
                    className="mx-auto max-h-14 mb-4 w-26 h-26 rounded-full"
                    src={partner.image}
                    alt={partner.title}
                  />
                </a>
                <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
                  <a href={partner.link} target="_blank">
                    {partner.title}
                  </a>
                </h3>
                {/* <p>CEO/Co-founder</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default OurPartnersComponent;
