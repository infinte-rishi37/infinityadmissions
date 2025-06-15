import React, { useState, useMemo } from 'react';
import { Search, Users, MapPin, Mail, Phone } from 'lucide-react';
import { useApp } from '../context/AppContext';
import PartnerCard from '../components/ui/PartnerCard';

const Partners: React.FC = () => {
  const { partners } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPartners = useMemo(() => {
    return partners.filter(partner =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [partners, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Partners</h1>
          <p className="text-gray-600">
            Discover our trusted network of educational institutions and partners who make quality education accessible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Stats */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search partners..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>{filteredPartners.length} Partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        {filteredPartners.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No partners found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms to find more partners.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        )}

        {/* Partnership CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 mt-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Becoming a Partner?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our network of trusted educational institutions and expand your reach to thousands of motivated students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Apply to Partner
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-colors font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Partner Support & Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
              <p className="text-gray-600 text-sm mb-2">Get help with your partnership</p>
              <a href="mailto:partners@infinityeducation.com" className="text-blue-600 hover:text-blue-700 font-medium">
                partners@infinityeducation.com
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
              <p className="text-gray-600 text-sm mb-2">Speak with our partner team</p>
              <a href="tel:+1-555-PARTNER" className="text-blue-600 hover:text-blue-700 font-medium">
                +1 (555) PARTNER
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-600 text-sm mb-2">Partner headquarters location</p>
              <p className="text-blue-600 font-medium">
                123 Education Blvd<br />
                Learning City, LC 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;