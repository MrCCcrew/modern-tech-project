import React from 'react';

const ServiceDetail = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-6">
        {icon}
        <div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;