
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SBSTTA27 from "./pages/SBSTTA27";
import SB8J1 from "./pages/SB8J1";
import SB8J1About from "./pages/SB8J1About";
import SB8J1Statements from "./pages/SB8J1Statements";
import SB8J1Documents from "./pages/SB8J1Documents";
import SB8J1News from "./pages/SB8J1News";
import SB8J1SideEvents from "./pages/SB8J1SideEvents";
import Documents from "./pages/Documents";
import Resources from "./pages/Resources";
import About from "./pages/About";
import News from "./pages/News";
import SideEvents from "./pages/SideEvents";
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
          <Route path="/sbstta-27" element={<SBSTTA27 />} />
          <Route path="/sb8j-1" element={<SB8J1 />} />
          <Route path="/sb8j-1/about" element={<SB8J1About />} />
          <Route path="/sb8j-1/statements" element={<SB8J1Statements />} />
          <Route path="/sb8j-1/documents" element={<SB8J1Documents />} />
          <Route path="/sb8j-1/news" element={<SB8J1News />} />
          <Route path="/sb8j-1/side-events" element={<SB8J1SideEvents />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/side-events" element={<SideEvents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
