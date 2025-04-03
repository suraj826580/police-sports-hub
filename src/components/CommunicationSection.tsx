
import DataCard from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Bell, MessageCircle, MessageSquare, Send } from "lucide-react";

const CommunicationSection = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6 text-police-blue">Communication Center</h1>
      
      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="w-full bg-white shadow-sm mb-6 rounded-lg p-1">
          <TabsTrigger value="notifications" className="flex-1">Notifications</TabsTrigger>
          <TabsTrigger value="messages" className="flex-1">Messages</TabsTrigger>
          <TabsTrigger value="announcements" className="flex-1">Announcements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="notifications">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <DataCard>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Bell className="h-5 w-5 text-police-blue" />
                  Recent Notifications
                </h3>
                
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">Tournament Registration Confirmed</h4>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Your registration for the 68th All India Police Hockey Championship has been confirmed. Please check your email for detailed information.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Mark as Read</Button>
                      <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">View Details</Button>
                    </div>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">Certificate Issued</h4>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Your participation certificate for the 67th All India Police Hockey Championship is now available for download.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Mark as Read</Button>
                      <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">Download Certificate</Button>
                    </div>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">Schedule Update</h4>
                      <span className="text-xs text-gray-500">3 days ago</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      There has been a change in the schedule for the upcoming National Police Games. Please check the updated calendar.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Mark as Read</Button>
                      <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">View Calendar</Button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium">Achievement Recorded</h4>
                      <span className="text-xs text-gray-500">1 week ago</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Your gold medal achievement in the 67th All India Police Hockey Championship has been added to your profile.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Mark as Read</Button>
                      <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">View Profile</Button>
                    </div>
                  </div>
                </div>
              </DataCard>
            </div>
            
            <div>
              <DataCard>
                <h3 className="font-semibold mb-4">Notification Settings</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Event Registrations</label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Schedule Updates</label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Achievement Records</label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Certificate Issuance</label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="text-sm">General Announcements</label>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  
                  <div className="pt-3 border-t mt-3">
                    <Button className="w-full bg-police-blue hover:bg-police-blue/90">Save Preferences</Button>
                  </div>
                </div>
              </DataCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="messages">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <DataCard>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Contacts</h3>
                  <Button size="sm" variant="outline">New Message</Button>
                </div>
                
                <div className="mb-4">
                  <Input placeholder="Search contacts..." />
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer bg-blue-50">
                    <div className="w-10 h-10 rounded-full bg-police-blue flex items-center justify-center">
                      <span className="text-white font-semibold">SC</span>
                    </div>
                    <div>
                      <p className="font-medium">Sports Coordinator</p>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">HC</span>
                    </div>
                    <div>
                      <p className="font-medium">Hockey Coach</p>
                      <p className="text-xs text-gray-500">Last seen 2h ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">TM</span>
                    </div>
                    <div>
                      <p className="font-medium">Team Manager</p>
                      <p className="text-xs text-gray-500">Last seen yesterday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">AT</span>
                    </div>
                    <div>
                      <p className="font-medium">Athletic Trainer</p>
                      <p className="text-xs text-gray-500">Offline</p>
                    </div>
                  </div>
                </div>
              </DataCard>
            </div>
            
            <div className="md:col-span-2">
              <DataCard className="h-full flex flex-col">
                <div className="border-b pb-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-police-blue flex items-center justify-center">
                      <span className="text-white font-semibold">SC</span>
                    </div>
                    <div>
                      <p className="font-medium">Sports Coordinator</p>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto mb-4 space-y-3 max-h-[400px]">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Hello! I wanted to inform you about the upcoming hockey tournament registration deadline.</p>
                      <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-police-blue text-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Thank you for the reminder. When is the last date for registration?</p>
                      <p className="text-xs text-white/70 mt-1">10:32 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">The registration closes on April 5th, 2025. I would recommend completing it by next week to avoid any last-minute issues.</p>
                      <p className="text-xs text-gray-500 mt-1">10:35 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-police-blue text-white rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Great, I'll complete it by this weekend. Do I need to submit any additional documents this year?</p>
                      <p className="text-xs text-white/70 mt-1">10:38 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Yes, this year you need to submit an updated medical fitness certificate. I've attached the format for reference.</p>
                      <div className="mt-2 bg-white rounded p-2 flex items-center gap-2 text-xs text-blue-600">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M13 2v7h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Medical_Certificate_Format.pdf
                      </div>
                      <p className="text-xs text-gray-500 mt-1">10:42 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex gap-2">
                    <Textarea placeholder="Type your message..." className="min-h-[60px]" />
                    <Button size="icon" className="h-[60px] w-[60px] bg-police-blue hover:bg-police-blue/90">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </DataCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="announcements">
          <DataCard>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-police-blue" />
              Important Announcements
            </h3>
            
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-red-700">URGENT: Change in Venue for Hockey Championship</h4>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  Due to unforeseen circumstances, the venue for the 68th All India Police Hockey Championship has been changed from Delhi to Chandigarh. The dates remain the same (April 15-25, 2025).
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  All registered participants must acknowledge this change. Travel arrangements will be updated accordingly.
                </p>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">Acknowledge</Button>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">National Games Selection Trials</h4>
                  <span className="text-xs text-gray-500">1 week ago</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Selection trials for the upcoming National Games will be held from May 5-10, 2025, at various centers across the country. Interested athletes must register by April 15, 2025.
                </p>
                <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">Register for Trials</Button>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">New Policy for Sports Leaves</h4>
                  <span className="text-xs text-gray-500">2 weeks ago</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  The Ministry of Home Affairs has updated the policy regarding sports leaves for police personnel. The new policy provides additional leave days for national-level competitions.
                </p>
                <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">Read Policy</Button>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium">Sports Equipment Grant</h4>
                  <span className="text-xs text-gray-500">1 month ago</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  A new grant has been approved for purchasing sports equipment for national-level athletes. Eligible athletes can apply for up to ₹50,000 for equipment purchases.
                </p>
                <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">Apply for Grant</Button>
              </div>
            </div>
          </DataCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunicationSection;
