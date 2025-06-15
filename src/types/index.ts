export interface Course {
  id: string;
  title: string;
  institution: string;
  type: string;
  duration: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  description: string;
  image: string;
  featured?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImage: string;
  description?: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  address?: string;
  isAdmin: boolean;
}

export interface Application {
  id: string;
  studentId: string;
  courseId: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentAddress: string;
  courseTitle: string;
  institution: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  type: 'application_submitted' | 'application_approved' | 'application_rejected';
  title: string;
  message: string;
  userId: string;
  applicationId?: string;
  read: boolean;
  createdAt: string;
}