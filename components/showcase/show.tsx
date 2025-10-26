import React from 'react';

interface ResearchData {
  title: string;
  currentGap: string[];
  technology: string[];
  novelty: string[];
  detailsApplicability: string[];
  fieldApplication: string[];
  limitations: string[];
  status: string[];
  references: { name: string; url?: string }[];
  images?: { src: string; alt: string; caption?: string }[];
}

const ResearchShowcase: React.FC = () => {
  const researchData: ResearchData = {
    title: "Floating Wetlands for Water Treatment",
    currentGap: [
      "In India, natural based treatment solutions like wetlands are underutilized and often poorly maintained."
    ],
    technology: [
      "Growing plants over floating platforms helps in absorbing and degrading pollutants from water bodies."
    ],
    novelty: [
      "Selected plants and biofilm have been checked for showing its effectiveness in removing the specific pollutants."
    ],
    detailsApplicability: [
      "Remove dissolved nutrients and heavy metals from water bodies.",
      "FW size is scalable and has modular design.",
      "Plants and the plant-microbe interactions in the lower surface of the floating island absorb and remove contaminants from the water while supporting other natural processes such as denitrification and sedimentation.",
      "Heavy metals (Cd, Cr(VI), Pb, Co, Cu, Pb, Ni, Se, Zn) and Nutrients (e.g. nitrate, ammonium, phosphate) removal from water body has been removed."
    ],
    fieldApplication: [
      "Has been applied successfully in Denmark."
    ],
    limitations: [
      "Requires regular monitoring and maintenance.",
      "To remove carbon from water bodies, microbial culturing needs to be done."
    ],
    status: [
      "Communication is under progress."
    ],
    references: [
      { name: "Eco Island", url: "#" },
      { name: "Floating Island International Inc", url: "#" }
    ],
    images: [
      // Add your images here
      // { src: "/path/to/image1.jpg", alt: "Floating wetland system", caption: "Example floating wetland installation" }
    ]
  };

  const Section: React.FC<{ title: string; items: string[]; color: string }> = ({ title, items, color }) => (
    <div className="mb-8">
      <div className={`flex items-center mb-4`}>
        <div className={`w-1.5 h-8 ${color} rounded-full mr-3`}></div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <ul className="space-y-2 ml-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">•</span>
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-600">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{researchData.title}</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <Section 
            title="Current Gap" 
            items={researchData.currentGap} 
            color="bg-red-500" 
          />

          <Section 
            title="Technology" 
            items={researchData.technology} 
            color="bg-blue-500" 
          />

          <Section 
            title="Novelty" 
            items={researchData.novelty} 
            color="bg-purple-500" 
          />

          <Section 
            title="Details & Applicability" 
            items={researchData.detailsApplicability} 
            color="bg-green-500" 
          />

          {/* Images Section */}
          {researchData.images && researchData.images.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-1.5 h-8 bg-indigo-500 rounded-full mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-800">Visual Documentation</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-6">
                {researchData.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover"
                    />
                    {image.caption && (
                      <div className="p-3 bg-gray-50">
                        <p className="text-sm text-gray-600">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <Section 
            title="Field Application" 
            items={researchData.fieldApplication} 
            color="bg-teal-500" 
          />

          <Section 
            title="Limitations" 
            items={researchData.limitations} 
            color="bg-orange-500" 
          />

          <Section 
            title="Status" 
            items={researchData.status} 
            color="bg-yellow-500" 
          />

          {/* References Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-1.5 h-8 bg-pink-500 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-800">References</h2>
            </div>
            <ul className="space-y-2 ml-6">
              {researchData.references.map((ref, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">•</span>
                  {ref.url ? (
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline leading-relaxed"
                    >
                      {ref.name}
                    </a>
                  ) : (
                    <span className="text-gray-700 leading-relaxed">{ref.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Research Study Showcase • {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchShowcase;