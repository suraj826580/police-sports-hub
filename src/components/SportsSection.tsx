
import DataCard from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, Flag, Medal, Trophy } from "lucide-react";

const SportsSection = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6 text-police-blue">Sports Information</h1>
      
      <Tabs defaultValue="primary" className="w-full">
        <TabsList className="w-full bg-white shadow-sm mb-6 rounded-lg p-1">
          <TabsTrigger value="primary" className="flex-1">Primary Sport</TabsTrigger>
          <TabsTrigger value="secondary" className="flex-1">Secondary Sports</TabsTrigger>
          <TabsTrigger value="events" className="flex-1">Events & Tournaments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="primary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DataCard className="md:col-span-2 h-full">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-police-blue/10 flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-8 w-8 text-police-blue" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">Hockey</h3>
                  <p className="text-gray-600 mb-4">Primary Sport</p>
                  
                  <h4 className="font-medium mb-2">Specialization</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Forward</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Center Forward</span>
                  </div>
                  
                  <h4 className="font-medium mb-2">Experience</h4>
                  <p className="text-gray-600 mb-4">12 years</p>
                  
                  <h4 className="font-medium mb-2">Coach</h4>
                  <p className="text-gray-600">Rajinder Singh</p>
                </div>
              </div>
            </DataCard>
            
            <DataCard className="h-full">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Medal className="h-5 w-5 text-police-blue" />
                Medal Count
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    Gold
                  </span>
                  <span className="font-semibold">5</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    Silver
                  </span>
                  <span className="font-semibold">3</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-amber-600"></div>
                    Bronze
                  </span>
                  <span className="font-semibold">7</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium mb-2">National Records</h4>
                <p className="text-gray-600 text-sm">
                  Highest goals in Police Games 2022
                </p>
              </div>
            </DataCard>
          </div>
          
          <div className="mt-6">
            <DataCard>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-police-blue" />
                Upcoming Tournaments
              </h3>
              
              <div className="divide-y">
                <div className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">68th All India Police Hockey Championship</h4>
                      <p className="text-gray-600 text-sm">April 15-25, 2025 | Delhi</p>
                    </div>
                    <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">
                      Details
                    </Button>
                  </div>
                </div>
                
                <div className="py-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">National Police Games</h4>
                      <p className="text-gray-600 text-sm">June 10-20, 2025 | Mumbai</p>
                    </div>
                    <Button size="sm" className="bg-police-blue hover:bg-police-blue/90">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </DataCard>
          </div>
        </TabsContent>
        
        <TabsContent value="secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataCard>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-police-blue/10 flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-police-blue" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Athletics</h3>
                  <p className="text-gray-600 mb-2">Secondary Sport</p>
                  
                  <h4 className="font-medium mb-1 text-sm">Events</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">100m Sprint</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">Relay</span>
                  </div>
                  
                  <Button size="sm" variant="outline" className="mt-2">View Details</Button>
                </div>
              </div>
            </DataCard>
            
            <DataCard>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-police-blue/10 flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-police-blue" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">Swimming</h3>
                  <p className="text-gray-600 mb-2">Secondary Sport</p>
                  
                  <h4 className="font-medium mb-1 text-sm">Events</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">Freestyle</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs">Relay</span>
                  </div>
                  
                  <Button size="sm" variant="outline" className="mt-2">View Details</Button>
                </div>
              </div>
            </DataCard>
          </div>
        </TabsContent>
        
        <TabsContent value="events">
          <DataCard>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Flag className="h-5 w-5 text-police-blue" />
              AIPSCB Events and Tournaments
            </h3>
            
            <div className="divide-y">
              <div className="py-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div>
                    <h4 className="font-medium">67th All India Police Hockey Championship</h4>
                    <p className="text-gray-600 text-sm">May 10-20, 2024 | Chennai</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 bg-police-blue/10 text-police-blue rounded-full">Hockey</span>
                      <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-600 rounded-full">Participated</span>
                      <span className="text-xs px-2 py-0.5 bg-yellow-500/10 text-yellow-600 rounded-full">Gold Medal</span>
                    </div>
                  </div>
                  <Button size="sm" className="mt-3 md:mt-0 bg-police-blue hover:bg-police-blue/90">
                    View Certificate
                  </Button>
                </div>
              </div>
              
              <div className="py-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div>
                    <h4 className="font-medium">All India Police Athletics Meet</h4>
                    <p className="text-gray-600 text-sm">February 5-15, 2024 | Pune</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 bg-police-blue/10 text-police-blue rounded-full">Athletics</span>
                      <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-600 rounded-full">Participated</span>
                      <span className="text-xs px-2 py-0.5 bg-gray-500/10 text-gray-600 rounded-full">Silver Medal</span>
                    </div>
                  </div>
                  <Button size="sm" className="mt-3 md:mt-0 bg-police-blue hover:bg-police-blue/90">
                    View Certificate
                  </Button>
                </div>
              </div>
              
              <div className="py-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div>
                    <h4 className="font-medium">National Police Games</h4>
                    <p className="text-gray-600 text-sm">November 12-22, 2023 | Delhi</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-2 py-0.5 bg-police-blue/10 text-police-blue rounded-full">Multiple Sports</span>
                      <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-600 rounded-full">Participated</span>
                      <span className="text-xs px-2 py-0.5 bg-amber-600/10 text-amber-700 rounded-full">Bronze Medal</span>
                    </div>
                  </div>
                  <Button size="sm" className="mt-3 md:mt-0 bg-police-blue hover:bg-police-blue/90">
                    View Certificate
                  </Button>
                </div>
              </div>
            </div>
          </DataCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SportsSection;
