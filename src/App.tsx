import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Preloader } from "@/components/Preloader";
import Index from "./pages/Index";
import Layout from "@/components/Layout";
import About from "./pages/About";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import AchievementsManage from "./pages/AchievementsManage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(() => {
    // Check if we've navigated in this session
    const hasNavigated = sessionStorage.getItem("hasNavigated");
    // Show preloader on initial load or reload (when hasNavigated is null or was cleared)
    return !hasNavigated;
  });

  useEffect(() => {
    // If location.key is not "default", it means we navigated from another page
    if (location.key !== "default") {
      // Mark that we've navigated
      sessionStorage.setItem("hasNavigated", "true");
      setShowPreloader(false);
    } else {
      // Initial load or reload - location.key is "default"
      // Clear the navigation flag so preloader shows
      sessionStorage.removeItem("hasNavigated");
      setShowPreloader(true);
    }
  }, [location.key]);

  // Clear navigation flag on page unload so reloads work
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("hasNavigated");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Prevent scrolling during preloader
  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPreloader]);

  return (
    <>
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}
      {!showPreloader && (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/achievements/manage" element={<AchievementsManage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
