import React from 'react';

const bodyParts = [
  { name: 'Teeth', status: 'Healthy', top: '23%', left: '52%' },
  { name: 'Lungs', status: 'Clear', top: '35%', left: '50%' },
  { name: 'Heart', status: 'Stable', top: '43%', left: '50%' },
  { name: 'Liver', status: 'Normal', top: '56%', left: '52%' },
];


const AnatomyCondition = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-4">Anatomy Conditions</h2>
      <ul className="space-y-2">
        {conditions.map(({ part, status, color }) => (
          <li key={part} className="flex justify-between">
            <span className="font-medium">{part}</span>
            <span className={`font-semibold ${color}`}>{status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnatomyCondition;
