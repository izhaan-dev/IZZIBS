import React from 'react';
import './About.css';

// --- HELPER FOR GITHUB PAGES ASSETS ---
const getAssetPath = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const employees = [
  { id: 1, name: 'Anwar Tatariya', position: 'Managing Partner', imageUrl: getAssetPath('Team Pics/Anwar PP.png') },
  { id: 2, name: 'Gazala Tatariya', position: 'Partner', imageUrl: getAssetPath('Team Pics/Gazala Hijab.jpg') },
  { id: 3, name: 'Vishal Bhalala', position: 'Technical Lead', imageUrl: getAssetPath('Team Pics/Vishal.png') },
  { id: 4, name: 'Kishan Shukla', position: 'Team Lead', imageUrl: getAssetPath('Team Pics/Kishan.jpg') },
  { id: 5, name: 'John Abraham', position: 'Senior Consultant', imageUrl: getAssetPath('Team Pics/John.jpg') },
  { id: 6, name: 'Tarang Thakar', position: 'Senior Consultant', imageUrl: getAssetPath('Team Pics/Tarang.jpg') },
  { id: 7, name: 'Sohil Bloch', position: 'Consultant', imageUrl: getAssetPath('Team Pics/Sohil B.jpg') },
  { id: 8, name: 'Nikunj Nakum', position: 'Consultant', imageUrl: getAssetPath('Team Pics/Nikunj.jpg') },
  { id: 9, name: 'Shrey Choksi', position: 'Analyst', imageUrl: getAssetPath('Team Pics/Shrey.jpg') },
  { id: 10, name: 'Manav Joisar', position: 'Analyst', imageUrl: getAssetPath('Team Pics/Maanav.jpg') },
  { id: 11, name: 'Isha Jasani', position: 'Analyst', imageUrl: getAssetPath('Team Pics/Isha.jpg') },
  { id: 12, name: 'Neelam Mahto', position: 'Analyst', imageUrl: getAssetPath('Team Pics/Neelam.jpg') },
  { id: 13, name: 'Sohil Jethava', position: 'Analyst', imageUrl: getAssetPath('Team Pics/Sohil J.jpg') },
  { id: 14, name: 'Sugat tembhurne', position: 'Analyst', imageUrl: getAssetPath('Team Pics/Sugat.jpeg') },
];

const About = () => {
  return (
    <div className="about-container">
      
      <section className="team-section">
        <h2 className="section-title">Our Team</h2>
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
