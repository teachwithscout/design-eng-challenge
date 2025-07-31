'use client';

import {
  AlertCircle,
  UserPlus
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import type { StaffMember, StaffResponse, Student } from '@/types';

export default function StudentProfile() {
  const [student, setStudent] = useState<Student | null>(null);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [, setStaffLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadStudentData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/student/12345');
      if (!response.ok) {
        throw new Error('Failed to load student data');
      }
      const data = await response.json();
      setStudent(data.student);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStudentData();
  }, [loadStudentData]);

  const loadStaffData = async () => {
    try {
      setStaffLoading(true);
      const response = await fetch('/api/staff');
      if (!response.ok) {
        throw new Error('Failed to load staff data');
      }
      const data: StaffResponse = await response.json();
      setStaff(data.staff);
    } catch (err) {
      console.error('Error loading staff:', err);
    } finally {
      setStaffLoading(false);
    }
  };

  const handleAssignStaff = () => {
    // TODO: Implement staff assignment workflow
    loadStaffData();
    console.log('Assign staff workflow triggered - implement this!');
  };

  if (loading) {
    return <StudentProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Student</h3>
          <p className="text-gray-500">{error}</p>
          <Button onClick={loadStudentData} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="space-y-6">
      {/* TODO: Design and implement the student profile interface */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Student Profile - Design Challenge</span>
            <Button onClick={handleAssignStaff} className="flex items-center space-x-2">
              <UserPlus className="h-4 w-4" />
              <span>Assign Staff</span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Your Task</h3>
            <div className="text-sm text-blue-800 space-y-2">
              <p><strong>1. Design the Student Profile:</strong> Create a comprehensive interface that displays student information in a logical, scannable way.</p>
              <p><strong>2. Implement Staff Assignment:</strong> Build the workflow triggered by the "Assign Staff" button using the staff data.</p>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Available Student Data</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>Basic Info:</strong> {student.firstName} {student.lastName} (ID: {student.studentId})</p>
              <p><strong>Academic:</strong> Grade {student.grade}, GPA {student.currentGPA}, {student.credits} credits</p>
              <p><strong>Programs:</strong> {[
                student.specialEducation && 'Special Education',
                student.englishLanguageLearner && 'ELL',
                student.freeReducedLunch && 'Free/Reduced Lunch'
              ].filter(Boolean).join(', ') || 'None'}</p>
              <p><strong>Parents:</strong> {student.parents.length} parent(s)/guardian(s)</p>
              <p><strong>School History:</strong> {student.schoolEnrollments.length} enrollment(s)</p>
              <p><strong>Staff Associations:</strong> {student.staffAssociations.length} current association(s)</p>
            </div>
          </div>

          {staff.length > 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Available Staff Data</h3>
              <div className="text-sm text-green-800">
                <p>✅ Staff data loaded successfully ({staff.length} staff members)</p>
                <p>Departments: {[...new Set(staff.map(s => s.department))].join(', ')}</p>
              </div>
            </div>
          )}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-900 mb-2">Design Considerations</h3>
            <div className="text-sm text-yellow-800 space-y-1">
              <p>• What information needs to be visible immediately vs. in secondary views?</p>
              <p>• How can you make this efficient for daily use by busy staff?</p>
              <p>• How should the staff assignment workflow work?</p>
              <p>• Consider responsive design for tablets and laptops</p>
            </div>
          </div>

          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">🎨 Your Design Goes Here</h3>
            <p className="text-gray-600">Replace this component with your student profile implementation</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StudentProfileSkeleton() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Skeleton className="h-20 w-20 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-48" />
              <div className="flex space-x-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-56" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-3">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-40" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 