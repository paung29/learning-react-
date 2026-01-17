# 📘 React + TypeScript Learning Repository

Welcome to my comprehensive React learning journey! This repository is a collection of hands-on projects and examples, organized progressively from fundamentals to advanced concepts. Each project focuses on practical React development with TypeScript, modern tooling, and real-world patterns.

---

## 📚 Project Roadmap

### Phase 1: Foundation (Projects 1-6)

#### [rew-01-hello-react](./rew-01-hello-react/)
**Topic:** React Fundamentals + TypeScript Setup  
**Tech Stack:** React 19, TypeScript, Vite, ESLint  
**Key Learning:**
- Setting up a React + TypeScript project with Vite
- Basic component structure and JSX syntax
- Hot Module Replacement (HMR) for development
- TypeScript types for React components

**Run:** 
```bash
cd rew-01-hello-react && npm install && npm run dev
```

---

#### [rew-02-components](./rew-02-components/)
**Topic:** Component Architecture & Reusability  
**Tech Stack:** React 19, TypeScript, Vite  
**Key Learning:**
- Creating functional components
- Props and component composition
- Type-safe props with TypeScript interfaces
- Component best practices and organization

**Run:**
```bash
cd rew-02-components && npm install && npm run dev
```

---

#### [rew-03-responding-event](./rew-03-responding-event/)
**Topic:** Event Handling & User Interaction  
**Tech Stack:** React 19, TypeScript, Vite  
**Key Learning:**
- Handling click, change, and submit events
- Event handler typing with TypeScript
- Preventing default behavior
- Event delegation and bubbling

**Run:**
```bash
cd rew-03-responding-event && npm install && npm run dev
```

---

#### [rew-04-component-state](./rew-04-component-state/)
**Topic:** State Management with Hooks  
**Tech Stack:** React 19, TypeScript, Vite  
**Key Learning:**
- `useState` hook for managing local state
- State updates and batching
- Using `useReducer` for complex state logic
- State patterns and best practices

**Run:**
```bash
cd rew-04-component-state && npm install && npm run dev
```

---

#### [rew-05-state-management](./rew-05-state-management/)
**Topic:** Intermediate State Patterns  
**Tech Stack:** React 19, TypeScript, Vite  
**Key Learning:**
- Lifting state up to parent components
- Context API for prop drilling solutions
- Component composition patterns
- State synchronization across components

**Run:**
```bash
cd rew-05-state-management && npm install && npm run dev
```

---

#### [rew-06-effects](./rew-06-effects/)
**Topic:** Side Effects & Lifecycle Management  
**Tech Stack:** React 19, TypeScript, Vite  
**Key Learning:**
- `useEffect` hook for side effects
- Dependency arrays and cleanup functions
- Managing timers and intervals
- Handling async operations in effects

**Run:**
```bash
cd rew-06-effects && npm install && npm run dev
```

---

### Phase 2: Practical Applications (Projects 7-9)

#### [rew-07-task-management-web](./rew-07-task-management-web/)
**Topic:** Full-Featured Application  
**Tech Stack:** React 19, TypeScript, Vite, React Router, Axios, React Hook Form  
**Key Learning:**
- Combining multiple hooks and libraries
- API integration with Axios
- Client-side routing with React Router
- Real-world form handling with React Hook Form
- Application state management

**Run:**
```bash
cd rew-07-task-management-web && npm install && npm run dev
```

---

#### [rew-08-task-management-web](./rew-08-task-management-web/)
**Topic:** Advanced UI Components & Styling  
**Tech Stack:** React 19, TypeScript, Vite, Component Library  
**Key Learning:**
- Advanced component patterns
- Custom component libraries
- Component composition and reusability
- Styling strategies with modern tools

**Run:**
```bash
cd rew-08-task-management-web && npm install && npm run dev
```

---

#### [rew-09-learning-forms](./rew-09-learning-forms/)
**Topic:** Advanced Form Management & UI Library Integration  
**Tech Stack:** React 19, TypeScript, Vite, TailwindCSS, Shadcn UI, Radix UI, React Hook Form, Zod  
**Key Learning:**
- Complex form validation with Zod
- Shadcn UI component system
- Advanced React Hook Form patterns
- TailwindCSS for styling
- Date picker, selects, checkboxes, and custom inputs
- Form validation and error handling

**Features:**
- Form builder with various input types
- Real-time validation
- Type-safe form handling
- Accessible UI components from Radix UI

**Run:**
```bash
cd rew-09-learning-forms && npm install && npm run dev
```

---

### Phase 3: Routing & Full-Stack (Projects 10-12)

#### [rew-10-react-router](./rew-10-react-router/)
**Topic:** React Router v7 - Advanced Routing  
**Tech Stack:** React 19, TypeScript, React Router v7, Ant Design, TailwindCSS, React Hook Form, Zod  
**Key Learning:**
- Modern React Router v7 setup
- Server-side rendering (SSR)
- Data loading and mutations
- Nested routing and layouts
- Route protection and guards
- Integration with Ant Design components
- Form validation with Zod

**Features:**
- Full-stack ready with Node.js integration
- Hot Module Replacement (HMR)
- Asset bundling and optimization
- TypeScript throughout

**Run:**
```bash
cd rew-10-react-router && npm install && npm run dev
```

**Build:**
```bash
cd rew-10-react-router && npm run build
```

---

#### [rew-11-route-module](./rew-11-route-module/)
**Topic:** React Router - Module & Loader Pattern  
**Tech Stack:** React 19, TypeScript, React Router v7, TailwindCSS  
**Key Learning:**
- Route-based code splitting
- Data loaders in React Router
- Module-based routing architecture
- Lazy loading components and routes
- Dynamic route parameters

**Run:**
```bash
cd rew-11-route-module && npm install && npm run dev
```

---

#### [rew-12-route-with-next](./rew-12-route-with-next/)
**Topic:** Next.js - Full-Stack React Framework  
**Tech Stack:** Next.js 15, TypeScript, React 19, TailwindCSS  
**Key Learning:**
- Next.js App Router and layouts
- File-based routing system
- Server and Client components
- API routes
- Image optimization
- Font optimization
- Built-in performance features

**Features:**
- Next.js 15 with latest React
- Built-in CSS support with TailwindCSS
- Automatic code splitting
- Static and dynamic rendering
- API route handlers

**Run:**
```bash
cd rew-12-route-with-next && npm install && npm run dev
```

---

## 🗂️ Full-Stack Projects

### [ep03-03-fullstack](./ep03-03-fullstack/)
**Topic:** Full-stack Web Applications  
**Includes:**
- **app01-courses:** Complete course management system
- **app03-security:** Authentication and authorization patterns

---

## 🎯 Topics Covered

### 🧱 Core Concepts
- ✅ React Fundamentals (Components, JSX, Props)
- ✅ TypeScript for React (Typing components, props, state)
- ✅ Functional Components and Hooks
- ✅ Event Handling and User Interaction
- ✅ Component Lifecycle and `useEffect`
- ✅ State Management with `useState` and `useReducer`
- ✅ Refs and Direct DOM Access with `useRef`

### 🌐 Routing
- ✅ React Router v7 (Client-side routing)
- ✅ Nested Routes and Layouts
- ✅ Dynamic Routes and Parameters
- ✅ Data Loaders and Actions
- ✅ Server-Side Rendering (SSR)
- ✅ Next.js App Router and File-based Routing
- ✅ Route Protection and Guards

### 📦 Forms & Validation
- ✅ React Hook Form (Efficient form management)
- ✅ Zod (Runtime schema validation)
- ✅ Form validation patterns
- ✅ Custom inputs and components
- ✅ Real-time validation

### 🔗 API Integration
- ✅ Axios for HTTP requests
- ✅ Handling loading, success, and error states
- ✅ Async/await patterns
- ✅ Error handling and retry logic

### 🧠 State Management
- ✅ Context API and Context Hooks
- ✅ Custom Hooks for state logic
- ✅ Lifting state up
- ✅ State synchronization patterns

### 🎨 UI Libraries & Styling
- ✅ Shadcn UI (Radix UI components)
- ✅ Ant Design (Enterprise component library)
- ✅ TailwindCSS (Utility-first CSS)
- ✅ Custom component styling
- ✅ Responsive design patterns

### ⚙️ Development Tools
- ✅ Vite (Fast build tool)
- ✅ TypeScript (Type safety)
- ✅ ESLint (Code quality)
- ✅ Hot Module Replacement (HMR)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Basic JavaScript knowledge
- Familiarity with React concepts is helpful

### Quick Start

Each project is independent. To run any project:

```bash
# Navigate to the project directory
cd [project-name]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

---

## 📖 Learning Path Recommendations

**Beginner:**
Start with projects 1-6 to build a solid foundation in React and hooks.

**Intermediate:**
Move to projects 7-9 to see how everything works together in real applications.

**Advanced:**
Explore projects 10-12 for routing, full-stack patterns, and production-ready setups.

---

## 🔧 Common Commands

### Development
```bash
npm run dev      # Start development server with HMR
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### TypeScript
```bash
npm run typecheck  # Type check without emitting
tsc -b            # Build and check types
```

---

## 📁 Project Structure Pattern

Most Vite projects follow this structure:
```
project-name/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components (if applicable)
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project-specific documentation
```

---

## 🎓 Key Concepts & Patterns

### React Hooks Used
- `useState` - Local component state
- `useEffect` - Side effects and lifecycle
- `useReducer` - Complex state management
- `useContext` - Sharing data across components
- `useRef` - Direct DOM access
- `useCallback` - Memoized callbacks
- `useMemo` - Memoized values
- Custom hooks - Logic reuse

### Design Patterns
- Container/Presentational Components
- Custom Hooks for logic extraction
- Render Props
- Higher-Order Components (HOCs)
- Compound Components

### TypeScript Patterns
- Union types for props variants
- Discriminated unions for state
- Generic components
- Type inference
- Const assertions for literal types

---

## 🌟 Key Technologies & Versions

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.x | UI library |
| TypeScript | ~5.8.3 | Type safety |
| Vite | 6.x+ | Build tool |
| React Router | 7.x | Client-side routing |
| Next.js | 15.x | Full-stack framework |
| React Hook Form | 7.x | Form management |
| Zod | 4.x | Schema validation |
| TailwindCSS | 4.x | Utility CSS |
| Shadcn UI | Latest | Component library |
| Ant Design | 5.x | Enterprise components |
| Axios | 1.x | HTTP client |

---

## 📝 Notes & Best Practices

### TypeScript Tips
- Always type your props with interfaces or types
- Use `React.FC<Props>` for typed functional components
- Leverage type inference where possible
- Use discriminated unions for variant patterns

### React Tips
- Keep components small and focused
- Extract custom hooks for reusable logic
- Use event delegation for performance
- Memoize expensive computations with `useMemo`

### Performance Tips
- Code split with React Router loaders
- Use lazy loading for routes
- Optimize images and assets
- Monitor bundle size with Vite

---

## 🤝 Resources & References

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vite Documentation](https://vitejs.dev)
- [Shadcn UI](https://ui.shadcn.com)
- [Zod Documentation](https://zod.dev)
- [React Hook Form](https://react-hook-form.com)

---

## 🚀 Goals

- ✅ Master React fundamentals and advanced patterns
- ✅ Build type-safe applications with TypeScript
- ✅ Learn modern routing with React Router and Next.js
- ✅ Implement production-ready forms and validation
- ✅ Integrate with APIs and external services
- ✅ Build scalable component systems
- ✅ Use this repo as a reference for future projects

---

## 📞 Feedback & Contribution

This is a personal learning repository. Suggestions and feedback are always welcome!

---

**Happy Learning! 🚀**
