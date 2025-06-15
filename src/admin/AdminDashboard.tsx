import React, { useState } from 'react';
import { BarChart, Users, BookOpen, TrendingUp, Award, Plus, Bell, Clock, Check, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import CourseManagement from './CourseManagement';
import PartnerManagement from './PartnerManagement';
import ApplicationManagement from './ApplicationManagement';

const AdminDashboard: React.FC = () => {
  const { courses, partners, applications, getUserNotifications, user } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'partners' | 'applications'>('overview');

  const notifications = user ? getUserNotifications(user.id) : [];
  const unreadNotifications = notifications.filter(n => !n.read);
  const pendingApplications = applications.filter(app => app.status === 'pending');

  const stats = [
    {
      title: 'Total Courses',
      value: courses.length,
      icon: BookOpen,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Partner Institutions',
      value: partners.length,
      icon: Users,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Total Applications',
      value: applications.length,
      icon: TrendingUp,
      color: 'bg-purple-500',
      change: '+23%'
    },
    {
      title: 'Pending Applications',
      value: pendingApplications.length,
      icon: Clock,
      color: 'bg-yellow-500',
      change: `${pendingApplications.length} new`
    }
  ];

  const recentApplications = applications
    .sort((a, b) => new Date(b.appliedAt).getTime() - new Date(a.appliedAt).getTime())
    .slice(0, 5);

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

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
          <button
            onClick={() => setActiveTab('applications')}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View All
          </button>
        </div>
        
        {recentApplications.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No applications yet</p>
        ) : (
          <div className="space-y-3">
            {recentApplications.map((application) => (
              <div key={application.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{application.studentName}</p>
                  <p className="text-sm text-gray-600">{application.courseTitle}</p>
                  <p className="text-xs text-gray-500">
                    Applied {new Date(application.appliedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                  {getStatusIcon(application.status)}
                  <span>{application.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notifications */}
      {unreadNotifications.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Recent Notifications</h3>
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {unreadNotifications.length}
            </span>
          </div>
          <div className="space-y-3">
            {unreadNotifications.slice(0, 3).map((notification) => (
              <div key={notification.id} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-medium text-blue-900">{notification.title}</p>
                <p className="text-sm text-blue-700">{notification.message}</p>
                <p className="text-xs text-blue-600 mt-1">
                  {new Date(notification.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button
              onClick={() => setActiveTab('courses')}
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Course
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Partner
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Stats</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Pending</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                {applications.filter(app => app.status === 'pending').length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Approved</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                {applications.filter(app => app.status === 'approved').length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Rejected</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                {applications.filter(app => app.status === 'rejected').length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Platform Status</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Database</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                Healthy
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">API Status</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage courses, partners, and applications</p>
            </div>
            {unreadNotifications.length > 0 && (
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                <Bell className="h-5 w-5 text-blue-600" />
                <span className="text-blue-900 font-medium">
                  {unreadNotifications.length} new notifications
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <BarChart className="h-4 w-4 mr-2" />
                  Overview
                </div>
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'applications'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Applications
                  {pendingApplications.length > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {pendingApplications.length}
                    </span>
                  )}
                </div>
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'courses'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Courses
                </div>
              </button>
              <button
                onClick={() => setActiveTab('partners')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'partners'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Partners
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'applications' && <ApplicationManagement />}
          {activeTab === 'courses' && <CourseManagement />}
          {activeTab === 'partners' && <PartnerManagement />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;