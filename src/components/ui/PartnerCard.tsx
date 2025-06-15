import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Partner } from '../../types';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={partner.profileImage}
          alt={partner.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
            <ExternalLink className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {partner.name}
        </h3>
        
        {partner.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {partner.description}
          </p>
        )}
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-gray-600">
            <Mail className="h-4 w-4 text-blue-500" />
            <a 
              href={`mailto:${partner.email}`}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              {partner.email}
            </a>
          </div>
          
          <div className="flex items-center space-x-3 text-gray-600">
            <Phone className="h-4 w-4 text-blue-500" />
            <a 
              href={`tel:${partner.phone}`}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              {partner.phone}
            </a>
          </div>
          
          <div className="flex items-start space-x-3 text-gray-600">
            <MapPin className="h-4 w-4 text-blue-500 mt-1" />
            <span className="text-sm">
              {partner.address}
            </span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Contact Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;