import { useState, useMemo } from 'react';
import './Projects.css';

// --- PROJECT DATA ---
const projectsData = {
  Planning: [
    { year: "2025", client: "ADNOC", location: "Middle East", tech: "AVEVA", logo: "/logos/adnoc.png" },
    { year: "2024", client: "Rejlers' Client", location: "Middle East", tech: "AspenTech", logo: "/logos/rejlers.png" },
    { year: "2024", client: "Bangchak SRC", location: "Thailand", tech: "AVEVA", logo: "/logos/bangchak.png" },
    { year: "2023-24", client: "MPC", location: "US", tech: "AspenTech", logo: "/logos/mpc.png" },
    { year: "2023", client: "AVEVA Client", location: "Far East", tech: "AVEVA", logo: "/logos/aveva.png" },
    { year: "2023", client: "AVEVA Client", location: "Middle East", tech: "AVEVA", logo: "/logos/aveva.png" },
    { year: "2022-23", client: "IOCL", location: "India", tech: "AVEVA", logo: "/logos/iocl.png" },
    { year: "2020-21", client: "Bangchak", location: "Thailand", tech: "AVEVA", logo: "/logos/bangchak.png" },
    { year: "2019-20", client: "Astron Energy", location: "South Africa", tech: "AVEVA", logo: "/logos/astron.png" },
  ],
  Scheduling: [
    { year: "2025", client: "Shell", location: "Qatar", tech: "AspenTech", logo: "/logos/shell.png" },
    { year: "2025", client: "SATORP", location: "Saudi Arabia", tech: "AspenTech", logo: "/logos/satorp.png" },
    { year: "2024-25", client: "Shell", location: "Rheinland", tech: "AspenTech", logo: "/logos/shell.png" },
    { year: "2022-23", client: "MPC", location: "US", tech: "AspenTech", logo: "/logos/mpc.png" },
    { year: "2022-23", client: "OQ", location: "Oman", tech: "AspenTech", logo: "/logos/oq.png" },
    { year: "2022-23", client: "Dangote", location: "Nigeria", tech: "MS Excel", logo: "/logos/dangote.png" },
    { year: "2021-23", client: "IOCL", location: "India", tech: "AVEVA", logo: "/logos/iocl.png" },
    { year: "2021-22", client: "ZPC", location: "China", tech: "AspenTech", logo: "/logos/zpc.png" },
    { year: "2020-21", client: "Bangchak", location: "Thailand", tech: "AVEVA", logo: "/logos/bangchak.png" },
    { year: "2018", client: "Yasref", location: "Saudi Arabia", tech: "AspenTech", logo: "/logos/yasref.png" },
    { year: "2018", client: "Petronas", location: "Malaysia", tech: "AspenTech", logo: "/logos/petronas.png" },
    { year: "2017", client: "Petro Rabigh", location: "KSA", tech: "AspenTech", logo: "/logos/petrorabigh.png" },
    { year: "2016-18", client: "ADNOC", location: "UAE", tech: "AspenTech", logo: "/logos/adnoc.png" },
  ],
  Digitalization: [
    { year: "2018-19", client: "Nayara Energy", location: "India", tech: "Digital Transformation", logo: "/logos/nayara.png" },
    { year: "2023", client: "Global PetroChem", location: "Europe", tech: "Digital Twin", logo: "/logos/placeholder.png" } 
  ],
  "Partner Services": [
    { year: "2018", client: "Nayara Energy", location: "Jamnagar", tech: "Partner Service", logo: "/logos/nayara.png" },
    { year: "2018", client: "Reliance Industries Ltd", location: "Patalganga", tech: "Partner Service", logo: "/logos/ril.png" },
    { year: "2017", client: "HMEL", location: "Bhatinda", tech: "Partner Service", logo: "/logos/hmel.png" }
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

// Helper to chunk data into rows (Updated to 4 items per row)
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

  // Chunk consulting data into rows of 4
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
                {/* Horizontal Line Background */}
                <div className="snake-track-line"></div>

                {/* Connector Curve (Only for rows before the last one) */}
                {rowIndex < consultingRows.length - 1 && (
                  <div className={`snake-connector ${rowIndex % 2 === 0 ? 'connector-right' : 'connector-left'}`}>
                    <div className="connector-line"></div>
                  </div>
                )}

                {row.map((project, index) => (
                  <div key={index} className="snake-item">
                    
                    {/* The Dot on the Line */}
                    <div className="snake-dot">
                      <div className="snake-dot-inner"></div>
                    </div>

                    {/* The Content Card (Always below) */}
                    <div className="snake-card">
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
                <div className="timeline-content">
                  <div className="project-logo-wrapper">
                    <img 
                      src={project.logo} 
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
                    <div className="project-details">
                      <span className="detail-location">{project.location}</span>
                      <span className="detail-separator">•</span>
                      <span className="detail-tech">{project.tech}</span>
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