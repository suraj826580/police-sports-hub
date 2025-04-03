
import DataCard from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Home, Mail, MapPin, Phone, User } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="h-32 bg-gradient-to-r from-police-blue to-blue-500"></div>
        <div className="relative px-6 py-4">
          <div className="absolute -top-16 left-6 w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <User className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          
          <div className="ml-28 -mt-2">
            <h1 className="text-2xl font-bold">Athlete Name</h1>
            <p className="text-gray-600">Delhi Police</p>
          </div>
          
          <div className="flex justify-end mt-4">
            <Button className="bg-police-blue hover:bg-police-blue/90">Edit Profile</Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="w-full bg-white shadow-sm mb-6 rounded-lg p-1">
          <TabsTrigger value="personal" className="flex-1">Personal Information</TabsTrigger>
          <TabsTrigger value="contact" className="flex-1">Contact Details</TabsTrigger>
          <TabsTrigger value="service" className="flex-1">Service Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataCard className="h-full">
              <h3 className="section-subheading flex items-center gap-2 text-police-blue">
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
            
            <DataCard className="h-full">
              <h3 className="section-subheading flex items-center gap-2 text-police-blue">
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
          </div>
        </TabsContent>
        
        <TabsContent value="contact">
          <DataCard>
            <h3 className="section-subheading flex items-center gap-2 text-police-blue">
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
        </TabsContent>
        
        <TabsContent value="service">
          <DataCard>
            <h3 className="section-subheading flex items-center gap-2 text-police-blue">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileSection;
