
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load page components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TechNovaLaunch = lazy(() => import("./pages/projects/TechNovaLaunch"));
const FinEdgeBanking = lazy(() => import("./pages/projects/FinEdgeBanking"));
const PulseHealthApp = lazy(() => import("./pages/projects/PulseHealthApp"));

// Create a loading fallback for page transitions
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-redox border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-navy-dark">Loading page...</p>
    </div>
  </div>
);

// Create a new QueryClient instance with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// ScrollToTop component to ensure page transitions start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  // Preload key resources
  useEffect(() => {
    // Register service worker for better performance if supported
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/project/technova-launch" element={<TechNovaLaunch />} />
              <Route path="/project/finedge-banking" element={<FinEdgeBanking />} />
              <Route path="/project/pulse-health-app" element={<PulseHealthApp />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
