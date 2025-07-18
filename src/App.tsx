import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Advisory from "./pages/Advisory";
import Research from "./pages/Research";
import Essays from "./pages/Essays";
import Essay from "./pages/Essay";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import Teaching from "./pages/Teaching";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/research" element={<Research />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/essays/:slug" element={<Essay />} />
          <Route path="/book" element={<Book />} />
          <Route path="/teaching" element={<Teaching />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
