import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import VisionGoals from "./pages/VisionGoals";
import PartnerCompanies from "./pages/PartnerCompanies";
import VehicleInsurance from "./pages/VehicleInsurance";
import HealthInsurance from "./pages/HealthInsurance";
import BecomeAgent from "./pages/BecomeAgent";
import Careers from "./pages/Careers";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import EmployeePortal from "./pages/EmployeePortal";
import AgentPortal from "./pages/AgentPortal";
import About from "./pages/About";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/vision-goals" element={<VisionGoals />} />
          <Route path="/partner-companies" element={<PartnerCompanies />} />
          <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/become-agent" element={<BecomeAgent />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee-portal" element={<EmployeePortal />} />
          <Route path="/AgentPortal" element={<AgentPortal />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote" element={<Quote />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
