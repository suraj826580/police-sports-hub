
import React from "react";
import DataCard from "@/components/ui/DataCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase } from "lucide-react";

const ServiceDetailsCard = () => {
  return (
    <DataCard>
      <h3 className="section-subheading flex items-center gap-2 text-police-blue font-bold text-black">
        <Briefcase className="h-5 w-5" />
        Service Details
      </h3>
      <div className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Rank/Designation</Label>
            <Input value="Inspector" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>Service Identification Number</Label>
            <Input value="DEL/POL/2010/5678" readOnly />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Department/Unit</Label>
            <Input value="Law & Order Division" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>State/CPO</Label>
            <Input value="Delhi Police" readOnly />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Date of Joining</Label>
            <Input value="01/01/2010" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>Years of Service</Label>
            <Input value="15 years" readOnly />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Current Posting</Label>
          <Input value="Police Headquarters, ITO, Delhi" readOnly />
        </div>
      </div>
    </DataCard>
  );
};

export default ServiceDetailsCard;
