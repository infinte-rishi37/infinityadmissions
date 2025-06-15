import React, { useState } from 'react';
import { Clock, MapPin, GraduationCap, ExternalLink, Check, X } from 'lucide-react';
import { Course } from '../../types';
import { useApp } from '../../context/AppContext';
import ApplicationModal from './ApplicationModal';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { user, getUserApplications, removeApplication } = useApp();
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const userApplications = user ? getUserApplications(user.id) : [];
  const existingApplication = userApplications.find(app => app.courseId === course.id);

  const handleApplyClick = () => {
    if (!user) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    setShowApplicationModal(true);
  };

  const handleRemoveApplication = () => {
    if (existingApplication && window.confirm('Are you sure you want to withdraw your application?')) {
      removeApplication(existingApplication.id);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <Check className="h-3 w-3" />;
      case 'rejected':
        return <X className="h-3 w-3" />;
      default:
        return <Clock className="h-3 w-3" />;
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              {course.type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              course.mode === 'Online' 
                ? 'bg-green-100 text-green-800' 
                : course.mode === 'Offline'
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {course.mode}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          
          <div className="flex items-center space-x-2 text-gray-600 mb-3">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm font-medium">{course.institution}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {course.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{course.mode}</span>
            </div>
          </div>

          {/* Application Status */}
          {existingApplication && (
            <div className="mb-4">
              <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(existingApplication.status)}`}>
                {getStatusIcon(existingApplication.status)}
                <span>Application {existingApplication.status}</span>
              </div>
            </div>
          )}
          
          <div className="flex space-x-3">
            {existingApplication ? (
              <button
                onClick={handleRemoveApplication}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Remove Application
              </button>
            ) : (
              <button
                onClick={handleApplyClick}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Apply Now
              </button>
            )}
            <button className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {showApplicationModal && (
        <ApplicationModal
          course={course}
          onClose={() => setShowApplicationModal(false)}
        />
      )}
    </>
  );
};

export default CourseCard;