import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Course, Partner, User, Application, Notification } from '../types';
import { sampleCourses, samplePartners } from '../data/sampleData';

interface AppContextType {
  courses: Course[];
  partners: Partner[];
  user: User | null;
  applications: Application[];
  notifications: Notification[];
  setCourses: (courses: Course[]) => void;
  setPartners: (partners: Partner[]) => void;
  setUser: (user: User | null) => void;
  addCourse: (course: Course) => void;
  updateCourse: (id: string, course: Course) => void;
  deleteCourse: (id: string) => void;
  addPartner: (partner: Partner) => void;
  updatePartner: (id: string, partner: Partner) => void;
  deletePartner: (id: string) => void;
  submitApplication: (application: Omit<Application, 'id' | 'appliedAt' | 'updatedAt'>) => void;
  removeApplication: (applicationId: string) => void;
  updateApplicationStatus: (applicationId: string, status: 'approved' | 'rejected') => void;
  getUserApplications: (userId: string) => Application[];
  getCourseApplications: (courseId: string) => Application[];
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
  markNotificationAsRead: (notificationId: string) => void;
  getUserNotifications: (userId: string) => Notification[];
  getUnreadNotificationsCount: (userId: string) => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(sampleCourses);
  const [partners, setPartners] = useState<Partner[]>(samplePartners);
  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addCourse = (course: Course) => {
    setCourses(prev => [...prev, course]);
  };

  const updateCourse = (id: string, updatedCourse: Course) => {
    setCourses(prev => prev.map(course => 
      course.id === id ? updatedCourse : course
    ));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(course => course.id !== id));
  };

  const addPartner = (partner: Partner) => {
    setPartners(prev => [...prev, partner]);
  };

  const updatePartner = (id: string, updatedPartner: Partner) => {
    setPartners(prev => prev.map(partner => 
      partner.id === id ? updatedPartner : partner
    ));
  };

  const deletePartner = (id: string) => {
    setPartners(prev => prev.filter(partner => partner.id !== id));
  };

  const submitApplication = (applicationData: Omit<Application, 'id' | 'appliedAt' | 'updatedAt'>) => {
    const newApplication: Application = {
      ...applicationData,
      id: Date.now().toString(),
      appliedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setApplications(prev => [...prev, newApplication]);

    // Create notification for admin
    addNotification({
      type: 'application_submitted',
      title: 'New Application Received',
      message: `${applicationData.studentName} applied for ${applicationData.courseTitle}`,
      userId: 'admin', // Notify all admins
      applicationId: newApplication.id,
      read: false,
    });
  };

  const removeApplication = (applicationId: string) => {
    setApplications(prev => prev.filter(app => app.id !== applicationId));
    setNotifications(prev => prev.filter(notif => notif.applicationId !== applicationId));
  };

  const updateApplicationStatus = (applicationId: string, status: 'approved' | 'rejected') => {
    setApplications(prev => prev.map(app => 
      app.id === applicationId 
        ? { ...app, status, updatedAt: new Date().toISOString() }
        : app
    ));

    // Find the application to get student details
    const application = applications.find(app => app.id === applicationId);
    if (application) {
      // Create notification for student
      addNotification({
        type: status === 'approved' ? 'application_approved' : 'application_rejected',
        title: `Application ${status.charAt(0).toUpperCase() + status.slice(1)}`,
        message: `Your application for ${application.courseTitle} has been ${status}`,
        userId: application.studentId,
        applicationId: applicationId,
        read: false,
      });
    }
  };

  const getUserApplications = (userId: string) => {
    return applications.filter(app => app.studentId === userId);
  };

  const getCourseApplications = (courseId: string) => {
    return applications.filter(app => app.courseId === courseId);
  };

  const addNotification = (notificationData: Omit<Notification, 'id' | 'createdAt'>) => {
    const newNotification: Notification = {
      ...notificationData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markNotificationAsRead = (notificationId: string) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === notificationId ? { ...notif, read: true } : notif
    ));
  };

  const getUserNotifications = (userId: string) => {
    return notifications.filter(notif => notif.userId === userId || notif.userId === 'admin');
  };

  const getUnreadNotificationsCount = (userId: string) => {
    return notifications.filter(notif => 
      (notif.userId === userId || notif.userId === 'admin') && !notif.read
    ).length;
  };

  return (
    <AppContext.Provider value={{
      courses,
      partners,
      user,
      applications,
      notifications,
      setCourses,
      setPartners,
      setUser,
      addCourse,
      updateCourse,
      deleteCourse,
      addPartner,
      updatePartner,
      deletePartner,
      submitApplication,
      removeApplication,
      updateApplicationStatus,
      getUserApplications,
      getCourseApplications,
      addNotification,
      markNotificationAsRead,
      getUserNotifications,
      getUnreadNotificationsCount,
    }}>
      {children}
    </AppContext.Provider>
  );
};