import { NextResponse } from 'next/server';
import type { StaffMember, StaffResponse } from '@/types';

// This is the staff API endpoint for the SIS assessment
// Used to get all available staff members for assignment workflows

// Mock staff data - expanded list for staff assignment
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
  },
  {
    id: 'staff6',
    firstName: 'Robert',
    lastName: 'Davis',
    email: 'robert.davis@district.edu',
    phone: '(555) 678-9012',
    department: 'Science',
    position: 'Science Teacher',
    specialties: ['Biology', 'Chemistry', 'Environmental Science'],
    isActive: true,
    hireDate: '2019-01-15',
    profilePicture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'staff7',
    firstName: 'Amanda',
    lastName: 'Wilson',
    email: 'amanda.wilson@district.edu',
    phone: '(555) 789-0123',
    department: 'Counseling',
    position: 'School Counselor',
    specialties: ['Academic Counseling', 'Career Guidance', 'Mental Health Support'],
    isActive: true,
    hireDate: '2020-07-01',
    profilePicture: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'staff8',
    firstName: 'James',
    lastName: 'Brown',
    email: 'james.brown@district.edu',
    phone: '(555) 890-1234',
    department: 'Social Studies',
    position: 'History Teacher',
    specialties: ['American History', 'World History', 'Government'],
    isActive: true,
    hireDate: '2018-08-20',
    profilePicture: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'staff9',
    firstName: 'Maria',
    lastName: 'Garcia',
    email: 'maria.garcia@district.edu',
    phone: '(555) 901-2345',
    department: 'Administration',
    position: 'Assistant Principal',
    specialties: ['Student Discipline', 'Academic Planning', 'Staff Management'],
    isActive: true,
    hireDate: '2016-06-01',
    profilePicture: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 'staff10',
    firstName: 'Kevin',
    lastName: 'Lee',
    email: 'kevin.lee@district.edu',
    phone: '(555) 012-3456',
    department: 'Technology',
    position: 'IT Support Specialist',
    specialties: ['Technical Support', 'Educational Technology', 'System Administration'],
    isActive: true,
    hireDate: '2022-03-15',
    profilePicture: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face'
  }
];

export async function GET() {
  // Simulate API delay for realistic loading states
  await new Promise(resolve => setTimeout(resolve, Math.random() * 600 + 200));

  // In a real implementation, you would:
  // 1. Query the database for all active staff members
  // 2. Support filtering by department, position, specialties
  // 3. Handle pagination for large staff lists
  // 4. Handle authentication and authorization

  const response: StaffResponse = {
    staff: mockStaff,
    total: mockStaff.length
  };

  return NextResponse.json(response);
}

export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
} 