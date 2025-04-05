
import { createRoot } from 'react-dom/client'
import { lazy, Suspense } from 'react'
import './index.css'
import './styles/budgetCalculator.css'

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Create an improved loading indicator
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-navy-dark to-redox-dark text-white overflow-hidden">
    <div className="text-center relative">
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-redox/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-navy-light/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      
      <div className="relative z-10">
        <div className="flex justify-center items-center mb-6">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-white animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-b-2 border-l-2 border-redox animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }}></div>
            <div className="absolute inset-2 bg-redox/20 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-medium mb-1 animate-fade-in">REDOX Devs</h2>
        <p className="text-white/80 animate-fade-in" style={{ animationDelay: "0.3s" }}>Loading your experience...</p>
      </div>
    </div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingFallback />}>
    <App />
  </Suspense>
);
