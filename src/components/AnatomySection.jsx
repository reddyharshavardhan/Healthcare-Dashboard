import React from 'react';
import './AnatomySection.css';
import anatomyImage from '../assets/anatomy.png';

const AnatomySection = () => {
  const bodyParts = [
    { name: 'Teeth', status: 'Healthy', top: '15%', left: '55%' },
    { name: 'Lungs', status: 'Clear', top: '25%', left: '48%' },
    { name: 'Heart', status: 'Stable', top: '28%', left: '55%' },
    { name: 'Bone', status: 'Normal', top: '60%', left: '55%' },
  ];

  return (
    <div className="anatomy-section">
      <div className="image-wrapper">
        <img src={anatomyImage} alt="Human Anatomy" />
        {bodyParts.map((part, index) => (
          <div key={index} className="marker-label-wrapper" style={{ top: part.top, left: part.left }}>
            <div className="marker" title={part.name}></div>
            <span className="label">{part.name}</span>
          </div>
        ))}
      </div>

      <div className="health-status-list">
        {bodyParts.map((part, index) => (
          <div key={index} className="health-status-item">
            <strong>{part.name}:</strong> {part.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
