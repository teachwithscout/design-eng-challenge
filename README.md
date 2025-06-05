# Design Engineer Assessment - Interactive Search Interface

Welcome to the Design Engineer take-home assessment! You'll be building an interactive search and filtering interface from scratch that showcases both your technical skills and design sensibilities.

## 🎯 Objective

Create a buttery-smooth, interactive search experience that demonstrates your ability to:
- Build responsive, accessible UI components from scratch
- Create delightful animations and micro-interactions
- Integrate with backend APIs effectively
- Write clean, maintainable code
- Make thoughtful UX and design decisions

**We suggest spending up to 2 hours on this take-home assessment, but you may spend as long as you'd like.**

## 🚀 Getting Started

1. **Fork this repository** to your GitHub account
2. **Clone** your fork locally
3. **Install dependencies**: `npm install`
4. **Start the development server**: `npm run dev`
5. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 📋 What's Already Built

- ✅ **Complete backend API** at `/api/search` with realistic data and search logic
- ✅ **TypeScript interfaces** for type safety (`/src/types/index.ts`)
- ✅ **Project structure** with Next.js 14, TypeScript, Tailwind CSS
- ✅ **Dependencies**: Framer Motion, Lucide React icons, React Query

## 🎨 What You Need to Build

Design and implement a complete search interface with the following features:

### Core Requirements
- **Search bar** with real-time search and autocomplete suggestions
- **Filter panel** with categories, tags, price range, and sorting options
- **Results grid** displaying search results with smooth animations
- **Loading states** and empty states with proper UX
- **Responsive design** that works on all screen sizes

### Expected User Experience
- **Instant search** with debounced API calls
- **Smooth animations** for all interactions (search, filtering, loading)
- **Keyboard navigation** for accessibility
- **Visual feedback** for all user actions
- **Error handling** with helpful messages

### Technical Implementation
- **State management** for search filters and results
- **API integration** with the provided search endpoint
- **Performance optimization** (debouncing, efficient re-renders)
- **Clean component architecture**

## 🔧 Backend API Reference

The search API is already implemented at `/api/search`. Here's how to use it:

### GET `/api/search`

**Query Parameters:**
- `query` - Search term
- `category` - Filter by category
- `tags` - Comma-separated list of tags
- `sortBy` - One of: `relevance`, `price-asc`, `price-desc`, `rating`, `newest`
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `featured` - Filter for featured items (`true`/`false`)

**Example:**
```javascript
const response = await fetch('/api/search?query=headphones&category=Electronics&sortBy=price-asc');
const data = await response.json();
```

**Response Format:**
```typescript
{
  items: SearchItem[];           // Array of search results
  total: number;                 // Total number of results
  suggestions: string[];         // Search suggestions for autocomplete
  facets: {                     // Available filter options
    categories: Array<{ name: string; count: number }>;
    tags: Array<{ name: string; count: number }>;
    priceRange: { min: number; max: number };
  };
}
```

## 🎭 Animation & Interaction Guidelines

Focus on these key areas for maximum impact:

### Essential Animations
- **Search suggestions** - Smooth fade-in/out with stagger effect
- **Filter toggles** - Smooth expand/collapse
- **Loading states** - Skeleton shimmer effects or elegant spinners
- **Result cards** - Hover elevations and micro-interactions
- **Filter selections** - Satisfying selection/deselection feedback

### Micro-interactions
- **Button hover states** with smooth transitions
- **Form interactions** with visual feedback
- **Loading indicators** that feel responsive
- **Empty states** that guide users effectively

## 🎨 Design Principles

- **Responsive**: Works beautifully on mobile, tablet, and desktop
- **Accessible**: Proper ARIA labels, keyboard navigation, focus management
- **Performant**: Smooth 60fps animations, efficient re-renders
- **Polished**: Attention to spacing, typography, and visual hierarchy
- **Intuitive**: Clear information architecture and user flows

## 🚀 Bonus Challenges

If you finish early, consider these enhancements:

- **URL synchronization** - Update URL with search state for shareable links
- **Recent searches** - Local storage for search history
- **Advanced animations** - Page transitions, orchestrated loading sequences
- **Performance optimizations** - Virtualization for large result sets
- **Dark mode support** - With smooth theme transitions
- **Advanced filtering** - Date ranges, multiple selection modes
- **Search analytics** - Track and display search insights

## 📤 Submission

1. **Push your changes** to your forked repository
2. **Deploy** your solution (Vercel, Netlify, etc.)
3. **Email us** with:
   - Link to your GitHub repository
   - Link to your deployed demo
   - Brief notes about your implementation choices and any trade-offs you made

## 🎯 Evaluation Criteria

We'll be looking at:

- **Code Quality** (40%) - Clean, readable, well-structured code with proper TypeScript usage
- **User Experience** (30%) - Smooth interactions, intuitive design, attention to detail
- **Technical Implementation** (20%) - Proper API integration, state management, performance
- **Design & Polish** (10%) - Visual design, animations, responsive behavior

## 💡 Tips for Success

- **Start simple** - Get basic search working first, then add filters and animations
- **Think mobile-first** - Ensure your design works well on small screens
- **Use the TypeScript interfaces** - They'll help you understand the data structure
- **Test the API early** - Make sure you understand the response format
- **Focus on performance** - Debounce search calls, optimize re-renders
- **Pay attention to edge cases** - Empty states, loading states, error handling

## 🤝 Need Help?

- Check the API route implementation (`/src/app/api/search/route.ts`) for data structure examples
- Use the provided TypeScript interfaces (`/src/types/index.ts`) for type safety
- All necessary dependencies are already installed and configured
- The backend handles realistic delays and data - perfect for testing loading states

---

**Good luck!** We're excited to see your implementation. Focus on creating something you'd be proud to show off - this is your chance to demonstrate what makes you an exceptional design engineer.

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Hooks (React Query available if needed)
- **API**: Next.js API Routes
