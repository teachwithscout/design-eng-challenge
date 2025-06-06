# Scout Design Engineer Assessment: Interactive Search Interface

Welcome to the Scout Design Engineer take-home assessment! You'll be building an interactive search and filtering interface from scratch that showcases both your technical skills and design sensibilities.

**We suggest spending up to 2 hours on this take-home assessment, but you may spend as long as you'd like.**

## 🎯 Objective

Create a buttery-smooth, interactive search experience that demonstrates your ability to create delightful, beautiful, and intuitive frontend experiences.

## 🚀 Getting Started

1. **Fork this repository** to your GitHub account - **important: make your fork private!**
2. **Clone** your fork locally
3. **Install dependencies**: `npm install`
4. **Start the development server**: `npm run dev`
5. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 📋 What's Already Built

- ✅ **Complete backend API** at `/api/search` with realistic data and search logic
- ✅ **TypeScript interfaces** for type safety (`/src/types/index.ts`)
- ✅ **Project structure** with Next.js 14, TypeScript, Tailwind CSS
- ✅ **Dependencies**: Framer Motion, Lucide React icons, React Query (you can add whatever dependencies you'd like to use)

## 🎨 What You Need to Build

Design and implement a complete search interface with the following features:

- **Search bar** with real-time search
- **Filters** with categories, tags, price range, and sorting options
- **Results grid** displaying search results with smooth animations

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

## 📤 Submission

1. **Push your changes** to your private forked repository
2. **Deploy** your solution (Vercel, Netlify, etc.)
3. **Email us** with:
   - Link to your GitHub repository (make sure to invite `@nfichter` as a collaborator)
   - Link to your deployed demo
   - Brief notes about your implementation choices and any trade-offs you made

## 🎯 Evaluation Criteria

We'll be looking at:

- **User Experience** - Smooth interactions, intuitive design, attention to detail
- **Design & Polish** - Visual design, animations, responsive behavior
- **Technical Implementation** - Proper API integration, state management, performance
- **Code Quality** - Clean, readable, well-structured code with proper TypeScript usage

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
