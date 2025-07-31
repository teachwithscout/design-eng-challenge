import { NextResponse } from 'next/server';
import type { StaffMember, Student } from '@/types';

// This is the student API endpoint for the SIS assessment
// The route will be /api/student/[id] for individual students

// Mock staff data for associations
const mockStaff: StaffMember[] = [
  {
    id: 'staff1',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@district.edu',
    phone: '(555) 123-4567',
    department: 'English Language Arts',
    position: 'Teacher of Record',
    specialties: ['English', 'Reading', 'Writing'],
    isActive: true,
    hireDate: '2019-08-15',
    profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'staff2',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@district.edu',
    phone: '(555) 234-5678',
    department: 'Special Education',
    position: 'Special Education Teacher',
    specialties: ['IEP Development', 'Behavioral Support', 'Learning Disabilities'],
    isActive: true,
    hireDate: '2020-01-20',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'staff3',
    firstName: 'Lisa',
    lastName: 'Rodriguez',
    email: 'lisa.rodriguez@district.edu',
    phone: '(555) 345-6789',
    department: 'Speech and Language',
    position: 'Speech-Language Pathologist',
    specialties: ['Speech Therapy', 'Language Development', 'Communication Disorders'],
    isActive: true,
    hireDate: '2018-03-10',
    profilePicture: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'staff4',
    firstName: 'David',
    lastName: 'Thompson',
    email: 'david.thompson@district.edu',
    phone: '(555) 456-7890',
    department: 'Mathematics',
    position: 'Math Teacher',
    specialties: ['Algebra', 'Geometry', 'Statistics'],
    isActive: true,
    hireDate: '2017-08-25',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'staff5',
    firstName: 'Jennifer',
    lastName: 'Williams',
    email: 'jennifer.williams@district.edu',
    phone: '(555) 567-8901',
    department: 'ESL',
    position: 'ESL Teacher',
    specialties: ['English as Second Language', 'Cultural Support', 'Language Assessment'],
    isActive: true,
    hireDate: '2021-09-01',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

// Mock student data
const mockStudent: Student = {
  id: '12345',
  firstName: 'Emma',
  lastName: 'Martinez',
  middleName: 'Sofia',
  studentId: 'STU-2024-12345',
  dateOfBirth: '2010-03-15',
  grade: 8,
  enrollmentStatus: 'active',
  profilePicture: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
  
  email: 'emma.martinez@student.district.edu',
  phone: '(555) 987-6543',
  address: {
    street: '1234 Oak Street',
    city: 'Springfield',
    state: 'CA',
    zipCode: '90210'
  },
  
  currentGPA: 3.7,
  credits: 45,
  expectedGraduationDate: '2028-06-15',
  
  specialEducation: true,
  englishLanguageLearner: true,
  freeReducedLunch: true,
  transportationNeeds: false,
  
  parents: [
    {
      id: 'parent1',
      firstName: 'Maria',
      lastName: 'Martinez',
      relationship: 'mother',
      isPrimary: true,
      email: 'maria.martinez@email.com',
      phone: '(555) 111-2222',
      workPhone: '(555) 333-4444',
      address: {
        street: '1234 Oak Street',
        city: 'Springfield',
        state: 'CA',
        zipCode: '90210'
      },
      emergencyContact: true,
      pickupAuthorized: true,
      communicationPreference: 'email',
      language: 'Spanish',
      occupation: 'Nurse',
      employer: 'Springfield General Hospital'
    },
    {
      id: 'parent2',
      firstName: 'Carlos',
      lastName: 'Martinez',
      relationship: 'father',
      isPrimary: false,
      email: 'carlos.martinez@email.com',
      phone: '(555) 222-3333',
      emergencyContact: true,
      pickupAuthorized: true,
      communicationPreference: 'phone',
      language: 'Spanish',
      occupation: 'Construction Supervisor',
      employer: 'Martinez Construction LLC'
    }
  ],
  
  schoolEnrollments: [
    {
      id: 'enrollment1',
      schoolId: 'school001',
      schoolName: 'Springfield Virtual Academy',
      enrollmentDate: '2024-08-15',
      grade: 8,
      status: 'active',
      academicYear: '2024-2025'
    },
    {
      id: 'enrollment2',
      schoolId: 'school002',
      schoolName: 'Lincoln Elementary School',
      enrollmentDate: '2022-08-20',
      withdrawalDate: '2024-06-10',
      grade: 7,
      status: 'completed',
      academicYear: '2023-2024'
    },
    {
      id: 'enrollment3',
      schoolId: 'school002',
      schoolName: 'Lincoln Elementary School',
      enrollmentDate: '2021-08-25',
      withdrawalDate: '2022-06-15',
      grade: 6,
      status: 'completed',
      academicYear: '2021-2022'
    }
  ],
  
  staffAssociations: [
    {
      id: 'assoc1',
      staffId: 'staff1',
      staffMember: mockStaff[0],
      role: 'teacher-of-record',
      isPrimary: true,
      startDate: '2024-08-15',
      notes: 'Primary homeroom teacher and English instructor'
    },
    {
      id: 'assoc2',
      staffId: 'staff2',
      staffMember: mockStaff[1],
      role: 'special-education',
      isPrimary: false,
      startDate: '2024-08-15',
      notes: 'IEP case manager, supports with reading comprehension goals'
    },
    {
      id: 'assoc3',
      staffId: 'staff3',
      staffMember: mockStaff[2],
      role: 'speech-language-pathologist',
      isPrimary: false,
      startDate: '2024-09-01',
      notes: 'Speech therapy services twice weekly'
    },
    {
      id: 'assoc4',
      staffId: 'staff5',
      staffMember: mockStaff[4],
      role: 'esl-teacher',
      isPrimary: false,
      startDate: '2024-08-15',
      notes: 'ESL support services, focus on academic English'
    }
  ],
  
  createdAt: '2021-08-25T00:00:00Z',
  updatedAt: '2024-12-15T10:30:00Z',
  lastLoginDate: '2024-12-14T14:22:00Z'
};

export async function GET() {
  // Simulate API delay for realistic loading states
  await new Promise(resolve => setTimeout(resolve, Math.random() * 800 + 300));

  // In a real implementation, you would:
  // 1. Extract student ID from the URL path
  // 2. Query the database for student data
  // 3. Handle authentication and authorization
  // 4. Return appropriate error responses for not found, etc.
  
  return NextResponse.json({ student: mockStudent });
}

export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
} 