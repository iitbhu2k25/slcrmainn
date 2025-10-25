import React from "react";
import Image from "next/image";

interface Institute {
  name: string;
  logo: string;
}

const PartnerInstitutes: React.FC = () => {
  const institutes: Institute[] = [
    { name: "IIT BHU", logo: "/institutes/iitbhu.avif" },
    { name: "IIT Madras", logo: "/institutes/iitmadras.avif" },
    { name: "IIT Bombay", logo: "/institutes/iitbombay.avif" },
    { name: "IIT Delhi", logo: "/institutes/iitdelhi.avif" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#081f5c] mb-6">
          Partner Institutes
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Our esteemed partner institutes collaborate with us to advance 
          research, innovation, and knowledge sharing. Their support strengthens 
          our mission and impact. Explore our network of institutions driving 
          progress together.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {institutes.map((institute, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition duration-300 hover:scale-105"
            >
              <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center p-4">
                <Image
                  src={institute.logo}
                  alt={institute.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-800">
                {institute.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerInstitutes;
