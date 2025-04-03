
import React from "react";
import DataCard from "@/components/ui/DataCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfoCard = () => {
  return (
    <DataCard>
      <h3 className="section-subheading flex items-center gap-2 text-police-blue font-bold text-black">
        <Phone className="h-5 w-5" />
        Contact Information
      </h3>
      <div className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <div className="flex gap-2">
              <Input value="+91 9876543210" readOnly />
              <Button size="icon" variant="outline">
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Email Address</Label>
            <div className="flex gap-2">
              <Input value="athlete@delhipolice.gov.in" readOnly />
              <Button size="icon" variant="outline">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Residential Address</Label>
          <div className="flex gap-2">
            <Input value="123 Police Colony, New Delhi - 110001" readOnly />
            <Button size="icon" variant="outline">
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>City</Label>
            <Input value="New Delhi" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>State</Label>
            <Input value="Delhi" readOnly />
          </div>
          
          <div className="space-y-2">
            <Label>Pin Code</Label>
            <Input value="110001" readOnly />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Emergency Contact</Label>
          <Input value="+91 9876543211" readOnly />
        </div>
      </div>
    </DataCard>
  );
};

export default ContactInfoCard;
