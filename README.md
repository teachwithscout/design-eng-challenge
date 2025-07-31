# Scout Design Engineer Assessment: Student Information System

Welcome to the Scout Design Engineer take-home assessment! You'll be designing and implementing a student profile interface for an AI-native student information system used by online public schools.

**We suggest spending up to 2-3 hours on this take-home assessment, but you may spend as long as you'd like.**

## 🎯 Background & Context

### Who We Are
Scout builds AI-native student information systems for online public schools and school districts. Our platform helps administrators, teachers, and support staff manage student data, track academic progress, and coordinate services across distributed educational environments.

### Our Users
Our primary users are:
- **District administrators** who need oversight across multiple schools
- **Teachers** who manage online student cohorts
- **Special education coordinators** who track IEP services
- **Support staff** (speech therapists, ESL teachers, counselors) who work with specific student populations

### The Challenge
One critical workflow in our system is the **student profile page** - a comprehensive view that staff use daily to understand a student's complete educational context and coordinate services.

## 🚀 Getting Started

1. **Clone this repository** and delete the .git folder
2. **Create a new private repository** in your GitHub account
3. **Create a local repository inside the cloned folder** with `git init`
4. **Install dependencies**: `npm install`
5. **Start the development server**: `npm run dev`
6. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 📋 What's Already Built

- ✅ **Complete backend APIs** at `/api/student/[id]` and `/api/staff` with realistic data
- ✅ **TypeScript interfaces** for all data structures (`/src/types/index.ts`)
- ✅ **Project structure** with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui
- ✅ **SIS Layout** with realistic sidebar navigation for a student information system
- ✅ **Basic student profile scaffold** that loads data and displays basic information

## 🎨 What You Need to Build

You need to complete two main tasks:

### Task 1: Design and Implement the Student Profile
Design a comprehensive student profile interface that displays:

**Essential Information (always visible):**
- Student identity (name, photo, student ID, grade level)
- Enrollment status and key academic indicators
- Special program participation (Special Ed, ELL, Free/Reduced Lunch)

**Detailed Information (organized logically):**
- **Parents/Guardians**: Contact info, relationships, communication preferences, emergency contacts
- **School History**: Current and past enrollments across the district
- **Staff Associations**: Current teachers and support staff with their roles

**Your design should consider:**
- **Information hierarchy**: What needs to be seen immediately vs. what can be secondary?
- **Workflow efficiency**: Staff need to quickly understand a student's situation
- **Enterprise usability**: This will be used by busy professionals many times per day
- **Responsive design**: Works well on laptops and tablets

### Task 2: Implement Staff Assignment Workflow
Create a workflow that allows users to assign a new staff member to a student:

- Use the existing "Assign Staff" button trigger
- Fetch available staff from `/api/staff`
- Allow selection of staff member and assignment role
- Show appropriate role options (teacher-of-record, special-education, speech-language-pathologist, esl-teacher, counselor, etc.)
- Handle the assignment interaction (you don't need to persist data, just show the interaction)

## 🔧 API Reference

### GET `/api/student/[id]`
Returns detailed student profile data including parents, school enrollments, and staff associations.

**Example:**
```javascript
const response = await fetch('/api/student/12345');
const data = await response.json();
// Returns: { student: Student }
```

### GET `/api/staff`
Returns all available staff members for assignment workflows.

**Example:**
```javascript
const response = await fetch('/api/staff');
const data = await response.json();
// Returns: { staff: StaffMember[], total: number }
```

## 📤 Submission

1. **Push your changes** to your private repository
2. **Deploy** your solution (Vercel, Netlify, etc.)
3. **Email us** with:
   - Link to your GitHub repository (make sure to invite `@nfichter` as a collaborator)
   - Link to your deployed demo
   - Brief notes about your design decisions and any trade-offs you made

## 🎯 Evaluation Criteria

We'll be looking at:

- **Enterprise UX Design** - Efficient workflows for professional users who use this daily
- **Information Architecture** - Logical organization and hierarchy of complex data
- **Visual Design** - Professional, accessible interface appropriate for educational software
- **Technical Implementation** - Proper React patterns, API integration, TypeScript usage
- **Attention to Detail** - Thoughtful handling of edge cases, loading states, error states

## 💡 Design Considerations

Think about:
- **Cognitive load**: How can you present complex information without overwhelming users?
- **Scanning patterns**: How do users typically scan profile information?
- **Common workflows**: What actions do staff take most frequently on student profiles?
- **Context switching**: Users often need to quickly move between multiple student profiles
- **Accessibility**: This must work for users with different abilities and technical comfort levels

---

**Good luck!** We're excited to see how you approach this enterprise software design challenge. Focus on creating something that would genuinely help educational professionals do their jobs more effectively.

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks
- **API**: Next.js API Routes
