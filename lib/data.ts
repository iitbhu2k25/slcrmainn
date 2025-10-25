export interface Technology {
  id: number;
  name: string;
  country: string;
  category: 'decentralized' | 'stp-improvement' | 'smart-monitoring' | 'sludge-treatment';
  currentGap?: string;
  technology?: string;
  novelty?: string;
  details?: string;
  fieldApplication?: string;
  limitations?: string;
  status?: string;
  references?: string[];
  images?: string[];
}

export const categories = {
  decentralized: 'Decentralized Units & NBS',
  'stp-improvement': 'STP Improvement',
  'smart-monitoring': 'Smart Monitoring',
  'sludge-treatment': 'Sludge/Solid Waste Treatment',
};

export const technologies: Technology[] = [
  // Decentralized units & NBS
  {
    id: 1,
    name: 'Floating Wetland',
    country: 'Denmark, USA',
    category: 'decentralized',
    currentGap: 'In India, natural based treatment solutions like wetlands are underutilized and often poorly maintained.',
    technology: 'Growing plants over floating platforms helps in absorbing and degrading pollutants from water bodies.',
    novelty: 'Selected plants and biofilm have been checked for showing its effectiveness in removing the specific pollutants.',
    details: 'Remove dissolved nutrients and heavy metals from water bodies. FW size is scalable and has modular design. Plants and the plant-microbe interactions in the lower surface of the floating island absorb and remove contaminants from the water while supporting other natural processes such as denitrification and sedimentation. Heavy metals (Cd, Cr(VI), Pb, Co, Cu, Pb, Ni, Se, Zn) and Nutrients (e.g. nitrate, ammonium, phosphate) removal from water body has been removed.',
    fieldApplication: 'Has been applied successfully in Denmark.',
    limitations: 'Requires regular monitoring and maintenance. To remove carbon from water bodies, microbial culturing needs to be done.',
    status: 'Communication is under progress.',
    references: ['Eco Island', 'Floating Island International Inc.'],
  },
  {
    id: 2,
    name: 'Photosynthesis Based Wastewater Treatment Using Gir Cow Urine',
    country: 'India',
    category: 'decentralized',
    currentGap: 'Conventional wetland treatment requires longer treatment time with less efficiency.',
    technology: 'Wastewater passed through wetland plants mixed with Gir cow urine gives high efficiency for pollutant degradation.',
    novelty: 'Gir cow urine has been tested along with wetland plants and found to have high catalytic properties for the degradation of domestic wastewater.',
    details: 'Leverage the nutrients in urine to support microbial and algal growth, aiding in purification. Gir Cow Urine\'s nutrients-rich composition enhances microbial activity. Microalgae and purple phototrophic bacteria can play a role in purifying in wastewater by absorbing nutrients and break down organic matter. Photosynthetic microorganism utilize its nutrients to enhance purification efficiency.',
    fieldApplication: 'Lab testing has been conducted with successful results.',
    limitations: 'Takes longer treatment time compared to conventional wastewater technologies.',
    status: 'Initial presentation conducted. Second phase meeting is in progress.',
    references: ['Pinakin Technology Solutions Pvt Ltd'],
  },
  {
    id: 3,
    name: 'Soil Biotechnology (SBT)',
    country: 'India',
    category: 'decentralized',
    currentGap: 'Treating wastewater using nature based solutions with less cost than STP is a big challenge.',
    technology: 'Soil biotechnology (SBT) is a terrestrial system for wastewater treatment based on the principle of the trickling filter.',
    novelty: 'Has potential to be used in place of STP, ETP, ZLD for industries and rivers and lake rejuvenation.',
    details: 'SBT systems are constructed from RCC, stonemasonry or soil bunds. They comprise a raw-water tank, bioreactor containment, treated water tank, piping and pumps. Suitable mineral constitution, bacterial culture and bio-indicator plants are the components of the system. Water passes through the artificial wetland vertically from top to down. Removal processes involves adsorption & filtration on media and biological degradation.',
    fieldApplication: 'SBT plant has been developed in IIT Bombay and has been implemented successfully in Bengaluru and Mumbai.',
    limitations: 'SBT type wastewater treatment plants require high land area of around 2.5 m²/ m³ of wastewater treatment.',
    status: 'Communication is under progress.',
    references: ['https://www.visionearthcare.com/technology/sbt'],
  },
  {
    id: 4,
    name: 'Phytorid',
    country: 'India',
    category: 'decentralized',
  },
  {
    id: 5,
    name: 'Freeze Technology',
    country: 'India',
    category: 'decentralized',
  },
  {
    id: 6,
    name: 'Nano Bubble',
    country: 'USA',
    category: 'decentralized',
  },
  {
    id: 7,
    name: 'Watopi',
    country: 'Denmark',
    category: 'decentralized',
  },
  {
    id: 8,
    name: 'Microbial Fuel Cell',
    country: 'USA',
    category: 'decentralized',
  },
  {
    id: 9,
    name: 'Water Mantra Technology',
    country: 'Singapore',
    category: 'decentralized',
  },
  {
    id: 10,
    name: 'Electro-oxidation',
    country: 'India',
    category: 'decentralized',
  },
  {
    id: 11,
    name: 'Onsite Oxidation',
    country: 'Denmark',
    category: 'decentralized',
  },
  {
    id: 12,
    name: 'Pulse Plasma',
    country: 'Germany',
    category: 'decentralized',
  },
  {
    id: 13,
    name: 'MVR Technology',
    country: 'Denmark',
    category: 'decentralized',
  },
  {
    id: 14,
    name: 'Geotubes - Solmax',
    country: 'India & Australia',
    category: 'decentralized',
  },
  {
    id: 15,
    name: 'Poseidon Pellets – Phosphorous Removal',
    country: 'USA',
    category: 'decentralized',
  },
  {
    id: 16,
    name: 'Coagulation-Flocculation',
    country: 'China',
    category: 'decentralized',
  },
  // STP Improvement
  {
    id: 17,
    name: 'MBR',
    country: 'France & USA',
    category: 'stp-improvement',
  },
  {
    id: 18,
    name: 'MBBR',
    country: 'Denmark',
    category: 'stp-improvement',
  },
  {
    id: 19,
    name: 'IFAS Technology',
    country: 'Canada',
    category: 'stp-improvement',
  },
  {
    id: 20,
    name: 'Membranes',
    country: 'Denmark',
    category: 'stp-improvement',
  },
  {
    id: 21,
    name: 'Ceramic Membrane Filtration',
    country: 'Denmark',
    category: 'stp-improvement',
  },
  {
    id: 22,
    name: 'Revolving Algal Biofilm System',
    country: 'USA',
    category: 'stp-improvement',
  },
  {
    id: 23,
    name: 'Nicotinamide Adenine Dinucleotide (NADH) Probes',
    country: 'U.S.A',
    category: 'stp-improvement',
  },
  {
    id: 24,
    name: 'Supercritical Water Oxidation',
    country: 'USA',
    category: 'stp-improvement',
  },
  {
    id: 25,
    name: 'Energy-Positive Wastewater Treatment',
    country: 'Denmark',
    category: 'stp-improvement',
  },
  {
    id: 26,
    name: 'UV Systems',
    country: 'Denmark',
    category: 'stp-improvement',
  },
  {
    id: 27,
    name: 'Rotary Drum Filter',
    country: 'France',
    category: 'stp-improvement',
  },
  // Smart Monitoring
  {
    id: 28,
    name: 'Remote Sensing & Earth Observation',
    country: 'Denmark',
    category: 'smart-monitoring',
  },
  {
    id: 29,
    name: 'Multi Parameter Water Quality Monitoring',
    country: 'England',
    category: 'smart-monitoring',
  },
  {
    id: 30,
    name: 'AI-Driven Cloud Optimization for WWTPs',
    country: 'Denmark',
    category: 'smart-monitoring',
  },
  {
    id: 31,
    name: 'Energy-Efficient Smart Control Systems',
    country: 'Denmark',
    category: 'smart-monitoring',
  },
  {
    id: 32,
    name: 'IoT Monitoring for Real-Time Water Network',
    country: 'Denmark',
    category: 'smart-monitoring',
  },
  {
    id: 33,
    name: 'N₂O Sensors',
    country: 'Denmark',
    category: 'smart-monitoring',
  },
  {
    id: 34,
    name: 'SulfiLogger H₂S Sensor',
    country: 'Denmark',
    category: 'smart-monitoring',
  },
  {
    id: 35,
    name: 'Ultrasonic Sludge Level Sensor',
    country: 'China',
    category: 'smart-monitoring',
  },
  {
    id: 36,
    name: 'Sludge Concentration Sensor',
    country: 'China',
    category: 'smart-monitoring',
  },
  // Sludge/Solid Waste Treatment
  {
    id: 37,
    name: 'Reed Beds',
    country: 'Denmark',
    category: 'sludge-treatment',
  },
  {
    id: 38,
    name: 'High Temperature and Pressure with Catalyst Technology',
    country: 'Denmark',
    category: 'sludge-treatment',
  },
  {
    id: 39,
    name: 'Steam-Drying and Pyrolysis Technology',
    country: 'Denmark',
    category: 'sludge-treatment',
  },
  {
    id: 40,
    name: 'Cyclones Sludge Settler',
    country: 'France',
    category: 'sludge-treatment',
  },
  {
    id: 41,
    name: 'Smart Waste Management Solution',
    country: 'Denmark',
    category: 'sludge-treatment',
  },
  {
    id: 42,
    name: 'Ecogi System',
    country: 'Denmark',
    category: 'sludge-treatment',
  },
  {
    id: 43,
    name: 'Solid Waste Recycling',
    country: 'Denmark',
    category: 'sludge-treatment',
  },
  {
    id: 44,
    name: 'Azortum Solid Waste Sorting',
    country: 'Estonia; Finland',
    category: 'sludge-treatment',
  },
  {
    id: 45,
    name: 'WAGABOX® Technology - Upgrade Landfill Gas into RNG',
    country: 'U.S.A',
    category: 'sludge-treatment',
  },
];
