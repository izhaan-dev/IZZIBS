import { useState, useMemo } from 'react';
import './Projects.css';

// --- HELPER FOR GITHUB PAGES ASSETS ---
const getAssetPath = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// --- HELPER FOR TECH COLORS ---
const getTechClass = (tech) => {
  if (!tech) return '';
  const lowerTech = tech.toLowerCase();
  if (lowerTech.includes('aveva')) return 'tech-aveva';
  if (lowerTech.includes('aspen')) return 'tech-aspentech';
  if (lowerTech.includes('excel')) return 'tech-excel';
  return ''; 
};

// --- PROJECT DATA ---
const projectsData = {
  Planning: [
    { year: "2025", client: "ADNOC", location: "Middle East", tech: "AVEVA", logo: "/logos/adnoc.png", description: "Implemented an Enterprise Real-Time Optimizer (eRTO) integrating AVEVA and Cognite platforms to maximize enterprise-wide economic performance." },
    { year: "2024", client: "Rejlers' Client", location: "Middle East", tech: "AspenTech", logo: "/logos/rejlers.png", description: "Updated an Aspen PIMS-AO model and evaluated throughput bottlenecks and economic sensitivities using Aspen XPIMS." },
    { year: "2024", client: "Bangchak SRC", location: "Thailand", tech: "AVEVA", logo: "/logos/bangchak.png", description: "Developed a multi-period planning model from a legacy tool to AVEVA USC Plan, including model building, FAT/SAT, and training." },
    { year: "2023-24", client: "MPC", location: "US", tech: "AspenTech", logo: "/logos/mpc.png", description: "Provided planning model consulting to identify improvement opportunities across multiple regional refineries using Aspen XPIMS." },
    { year: "2023", client: "AVEVA Client", location: "Far East", tech: "AVEVA", logo: "/logos/aveva.png", description: "Converted a legacy LP model to AVEVA USC Plan featuring mixed integer program (MIP) configurations and variable yield throughputs." },
    { year: "2023", client: "AVEVA Client", location: "Middle East", tech: "AVEVA", logo: "/logos/aveva.png", description: "Developed a comprehensive planning model converting a legacy tool to AVEVA USC Plan for integrated refinery and petrochemical units." },
    { year: "2022-23", client: "IOCL", location: "India", tech: "AVEVA", logo: "/logos/iocl.jpg", description: "Provided final-phase implementation support, SAT preparation, and best-practice modifications for an AVEVA USC Plan model." },
    { year: "2020-21", client: "Bangchak", location: "Thailand", tech: "AVEVA", logo: "/logos/bangchak.png", description: "Delivered a turnkey multi-period refinery planning model with inventory optimization using AVEVA USC Plan." },
    { year: "2019-20", client: "Astron Energy", location: "South Africa", tech: "AVEVA", logo: "/logos/astron.png", description: "Converted an existing LP model to AVEVA USC Plan with full integration into the AUSC Crude Assay Manager." },
  ],
  Scheduling: [
    { year: "2021-23", client: "IOCL", location: "India", tech: "AVEVA", logo: "/logos/iocl.jpg", description: "Implemented multi-site refinery scheduling models for 9 refineries and 1 petrochemical complex using AVEVA USC Schedule." },
    { year: "2020-21", client: "Bangchak", location: "Thailand", tech: "AVEVA", logo: "/logos/bangchak.png", description: "Executed a turnkey scheduling model implementation seamlessly integrated with AVEVA Plan and Assay." },
    { year: "2017", client: "Petro Rabigh", location: "KSA", tech: "AspenTech", logo: "/logos/petrorabigh.png", description: "Developed an Aspen Petroleum Scheduler (APS) model incorporating refinery and petrochemical unit SMCs and custom reporting." },
    { year: "2016-18", client: "ADNOC", location: "UAE", tech: "AspenTech", logo: "/logos/adnoc.png", description: "Provided Project Management Consulting (PMC) services for a Refinery Information System integrating planning, scheduling, pricing, and performance management." },
    { year: "2022-23", client: "MPC", location: "US", tech: "AspenTech", logo: "/logos/mpc.png", description: "Developed and deployed 5 APS scheduling models with bulk event automation across 19 crude network desks." },
    { year: "2018", client: "Petronas", location: "Malaysia", tech: "AspenTech", logo: "/logos/petronas.png", description: "Supplied SME services for APS and Multi Blend Optimizer (MBO) model testing, integration, and user training." },
    { year: "2021-22", client: "ZPC", location: "China", tech: "AspenTech", logo: "/logos/zpc.png", description: "Partnered with Shell GS to rigorously test and deliver an integrated refinery and petrochem APS scheduling model." },
    { year: "2022-23", client: "Dangote", location: "Nigeria", tech: "MS Excel", logo: "/logos/dangote.png", description: "Built a custom Excel-based refinery-wide scheduling and single/multi-grade gasoline blend optimization model." },
    { year: "2025-26", client: "SATORP", location: "Saudi Arabia", tech: "AspenTech", logo: "/logos/satorp.png", description: "Developed deeply integrated Petrochemical (APS) and Polymer (PS) scheduling models for the AMIRAL complex." },
    { year: "2024-25", client: "Shell Energy", location: "Rheinland", tech: "AspenTech", logo: "/logos/shell.png", description: "Modified existing APS models to handle decommissioned units and major turnaround inter-site transfers." },
    { year: "2022-23", client: "OQ", location: "Oman", tech: "AspenTech", logo: "/logos/oq.png", description: "Provided PMC services to design and execute APS outbound integrations into the OQ Integrated Management System (IMS)." },
    { year: "2018", client: "Yasref", location: "Saudi Arabia", tech: "AspenTech", logo: "/logos/yasref.png", description: "Delivered onsite technical support, model updates, and on-the-job scheduler training for APS and MBO systems." },
    { year: "2025-26", client: "Pearl GTL", location: "Qatar", tech: "AspenTech", logo: "/logos/shell.png", description: "Converted a Gas-to-Liquids (GTL) scheduling model from APS to Aspen Unified Scheduling with custom JavaScript logic." },
  ],
  MIS: [
    { year: "2026", client: "Petro Rabigh", location: "KSA", tech: "Belsim Vali", logo: "/logos/petrorabigh.png", description: "Day to day Production Accounting Model run support" },
  ],
  Digitalization: [
    { year: "2018-19", client: "Nayara Energy", location: "India", tech: "Digital Transformation", logo: "/logos/nayara.png", description: "Implemented Jaajitech's inSis Suite for refinery-wide digitalization, automating over 35 reports and tracking 200+ KPIs via real-time dashboards." },
  ],

  "Consulting Assignments": [
    { year: "2025", client: "Oil Major", location: "Western Asia" },
    { year: "2025", client: "Refinery", location: "South-east Asia" },
    { year: "2025", client: "Refineries", location: "South-east Asia" },
    { year: "2025", client: "Refinery", location: "South Asia" },
    { year: "2025", client: "Refinery", location: "East Asia" },
    { year: "2025", client: "Oil Major", location: "Western Asia" },
    { year: "2024", client: "Refinery", location: "Middle East" },
    { year: "2024", client: "Another Refinery", location: "South Asia" },
    { year: "2024", client: "Refinery", location: "South Asia" },
    { year: "2024", client: "Refinery", location: "Western Asia" },
    { year: "2021", client: "Refinery", location: "Western Middle East" },
    { year: "2021", client: "Another refinery", location: "Middle East" },
    { year: "2021", client: "Refinery", location: "Middle East" },
    { year: "2021", client: "Refinery", location: "South-east Asia" },
    { year: "2021", client: "Another refinery", location: "South-east Asia" },
    { year: "2021", client: "Refinery", location: "South Asia" },
    { year: "2021", client: "Refinery", location: "South America" },
    { year: "2020", client: "Oil Major", location: "South-east Asia" },
    { year: "2020-21", client: "Refinery", location: "South-east Asia" },
    { year: "2020", client: "Refinery", location: "Australia" },
    { year: "2019", client: "Two major refineries", location: "South-east Asia" },
    { year: "2019", client: "Refinery", location: "South Asia" },
    { year: "2019", client: "Refinery", location: "South-east Asia" },
  ]
};

const chunkArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

const Projects = () => {
  const tabsList = Object.keys(projectsData);
  const [activeTab, setActiveTab] = useState("Planning");
  const [animationClass, setAnimationClass] = useState("slide-in-up");

  const consultingRows = useMemo(() => {
    return chunkArray(projectsData["Consulting Assignments"], 4);
  }, []);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    const currentIndex = tabsList.indexOf(activeTab);
    const newIndex = tabsList.indexOf(newTab);
    const direction = newIndex > currentIndex ? "slide-in-right" : "slide-in-left";
    setAnimationClass(direction);
    setActiveTab(newTab);
  };

  return (
    <div className="projects-page">
      <div className="projects-top-section">
        <header className="projects-header fade-in">
          <h1>Our Projects</h1>
          <p>A legacy of delivering operational excellence across the globe.</p>
        </header>

        <div className="tabs-container">
          <div className="projects-tabs">
            {tabsList.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`projects-content-wrapper ${animationClass}`} key={activeTab}>
        
        {activeTab === "Consulting Assignments" ? (
          /* --- SNAKE TIMELINE LAYOUT --- */
          <div className="snake-timeline-container">
            {consultingRows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`snake-row ${rowIndex % 2 !== 0 ? 'row-reverse' : ''}`}
              >
                <div className="snake-track-line"></div>
                {rowIndex < consultingRows.length - 1 && (
                  <div className={`snake-connector ${rowIndex % 2 === 0 ? 'connector-right' : 'connector-left'}`}>
                    <div className="connector-line"></div>
                  </div>
                )}
                {row.map((project, index) => (
                  <div key={index} className="snake-item">
                    <div className="snake-dot"><div className="snake-dot-inner"></div></div>
                    {/* Added tech class to snake-card */}
                    <div className={`snake-card ${getTechClass(project.tech)}`}>
                      <div className="snake-year">{project.year}</div>
                      <h4 className="snake-client">{project.client}</h4>
                      <p className="snake-location">{project.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          /* --- STANDARD VERTICAL TIMELINE --- */
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {projectsData[activeTab].map((project, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                {/* Added tech class to timeline-content */}
                <div className={`timeline-content ${getTechClass(project.tech)}`}>
                  <div className="project-logo-wrapper">
                    <img 
                      src={getAssetPath(project.logo)} 
                      alt={`${project.client} logo`} 
                      className="project-logo"
                      onError={(e) => {
                        e.target.style.display = 'none'; 
                        e.target.parentElement.style.backgroundColor = '#f3f4f6';
                      }} 
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-year">{project.year}</div>
                    <h3 className="project-client">{project.client}</h3>
                    {project.description && <p className="project-description">{project.description}</p>}
                    <div className="project-details">
                      <span className="detail-location">{project.location}</span>
                      <span className="detail-separator">•</span>
                      <span className={`detail-tech ${getTechClass(project.tech)}`}>
                        {project.tech}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;