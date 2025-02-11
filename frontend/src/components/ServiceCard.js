import React from 'react';

const ServiceCard = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;