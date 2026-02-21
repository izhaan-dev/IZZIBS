import { Link, useNavigate } from 'react-router-dom';
import { FaDownload, FaGlobeAmericas, FaLightbulb, FaBullhorn, FaPencilAlt, FaComments } from 'react-icons/fa';
import './Home.css';
import InteractiveMap from '../components/InteractiveMap';

// --- HELPER FOR GITHUB PAGES ASSETS ---
const getAssetPath = (path) => {
  // Ensures the path works whether on localhost or /IZZIBS/
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// Data for Domains
const domainsData = [
  { 
    id: 1, 
    title: "Planning & Optimization", 
    targetId: "planning", 
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 2, 
    title: "Scheduling & Blending", 
    targetId: "scheduling", 
    img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 3, 
    title: "Process Optimization", 
    targetId: "consulting",
    img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 4, 
    title: "Manufacturing Info Systems", 
    targetId: "mis", 
    img: "https://izzibs.com/imgs/domain-h_img4.jpg" 
  },
  { 
    id: 5, 
    title: "Process Modelling", 
    targetId: "process", 
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    id: 6, 
    title: "Digitalization", 
    targetId: "digital", 
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
  }
];

// Partners Data (Using strictly filenames now)
const partnersList = [
  { name: "AVEVA", logo: "aveva.png" },
  { name: "McKinsey & Company", logo: "mckinsey.png" },
  { name: "Wipro", logo: "wipro.png" },
  { name: "Shell", logo: "shell.png" },
  { name: "Petrogenium", logo: "petrogenium.png" },
  { name: "Accenture", logo: "accenture.png" },
  { name: "Tech Mahindra", logo: "techmahindra.png" },
  { name: "Jaaji Technologies", logo: "jaajitech.png" }
];

const servicesPreview = [
  {
    id: "implementation",
    icon: <FaLightbulb />,
    title: "Implementation",
    desc: "We provide operational technology implementation services to build models for clients with industry best standards."
  },
  {
    id: "consulting",
    icon: <FaBullhorn />,
    title: "Consulting",
    desc: "We provide technical and project management consulting services to elevate business processes and model utilizations."
  },
  {
    id: "training",
    icon: <FaPencilAlt />,
    title: "Training",
    desc: "We provide standard and customized training programs for business processes and applications."
  },
  {
    id: "support",
    icon: <FaComments />,
    title: "Support",
    desc: "We provide continuous and need based support services to ensure maximum benefits are achieved."
  }
];

const globalRegions = [
  { region: "South & East Asia", countries: "India, South Korea, Thailand, Vietnam, Malaysia, Indonesia, Philippines, China" },
  { region: "Central & West Asia", countries: "Saudi Arabia, UAE, Oman, Qatar, Azerbaijan" },
  { region: "Americas", countries: "USA, Colombia" },
  { region: "Europe & Africa", countries: "South Africa, Nigeria, Germany" },
  { region: "Australia", countries: "Australia" }
];

const Home = () => {
  const navigate = useNavigate();

  const handleDomainClick = (targetId) => {
    navigate(`/domains#${targetId}`);
  };

  return (
    <div className="home-container">
      {/* 1. HERO SECTION (Fixed background image path) */}
      <section 
        className="hero-section fade-in"
        style={{ backgroundImage: `url(${getAssetPath('background.png')})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content slide-up">
          <h1>IZZI Business Services</h1>
          <p>
            IZZI Business Services (IZZIBS) has been a trusted and reputable provider of services since 2016, 
            specializing in the energy sector, refineries, petrochemicals, and manufacturing industries.
          </p>
          <p>
            Operating internationally from Jamnagar, Gujarat, we are committed to ambitious strategies 
            to broaden our footprint with an expert team.
          </p>
          <Link to="/services" className="hero-btn">View Services &rarr;</Link>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section className="home-services">
        <h2 className="section-title">Services</h2>
        <div className="services-preview-grid">
          {servicesPreview.map((service, index) => (
            <Link to={`/services#${service.id}`} key={index} className="service-preview-card">
              <div className="service-icon-preview">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. DOMAINS SECTION (3x2 Grid + Pop Up + Routing) */}
      <section className="home-domains">
        <h2 className="section-title">Domains</h2>
        <div className="home-domains-grid">
          {domainsData.map((domain) => (
            <div 
              key={domain.id} 
              className="home-domain-card" 
              onClick={() => handleDomainClick(domain.targetId)}
            >
              <div className="home-card-image-wrapper">
                <img src={domain.img} alt={domain.title} />
              </div>
              <div className="home-card-content">
                <h3>{domain.title}</h3>
                <span className="arrow-indicator">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PARTNERS SECTION (Fixed logo paths) */}
      <section className="partners-section">
        <h2 className="section-title">Our Project Partners</h2>
        <div className="partners-grid">
          {partnersList.map((partner, index) => (
            <div key={index} className="partner-card">
              <img 
                src={getAssetPath(partner.logo)} 
                alt={`${partner.name} logo`} 
                className="partner-logo" 
                onError={(e) => {e.target.style.display='none'}} 
              />
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMPANY PROFILE SECTION (Fixed PDF download path) */}
      <section className="profile-section">
        <div className="profile-wrapper">
          <div className="profile-image">
            <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" alt="Company Profile Brochure" />
          </div>
          <div className="profile-content">
            <h2>Company Profile</h2>
            <p>
              IZZI Business Services is a trusted provider of consulting, implementation, training, and support services, 
              led by a team of certified professionals with extensive industry experience.
            </p>
            <p>
              Specializing in planning, optimization, scheduling, blending, and digital transformation, 
              we offer tailored services to meet the unique needs of each client.
            </p>
            {/* FIXED DOWNLOAD BUTTON */}
            <a 
              href={getAssetPath("izzibs_company_profile.pdf")} 
              download="izzibs_company_profile.pdf"
              className="download-btn"
            >
              Download Company Profile <FaDownload style={{marginLeft: '10px'}}/>
            </a>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL CLIENTS SECTION */}
      <section className="global-clients-section">
        <h2 className="section-title">Our Global Clients</h2>
        <div className="clients-container">
          <div className="map-visual">
            <InteractiveMap />
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