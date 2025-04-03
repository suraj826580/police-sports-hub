
import React from "react";
import DataCard from "@/components/ui/DataCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

const PersonalInfoCard = () => {
  return (
    <DataCard className="h-full">
      <h3 className="section-subheading flex items-center gap-2 text-police-blue font-bold text-black">
        <User className="h-5 w-5" />
        Personal Information
      </h3>
      <div className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input value="John Doe" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input value="15/04/1985" readOnly />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Gender</Label>
            <Input value="Male" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>Blood Group</Label>
            <Input value="O+" readOnly />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Nationality</Label>
            <Input value="Indian" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>Identification Number</Label>
            <Input value="AADHR123456789" readOnly />
          </div>
        </div>
      </div>
    </DataCard>
  );
};

export default PersonalInfoCard;
