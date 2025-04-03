
import { cn } from "@/lib/utils";
import { 
  Award, 
  Calendar, 
  Home, 
  MessageSquare, 
  User, 
  Info, 
  Trophy, 
  Settings,
  Medal,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { label: "Dashboard", icon: Home, path: "/" },
    { label: "Profile", icon: User, path: "/profile" },
    { label: "Sports", icon: Trophy, path: "/sports" },
    { label: "Achievements", icon: Award, path: "/achievements" },
    { label: "Medal Count", icon: Medal, path: "/medals" },
    { label: "Sports Calendar", icon: Calendar, path: "/calendar" },
    { label: "Communication", icon: MessageSquare, path: "/communication" },
    { label: "Feedback", icon: MessageCircle, path: "/feedback" },
  ];

  const secondaryMenuItems = [
    { label: "Help", icon: HelpCircle, path: "/help" },
    { label: "Settings", icon: Settings, path: "/settings" },
    { label: "About AIPSCB", icon: Info, path: "/about" },
  ];

  return (
    <aside
      className={cn(
        "sidebar-gradient fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 transform transition-transform duration-300 ease-in-out z-40 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-police-blue" />
              </div>
              <div className="text-white">
                <p className="font-semibold">Athlete Name</p>
                <p className="text-xs text-white/70">Delhi Police</p>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto">
          <ul className="px-2 space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-2.5 rounded-lg text-white hover:bg-white/10 transition-colors",
                    isActive(item.path) && "bg-white/20 font-semibold"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <ul className="px-2 space-y-1">
              {secondaryMenuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-2.5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors",
                      isActive(item.path) && "bg-white/10 text-white font-semibold"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        <div className="p-4 text-white/70 text-xs text-center">
          <p>© 2025 All India Police Sports Control Board</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
