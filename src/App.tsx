
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TechNovaLaunch from "./pages/projects/TechNovaLaunch";
import FinEdgeBanking from "./pages/projects/FinEdgeBanking";
import PulseHealthApp from "./pages/projects/PulseHealthApp";
import VedicAyurveda from "./pages/projects/VedicAyurveda";
import SwiftLearnEducation from "./pages/projects/SwiftLearnEducation";
import EcoSolutions from "./pages/projects/EcoSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/technova-launch" element={<TechNovaLaunch />} />
          <Route path="/project/finedge-banking" element={<FinEdgeBanking />} />
          <Route path="/project/pulse-health-app" element={<PulseHealthApp />} />
          <Route path="/project/vedic-ayurveda" element={<VedicAyurveda />} />
          <Route path="/project/swiftlearn-education" element={<SwiftLearnEducation />} />
          <Route path="/project/eco-solutions" element={<EcoSolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
