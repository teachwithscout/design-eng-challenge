// Student Information System Types

export interface Student {
  id: string;
  // Basic student information
  firstName: string;
  lastName: string;
  middleName?: string;
  studentId: string;
  dateOfBirth: string;
  grade: number;
  enrollmentStatus: 'active' | 'inactive' | 'graduated' | 'transferred' | 'withdrawn';
  profilePicture?: string;
  
  // Contact information
  email?: string;
  phone?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  
  // Academic information
  currentGPA?: number;
  credits: number;
  expectedGraduationDate?: string;
  
  // Special programs/services
  specialEducation: boolean;
  englishLanguageLearner: boolean;
  freeReducedLunch: boolean;
  transportationNeeds: boolean;
  
  // Parents/Guardians
  parents: Parent[];
  
  // School enrollment history
  schoolEnrollments: SchoolEnrollment[];
  
  // Staff associations
  staffAssociations: StaffAssociation[];
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  lastLoginDate?: string;
}

export interface Parent {
  id: string;
  firstName: string;
  lastName: string;
  relationship: 'mother' | 'father' | 'guardian' | 'stepmother' | 'stepfather' | 'grandparent' | 'other';
  isPrimary: boolean;
  email: string;
  phone: string;
  workPhone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  emergencyContact: boolean;
  pickupAuthorized: boolean;
  communicationPreference: 'email' | 'phone' | 'text' | 'mail';
  language: string;
  occupation?: string;
  employer?: string;
}

export interface SchoolEnrollment {
  id: string;
  schoolId: string;
  schoolName: string;
  enrollmentDate: string;
  withdrawalDate?: string;
  grade: number;
  status: 'active' | 'completed' | 'transferred' | 'withdrawn';
  academicYear: string;
}

export interface StaffAssociation {
  id: string;
  staffId: string;
  staffMember: StaffMember;
  role: 'teacher-of-record' | 'special-education' | 'speech-language-pathologist' | 'esl-teacher' | 'counselor' | 'administrator' | 'support-staff';
  isPrimary: boolean;
  startDate: string;
  endDate?: string;
  notes?: string;
}

export interface StaffMember {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  department: string;
  position: string;
  specialties: string[];
  isActive: boolean;
  hireDate: string;
  profilePicture?: string;
}

// API Response types
export interface StudentResponse {
  student: Student;
}

export interface StaffResponse {
  staff: StaffMember[];
  total: number;
} 