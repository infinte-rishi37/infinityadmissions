import React, { useState } from 'react';
import { Search, Filter, Check, X, Eye, Clock, User, Mail, Phone, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ApplicationManagement: React.FC = () => {
  const { applications, updateApplicationStatus, courses } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);

  const filteredApplications = applications.filter(application => {
    const matchesSearch = 
      application.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.studentEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.institution.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !statusFilter || application.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleStatusUpdate = (applicationId: string, status: 'approved' | 'rejected') => {
    if (window.confirm(`Are you sure you want to ${status} this application?`)) {
      updateApplicationStatus(applicationId, status);
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
        return <Check className="h-4 w-4" />;
      case 'rejected':
        return <X className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const selectedApp = selectedApplication ? applications.find(app => app.id === selectedApplication) : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Application Management</h2>
            <p className="text-gray-600 mt-1">Review and manage student applications</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                {applications.filter(app => app.status === 'pending').length} Pending
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                {applications.filter(app => app.status === 'approved').length} Approved
              </span>
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">
                {applications.filter(app => app.status === 'rejected').length} Rejected
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search applications..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {filteredApplications.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-600">
              {searchTerm || statusFilter ? 'Try adjusting your search or filter criteria.' : 'No applications have been submitted yet.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{application.studentName}</div>
                          <div className="text-sm text-gray-500">{application.studentEmail}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{application.courseTitle}</div>
                      <div className="text-sm text-gray-500">{application.institution}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(application.appliedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                        {getStatusIcon(application.status)}
                        <span>{application.status.charAt(0).toUpperCase() + application.status.slice(1)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => setSelectedApplication(application.id)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {application.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleStatusUpdate(application.id, 'approved')}
                              className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50"
                              title="Approve"
                            >
                              <Check className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(application.id, 'rejected')}
                              className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                              title="Reject"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Application Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Application Details</h3>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Course Information */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Course Information</h4>
                  <p className="text-blue-800 font-medium">{selectedApp.courseTitle}</p>
                  <p className="text-blue-700 text-sm">{selectedApp.institution}</p>
                </div>

                {/* Student Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Student Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium text-gray-900">{selectedApp.studentName}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900">{selectedApp.studentEmail}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-900">{selectedApp.studentPhone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium text-gray-900">{selectedApp.studentAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Status */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Application Status</h4>
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedApp.status)}`}>
                      {getStatusIcon(selectedApp.status)}
                      <span>{selectedApp.status.charAt(0).toUpperCase() + selectedApp.status.slice(1)}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>Applied: {new Date(selectedApp.appliedAt).toLocaleString()}</p>
                      <p>Updated: {new Date(selectedApp.updatedAt).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {selectedApp.status === 'pending' && (
                  <div className="flex justify-end space-x-3 pt-4 border-t">
                    <button
                      onClick={() => {
                        handleStatusUpdate(selectedApp.id, 'rejected');
                        setSelectedApplication(null);
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Reject Application
                    </button>
                    <button
                      onClick={() => {
                        handleStatusUpdate(selectedApp.id, 'approved');
                        setSelectedApplication(null);
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Approve Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationManagement;