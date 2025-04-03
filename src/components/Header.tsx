
import { Button } from "@/components/ui/button";
import { Bell, Menu, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [notificationCount] = useState(3);
  const [messageCount] = useState(2);

  return (
    <header className="header-gradient text-white py-2 px-4 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="text-white hover:bg-white/10"
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <div className="w-full h-full flex items-center justify-center rounded-full bg-white">
                <img 
                  src="/lovable-uploads/66ecc3ef-9576-4c77-8d3e-032923ad01ef.png" 
                  alt="AIPSCB Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
            <Link to="/" className="font-bold text-xl md:text-2xl hidden sm:block">
              All India Police Sports Control Board
            </Link>
            <Link to="/" className="font-bold text-xl md:text-2xl sm:hidden">
              AIPSCB
            </Link>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
            <MessageSquare className="h-5 w-5" />
            {messageCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {messageCount}
              </span>
            )}
          </Button>
          
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
