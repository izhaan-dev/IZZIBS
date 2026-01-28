import React, { useEffect, useState } from 'react';
import './Domains.css';

const domainsData = [
  {
    id: "planning",
    title: "Planning and Optimization",
    description: "Strategic tools and models to maximize profitability across the value chain.",
    services: [
      "Build, review and update LP models for single-plant, multi-plant & multi-period",
      "Model conversion from one LP tool to another",
      "Cost / benefit evaluation",
      "Profit improvement opportunities identification",
      "Unit configuration studies for green field and brown field refinery and petrochemicals",
      "Planning process and LP model trainings"
    ],
    technologies: [
      "AVEVA USC Plan (Spiral Plan)",
      "Aspen PIMS",
      "Aspen Unified PIMS (AUP)",
      "Haverly GRTMPS",
      "Chevron Petro LP"
    ]
  },
  {
    id: "crude",
    title: "Crude Assay Management",
    description: "Precise characterization and management of crude oil data.",
    services: [
      "Crude oil analysis",
      "Crude assay synthesis or updates using lab data",
      "Crude tower tuning using distillation data",
      "Crude assay integration with planning and scheduling models",
      "Crude net back value calculations"
    ],
    technologies: [
      "AVEVA USC Assay (Spiral Assay)",
      "AVEVA Enterprise Crude Knowledge Management",
      "Haverly H/CAMS"
    ]
  },
  {
    id: "scheduling",
    title: "Scheduling and Blending",
    description: "Optimizing logistics and operations for short-term and long-term targets.",
    services: [
      "Build, review and update scheduling & blending optimization models",
      "Logistics scheduling",
      "Short-term and long-term scheduling business process",
      "Data integration with business applications for streamlined workflows",
      "Integrating Aspen Unified PIMS (AUP) with APS (legacy)",
      "Scheduling, logistics & blend optimization training"
    ],
    technologies: [
      "AVEVA Unified Supply Chain - Schedule",
      "Aspen Petroleum Scheduler (APS)",
      "Aspen Refinery Multi Blend Optimizer (ARMBO)",
      "Aspen Unified Scheduling (AUS)",
      "Custom Excel based scheduling models"
    ]
  },
  {
    id: "process",
    title: "Process Modelling and Simulation",
    description: "Rigorous simulation models to validate and improve process performance.",
    services: [
      "Build, review and update rigorous steady state process simulation models",
      "LP vectors generation for LP models",
      "Re-calibration of rigorous steady state simulation models",
      "Facilitating and conducting test runs"
    ],
    technologies: [
      "Aspen Hysys",
      "Aspen Plus",
      "KBC Petro Sim"
    ]
  },
  {
    id: "consulting",
    title: "Consulting Services",
    description: "Expert advisory to unlock hidden value and operational efficiency.",
    services: [
      "Conduct profitability studies to enhance process efficiency",
      "Optimize process unit operations and key parameters",
      "Upgrade low-value streams to higher-value products",
      "Explore & evaluate new intermediate processing feasibility",
      "Assess and evaluate feasibility of new crude processing",
      "Minimize Quality Giveaway",
      "Identify Bottlenecks"
    ],
    technologies: [] 
  },
  {
    id: "mis",
    title: "Manufacturing Information Services (MIS)",
    description: "Bridging the gap between plant data and business decision-making.",
    services: [
      "Production accounting & Data integration (LIMS, ERPs, Oil movements)",
      "Monthly and Yearly Mass balance and Reconciliation",
      "Customized reporting",
      "Production tracking, monitoring, trending & controlling",
      "Integration with scheduling and production accounting"
    ],
    technologies: [
      "AVEVA Production Accounting (Error solver)",
      "AVEVA Offsites Management",
      "Aspen Operations Reconciliation and Accounting (AORA)",
      "Aspen Unified Reconciliation and Accounting (AURA)",
      "Aspen Tank and Operations Manager (ATOMS)"
    ]
  },
  {
    id: "digital",
    title: "Digitalization & Integration",
    description: "Modernizing enterprise architecture with seamless data flow.",
    services: [
      "Centralized data management system",
      "IT-OT application data integration",
      "Enterprise application architecture design",
      "Process data historian and analytics",
      "Dashboards - Self-service, interactive & role-based",
      "Reports automation - on-demand & auto-generated",
      "KPIs, notifications & asset performance management",
      "Digital logbook - operations & maintenance"
    ],
    technologies: [
      "Custom Data integration",
      "Aspen Inmation",
      "Aspen InfoPlus.21 (IP 21)",
      "AVEVA PI and PI Vision",
      "JaajiTech insis Suite"
    ]
  },

];

const Domains = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll Spy Logic
    const handleScroll = () => {
      const sections = document.querySelectorAll('.domain-card');
      let currentId = "";
      
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= (top - 200) && window.scrollY < (top + height - 200)) {
          currentId = section.getAttribute('id');
        }
      });
      
      if (currentId) setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="domains-page">
      <div className="domains-header">
        <h1>Our Expertise</h1>
        <p>Comprehensive solutions across the entire value chain.</p>
      </div>

      <div className="domains-layout">
        
        {/* --- LEFT SIDEBAR NAVIGATION --- */}
        <aside className="domains-sidebar">
          <nav>
            <ul>
              {domainsData.map((domain) => (
                <li key={domain.id}>
                  <button 
                    className={`sidebar-link ${activeId === domain.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(domain.id)}
                  >
                    {domain.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <div className="domains-list">
          {domainsData.map((domain, index) => (
            <div 
              key={domain.id} 
              id={domain.id}
              className="domain-card fade-in-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="domain-card-header">
                <span className="domain-number">0{index + 1}</span>
                <h2>{domain.title}</h2>
              </div>
              
              <p className="domain-description">{domain.description}</p>
              
              <div className="domain-content">
                
                {/* Left Column: Services */}
                <div className="domain-section services-section">
                  <h3>Key Activities</h3>
                  <ul className="service-list">
                    {domain.services.map((service, i) => (
                      <li key={i}>{service}</li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Technologies */}
                {domain.technologies.length > 0 && (
                  <div className="domain-section tech-section">
                    <h3>Technologies</h3>
                    <div className="tech-tags">
                      {domain.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Domains;