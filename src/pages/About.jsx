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
      { src: getAssetPath('Event Pics/Family Get Together 2024/IMG20240217181432.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Family Get Together 2024/Picsart_24-02-18_13-21-12-582.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Family Get Together 2024/Picsart_24-02-18_16-48-02-652.jpg'), positionClass: 'move-down' },
      { src: getAssetPath('Event Pics/Family Get Together 2024/Picsart_24-02-18_17-01-17-866.jpg'), positionClass: '' },
    ],
    description: 'Family Get Together 2024',
  },
  {
    id: 2,
    images: [
      { src: getAssetPath('Event Pics/Family Get Together 2025/IMG_2001.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Family Get Together 2025/IMG_2027.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Family Get Together 2025/IMG_2064.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Family Get Together 2025/IMG_2102.jpg'), positionClass: '' },
    ],
    description: 'Family Get Together 2025',
  },
  {
    id: 3,
    images: [
      { src: getAssetPath('Event Pics/Family Picnic 2025/IMG_0097.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Family Picnic 2025/IMG_0104.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Family Picnic 2025/IMG_0114.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Family Picnic 2025/IMG_0121.jpg'), positionClass: '' },
    ],
    description: 'Family Picnic 2025',
  },
  {
    id: 4,
    images: [
      { src: getAssetPath('Event Pics/Internship Program 2026/3bb7def5-ebb8-4a11-87fd-6ea685d606eb.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Internship Program 2026/7d032269-1bab-4ba0-834a-23016126ee24.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Internship Program 2026/IMG_3686.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/Internship Program 2026/IMG_3693.jpg'), positionClass: '' },
    ],
    description: 'Internship Program 2026',
  },
  {
    id: 5,
    images: [
      { src: getAssetPath('Event Pics/IZZIBS at Expo/IMG-20241120-WA0017.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/IZZIBS at Expo/IMG20240430090033.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/IZZIBS at Expo/IMG20241105170211_01.jpg'), positionClass: '' },
      { src: getAssetPath('Event Pics/IZZIBS at Expo/IMG20241211101524.jpg'), positionClass: '' },
    ],
    description: 'IZZIBS at Expo',
  },
  {
    id: 6,
    images: [
      { src: getAssetPath('Event Pics/Team Recognision/IMG_2160.jpg'), positionClass: 'move-down' },
      { src: getAssetPath('Event Pics/Team Recognision/WhatsApp Image 2026-02-23 at 7.30.47 AM.jpeg'), positionClass: 'move-down-less' },
      { src: getAssetPath('Event Pics/Team Recognision/IMG-20241111-WA0004.jpg'), positionClass: 'move-down' },
      { src: getAssetPath('Event Pics/Team Recognision/Picsart_24-02-18_16-51-49-292.jpg'), positionClass: 'move-down' },
    ],
    description: 'Team Recognition',
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
            Our strength lies in our people. The IZZIBS team is a synergy of seasoned experts and vibrant young talent, all united by a passion for excellence and a commitment to driving success for our clients.
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
                    <img
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      className={image.positionClass}
                    />
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
