import React from "react";
import DataCard from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Medal, Trophy, User } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <section className="mb-8">
        <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-police-blue to-police-blue/60"></div>
          <img 
            src="/lovable-uploads/66ecc3ef-9576-4c77-8d3e-032923ad01ef.png" 
            alt="AIPSCB Banner" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome to AIPSCB</h1>
            <p className="text-white/80 max-w-2xl">
              All India Police Sports Control Board - Athlete Dashboard
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button className="bg-white text-police-blue hover:bg-white/90">
                View Profile
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="section-heading text-police-blue">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/profile">
            <DataCard className="hover:border-police-blue hover:border cursor-pointer h-full">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 rounded-full bg-police-blue/10 flex items-center justify-center mb-3">
                  <User className="h-6 w-6 text-police-blue" />
                </div>
                <h3 className="font-semibold">Profile</h3>
                <p className="text-sm text-gray-500 text-center mt-1">
                  View and edit your personal details
                </p>
              </div>
            </DataCard>
          </Link>
          
          <Link to="/sports">
            <DataCard className="hover:border-police-blue hover:border cursor-pointer h-full">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 rounded-full bg-police-blue/10 flex items-center justify-center mb-3">
                  <Trophy className="h-6 w-6 text-police-blue" />
                </div>
                <h3 className="font-semibold bg-black text-white px-2 py-1 rounded">Sports</h3>
                <p className="text-sm text-gray-500 text-center mt-1">
                  Manage your sports and events
                </p>
              </div>
            </DataCard>
          </Link>
          
          <Link to="/achievements">
            <DataCard className="hover:border-police-blue hover:border cursor-pointer h-full">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 rounded-full bg-police-blue/10 flex items-center justify-center mb-3">
                  <Award className="h-6 w-6 text-police-blue" />
                </div>
                <h3 className="font-semibold">Achievements</h3>
                <p className="text-sm text-gray-500 text-center mt-1">
                  View your performance records
                </p>
              </div>
            </DataCard>
          </Link>
          
          <Link to="/calendar">
            <DataCard className="hover:border-police-blue hover:border cursor-pointer h-full">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 rounded-full bg-police-blue/10 flex items-center justify-center mb-3">
                  <Calendar className="h-6 w-6 text-police-blue" />
                </div>
                <h3 className="font-semibold">Calendar</h3>
                <p className="text-sm text-gray-500 text-center mt-1">
                  View upcoming events and schedules
                </p>
              </div>
            </DataCard>
          </Link>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="section-heading text-police-blue">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DataCard className="col-span-2">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded bg-police-blue/10 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-police-blue" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">68th All India Police Hockey Championship</h3>
                <p className="text-gray-600">April 15-25, 2025 | Delhi</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-police-blue/10 text-police-blue rounded-full">Hockey</span>
                  <span className="text-xs px-2 py-1 bg-police-red/10 text-police-red rounded-full">National Level</span>
                </div>
                <div className="mt-4">
                  <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">View Details</Button>
                </div>
              </div>
            </div>
          </DataCard>
          
          <DataCard>
            <h3 className="font-semibold mb-4">Your Medal Count</h3>
            <div className="flex justify-around">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mb-1">
                  <Medal className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-semibold">5</span>
                <span className="text-xs text-gray-500">Gold</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mb-1">
                  <Medal className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-semibold">3</span>
                <span className="text-xs text-gray-500">Silver</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center mb-1">
                  <Medal className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-semibold">7</span>
                <span className="text-xs text-gray-500">Bronze</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link to="/medals" className="text-sm text-police-blue hover:underline">
                View all medals →
              </Link>
            </div>
          </DataCard>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="section-heading text-police-blue">Recent Notifications</h2>
        <DataCard>
          <div className="space-y-4">
            <div className="border-b pb-3">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Tournament Schedule Update</h4>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                The schedule for the upcoming National Games has been updated. Please check the calendar for details.
              </p>
            </div>
            
            <div className="border-b pb-3">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">New Achievement Recorded</h4>
                <span className="text-xs text-gray-500">1 week ago</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                Your gold medal in the recent Police Games has been added to your achievements.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Important Announcement</h4>
                <span className="text-xs text-gray-500">2 weeks ago</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                All athletes are requested to submit their medical clearance forms before the upcoming events.
              </p>
            </div>
            
            <div className="text-right mt-2">
              <Link to="/communication" className="text-sm text-police-blue hover:underline">
                View all notifications →
              </Link>
            </div>
          </div>
        </DataCard>
      </section>
    </div>
  );
};

export default Dashboard;
