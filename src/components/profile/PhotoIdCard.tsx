
import React from "react";
import DataCard from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const PhotoIdCard = () => {
  return (
    <DataCard className="h-full">
      <h3 className="section-subheading flex items-center gap-2 text-police-blue font-bold text-black">
        <User className="h-5 w-5" />
        Photograph & Identity
      </h3>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="w-40 h-40 rounded-lg bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          <User className="h-20 w-20 text-gray-400" />
        </div>
        <p className="text-sm text-gray-500 mb-4">Passport-sized photograph</p>
        <Button className="w-full">Upload New Photo</Button>
      </div>
    </DataCard>
  );
};

export default PhotoIdCard;
