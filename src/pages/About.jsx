import React from 'react';
import './About.css';
import { FaArrowDown } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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

const lifeAtIzzibsData = [
  {
    id: 1,
    images: [
      'https://picsum.photos/seed/picsum1/800/600',
      'https://picsum.photos/seed/picsum2/800/600',
      'https://picsum.photos/seed/picsum3/800/600',
      'https://picsum.photos/seed/picsum4/800/600',
    ],
    description: 'Team building activities and workshops.',
  },
  {
    id: 2,
    images: [
      'https://picsum.photos/seed/picsum5/800/600',
      'https://picsum.photos/seed/picsum6/800/600',
      'https://picsum.photos/seed/picsum7/800/600',
      'https://picsum.photos/seed/picsum8/800/600',
    ],
    description: 'Celebrating festivals and cultural events.',
  },
  {
    id: 3,
    images: [
      'https://picsum.photos/seed/picsum9/800/600',
      'https://picsum.photos/seed/picsum10/800/600',
      'https://picsum.photos/seed/picsum11/800/600',
      'https://picsum.photos/seed/picsum12/800/600',
    ],
    description: 'Annual offsite and team outings.',
  },
  {
    id: 4,
    images: [
      'https://picsum.photos/seed/picsum13/800/600',
      'https://picsum.photos/seed/picsum14/800/600',
      'https://picsum.photos/seed/picsum15/800/600',
      'https://picsum.photos/seed/picsum16/800/600',
    ],
    description: 'Knowledge sharing and learning sessions.',
  },
  {
    id: 5,
    images: [
      'https://picsum.photos/seed/picsum17/800/600',
      'https://picsum.photos/seed/picsum18/800/600',
      'https://picsum.photos/seed/picsum19/800/600',
      'https://picsum.photos/seed/picsum20/800/600',
    ],
    description: 'Recreational activities and sports.',
  },
  {
    id: 6,
    images: [
      'https://picsum.photos/seed/picsum21/800/600',
      'https://picsum.photos/seed/picsum22/800/600',
      'https://picsum.photos/seed/picsum23/800/600',
      'https://picsum.photos/seed/picsum24/800/600',
    ],
    description: 'Celebrating milestones and achievements.',
  },
];


const About = () => {
  const scrollToLifeSection = () => {
    const section = document.getElementById('life-at-izzibs-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-container">
      <section className="team-header-section">
        <div className="team-header-content">
          <h2 className="section-title">Team IZZIBS</h2>
          <p className="team-description">
            Our strength lies in our people. The IZZIBS team is a synergy of seasoned experts and vibrant young talent, all united by a passion for excellence and a commitment to driving success for our clients. We foster a culture of collaboration, innovation, and continuous learning to stay at the forefront of the industry.
          </p>
          <button onClick={scrollToLifeSection} className="life-at-izzibs-btn">
            Life at IZZIBS <FaArrowDown style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </section>
      
      <section className="team-section">
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

      <section id="life-at-izzibs-section" className="life-at-izzibs-section">
        <h2 className="section-title">Life at IZZIBS</h2>
        <p className="section-subheader">
          A glimpse into the vibrant moments and collaborative spirit that make our team unique.
        </p>
        <div className="life-at-izzibs-grid">
          {lifeAtIzzibsData.map(item => (
            <div key={item.id} className="carousel-container">
              <Carousel showThumbs={false} autoPlay infiniteLoop>
                {item.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
              <p className="carousel-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
