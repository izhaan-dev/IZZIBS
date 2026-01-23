import { Link } from 'react-router-dom';
import { FaDownload, FaGlobeAmericas, FaLightbulb, FaBullhorn, FaPencilAlt, FaComments } from 'react-icons/fa';
import './Home.css';
import InteractiveMap from '../components/InteractiveMap';

// Data for Domains
const domainsData = [
  { id: 1, title: "Planning & Optimization", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80" },
  { id: 2, title: "Scheduling & Blending", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80" },
  { id: 3, title: "Process Modelling", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=80" },
  { id: 4, title: "Process Optimization", img: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=500&q=80" },
  { id: 5, title: "Manufacturing Info Systems", img: "https://images.pexels.com/photos/9242913/pexels-photo-9242913.jpeg" },
  { id: 6, title: "Digitalization", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80" }
];

// Data for Partners (Logos)
const partnersList = [
  { name: "AVEVA", logo: "/aveva.png" },
  { name: "McKinsey & Company", logo: "/mckinsey.png" },
  { name: "Wipro", logo: "/wipro.png" },
  { name: "Shell", logo: "/shell.png" },
  { name: "Petrogenium", logo: "/petrogenium.png" },
  { name: "Accenture", logo: "/accenture.png" },
  { name: "Tech Mahindra", logo: "/techmahindra.png" },
  { name: "Jaaji Technologies", logo: "/jaajitech.png" }
];

// Data for Services Preview
const servicesPreview = [
  {
    id: "implementation",
    icon: <FaLightbulb />,
    title: "Implementation",
    desc: "We provide operational technology implementation services to build models for clients with industry best standards. We also provide integration services for seamless data flow across various business applications."
  },
  {
    id: "consulting",
    icon: <FaBullhorn />,
    title: "Consulting",
    desc: "We provide technical and project management consulting services to our clients to elevate their business processes and model utilizations to align with industry best practices."
  },
  {
    id: "training",
    icon: <FaPencilAlt />,
    title: "Training",
    desc: "We provide standard and customized training programs for business processes and applications, in line with client requirements."
  },
  {
    id: "support",
    icon: <FaComments />,
    title: "Support",
    desc: "We provide continuous and need based support services to our clients, to ensure maximum benefits are achieved by effective utilizations of existing systems."
  }
];

// Data for Global Clients Regions
const globalRegions = [
  { region: "South & East Asia", countries: "India, South Korea, Thailand, Vietnam, Malaysia, Indonesia, Philippines, China" },
  { region: "Central & West Asia", countries: "Saudi Arabia, UAE, Oman, Qatar, Azerbaijan" },
  { region: "Americas", countries: "USA, Colombia" },
  { region: "Europe & Africa", countries: "South Africa, Nigeria, Germany" },
  { region: "Australia", countries: "Australia" }
];

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section fade-in">
        <div className="hero-overlay"></div>
        <div className="hero-content slide-up">
          <h1>IZZI Business Services</h1>
          <p>
            IZZI Business Services (IZZIBS) has been a trusted and reputable provider of services since 2016, 
            consistently delivering exceptional and expert services to our clients and partners. We specialize 
            in the energy sector, including refineries and petrochemicals, as well as the chemical and other 
            manufacturing industries.
          </p>
          <p>
            We are actively serving our clients and partners internationally from our office in Jamnagar, Gujarat. 
            Our organization is committed to ambitious strategies designed to broaden our international footprint 
            by assembling a more extensive and powerful team.
          </p>
          <Link to="/services" className="hero-btn">View Services &rarr;</Link>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section className="home-services">
        <h2 className="section-title">Services</h2>
        <div className="services-preview-grid">
          {servicesPreview.map((service, index) => (
            // Update the Link `to` prop here:
            <Link to={`/services#${service.id}`} key={index} className="service-preview-card">
              <div className="service-icon-preview">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. DOMAINS SECTION */}
      <section className="home-domains">
        <h2 className="section-title">Domains</h2>
        <div className="domains-grid">
          {domainsData.map((domain) => (
            <div key={domain.id} className="domain-card">
              <div className="domain-img" style={{backgroundImage: `url(${domain.img})`}}></div>
              <div className="domain-info">
                <h3>{domain.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PARTNERS SECTION */}
      <section className="partners-section">
        <h2 className="section-title">Our Project Partners</h2>
        <div className="partners-grid">
          {partnersList.map((partner, index) => (
            <div key={index} className="partner-card">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="partner-logo" 
                onError={(e) => {e.target.style.display='none'}} // Hides broken images if file name is wrong
              />
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMPANY PROFILE SECTION */}
      <section className="profile-section">
        <div className="profile-wrapper">
          <div className="profile-image">
            <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" alt="Company Profile Brochure" />
          </div>
          <div className="profile-content">
            <h2>Company Profile</h2>
            <p>
              IZZI Business Services is a trusted provider of consulting, implementation, training, and support services, 
              led by a team of certified professionals with extensive industry experience. We are committed to delivering 
              best-in-class solutions that empower our clients to achieve lasting success.
            </p>
            <p>
              Specializing in areas such as planning & optimization, scheduling & blending, and digital transformation, 
              we offer tailored services to meet the unique needs of each client.
            </p>
            <a href="/izzibs_company_profile.pdf" download className="download-btn">
              Download Company Profile <FaDownload style={{marginLeft: '10px'}}/>
            </a>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL CLIENTS SECTION */}
      <section className="global-clients-section">
        <h2 className="section-title">Our Global Clients</h2>
        <div className="clients-container">
          
          {/* UPDATED MAP VISUAL */}
          <div className="map-visual">
            <InteractiveMap />
            
            {/* Overlay Text */}
            <div className="map-overlay-text">
              <FaGlobeAmericas className="map-icon" />
              <span>Active Across 5 Continents</span>
            </div>
          </div>

          <div className="regions-list">
            {globalRegions.map((item, index) => (
              <div key={index} className="region-item">
                <h4 className={`region-title color-${index}`}>{item.region}</h4>
                <p>{item.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;