import React from 'react';
import './About.css';

// --- HELPER FOR GITHUB PAGES ASSETS ---
const getAssetPath = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const employees = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  name: `Employee Name ${i + 1}`,
  position: 'Employee Position',
  imageUrl: 'https://via.placeholder.com/200',
}));

const About = () => {
  return (
    <div className="about-container">
      <section 
        className="hero-section-about"
        style={{ backgroundImage: `url(${getAssetPath('background.png')})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content slide-up">
          <h1>Our Team</h1>
          <p>
            Meet the dedicated professionals who drive our success. Our team is composed of experienced and passionate individuals committed to delivering the best results for our clients.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet the Employees</h2>
        <div className="team-grid">
          {employees.map(employee => (
            <div key={employee.id} className="team-member-card">
              <div className="team-member-image-wrapper">
                <img src={employee.imageUrl} alt={employee.name} />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">{employee.name}</h3>
                <p className="team-member-position">{employee.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
