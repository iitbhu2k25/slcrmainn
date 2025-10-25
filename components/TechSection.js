
"use client";

import React from 'react';

// Data for the four grid boxes
const gridItems = [
  { 
    name: "Decentralized units & NBS", 
     
    description: "Access real-time and historical data on river quality and flow." 
  },
  { 
    name: "STP improvement", 
    
    description: "Focused activities and progress reports for the Varuna river project." 
  },
  { 
    name: "Smart monitoring", 
    
    description: "Insights from international partners on sustainable water management." 
  },
  { 
    name: "Sludge/ solid waste treatment", 
   
    description: "Latest findings, publications, and research papers from the lab." 
  },
];

const Grid = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border-t-4 border-[#081f5c]"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#081f5c] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;