import './Domains.css';

const domainList = [
  "Planning & Optimization",
  "Scheduling & Blending",
  "Process Modelling & Simulation",
  "Process Optimization",
  "Manufacturing Information System",
  "Digitalization"
];

const Domains = () => {
  return (
    <div className="domains-container">
      <div className="domains-header fade-in">
        <h1>Our Domains</h1>
        <p>Specialized expertise across the energy and manufacturing spectrum.</p>
      </div>
      <div className="domains-list">
        {domainList.map((domain, index) => (
          <div key={index} className="domain-item slide-up" style={{animationDelay: `${index * 0.1}s`}}>
            <span className="domain-number">0{index + 1}</span>
            <h2>{domain}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domains;