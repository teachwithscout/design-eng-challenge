'use client';

import {
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  GraduationCap,
  Home,
  MessageSquare,
  Phone,
  School,
  Settings,
  Shield,
  UserCheck,
  Users,
} from 'lucide-react';
import type React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: Home,
    url: '/dashboard'
  },
  {
    title: 'Students',
    icon: Users,
    url: '/students',
    isActive: true
  },
  {
    title: 'Staff',
    icon: UserCheck,
    url: '/staff'
  },
  {
    title: 'Schools',
    icon: School,
    url: '/schools'
  }
];

const academicsItems = [
  {
    title: 'Courses',
    icon: BookOpen,
    url: '/courses'
  },
  {
    title: 'Grades',
    icon: GraduationCap,
    url: '/grades'
  },
  {
    title: 'Attendance',
    icon: Calendar,
    url: '/attendance'
  },
  {
    title: 'Assessments',
    icon: ClipboardList,
    url: '/assessments'
  }
];

const communicationItems = [
  {
    title: 'Messages',
    icon: MessageSquare,
    url: '/messages'
  },
  {
    title: 'Parent Contact',
    icon: Phone,
    url: '/parent-contact'
  },
  {
    title: 'Notifications',
    icon: Bell,
    url: '/notifications'
  }
];

const systemItems = [
  {
    title: 'Reports',
    icon: BarChart3,
    url: '/reports'
  },
  {
    title: 'Documents',
    icon: FileText,
    url: '/documents'
  },
  {
    title: 'Security',
    icon: Shield,
    url: '/security'
  },
  {
    title: 'Settings',
    icon: Settings,
    url: '/settings'
  }
];

interface SISLayoutProps {
  children: React.ReactNode;
}

export default function SISLayout({ children }: SISLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar>
          <SidebarHeader className="border-b border-gray-200 p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">EduPortal</h2>
                <p className="text-xs text-gray-500">Springfield District</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            {/* Main Navigation */}
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url} className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Academics */}
            <SidebarGroup>
              <SidebarGroupLabel>Academics</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {academicsItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Communication */}
            <SidebarGroup>
              <SidebarGroupLabel>Communication</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {communicationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* System */}
            <SidebarGroup>
              <SidebarGroupLabel>System</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {systemItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex items-center space-x-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarRail />
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <header className="border-b border-gray-200 bg-white px-6 py-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-gray-900">Student Profile</h1>
                <p className="text-sm text-gray-500">Manage student information and associations</p>
              </div>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
} 