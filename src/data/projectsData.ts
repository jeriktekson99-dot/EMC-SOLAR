export interface ProjectItem {
  id: string;
  projectCode?: string;
  title: string;
  subtitle?: string;
  brand?: string; // Product manufacturer (e.g. SRNE, GOODWE, DEYE, SOLIS, DYNESS, PYLONTECH, CESC, GENIXGREEN)
  category: string;
  segment: string;
  location: string;
  details: string;
  image: string;
  galleryImages: string[];
  capacity: string;
  year: string;
  duration: string;
  inverterBrand: string;
  panelWattage: string;
  annualGeneration: string;
  summary: string;
  highlights: string[];
  status: string;
  publishedDate: string; // ISO format date string for chronological sorting (newest first)
  clientName?: string;
  roiYieldTargets?: string;
  scopeDetails?: string;
  warranty?: string;

  // Supabase Datatable Schema Fields (Portfolio Projects)
  leadToken?: string;
  clientFullName?: string;
  propertyType?: string;
  primaryContactEndpoint?: string;
  requestedConfiguration?: string;
  monthlyUsage?: string;
  philippineSubRegion?: string;
  projectId?: string;
  projectDisplayName?: string;
  assetSegment?: string;
  geographicalLocation?: string;
}

export interface GalleryImage {
  url: string;
  title: string;
  caption: string;
}

export interface ScopeBullet {
  label: string;
  text: string;
}

export interface ScopeSection {
  title: string;
  bullets: ScopeBullet[];
}

export interface ProjectDetail {
  id: string;
  eyebrow: string;
  title: string;
  client: string;
  sector: string;
  location: string;
  managingEngineer: string;
  engineerRole: string;
  contractor: string;
  email: string;
  engineerNote: string;
  gallery: GalleryImage[];
  image?: string;
  scopeSections: ScopeSection[];
  scopeDetails?: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  // --- SRNE ---
  {
    id: 'prod-srne-hes-10k',
    projectCode: 'SRNE-HES-10K',
    title: 'SRNE HES Series 10kW 48V Hybrid Solar Inverter',
    subtitle: 'Dual MPPT Smart Hybrid Inverter with Parallel Capability',
    brand: 'SRNE',
    category: 'Hybrid Inverter',
    segment: 'SRNE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: 'Dual MPPT / 48V Hybrid',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '10 kW Output / 500V DC Max',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'SRNE Solar Co., Ltd.',
    panelWattage: 'Up to 15kWp PV Input Array',
    annualGeneration: 'Pure Sine Wave 230V AC',
    warranty: '5 Years Manufacturer Warranty',
    summary: 'High-efficiency 10kW hybrid solar inverter featuring dual MPPT trackers with 99.9% tracking precision, seamless 10ms UPS grade transfer, parallel expansion up to 6 units, and comprehensive battery compatibility.',
    highlights: [
      'Dual MPPT with wide operating voltage (120V - 500V DC)',
      'Sub-10ms automatic transfer time for uninterrupted appliance operation',
      'Integrated Wi-Fi / GPRS remote monitoring module and mobile app'
    ],
    publishedDate: '2026-08-25'
  },
  {
    id: 'prod-srne-asf-5k',
    projectCode: 'SRNE-ASF-5K',
    title: 'SRNE ASF Series 5kW All-in-One Energy Storage Inverter',
    subtitle: 'Integrated MPPT Charger & Pure Sine Wave Inverter',
    brand: 'SRNE',
    category: 'Energy Storage System',
    segment: 'SRNE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '5kW All-in-One Storage',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '5 kW Continuous / 10kW Surge',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'SRNE Solar Co., Ltd.',
    panelWattage: '6000W PV Input',
    annualGeneration: 'Pure Sine Wave 220V/230V',
    warranty: '5 Years Manufacturer Warranty',
    summary: 'Compact all-in-one solar energy storage inverter engineered for residential and light-commercial setups. Supports lithium and lead-acid battery banks with multi-stage smart charging algorithms.',
    highlights: [
      'Dual active cooling with intelligent thermal sensor regulation',
      'Direct generator automatic starting dry contact',
      'High power factor 1.0 full load continuous operation'
    ],
    publishedDate: '2026-08-15'
  },
  {
    id: 'prod-srne-mc-100a',
    projectCode: 'SRNE-MC-48100',
    title: 'SRNE MC Series 100A MPPT Solar Charge Controller',
    subtitle: 'Ultra-fast MPPT Solar Regulator for 12V/24V/36V/48V Systems',
    brand: 'SRNE',
    category: 'Charge Controller',
    segment: 'SRNE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '100A 48V MPPT Regulator',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '100A Current / 150V Max PV',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'SRNE Solar Co., Ltd.',
    panelWattage: '5600W (48V System)',
    annualGeneration: '98.5% Conversion Efficiency',
    warranty: '3 Years Manufacturer Warranty',
    summary: 'Industry-standard MPPT solar controller delivering up to 99.5% tracking efficiency with multi-phase synchronous rectification and Bluetooth communication module.',
    highlights: [
      'Patented PowerCatcher maximum power point tracking technology',
      'Supports Lithium-ion, LiFePO4, Gel, AGM, and Sealed lead-acid profiles',
      'Overheating power derating protection circuit'
    ],
    publishedDate: '2026-07-20'
  },

  // --- GOODWE ---
  {
    id: 'prod-goodwe-et-10k',
    projectCode: 'GW10K-ET',
    title: 'GoodWe ET Series 10kW Three-Phase High Voltage Hybrid Inverter',
    subtitle: 'Award-winning 3-Phase Energy Storage Inverter',
    brand: 'GOODWE',
    category: 'Three-Phase Hybrid Inverter',
    segment: 'GOODWE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: 'Three-Phase High Voltage Hybrid',
    image: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '10 kW Output / 15kW PV Max',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'GoodWe Power Supply Co., Ltd.',
    panelWattage: 'High-Voltage Battery (180V - 600V)',
    annualGeneration: '98.2% Max Efficiency',
    warranty: '10 Years Standard Warranty',
    summary: 'The GoodWe ET Series is a three-phase high-voltage energy storage inverter designed to increase energy independence and maximize self-consumption through an export limit feature and time-of-use shifts.',
    highlights: [
      'UPS-level automatic switching time under 10 milliseconds',
      'IP66 outdoor protection rating with die-cast aluminum heat sink',
      'Intelligent battery management with remote firmware update'
    ],
    publishedDate: '2026-08-28'
  },
  {
    id: 'prod-goodwe-lynx-home-f',
    projectCode: 'GOODWE-LYNX-F',
    title: 'GoodWe Lynx Home F Series High Voltage LFP Battery',
    subtitle: 'Modular Stackable LiFePO4 Energy Storage System',
    brand: 'GOODWE',
    category: 'Lithium Battery Storage',
    segment: 'GOODWE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '13.1kWh High Voltage Storage',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '9.8kWh - 16.4kWh Modular Capacity',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'GoodWe Lynx Technology',
    panelWattage: 'Cobalt-Free LiFePO4 Cells',
    annualGeneration: '6,000+ Cycles at 90% DoD',
    warranty: '10 Years Performance Warranty',
    summary: 'GoodWe Lynx Home F Series provides premium safe storage with auto-recognition modules and plug-and-play stacking that eliminates external battery wiring.',
    highlights: [
      'Safe LiFePO4 chemistry with multi-tier battery management safety',
      'IP55 water and dust resistance for indoor or sheltered outdoor placement',
      'Expandable from 3 to 5 battery modules per tower'
    ],
    publishedDate: '2026-08-18'
  },
  {
    id: 'prod-goodwe-es-g2-5k',
    projectCode: 'GW5000-ES-20',
    title: 'GoodWe ES G2 Series 5kW Single-Phase Hybrid Inverter',
    subtitle: 'Residential Single-Phase Solar Energy Storage Solution',
    brand: 'GOODWE',
    category: 'Single-Phase Hybrid Inverter',
    segment: 'GOODWE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '5kW Single-Phase Hybrid',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '5 kW AC Nominal / 48V Battery',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'GoodWe Power Supply Co., Ltd.',
    panelWattage: 'Up to 7.5kWp Solar Input',
    annualGeneration: '97.6% Max Efficiency',
    warranty: '5 Years Extendable to 10 Years',
    summary: 'The second generation of GoodWe renowned ES Series offers compact lightweight design, whisper-quiet operation without cooling fans, and peak shaving capabilities.',
    highlights: [
      'Fanless natural convection cooling for whisper-quiet home installations',
      'Integrated DC isolator and Type II surge protection',
      'Full compatibility with leading 48V lithium battery protocols'
    ],
    publishedDate: '2026-07-28'
  },

  // --- DEYE ---
  {
    id: 'prod-deye-sun-12k-sg04',
    projectCode: 'SUN-12K-SG04LP3',
    title: 'Deye SUN-12K-SG04LP3 12kW 3-Phase Low Voltage Hybrid Inverter',
    subtitle: 'Industry-Leading 48V Low Voltage 3-Phase Smart Inverter',
    brand: 'DEYE',
    category: 'Three-Phase Hybrid Inverter',
    segment: 'DEYE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '12kW 3-Phase / 48V Low Voltage',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '12 kW Continuous / 240A Max Charge',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Ningbo Deye Inverter Technology',
    panelWattage: '15,600W Max DC Input',
    annualGeneration: '48V Low Voltage Battery Bank',
    warranty: '5 Years Standard / 10 Years Available',
    summary: 'Flagship Deye 12kW 3-phase hybrid inverter with 48V low voltage battery architecture for maximum safety. Features 100% unbalanced phase output and up to 16 units parallel operation.',
    highlights: [
      '100% unbalanced output capability where each phase can output up to 50% rated power',
      'Full diesel generator synchronization and automated load management',
      '6 programmable time-of-use battery charge and discharge windows'
    ],
    publishedDate: '2026-08-30'
  },
  {
    id: 'prod-deye-sun-8k-sg01',
    projectCode: 'SUN-8K-SG01LP1',
    title: 'Deye SUN-8K-SG01LP1 8kW Single Phase Smart Hybrid Inverter',
    subtitle: 'High-Power Residential Hybrid with Touchscreen Control',
    brand: 'DEYE',
    category: 'Single-Phase Hybrid Inverter',
    segment: 'DEYE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '8kW Single-Phase Hybrid',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '8 kW Output / 190A Charge Current',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Ningbo Deye Inverter Technology',
    panelWattage: '10,400W Max PV Input',
    annualGeneration: '48V Battery Compatible',
    warranty: '5 Years Manufacturer Warranty',
    summary: 'High-performance 8kW residential inverter featuring a color touchscreen interface, frequency drop control, and dual MPPT trackers with 99.9% MPPT efficiency.',
    highlights: [
      'Colorful touch LCD display with IP65 weather-sealed aluminum body',
      'AC coupling retrofit support to modernize existing on-grid systems',
      'Sub-4ms transfer time to emergency battery backup'
    ],
    publishedDate: '2026-08-12'
  },
  {
    id: 'prod-deye-micro-2000',
    projectCode: 'SUN-2000G3',
    title: 'Deye Microinverter SUN-2000G3 2000W 4-MPPT Smart Unit',
    subtitle: 'Module-Level Power Electronics for Maximum Rooftop Output',
    brand: 'DEYE',
    category: 'Solar Microinverter',
    segment: 'DEYE',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '2000W 4-MPPT Microinverter',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '2000W AC Output / 4x 600W PV Panels',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Ningbo Deye Inverter Technology',
    panelWattage: 'Individual Module Optimization',
    annualGeneration: '96.5% CEC Efficiency',
    warranty: '10 to 25 Years Extended Warranty',
    summary: 'Four-channel microinverter eliminating shading losses with independent MPPT per solar panel. Built-in Wi-Fi communication and rapid shutdown compliant with PEC safety guidelines.',
    highlights: [
      '4 independent MPPT trackers ensuring zero panel mismatch losses',
      'IP67 completely sealed waterproof construction',
      'Integrated rapid shutdown for certified firefighter safety'
    ],
    publishedDate: '2026-07-10'
  },

  // --- SOLIS ---
  {
    id: 'prod-solis-s6-pro-6k',
    projectCode: 'S6-EH1P6K-L-PRO',
    title: 'Solis S6 Pro 6kW Advanced Single-Phase Hybrid Inverter',
    subtitle: 'Next-Generation Residential Energy Storage Inverter',
    brand: 'SOLIS',
    category: 'Smart Hybrid Inverter',
    segment: 'SOLIS',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '6kW Single-Phase Hybrid',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '6 kW Continuous / 135A Battery Current',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Ginlong (Solis) Technologies',
    panelWattage: '9,600W DC Solar Input',
    annualGeneration: '97.5% Efficiency',
    warranty: '5 Years Standard / 10 Years Available',
    summary: 'The Solis S6 Pro incorporates ultra-high 135A charge and discharge current, accommodating modern high-capacity lithium battery systems with seamless generator interface.',
    highlights: [
      '135A max battery charging/discharging current for ultra-rapid power recovery',
      'Integrated AFCI DC arc fault circuit interrupter proactively eliminating fire hazards',
      'Smart generator automatic control with automatic peak shaving'
    ],
    publishedDate: '2026-08-22'
  },
  {
    id: 'prod-solis-s5-gc-25k',
    projectCode: 'S5-GC25K',
    title: 'Solis S5-GC 25kW 3-Phase Commercial Grid-Tied Inverter',
    subtitle: 'High-Yield Commercial Rooftop String Inverter',
    brand: 'SOLIS',
    category: 'Commercial Grid-Tied Inverter',
    segment: 'SOLIS',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '25kW 3-Phase String Inverter',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '25 kW Output / 3 MPPT Design',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Ginlong (Solis) Technologies',
    panelWattage: '37.5kW Max Recommended DC',
    annualGeneration: '98.7% Max Efficiency',
    warranty: '5 Years Standard Commercial Warranty',
    summary: 'Commercial grade 3-phase string inverter engineered for warehouses, retail stores, and factories. Features 3 MPPTs with 6 strings for versatile roof orientations.',
    highlights: [
      '3 MPPTs with 16A string current compatibility for 600W+ bifacial panels',
      'Intelligent IV Curve diagnosis with remote scanning report generation',
      'IP66 protection with Type II DC & AC surge arresters included'
    ],
    publishedDate: '2026-08-02'
  },

  // --- DYNESS ---
  {
    id: 'prod-dyness-powerbox-pro',
    projectCode: 'DYNESS-PB-PRO',
    title: 'Dyness Powerbox Pro 10.24kWh Wall-Mounted LiFePO4 Battery',
    subtitle: 'Ultra-Sleek Residential Home Energy Storage Bank',
    brand: 'DYNESS',
    category: 'Wall-Mounted Lithium ESS',
    segment: 'DYNESS',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '10.24kWh LiFePO4 Wall Mount',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '10.24 kWh (51.2V 200Ah)',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Dyness Renewable Energy',
    panelWattage: 'Tier-1 Prismatic LiFePO4 Cells',
    annualGeneration: '6,000+ Cycles (90% DoD)',
    warranty: '10 Years Performance Warranty',
    summary: 'Modern wall-mounted residential energy storage appliance built with premium prismatic lithium iron phosphate cells. Seamlessly communicates via CAN/RS485 with Deye, GoodWe, Solis, and SRNE inverters.',
    highlights: [
      'High safety Tier-1 automotive-grade prismatic LiFePO4 cells',
      'Supports parallel connection of up to 4 units for 40.96kWh capacity',
      'IP65 water resistance rating with floor standing or wall hanging options'
    ],
    publishedDate: '2026-08-26'
  },
  {
    id: 'prod-dyness-bx51100',
    projectCode: 'DYNESS-BX51100',
    title: 'Dyness BX51100 5.12kWh Rack-Mounted Lithium Storage Module',
    subtitle: 'Standard 19-Inch Server Rack LFP Battery Module',
    brand: 'DYNESS',
    category: 'Rack-Mounted Lithium Battery',
    segment: 'DYNESS',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '5.12kWh 48V Server Rack Unit',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '5.12 kWh (51.2V 100Ah)',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Dyness Renewable Energy',
    panelWattage: 'Prismatic LFP Battery Pack',
    annualGeneration: '6,000 Cycles at 25°C',
    warranty: '10 Years Performance Warranty',
    summary: 'High-density modular 5.12kWh server-rack battery module engineered for flexible energy storage systems. Features smart BMS with multi-level over-charge, over-discharge, and temperature protection.',
    highlights: [
      'Parallel capability up to 40 battery modules without external hub',
      'Standard 3U server rack design for clean cabinet consolidation',
      'Universal CAN / RS485 / RS232 protocols matching tier-1 hybrid inverters'
    ],
    publishedDate: '2026-07-26'
  },

  // --- PYLONTECH ---
  {
    id: 'prod-pylontech-us5000',
    projectCode: 'PYLON-US5000',
    title: 'Pylontech US5000 4.8kWh 48V LFP Modular Battery Module',
    subtitle: 'The Global Gold Standard for Low Voltage Lithium Storage',
    brand: 'PYLONTECH',
    category: 'Modular Lithium Storage',
    segment: 'PYLONTECH',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '4.8kWh 48V LFP Module',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '4.8 kWh (48V 100Ah)',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Pylon Technologies Co., Ltd.',
    panelWattage: 'Self-Designed BMS & Cell Architecture',
    annualGeneration: '6,000+ Cycles (95% DoD)',
    warranty: '10 Years Official Warranty',
    summary: 'Pylontech US5000 represents the most widely trusted and field-proven 48V lithium battery module in the solar industry, delivering 95% depth of discharge with unmatched reliability.',
    highlights: [
      '95% Depth of Discharge (DoD) maximizing usable energy output',
      'Pre-charge circuit protection preventing current surge on inverter startup',
      'Supports up to 16 modules in direct parallel for 76.8kWh total capacity'
    ],
    publishedDate: '2026-08-27'
  },
  {
    id: 'prod-pylontech-force-h2',
    projectCode: 'PYLON-FORCE-H2',
    title: 'Pylontech Force-H2 14.21kWh High-Voltage Residential ESS',
    subtitle: 'Elegant Cable-Free High Voltage Home Battery Tower',
    brand: 'PYLONTECH',
    category: 'High-Voltage Modular ESS',
    segment: 'PYLONTECH',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '14.21kWh High Voltage Tower',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '14.21 kWh (384V 37Ah)',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Pylon Technologies Co., Ltd.',
    panelWattage: 'Stackable Modular High-Voltage',
    annualGeneration: '6,000+ Cycles at 90% DoD',
    warranty: '10 Years Official Warranty',
    summary: 'The Force-H2 is a high-voltage stackable home energy storage system with quick-connector vertical mounting that eliminates all visible inter-module cabling.',
    highlights: [
      'Cable-free stacking system drastically reducing installation labor and time',
      'High-voltage DC bus (192V - 384V) delivering superior inverter conversion efficiency',
      'IP55 outdoor enclosure with furniture-grade architectural styling'
    ],
    publishedDate: '2026-08-04'
  },

  // --- CESC ---
  {
    id: 'prod-cesc-combiner-box',
    projectCode: 'CESC-CB-4IN2OUT',
    title: 'CESC Smart Array Combiner Box & DC Rapid Shutdown System',
    subtitle: 'Complete Solar Balance of System Protection Enclosure',
    brand: 'CESC',
    category: 'Solar Protection & Balance of System',
    segment: 'CESC',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '1000V DC Smart Combiner',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '1000V DC / 4-String In, 2-String Out',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'CESC Clean Energy Solar Components',
    panelWattage: 'High-Rupture 15A DC Fuses',
    annualGeneration: 'Certified PEC & UL1741 Compliant',
    warranty: '5 Years Manufacturer Warranty',
    summary: 'Factory-assembled and pre-wired solar DC combiner box featuring SunSpec-compliant rapid shutdown transmitters, 1000V DC surge arrester, and heavy-duty rotary isolation switch.',
    highlights: [
      'Pre-installed 1000V DC Type II surge protective devices (SPD)',
      'IP65 UV-stabilized weatherproof polycarbonate housing with lockable latch',
      'Integrated SunSpec signal transmitter for instant firefighter rapid shutdown'
    ],
    publishedDate: '2026-08-20'
  },
  {
    id: 'prod-cesc-pv-585w',
    projectCode: 'CESC-585-NTOP',
    title: 'CESC 585W N-Type TopCon High-Efficiency Solar Panel Array',
    subtitle: 'Tier-1 Bifacial Dual-Glass Photovoltaic Module',
    brand: 'CESC',
    category: 'Tier-1 Photovoltaic Module',
    segment: 'CESC',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '585W N-Type Bifacial Panel',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '585W Peak / 22.8% Efficiency',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'CESC Clean Energy Solar Components',
    panelWattage: '144-Cell N-Type TopCon Technology',
    annualGeneration: 'Up to 30% Extra Rear-Side Gain',
    warranty: '12 Years Product / 30 Years Linear Power Warranty',
    summary: 'Next-generation N-Type TOPCon solar modules engineered for extreme tropical conditions in the Philippines, delivering zero light-induced degradation and superior low-light performance.',
    highlights: [
      '22.8% module efficiency with dual-glass mechanical durability',
      'Certified wind load resistance up to 5400 Pa and snow/typhoon resistance',
      'Ultra-low temperature coefficient of -0.30%/°C for maximum tropical output'
    ],
    publishedDate: '2026-08-08'
  },

  // --- GENIXGREEN ---
  {
    id: 'prod-genixgreen-rack-48v',
    projectCode: 'GENIX-48100-PRO',
    title: 'Genixgreen 48V 100Ah Server-Rack LiFePO4 Energy Battery',
    subtitle: 'Heavy-Duty 5.12kWh Prismatic Smart Storage Unit',
    brand: 'GENIXGREEN',
    category: 'Server-Rack Lithium Battery',
    segment: 'GENIXGREEN',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '48V 100Ah / 5.12kWh Battery',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '5.12 kWh (51.2V 100Ah)',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Genixgreen Energy Tech Co.',
    panelWattage: 'Grade-A 3.2V Prismatic LFP Cells',
    annualGeneration: '6,000+ Cycles (85% DoD)',
    warranty: '5 to 10 Years Performance Warranty',
    summary: 'Genixgreen 48V 100Ah rack battery engineered with Grade-A brand new prismatic cells, integrated LCD display, and multi-protocol communication supporting Deye, Solis, and SRNE inverters.',
    highlights: [
      'High-contrast digital LCD display showing real-time voltage, SOC, and cell balance',
      'Dual high-current DC circuit breakers built directly into the front panel',
      'Multi-protocol RS485 and CAN communication with auto-detect inverter profiles'
    ],
    publishedDate: '2026-08-24'
  },
  {
    id: 'prod-genixgreen-wall-10k',
    projectCode: 'GENIX-WALL-200AH',
    title: 'Genixgreen Wall-Mount 51.2V 200Ah 10.24kWh Home ESS',
    subtitle: 'Slim Profile Residential Energy Storage Powerwall',
    brand: 'GENIXGREEN',
    category: 'Home Energy Storage System',
    segment: 'GENIXGREEN',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '10.24kWh Wall-Mounted LiFePO4',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '10.24 kWh (51.2V 200Ah)',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Genixgreen Energy Tech Co.',
    panelWattage: 'Smart BMS with Active Balancing',
    annualGeneration: '6,000+ Cycles (90% DoD)',
    warranty: '10 Years Performance Warranty',
    summary: 'Slim wall-hanging residential battery providing 10.24kWh of continuous backup power with zero maintenance. Engineered with built-in thermal management and heavy-duty steel mounting plate.',
    highlights: [
      'Slim modern profile saving valuable floor space in homes and utility rooms',
      'Built-in 200A smart BMS capable of handling 10kW continuous discharge surges',
      'Plug-and-play quick connect terminal lugs with protective insulating boots'
    ],
    publishedDate: '2026-08-14'
  },
  {
    id: 'prod-genixgreen-station-2000',
    projectCode: 'GENIX-PORT-2000',
    title: 'Genixgreen Portable Smart Solar Generator 2000W Station',
    subtitle: 'High-Capacity Mobile Pure Sine Wave Solar Power Bank',
    brand: 'GENIXGREEN',
    category: 'Portable Solar Power Station',
    segment: 'GENIXGREEN',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '2048Wh / 2000W AC Output',
    image: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '2048Wh LiFePO4 / 2000W Pure Sine',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Genixgreen Energy Tech Co.',
    panelWattage: '500W Max Solar MPPT Input',
    annualGeneration: '3,500+ Cycles to 80%',
    warranty: '3 Years Warranty',
    summary: 'Versatile portable power station equipped with long-life LiFePO4 battery chemistry, bi-directional AC fast charging in 1.8 hours, and 500W solar input for emergency off-grid autonomy.',
    highlights: [
      'Ultra-safe LiFePO4 battery with 3,500+ life cycles',
      'Dual AC 230V outlets with 2000W pure sine wave (4000W peak surge)',
      'Fast solar recharge in just 3-4 hours with portable solar panels'
    ],
    publishedDate: '2026-07-12'
  },
  // --- DAH SOLAR ---
  {
    id: 'prod-dah-solar-550w',
    projectCode: 'DAH-DHT-M550W',
    title: 'DAH Solar 550W Full-Screen N-Type TOPCon Photovoltaic Module',
    subtitle: 'Patented Full-Screen Frame Prevents Dust Accumulation & Power Loss',
    brand: 'DAH Solar',
    category: 'Solar Panel',
    segment: 'DAH Solar',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: '550W Full-Screen N-Type',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '550W Output / 21.6% Efficiency',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'DAH Solar Co., Ltd.',
    panelWattage: '144 N-Type High Efficiency Half-Cells',
    annualGeneration: '6%-15% Higher Generation via Anti-Dust Frame',
    warranty: '12 Years Product / 25 Years Linear Performance Warranty',
    summary: 'Patented Full-Screen frameless front design eliminates bottom water and dust accumulation, preventing hot spots and boosting annual energy yield.',
    highlights: [
      'Innovative Full-Screen technology decreases dust & sediment buildup by 90%',
      'Anti-PID and micro-crack resistant dual-glass design',
      'Certified wind load resistance 2400Pa and mechanical load 5400Pa'
    ],
    publishedDate: '2026-08-30'
  },
  // --- ACCESSORIES ---
  {
    id: 'prod-accessories-bos-kit',
    projectCode: 'SOL-BOS-ACC-01',
    title: 'Solareign Balance of System (BOS) Heavy-Duty Solar Accessories Kit',
    subtitle: 'Anodized Aluminum Rails, Mid/End Clamps, MC4 Connectors & DC Isolators',
    brand: 'Accessories',
    category: 'Accessories',
    segment: 'Accessories',
    location: 'Authorized Tier-1 Product',
    status: 'In Stock',
    details: 'Solar Balance of System Accessories',
    image: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 'Commercial Grade Hardware Kit',
    year: '2026',
    duration: 'Immediate Dispatch',
    inverterBrand: 'Solareign Hardware Integration',
    panelWattage: 'AL6005-T5 Anodized Aluminum',
    annualGeneration: 'Corrosion-Free 25+ Years Lifespan',
    warranty: '10 Years Structural Warranty',
    summary: 'Comprehensive Tier-1 certified balance of system mounting hardware, UV-rated DC cables, MC4 solar connectors, grounding lugs, and weather-sealed cable entry glands.',
    highlights: [
      'Engineered for Philippine wind zones and typhoon conditions',
      'UV-stabilized EPDM gaskets for leak-free roof installation',
      'IP68 certified waterproof multi-contact DC connectors'
    ],
    publishedDate: '2026-08-29'
  },
  {
    id: 'proj-206-04',
    projectCode: 'PROJ-206-04',
    title: 'Mandaluyong Penthouse Eco Array / HIGH-RISE LUXURY',
    subtitle: 'Urban penthouse aesthetic rooftop microgrid with energy storage',
    clientName: 'Mandaluyong Penthouse Eco Solar Segment',
    category: 'Residential Hybrid',
    segment: 'Residential',
    location: 'Mandaluyong, Metro Manila',
    status: 'Completed',
    details: 'Luxury Rooftop Array',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '18 kWp',
    year: '2026',
    duration: '2 Weeks',
    inverterBrand: 'Deye 18kW 3-Phase Smart Hybrid',
    panelWattage: '32x 565W Tier-1 All-Black N-Type Panels',
    annualGeneration: '~26,500 kWh / Year',
    summary: 'Ultra-modern rooftop photovoltaic system integrated into a high-rise penthouse in Mandaluyong, featuring low-profile structural racking, architectural perimeter shielding, and a 20kWh lithium storage bank.',
    highlights: [
      'Aero-dynamic ballasted racking certified for wind loads exceeding 250 km/h',
      'Zero-export smart metering with critical load priority switching',
      'Remote telemetry & app monitoring with automated storm protection mode'
    ],
    publishedDate: '2026-07-28'
  },
  {
    id: 'proj-206-03',
    projectCode: 'PROJ-206-03',
    title: 'St. Jude Specialized Solar Setup / CLINICAL CARE',
    subtitle: 'Commercial medical facility uninterruptible power system',
    clientName: 'St. Jude Medical Care Facility',
    category: 'Commercial Microgrids',
    segment: 'Commercial',
    location: 'St. Jude, PH',
    status: 'Ongoing',
    details: 'Critical Healthcare Microgrid',
    image: '', // Demonstrates the reference "No Media" box
    galleryImages: [],
    capacity: '45 kWp',
    year: '2026',
    duration: '3 Weeks',
    inverterBrand: 'Huawei Commercial 3-Phase Multi-MPPT',
    panelWattage: '80x 560W Bifacial Dual-Glass Panels',
    annualGeneration: '~65,000 kWh / Year',
    summary: 'Specialized high-reliability commercial rooftop array designed for a specialized medical and diagnostic center in St. Jude, guaranteeing uninterruptible diagnostic and laboratory power.',
    highlights: [
      'Sub-20 millisecond automatic grid transfer for clinical instruments',
      'Non-penetrating clamp mounting preserving sterile roof envelope',
      'Over ₱52,000 monthly utility overhead reduction'
    ],
    publishedDate: '2026-07-15'
  },
  {
    id: 'proj-206-02',
    projectCode: 'PROJ-206-02',
    title: 'Cavite Cold Storage Solar Grid / MULTI-MW SCALE',
    subtitle: 'Industrial cold storage facility with net-metering export',
    clientName: 'Imus Logistics & Cold Chain Corp.',
    category: 'Industrial Arrays',
    segment: 'Industrial',
    location: 'Imus, Cavite',
    status: 'Completed',
    details: 'Cold Storage Microgrid',
    image: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '250 kWp',
    year: '2026',
    duration: '4 Weeks',
    inverterBrand: 'Huawei Commercial 3-Phase String Inverters',
    panelWattage: '455x 550W Bifacial High-Efficiency PV Modules',
    annualGeneration: '~365,000 kWh / Year',
    summary: 'Heavy-duty commercial rooftop solar microgrid engineered for an intensive temperature-controlled cold storage warehouse in Imus, Cavite, reducing peak-demand charges.',
    highlights: [
      'Non-penetrating standing seam clamp mounts protecting roof warranty',
      'Direct net-metering export monetization with local distribution utility',
      'Levelized cost of electricity (LCOE) projected sub ₱3.20/kWh'
    ],
    publishedDate: '2026-07-05'
  },
  {
    id: 'proj-206-01',
    projectCode: 'PROJ-206-01',
    title: 'Quezon City Residential Array / HIGH EFFICIENCY',
    subtitle: 'High-efficiency residential PV with hybrid lithium backup',
    clientName: 'Bernardo Family Estate',
    category: 'Residential Hybrid',
    segment: 'Residential',
    location: 'Quezon City, Metro Manila',
    status: 'Completed',
    details: 'High-Efficiency Residential PV',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '12 kWp',
    year: '2026',
    duration: '5 Days',
    inverterBrand: 'Deye 12kW Hybrid Single-Phase Inverter',
    panelWattage: '22x 550W Tier-1 N-Type Monocrystalline Panels',
    annualGeneration: '~17,500 kWh / Year',
    summary: 'Custom high-efficiency residential array in Quezon City designed to eliminate 90%+ of daytime power draw with automated battery discharge during peak evening tariff windows.',
    highlights: [
      'Pre-assembled smart distribution board with surge protection devices (SPDs)',
      '15kWh LiFePO4 rack storage with 6,000 cycle lifespan',
      'Full Meralco net-metering compliance and bi-directional meter installation'
    ],
    publishedDate: '2026-06-25'
  },
  {
    id: 'proj-1',
    projectCode: 'PROJ-206-05',
    title: 'Proposed Renovation of 3-Storey Town House',
    subtitle: 'Interior construction & architectural solar integration',
    clientName: 'Ms. Janice Azul',
    category: 'Residential Hybrid',
    segment: 'Residential',
    location: 'Bayan Luma 2, Imus Cavite',
    status: 'Ongoing',
    details: 'Interior Construction & Solar',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '15 kWp',
    year: '2024',
    duration: '4 Weeks',
    inverterBrand: 'Deye 15kW Smart 3-Phase Hybrid Inverter',
    panelWattage: '28x 550W Tier-1 N-Type Monocrystalline Panels',
    annualGeneration: '~21,900 kWh / Year',
    summary: 'Complete architectural renovation and hybrid solar integration with sub-panel distribution and acoustic drywall partitions in Imus, Cavite.',
    highlights: [
      'Corporate fit-out and architectural drywall partitions with acoustic insulation',
      'Pre-installed UV-rated solar raceway and 15kW hybrid electrical distribution',
      'Sub-10ms brownout failover with integrated lithium storage capacity'
    ],
    publishedDate: '2024-11-20'
  },
  {
    id: 'proj-2',
    title: 'Cavite Cold Storage Solar Grid',
    clientName: 'Imus Logistics & Cold Chain Corp.',
    category: 'Industrial Arrays',
    segment: 'Industrial',
    location: 'Anabu II, Imus, Cavite',
    status: 'Completed',
    details: 'Cold Storage Microgrid',
    image: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '250 kWp',
    year: '2024',
    duration: '3 Weeks',
    inverterBrand: 'Huawei Commercial 3-Phase String Inverters',
    panelWattage: '455x 550W Bifacial High-Efficiency PV Modules',
    annualGeneration: '~365,000 kWh / Year',
    summary: 'Heavy-duty commercial rooftop solar microgrid engineered for an intensive temperature-controlled cold storage warehouse in Imus, Cavite, reducing peak-demand charges.',
    highlights: [
      'Non-penetrating standing seam clamp mounts protecting roof warranty',
      'Direct net-metering export monetization with local distribution utility',
      'Levelized cost of electricity (LCOE) projected sub ₱3.20/kWh'
    ],
    publishedDate: '2024-10-15'
  },
  {
    id: 'proj-3',
    title: 'Dasmariñas Commercial Microgrid',
    clientName: 'Dasmariñas Multi-Tenant Plaza',
    category: 'Commercial Microgrids',
    segment: 'Commercial',
    location: 'Dasmariñas, Cavite',
    status: 'Completed',
    details: 'Commercial Rooftop',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '50 kWp',
    year: '2024',
    duration: '2 Weeks',
    inverterBrand: 'Huawei Commercial 3-Phase String Inverters',
    panelWattage: '92x 550W Monocrystalline High-Efficiency Panels',
    annualGeneration: '~73,000 kWh / Year',
    summary: 'Engineered for a commercial multi-tenant establishment in Dasmariñas to offset intensive daytime HVAC energy demand and reduce baseline electricity rates.',
    highlights: [
      'Non-penetrating standing seam clamp mounts protecting roof warranty',
      'Direct net-metering export monetization with local distribution utility',
      'Peak load shaving algorithms reducing high-tier tariff charges'
    ],
    publishedDate: '2024-09-10'
  },
  {
    id: 'proj-4',
    title: 'General Trias Industrial Solar Array',
    clientName: 'Cavite Manufacturing & Logistics Corp.',
    category: 'Industrial Arrays',
    segment: 'Industrial',
    location: 'General Trias, Cavite',
    status: 'Completed',
    details: 'High-Voltage Sync',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '200 kWp',
    year: '2024',
    duration: '1 Month',
    inverterBrand: 'Sungrow High-Voltage Industrial Central Inverters',
    panelWattage: '364x 550W Bifacial Dual-Glass PV Modules',
    annualGeneration: '~292,000 kWh / Year',
    summary: 'High-voltage synchronized multi-megawatt tier installation for a major manufacturing warehouse in General Trias to suppress peak demand penalties.',
    highlights: [
      'Dedicated step-up transformer integration & substation-grade safety breakers',
      'SCADA telemetry monitoring with remote curtailment controls',
      'Drastic carbon emissions offset of over 190 metric tons annually'
    ],
    publishedDate: '2024-08-05'
  },
  {
    id: 'proj-5',
    title: 'Tagaytay Autonomous Residential Solar',
    clientName: 'Highland Private Residence & Retreat',
    category: 'Residential Hybrid',
    segment: 'Residential',
    location: 'Tagaytay City, Cavite',
    status: 'Ongoing',
    details: 'Full Autonomy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '12 kWp',
    year: '2024',
    duration: '6 Days',
    inverterBrand: 'Victron Energy Dual Quattro Inverter Stack',
    panelWattage: '22x 550W Tier-1 All-Black Solar Panels',
    annualGeneration: '~17,500 kWh / Year',
    summary: 'Designed for a private villa in Tagaytay with complete autonomy from the main power grid, supported by a 25kWh LiFePO4 rack battery bank and smart generator auto-start.',
    highlights: [
      '100% self-sufficient energy loop independent of local power grid stability',
      'Victron Color Control GX cloud monitoring and diagnostics',
      'High-elevation wind load reinforced brackets'
    ],
    publishedDate: '2024-07-12'
  },
  {
    id: 'proj-7',
    title: 'Dasmariñas Smart Hybrid Residence',
    clientName: 'Dasmariñas Homeowner Estate',
    category: 'Residential Hybrid',
    segment: 'Residential',
    location: 'Dasmariñas City, Cavite',
    status: 'Completed',
    details: 'Lithium Battery Backup',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '10 kWp',
    year: '2024',
    duration: '4 Days',
    inverterBrand: 'Growatt SPH Smart Hybrid Series',
    panelWattage: '18x 550W High-Efficiency Monocrystalline Panels',
    annualGeneration: '~14,600 kWh / Year',
    summary: 'Equipped with a 15kWh modular battery reserve to power essential residential circuits during regional outages.',
    highlights: [
      'Dedicated critical load sub-panel for uninterrupted living',
      'Aesthetics-first concealed conduit runs preserving home curb appeal',
      'Complete Cavite LGU & distribution utility net-metering approval'
    ],
    publishedDate: '2024-06-25'
  },
  {
    id: 'proj-6',
    title: 'Silang Commercial Peak-Shaving Grid',
    clientName: 'Silang Agri-Commercial Hub',
    category: 'Commercial Microgrids',
    segment: 'Commercial',
    location: 'Silang, Cavite',
    status: 'Completed',
    details: 'Peak Shaving System',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '30 kWp',
    year: '2023',
    duration: '10 Days',
    inverterBrand: 'Deye 3-Phase Smart Commercial Inverter',
    panelWattage: '55x 550W Monocrystalline PV Modules',
    annualGeneration: '~43,800 kWh / Year',
    summary: 'Smart hybrid solar microgrid installed on a retail center in Silang, Cavite, incorporating scheduled peak-shaving algorithms.',
    highlights: [
      'Intelligent load management for commercial refrigeration & lighting',
      '30kWh energy storage module for business continuity during typhoons',
      'Full PEC-compliant fire-safety shutdown compliance'
    ],
    publishedDate: '2023-11-18'
  },
  {
    id: 'proj-8',
    title: 'Trece Martires Agro-Industrial Array',
    clientName: 'Trece Agro-Industrial Corporation',
    category: 'Industrial Arrays',
    segment: 'Industrial',
    location: 'Trece Martires, Cavite',
    status: 'Completed',
    details: 'Ground-Mounted Array',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: '150 kWp',
    year: '2023',
    duration: '3 Weeks',
    inverterBrand: 'Huawei String Inverters with Smart IV Curve Diagnosis',
    panelWattage: '272x 550W Bifacial High-Efficiency Panels',
    annualGeneration: '~220,000 kWh / Year',
    summary: 'Heavy-duty ground-mounted solar power plant built for an agro-industrial processing plant in Trece Martires, Cavite.',
    highlights: [
      'Engineered for 250 km/h wind load resistance against super typhoons',
      'Bifacial solar technology capturing reflected ground albedo radiation',
      'Automated string-level fault detection and cloud maintenance dispatch'
    ],
    publishedDate: '2023-08-04'
  }
];

export const PROJECTS_DATA_MAP: Record<string, ProjectDetail> = {
  'proj-1': {
    id: 'proj-1',
    eyebrow: 'PRODUCT SPECIFICATION',
    title: 'PROPOSED RENOVATION OF 3-STOREY TOWN HOUSE',
    client: 'MS. JANICE AZUL',
    sector: 'INTERIOR CONSTRUCTION & SOLAR',
    location: 'BAYAN LUMA 2, IMUS CAVITE',
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Founder & General Manager, Solareign Services',
    contractor: 'SOLAREIGN CONSTRUCTION & INSTALLATION TEAM',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: 'Professional engineers coordinating architectural finishes, structural components, electrical and plumbing plans.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        title: 'Interior Wall Metal Framing',
        caption: 'Interior steel stud partitioning and electrical raceway installation on the 2nd level.'
      },
      {
        url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
        title: 'Plastered Interior Bedroom',
        caption: 'Finished gypsum skim coat and natural daylighting assessment.'
      },
      {
        url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
        title: 'Corridor & Utility Box',
        caption: 'Electrical sub-panel junction drops and acoustic drywall insulation alignment.'
      },
      {
        url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
        title: 'Structural Steel Corridor Framing',
        caption: 'Ceiling runner channels and stud spacing verified according to structural load requirements.'
      },
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        title: 'Architectural Blueprint Inspection',
        caption: 'On-site engineering coordination for MEP rough-ins and solar rooftop conduits.'
      }
    ],
    scopeSections: [
      {
        title: '1. PRE-CONSTRUCTION & DEMOLITION',
        bullets: [
          {
            label: 'Site Assessment & Structural Verification',
            text: 'Detailed load-bearing calculations of existing concrete slabs, roof purlins, and wall framing.'
          },
          {
            label: 'Selective Interior Demolition',
            text: 'Careful removal of degraded masonry partitions, redundant wiring raceways, and damaged subfloor assemblies.'
          }
        ]
      },
      {
        title: '2. STRUCTURAL STEEL & ARCHITECTURAL DRYWALL',
        bullets: [
          {
            label: 'Light Gauge Metal Framing (LGMF)',
            text: 'Installation of zinc-coated steel tracks and C-studs spaced at 400mm centers with reinforced lintels.'
          },
          {
            label: 'Acoustic & Thermal Insulation',
            text: 'High-density mineral rockwool batt insulation placed between stud cavities to minimize thermal transfer.'
          }
        ]
      },
      {
        title: '3. HYBRID ELECTRICAL & SOLAR INTEGRATION',
        bullets: [
          {
            label: 'Sub-Panel Segregation',
            text: 'Dedicated solar emergency sub-panel isolating heavy loads from essential household circuits during grid brownouts.'
          },
          {
            label: 'PEC Compliance & Commissioning',
            text: 'Full grounding rod verification, thermal scans of breaker busbars, and submission of net-metering documents.'
          }
        ]
      }
    ]
  },
  'proj-2': {
    id: 'proj-2',
    eyebrow: 'PRODUCT SPECIFICATION',
    title: 'CAVITE COLD STORAGE SOLAR MICROGRID',
    client: 'IMUS LOGISTICS & COLD CHAIN CORP.',
    sector: 'INDUSTRIAL SOLAR ARRAYS',
    location: 'ANABU II, IMUS, CAVITE',
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Lead Power Systems Engineer, Solareign Energy',
    contractor: 'SOLAREIGN INDUSTRIAL EPC DIVISION',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: 'Licensed electrical engineers managing heavy commercial string inverters, transformer step-ups, and net-metering synchronization.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
        title: 'Industrial Rooftop Array',
        caption: '250 kWp bifacial monocrystalline array mounted on non-penetrating standing seam clamp mounts.'
      },
      {
        url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
        title: 'Commercial String Inverters',
        caption: 'High-voltage 3-phase commercial string inverters with integrated smart telemetry.'
      },
      {
        url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
        title: 'Transformer Interconnection',
        caption: 'Medium voltage utility interconnection synchronization and protection relays.'
      },
      {
        url: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
        title: 'Cold Storage Facility Overview',
        caption: 'Rooftop layout minimizing thermal absorption on cold warehouse chambers.'
      },
      {
        url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
        title: 'Quality Compliance Handover',
        caption: 'Utility bi-directional meter commission and final engineering sign-off.'
      }
    ],
    scopeSections: [
      {
        title: '1. PRE-CONSTRUCTION & FEASIBILITY AUDIT',
        bullets: [
          {
            label: 'Structural Load Analysis',
            text: 'Engineered wind tunnel calculations and roof purlin structural certification.'
          },
          {
            label: 'Utility Interconnection Clearance',
            text: 'Coordination of distribution impact studies (DIS) and interconnection clearance.'
          }
        ]
      },
      {
        title: '2. PHOTOVOLTAIC & INVERTER INFRASTRUCTURE',
        bullets: [
          {
            label: 'Standing Seam Clamps',
            text: 'Zero-penetration anodized aluminum clamps preserving 25-year roof waterproofing.'
          },
          {
            label: 'Bifacial Solar Modules',
            text: '455x 550W Tier-1 bifacial panels harvesting reflective irradiance from metal roof sheets.'
          }
        ]
      },
      {
        title: '3. GRID SYNCHRONIZATION & TELEMETRY',
        bullets: [
          {
            label: 'Zero-Export & Peak Shaving',
            text: 'Dynamic power curtailment controllers preventing reverse power flow until formal net-metering approval.'
          },
          {
            label: 'SCADA Telemetry Integration',
            text: 'Cloud-connected telemetry monitoring individual string performance and DC health.'
          }
        ]
      }
    ]
  },
  'proj-3': {
    id: 'proj-3',
    eyebrow: 'PRODUCT SPECIFICATION',
    title: 'DASMARIÑAS COMMERCIAL MICROGRID',
    client: 'DASMARIÑAS MULTI-TENANT PLAZA',
    sector: 'COMMERCIAL MICROGRIDS',
    location: 'DASMARIÑAS, CAVITE',
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Project Director & Solar Systems Specialist',
    contractor: 'SOLAREIGN COMMERCIAL EPC TEAM',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: 'Designed to offset high-tier commercial electricity tariffs during peak daylight commercial business hours.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
        title: 'Commercial Plaza Rooftop Array',
        caption: '50 kWp grid-tied solar system delivering power directly to commercial tenants.'
      },
      {
        url: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
        title: 'Inverter Enclosure & Breakers',
        caption: 'Weatherproof NEMA-4X commercial inverter enclosure with DC surge suppressors.'
      },
      {
        url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
        title: 'Conduit Routing Along Parapet',
        caption: 'Clean, color-coded EMT conduit runs aligned with architectural aesthetics.'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        title: 'Pre-Commissioning Testing',
        caption: 'String open-circuit voltage (Voc) and short-circuit current (Isc) logging.'
      },
      {
        url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
        title: 'Aerial Solar Layout',
        caption: 'Even weight distribution over reinforced concrete commercial roof decking.'
      }
    ],
    scopeSections: [
      {
        title: '1. SYSTEM DESIGN & SHADING SIMULATION',
        bullets: [
          {
            label: '3D LiDAR Shading Study',
            text: 'Modeled surrounding parapets and HVAC chillers to eliminate hotspot degradations.'
          },
          {
            label: 'Tenant Sub-Metering Integration',
            text: 'Engineered multi-channel sub-metering allowing landlord billing reconciliation.'
          }
        ]
      },
      {
        title: '2. MECHANICAL & ELECTRICAL INSTALLATION',
        bullets: [
          {
            label: 'Corrosion-Resistant Racking',
            text: 'Marine-grade AL6005-T5 aluminum rails with stainless steel SUS304 hardware.'
          },
          {
            label: 'High-Efficiency Monocrystalline Panels',
            text: '92 units of 550W Tier-1 modules optimized for tropical high-irradiance conditions.'
          }
        ]
      },
      {
        title: '3. COMMISSIONING & UTILITY HANDOVER',
        bullets: [
          {
            label: 'Meralco DIS & Net Metering',
            text: 'Completed distribution impact study and installed bi-directional export meter.'
          },
          {
            label: 'Live Mobile Dashboard Access',
            text: 'Tenant management dashboard displaying live kWh savings and ROI payback.'
          }
        ]
      }
    ]
  },
  'proj-4': {
    id: 'proj-4',
    eyebrow: 'PRODUCT SPECIFICATION',
    title: 'GENERAL TRIAS INDUSTRIAL SOLAR ARRAY',
    client: 'CAVITE MANUFACTURING & LOGISTICS CORP.',
    sector: 'INDUSTRIAL ARRAYS',
    location: 'GENERAL TRIAS, CAVITE',
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Industrial EPC Principal Engineer',
    contractor: 'SOLAREIGN INDUSTRIAL EPC DIVISION',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: 'High-voltage industrial grid synchronization engineered for high-draw manufacturing machinery and automated lines.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
        title: 'Manufacturing Warehouse Rooftop',
        caption: '200 kWp rooftop array reducing facility grid demand by over 40%.'
      },
      {
        url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
        title: 'Central Inverter Room',
        caption: 'High-efficiency industrial inverters with smart temperature-controlled ventilation.'
      },
      {
        url: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
        title: 'Cable Tray Network',
        caption: 'Heavy-duty galvanized cable trays running along the building exterior spine.'
      },
      {
        url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
        title: 'Substation Interconnection',
        caption: 'Medium-voltage synchronization and motorized circuit breaker interlocks.'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        title: 'Safety Inspection Sign-Off',
        caption: 'BFP and municipal electrical safety code compliance certification.'
      }
    ],
    scopeSections: [
      {
        title: '1. INDUSTRIAL LOAD PROFILE & PEAK SHAVING',
        bullets: [
          {
            label: '15-Minute Interval Demand Analysis',
            text: 'Logged historical factory machinery power peaks to calibrate inverter ramp rates.'
          },
          {
            label: 'Power Factor Optimization',
            text: 'Integrated automatic capacitor bank controls maintaining PF above 0.95.'
          }
        ]
      },
      {
        title: '2. DC STRINGING & STRUCTURAL INTEGRATION',
        bullets: [
          {
            label: 'Dual-Glass Bifacial PV Modules',
            text: '364 units of 550W bifacial modules delivering superior resistance to microcracks.'
          },
          {
            label: 'Wind Load Engineering (250 km/h)',
            text: 'Engineered specifically for Philippine super typhoons with wind tunnel verification.'
          }
        ]
      },
      {
        title: '3. AUTOMATED TELEMETRY & SUBSTATION COMMISSIONING',
        bullets: [
          {
            label: 'Industrial SCADA Protocol',
            text: 'Modbus TCP telemetry reporting real-time generation into the plant control room.'
          },
          {
            label: 'Utility Interconnection Sign-Off',
            text: 'Seamless synchronization with Cavite electric distribution network.'
          }
        ]
      }
    ]
  },
  'proj-5': {
    id: 'proj-5',
    eyebrow: 'PRODUCT SPECIFICATION',
    title: 'TAGAYTAY AUTONOMOUS RESIDENTIAL SOLAR',
    client: 'HIGHLAND PRIVATE RESIDENCE & RETREAT',
    sector: 'RESIDENTIAL HYBRID',
    location: 'TAGAYTAY CITY, CAVITE',
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Senior Residential Solar Lead Specialist',
    contractor: 'SOLAREIGN RESIDENTIAL INSTALLATION TEAM',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: 'Autonomous high-elevation energy system engineered for damp, misty climates with zero dependence on the municipal grid.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        title: 'Highland Villa Solar Array',
        caption: '12 kWp all-black solar array tailored to steep residential roof pitch.'
      },
      {
        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
        title: 'Victron MultiPlus Inverter Wall',
        caption: 'Dual Quattro inverter stack delivering clean pure sine wave power.'
      },
      {
        url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
        title: 'LiFePO4 Modular Battery Bank',
        caption: '25 kWh lithium iron phosphate energy storage rack with integrated BMS.'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        title: 'Auto-Start Generator Integration',
        caption: 'Dry contact automated backup diesel generator triggering during prolonged rainfall.'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        title: 'Finished Installation & Monitoring',
        caption: 'Color Control GX touchscreen and mobile telemetry active.'
      }
    ],
    scopeSections: [
      {
        title: '1. LOAD AUDIT & ENERGY BUDGETING',
        bullets: [
          {
            label: 'Highland Autonomy Sizing',
            text: 'Designed for 3 consecutive cloudy days without running generator backups.'
          },
          {
            label: 'HVAC & Inverter Load Balancing',
            text: 'Calculated inrush currents for water pumps, air conditioners, and kitchen equipment.'
          }
        ]
      },
      {
        title: '2. DC BATTERY STORAGE & PROTECTION',
        bullets: [
          {
            label: '25 kWh LiFePO4 Energy Bank',
            text: 'Grade-A prismatic lithium cells rated for over 6,000 cycles at 90% depth of discharge.'
          },
          {
            label: 'High-Elevation Wind Load Brackets',
            text: 'Custom stainless steel brackets engineered to withstand Tagaytay ridge wind gusting.'
          }
        ]
      },
      {
        title: '3. CLOUD TELEMETRY & REMOTE ASSISTANCE',
        bullets: [
          {
            label: 'Victron VRM Cloud Integration',
            text: 'Real-time telemetry and battery state-of-charge tracking accessible worldwide.'
          },
          {
            label: 'Fail-Safe Automatic Generator Relay',
            text: 'Automated exercise cycles keeping backup generators in peak working order.'
          }
        ]
      }
    ]
  },
  'proj-7': {
    id: 'proj-7',
    eyebrow: 'PRODUCT SPECIFICATION',
    title: 'DASMARIÑAS SMART HYBRID RESIDENCE',
    client: 'DASMARIÑAS HOMEOWNER ESTATE',
    sector: 'RESIDENTIAL HYBRID',
    location: 'DASMARIÑAS CITY, CAVITE',
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Founder & Solar Systems Specialist',
    contractor: 'SOLAREIGN RESIDENTIAL INSTALLATION TEAM',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: 'Aesthetic-first residential hybrid installation featuring concealed conduit paths and immediate emergency power failover.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        title: 'Modern Two-Storey Rooftop Array',
        caption: '10 kWp Tier-1 monocrystalline panels installed on asphalt shingle roof.'
      },
      {
        url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
        title: 'Smart Hybrid Inverter Wall',
        caption: 'Wall-mounted hybrid inverter and modular 15 kWh battery cabinet.'
      },
      {
        url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
        title: 'Critical Load Sub-Panel',
        caption: 'Dedicated sub-panel providing zero-interruption power to home appliances.'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        title: 'Under-Tile Flashing & Leak Protection',
        caption: 'EPDM rubber waterproof boots and stainless steel mounting fasteners.'
      },
      {
        url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
        title: 'Net-Metering Sign-Off',
        caption: 'Bi-directional utility meter commissioning completed with Meralco Dasmariñas.'
      }
    ],
    scopeSections: [
      {
        title: '1. RESIDENTIAL LOAD ANALYSIS & ROOF AUDIT',
        bullets: [
          {
            label: 'Home Energy Audit',
            text: 'Evaluated nighttime air-conditioning demand to size battery storage precisely.'
          },
          {
            label: 'Roof Truss & Tile Assessment',
            text: 'Inspected timber trusses and installed zero-leak penetration flashings.'
          }
        ]
      },
      {
        title: '2. HYBRID STORAGE & CONCEALED WIRING',
        bullets: [
          {
            label: '15 kWh Wall-Mount Battery',
            text: 'Safe lithium iron phosphate chemistry with rapid sub-10ms automatic transfer switch.'
          },
          {
            label: 'Concealed Cable Raceways',
            text: 'Concealed wiring routed through ceiling cavities preserving home interior aesthetics.'
          }
        ]
      },
      {
        title: '3. NET METERING & LGU PERMITTING',
        bullets: [
          {
            label: 'Turnkey Utility Processing',
            text: 'Complete documentation submission and bi-directional meter release in Dasmariñas.'
          },
          {
            label: 'Mobile Monitoring Walkthrough',
            text: 'Client orientation on solar mobile tracking app and energy saving strategies.'
          }
        ]
      }
    ]
  },
  'proj-6': {
    id: 'proj-6',
    eyebrow: 'PRODUCT SPECIFICATION',
    title: 'SILANG COMMERCIAL PEAK-SHAVING GRID',
    client: 'SILANG AGRI-COMMERCIAL HUB',
    sector: 'COMMERCIAL MICROGRIDS',
    location: 'SILANG, CAVITE',
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Lead Commercial Power Engineer',
    contractor: 'SOLAREIGN COMMERCIAL EPC TEAM',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: 'Intelligent peak load shaving solar grid deployed to lower commercial demand surcharges for a fresh produce packing plant.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
        title: 'Agri-Commercial Solar Facility',
        caption: '30 kWp commercial solar installation mounted on industrial standing seam roof.'
      },
      {
        url: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
        title: '3-Phase Smart Commercial Inverter',
        caption: 'High-efficiency inverter configured for automated load dispatch.'
      },
      {
        url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
        title: 'Commercial Energy Storage',
        caption: '30 kWh battery bank for power stabilization during grid voltage sags.'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        title: 'Surge Protection & Switchgear',
        caption: 'Heavy-duty Type 1+2 surge arresters protecting sensitive chilling compressors.'
      },
      {
        url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
        title: 'Production Handover',
        caption: 'Full documentation and commercial warranty handover ceremony.'
      }
    ],
    scopeSections: [
      {
        title: '1. TARIFF AUDIT & SIZING',
        bullets: [
          {
            label: 'Commercial Time-Of-Use Analysis',
            text: 'Mapped daily chilling cycles against peak commercial utility electricity tariffs.'
          },
          {
            label: 'Microgrid Architecture',
            text: 'Configured automated zero-export protection until utility inspection completion.'
          }
        ]
      },
      {
        title: '2. ENGINEERING EXECUTION & INSTALLATION',
        bullets: [
          {
            label: '55x 550W High-Efficiency Modules',
            text: 'Tier-1 monocrystalline panels installed with corrosion-resistant clamping.'
          },
          {
            label: 'Fast-Acting Surge Protection',
            text: 'Substation-grade circuit protection insulating facility against lightning surges.'
          }
        ]
      },
      {
        title: '3. NET METERING & TELEMETRY',
        bullets: [
          {
            label: 'Net-Metering Commissioning',
            text: 'Bi-directional meter installation facilitating excess daytime energy credits.'
          },
          {
            label: 'Continuous Cloud Diagnostics',
            text: '24/7 cloud diagnostics monitoring string health and energy production metrics.'
          }
        ]
      }
    ]
  },
  'proj-8': {
    id: 'proj-8',
    eyebrow: 'PRODUCT SPECIFICATION',
    title: 'TRECE MARTIRES AGRO-INDUSTRIAL ARRAY',
    client: 'TRECE AGRO-INDUSTRIAL CORPORATION',
    sector: 'INDUSTRIAL ARRAYS',
    location: 'TRECE MARTIRES, CAVITE',
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Industrial EPC Principal Engineer',
    contractor: 'SOLAREIGN INDUSTRIAL EPC DIVISION',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: 'Ground-mounted multi-string solar field engineered for agricultural processing and food preservation loads.',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
        title: 'Ground-Mounted Solar Field',
        caption: '150 kWp ground-mounted solar installation with reinforced helical piles.'
      },
      {
        url: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
        title: 'Helical Ground Mount Foundations',
        caption: 'Hot-dip galvanized steel foundations driven 2.5 meters into firm subsoil.'
      },
      {
        url: 'https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80',
        title: 'Underground DC Feeder Runs',
        caption: 'Heavy-gauge armored solar cables buried inside concrete-encased duct banks.'
      },
      {
        url: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=80',
        title: 'Industrial Combiner Boxes',
        caption: 'NEMA-4X combiner boxes equipped with string fuses and remote disconnects.'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        title: 'Plant Commissioning Sign-Off',
        caption: 'Final commissioning and IV curve diagnostic validation.'
      }
    ],
    scopeSections: [
      {
        title: '1. GEOTECHNICAL & FOUNDATION ENGINEERING',
        bullets: [
          {
            label: 'Soil Borehole Testing',
            text: 'Determined soil resistivity and load-bearing parameters for helical piles.'
          },
          {
            label: 'Drainage & Erosion Control',
            text: 'Engineered swales and crushed rock ground cover preventing muddy runoff.'
          }
        ]
      },
      {
        title: '2. PHOTOVOLTAIC ASSEMBLY & STRINGING',
        bullets: [
          {
            label: '272x 550W Bifacial Modules',
            text: 'Dual-glass design maximizing solar absorption from both direct and ground-reflected albedo.'
          },
          {
            label: 'Reinforced 250 km/h Racking',
            text: 'Hot-dip galvanized steel framework engineered for maximum Philippine typhoon survivability.'
          }
        ]
      },
      {
        title: '3. GRID SYNCHRONIZATION & SUBSTATION COMMISSIONING',
        bullets: [
          {
            label: 'Substation Interconnection',
            text: 'Direct connection into industrial facility step-up substation with synchronized breakers.'
          },
          {
            label: 'Automated String Fault Telemetry',
            text: 'Continuous IV curve scanning identifying localized panel or connector anomalies automatically.'
          }
        ]
      }
    ]
  }
};

/**
 * Returns the newest published projects, sorted by publication date descending.
 */
export function getNewestProjects(limit: number = 5): ProjectItem[] {
  return [...PORTFOLIO_PROJECTS]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
}

/**
 * Retrieve a project by its unique ID.
 */
export function getProjectById(id: string): ProjectItem | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.id === id);
}

/**
 * Retrieve rich project details by ID with fallback.
 */
export function getProjectDetailById(id: string): ProjectDetail {
  if (PROJECTS_DATA_MAP[id]) {
    return PROJECTS_DATA_MAP[id];
  }
  const fallback = PORTFOLIO_PROJECTS.find((p) => p.id === id) || PORTFOLIO_PROJECTS[0];

  if (fallback.brand) {
    return {
      id: fallback.id,
      eyebrow: `${fallback.brand} AUTHORIZED SPECIFICATION`,
      title: fallback.title.toUpperCase(),
      client: `${fallback.brand} TIER-1 HARDWARE`,
      sector: fallback.category.toUpperCase(),
      location: 'OFFICIAL PHILIPPINE DISTRIBUTION',
      managingEngineer: 'JERNALD DIVINA MESINA',
      engineerRole: 'Founder & Technical Director, Solareign Services',
      contractor: 'SOLAREIGN CERTIFIED SYSTEMS INTEGRATION',
      email: 'emcsolarsolution@gmail.com',
      engineerNote: fallback.summary,
      gallery: fallback.galleryImages.map((url, idx) => ({
        url,
        title: `${fallback.title} - View ${idx + 1}`,
        caption: `Official product visual for ${fallback.title}.`
      })),
      scopeSections: [
        {
          title: '1. PRODUCT ARCHITECTURE & SYSTEM DESIGN',
          bullets: [
            {
              label: 'Equipment Categorization',
              text: `${fallback.brand} ${fallback.category} engineered for high-reliability solar energy integration.`
            },
            {
              label: 'Output & Capacity Rating',
              text: `${fallback.capacity} operating at continuous duty cycle.`
            }
          ]
        },
        {
          title: '2. TECHNICAL SPECIFICATIONS & ELECTRICAL PARAMETERS',
          bullets: [
            {
              label: 'Primary Electrical Architecture',
              text: `${fallback.panelWattage || 'High-performance DC voltage architecture'} paired with ${fallback.inverterBrand}.`
            },
            {
              label: 'Operational Output & Efficiency',
              text: `${fallback.annualGeneration || 'High-efficiency certified conversion topology'}.`
            }
          ]
        },
        {
          title: '3. WARRANTY & QUALITY CERTIFICATIONS',
          bullets: [
            {
              label: 'Manufacturer Warranty',
              text: fallback.warranty || '5 to 10 Years Comprehensive Performance Warranty.'
            },
            {
              label: 'Engineering Highlights',
              text: fallback.highlights.join('; ')
            }
          ]
        }
      ]
    };
  }

  return {
    id: fallback.id,
    eyebrow: 'PRODUCT SPECIFICATION',
    title: fallback.title.toUpperCase(),
    client: fallback.clientName?.trim().toUpperCase() || 'CONFIDENTIAL CLIENT',
    sector: fallback.segment ? fallback.segment.toUpperCase() : fallback.category.toUpperCase(),
    location: fallback.location.toUpperCase(),
    managingEngineer: 'JERNALD DIVINA MESINA',
    engineerRole: 'Founder & General Manager, Solareign Services',
    contractor: 'SOLAREIGN ENGINEERING & INSTALLATION TEAM',
    email: 'emcsolarsolution@gmail.com',
    engineerNote: fallback.summary,
    gallery: fallback.galleryImages.map((url, idx) => ({
      url,
      title: `${fallback.title} - View ${idx + 1}`,
      caption: `Technical documentation photo for ${fallback.title}.`
    })),
    scopeSections: [
      {
        title: '1. PRE-CONSTRUCTION & FEASIBILITY AUDIT',
        bullets: [
          {
            label: 'Site Assessment & Load Calculations',
            text: `Detailed assessment of electrical loads and structural installation surfaces in ${fallback.location}.`
          }
        ]
      },
      {
        title: '2. ENGINEERING INSTALLATION & SPECIFICATIONS',
        bullets: [
          {
            label: 'Hardware Specification',
            text: `${fallback.panelWattage} coupled with ${fallback.inverterBrand}.`
          },
          {
            label: 'Capacity & Output',
            text: `System capacity of ${fallback.capacity} delivering estimated ${fallback.annualGeneration}.`
          }
        ]
      },
      {
        title: '3. QUALITY COMMISSIONING & UTILITY INTEGRATION',
        bullets: [
          {
            label: 'Key Engineering Highlights',
            text: fallback.highlights.join('; ')
          }
        ]
      }
    ]
  };
}
