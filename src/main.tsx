
import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
import './index.css'

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Create a loading indicator
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-navy-dark to-redox-dark text-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-xl font-medium">Loading REDOX Devs...</p>
    </div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingFallback />}>
    <App />
  </Suspense>
);
