
import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <div className="h-32 bg-gradient-to-r from-police-blue to-blue-500"></div>
      <div className="relative px-6 py-4">
        <div className="absolute -top-16 left-6 w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden">
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <User className="h-12 w-12 text-gray-400" />
          </div>
        </div>
        
        <div className="ml-28 -mt-2">
          <h1 className="text-2xl font-bold text-black">Athlete Name</h1>
          <p className="text-gray-600">Delhi Police</p>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button className="bg-police-blue hover:bg-police-blue/90">Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
