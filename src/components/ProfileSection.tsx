
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalInfoCard from "@/components/profile/PersonalInfoCard";
import PhotoIdCard from "@/components/profile/PhotoIdCard";
import ContactInfoCard from "@/components/profile/ContactInfoCard";
import ServiceDetailsCard from "@/components/profile/ServiceDetailsCard";

const ProfileSection = () => {
  return (
    <div className="animate-fade-in">
      <ProfileHeader />
      
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="w-full bg-white shadow-sm mb-6 rounded-lg p-1">
          <TabsTrigger value="personal" className="flex-1">Personal Information</TabsTrigger>
          <TabsTrigger value="contact" className="flex-1">Contact Details</TabsTrigger>
          <TabsTrigger value="service" className="flex-1">Service Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PersonalInfoCard />
            <PhotoIdCard />
          </div>
        </TabsContent>
        
        <TabsContent value="contact">
          <ContactInfoCard />
        </TabsContent>
        
        <TabsContent value="service">
          <ServiceDetailsCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileSection;
