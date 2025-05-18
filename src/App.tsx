
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refunds from "./pages/Refunds";
import DMCA from "./pages/DMCA";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import MinecraftHosting from "./pages/services/MinecraftHosting";
import VPSHosting from "./pages/services/VPSHosting";
import DedicatedServers from "./pages/services/DedicatedServers";
import DiscordBotHosting from "./pages/services/DiscordBotHosting";

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Legal pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/dmca" element={<DMCA />} />
          
          {/* Company pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          
          {/* Services pages */}
          <Route path="/services/minecraft" element={<MinecraftHosting />} />
          <Route path="/services/vps" element={<VPSHosting />} />
          <Route path="/services/dedicated" element={<DedicatedServers />} />
          <Route path="/services/discord" element={<DiscordBotHosting />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
