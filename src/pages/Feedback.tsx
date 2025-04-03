
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FeedbackSection from "@/components/FeedbackSection";

const Feedback = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`flex-1 overflow-auto p-4 md:p-6 transition-all duration-300 ${sidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'}`}>
          <FeedbackSection />
        </main>
      </div>
    </div>
  );
};

export default Feedback;
