import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaLightbulb, FaBullhorn, FaPencilAlt, FaComments } from 'react-icons/fa';
import './Services.css';

const servicesList = [
  {
    id: "implementation",
    title: "Implementation",
    subtitle: "Seamless Project Delivery",
    icon: <FaLightbulb />,
    img: "https://www.pexels.com/photo/women-at-the-meeting-3810793/",
    points: [
      "Turnkey project implementation",
      "Kick-off Meeting and Project Alignment",
      "Data collection, review and validation",
      "Design documents (FDS, DDS)",
      "Model design and model building",
      "Interim model reviews",
      "Trainings (normal users / power users / IT perspective)",
      "Acceptance test (FAT/MAT, SAT/UAT, integrated FAT/SAT)",
      "As-built model documents",
      "Go-live and change management services",
      "Custom reports building and deliveries",
      "Integration design and development services"
    ]
  },
  {
    id: "consulting",
    title: "Consulting",
    subtitle: "Optimizing Business Processes",
    icon: <FaBullhorn />,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    points: [
      {
        main: "Business process review, integration & improvement",
        sub: [
          "As-Is business process review",
          "Industry best practices",
          "Gap analysis & improvement strategies",
          "To-Be business processes mapping"
        ]
      },
      "OT applications architecture design",
      "Requirement specifications / scope of work documents",
      "Project management consulting (PMC) service",
      "Refinery configuration studies",
      "Profit improvement studies / consulting services"
    ]
  },
  {
    id: "training",
    title: "Training",
    subtitle: "Empowering Through Knowledge",
    icon: <FaPencilAlt />,
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    points: [
      {
        main: "Technology specific training",
        sub: [
          "Standard product training",
          "Client specific customized training"
        ]
      },
      {
        main: "Business domain training",
        sub: [
          "Standard training",
          "Advanced customized training"
        ]
      },
      "All trainings can be delivered as remotely or onsite classroom training"
    ]
  },
  {
    id: "support",
    title: "Support Services",
    subtitle: "Reliable and Flexible Assistance",
    icon: <FaComments />,
    img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop",
    points: [
      "Continuous and uninterrupted support services to ensure the maximum benefits are achieved by customers.",
      {
        main: "Onsite and remote support services",
        sub: [
          "Functional support for business processes",
          "Technical support for model maintenance and update"
        ]
      },
      {
        main: "Flexible support models as per client requirements",
        sub: [
          "Continuous support with dedicated engineers",
          "Need based support to optimize service cost",
          "Onsite, remote or combination of both"
        ]
      }
    ]
  }
];

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="services-page">
      <header className="services-header fade-in">
        <h1>Our Services</h1>
        <p>Comprehensive solutions tailored for the energy and manufacturing sectors.</p>
      </header>

      <div className="services-content">
        {servicesList.map((service, index) => (
          <section key={service.id} id={service.id} className={`service-section slide-up ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="service-text">
              <span className="service-subtitle">{service.subtitle}</span>
              <h2>{service.title}</h2>
              
              <ul className="service-list">
                {service.points.map((point, i) => (
                  <li key={i}>
                    {typeof point === 'string' ? (
                      point
                    ) : (
                      <>
                        {point.main}
                        <ul className="sub-list">
                          {point.sub.map((subPoint, j) => (
                            <li key={j}>{subPoint}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>

            </div>
            <div className="service-image-wrapper">
              <img src={service.img} alt={service.title} className="service-image" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;