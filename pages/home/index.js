import 'tailwindcss/tailwind.css';  // Import Tailwind CSS globally
import { formatPrice } from "@/utils/helper";

export async function getServerSideProps() {
  const response =await fetch(
    `https://mira-strapi-dev.q.starberry.com/api/properties?_limit=50`
   );
   const data =await response.json();
   return {
    props:{
      properties:data.data
    }
   }
}

export default function Home({properties}) {

  
  if (!properties || properties.length === 0) {
    return <p>No properties found.</p>;
  }

  const handleClick = (property) => {
    if (property) {
      const query = encodeURIComponent(JSON.stringify(property));
      window.location.href = `/details?property=${query}`;   
    }
  };

  return (
    <div className="p-4">
      <h1 className="flex justify-center items-center mb-6 text-2xl font-bold">
        Properties for Sale
      </h1>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {properties.map((property) => (
          <li
            key={property.id}
            className="bg-white p-4 rounded hover:shadow-lg transition-all cursor-pointer"
            onClick={() => handleClick(property)}
          >
            <div className="overflow-hidden rounded">
              <img
                src={property.attributes.images[0]?.srcUrl || '/path/to/noimage.jpg'}
                alt="Property Image"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center m-5">
              <h2 className="text-md text-black font-light uppercase">
                {property.attributes.address.address1}
              </h2>
              <h2 className="text-sm text-black font-light">
                {property.attributes.title}
              </h2>
              {property.attributes.price && (
                <p className="text-black font-semibold">
                  {formatPrice(property.attributes.price, property.attributes.currency)}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
