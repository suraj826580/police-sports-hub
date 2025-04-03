
import DataCard from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BarChart, Calendar, Download, Flag, Medal, Star, Trophy } from "lucide-react";

const AchievementsSection = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6 text-police-blue">Performance & Achievements</h1>
      
      <Tabs defaultValue="history" className="w-full">
        <TabsList className="w-full bg-white shadow-sm mb-6 rounded-lg p-1">
          <TabsTrigger value="history" className="flex-1">Event History</TabsTrigger>
          <TabsTrigger value="awards" className="flex-1">Awards & Recognitions</TabsTrigger>
          <TabsTrigger value="records" className="flex-1">Records</TabsTrigger>
          <TabsTrigger value="medals" className="flex-1">Medal Count</TabsTrigger>
        </TabsList>
        
        <TabsContent value="history">
          <div className="mb-6">
            <DataCard>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Flag className="h-5 w-5 text-police-blue" />
                  Event Participation History
                </h3>
                <Button variant="outline" size="sm">Filter</Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left">Event</th>
                      <th className="py-3 px-4 text-left">Tournament</th>
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Venue</th>
                      <th className="py-3 px-4 text-left">Position</th>
                      <th className="py-3 px-4 text-left">Certificate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4">Hockey</td>
                      <td className="py-3 px-4">67th All India Police Hockey Championship</td>
                      <td className="py-3 px-4">May 10-20, 2024</td>
                      <td className="py-3 px-4">Chennai</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-xs">Gold Medal</span>
                      </td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="ghost" className="text-police-blue">
                          <Download className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">100m Sprint</td>
                      <td className="py-3 px-4">All India Police Athletics Meet</td>
                      <td className="py-3 px-4">Feb 5-15, 2024</td>
                      <td className="py-3 px-4">Pune</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-gray-500/10 text-gray-600 rounded-full text-xs">Silver Medal</span>
                      </td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="ghost" className="text-police-blue">
                          <Download className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Swimming</td>
                      <td className="py-3 px-4">National Police Games</td>
                      <td className="py-3 px-4">Nov 12-22, 2023</td>
                      <td className="py-3 px-4">Delhi</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-amber-600/10 text-amber-700 rounded-full text-xs">Bronze Medal</span>
                      </td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="ghost" className="text-police-blue">
                          <Download className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DataCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataCard>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-police-blue" />
                Upcoming Participation
              </h3>
              
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <h4 className="font-medium">68th All India Police Hockey Championship</h4>
                  <p className="text-gray-600 text-sm">April 15-25, 2025 | Delhi</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-600 rounded-full">Registered</span>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium">National Police Games</h4>
                  <p className="text-gray-600 text-sm">June 10-20, 2025 | Mumbai</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-600 rounded-full">Registration Open</span>
                    <Button size="sm" variant="outline">Register Now</Button>
                  </div>
                </div>
              </div>
            </DataCard>
            
            <DataCard>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart className="h-5 w-5 text-police-blue" />
                Performance Summary
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <p className="text-gray-600 text-sm">Total Events</p>
                  <p className="text-3xl font-bold text-police-blue mt-1">15</p>
                </div>
                
                <div className="border rounded-lg p-3 text-center">
                  <p className="text-gray-600 text-sm">Medals Won</p>
                  <p className="text-3xl font-bold text-police-blue mt-1">15</p>
                </div>
                
                <div className="border rounded-lg p-3 text-center">
                  <p className="text-gray-600 text-sm">Best Position</p>
                  <p className="text-3xl font-bold text-yellow-500 mt-1">1st</p>
                </div>
                
                <div className="border rounded-lg p-3 text-center">
                  <p className="text-gray-600 text-sm">Success Rate</p>
                  <p className="text-3xl font-bold text-green-500 mt-1">87%</p>
                </div>
              </div>
            </DataCard>
          </div>
        </TabsContent>
        
        <TabsContent value="awards">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataCard>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-police-blue" />
                Awards & Recognitions
              </h3>
              
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Best Sportsperson Award</h4>
                    <span className="text-sm text-gray-500">2023</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Issued by Delhi Police</p>
                  <p className="text-sm mt-2">
                    Awarded for outstanding contribution to hockey and representing the department at national level.
                  </p>
                  <Button size="sm" variant="outline" className="mt-3">
                    <Download className="h-4 w-4 mr-1" />
                    View Certificate
                  </Button>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-medium">National Sports Award</h4>
                    <span className="text-sm text-gray-500">2022</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Issued by Ministry of Youth Affairs & Sports</p>
                  <p className="text-sm mt-2">
                    Recognition for excellence in field hockey and contribution to sports.
                  </p>
                  <Button size="sm" variant="outline" className="mt-3">
                    <Download className="h-4 w-4 mr-1" />
                    View Certificate
                  </Button>
                </div>
              </div>
            </DataCard>
            
            <DataCard>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-police-blue" />
                Special Recognitions
              </h3>
              
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <div className="flex justify-between">
                    <h4 className="font-medium">DGP Commendation Disc</h4>
                    <span className="text-sm text-gray-500">2024</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Issued by Director General of Police</p>
                  <p className="text-sm mt-2">
                    For bringing laurels to the police force through sports achievements.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <h4 className="font-medium">Outstanding Service Medal</h4>
                    <span className="text-sm text-gray-500">2021</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Issued by Home Ministry</p>
                  <p className="text-sm mt-2">
                    For dedication to duty and excellence in sports representation.
                  </p>
                </div>
              </div>
            </DataCard>
          </div>
        </TabsContent>
        
        <TabsContent value="records">
          <DataCard>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-police-blue" />
              Athletic Records
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left">Event</th>
                    <th className="py-3 px-4 text-left">Record Type</th>
                    <th className="py-3 px-4 text-left">Details</th>
                    <th className="py-3 px-4 text-left">Date Achieved</th>
                    <th className="py-3 px-4 text-left">Venue</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4">Hockey</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs">Tournament Record</span>
                    </td>
                    <td className="py-3 px-4">Most goals in a single tournament (12)</td>
                    <td className="py-3 px-4">May 2022</td>
                    <td className="py-3 px-4">Kolkata</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Hockey</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded-full text-xs">Personal Best</span>
                    </td>
                    <td className="py-3 px-4">5 goals in a single match</td>
                    <td className="py-3 px-4">Nov 2023</td>
                    <td className="py-3 px-4">Delhi</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">100m Sprint</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-purple-500/10 text-purple-600 rounded-full text-xs">Meet Record</span>
                    </td>
                    <td className="py-3 px-4">10.85 seconds</td>
                    <td className="py-3 px-4">Feb 2024</td>
                    <td className="py-3 px-4">Pune</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DataCard>
        </TabsContent>
        
        <TabsContent value="medals">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DataCard>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Medal className="h-5 w-5 text-yellow-500" />
                Gold Medals
              </h3>
              
              <div className="space-y-3">
                <div className="border-b pb-2">
                  <h4 className="font-medium">67th All India Police Hockey Championship</h4>
                  <p className="text-gray-600 text-sm">May 2024 | Chennai</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">National Police Games</h4>
                  <p className="text-gray-600 text-sm">Nov 2022 | Hyderabad</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">66th All India Police Hockey Championship</h4>
                  <p className="text-gray-600 text-sm">May 2023 | Bhopal</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">North Zone Police Hockey Tournament</h4>
                  <p className="text-gray-600 text-sm">Sep 2023 | Chandigarh</p>
                </div>
                
                <div>
                  <h4 className="font-medium">Inter-State Police Games</h4>
                  <p className="text-gray-600 text-sm">Jan 2023 | Delhi</p>
                </div>
              </div>
            </DataCard>
            
            <DataCard>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Medal className="h-5 w-5 text-gray-400" />
                Silver Medals
              </h3>
              
              <div className="space-y-3">
                <div className="border-b pb-2">
                  <h4 className="font-medium">All India Police Athletics Meet</h4>
                  <p className="text-gray-600 text-sm">Feb 2024 | Pune</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">65th All India Police Hockey Championship</h4>
                  <p className="text-gray-600 text-sm">May 2022 | Lucknow</p>
                </div>
                
                <div>
                  <h4 className="font-medium">Inter-Department Tournament</h4>
                  <p className="text-gray-600 text-sm">Dec 2023 | Delhi</p>
                </div>
              </div>
            </DataCard>
            
            <DataCard>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Medal className="h-5 w-5 text-amber-700" />
                Bronze Medals
              </h3>
              
              <div className="space-y-3">
                <div className="border-b pb-2">
                  <h4 className="font-medium">National Police Games</h4>
                  <p className="text-gray-600 text-sm">Nov 2023 | Delhi</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">All India Police Swimming Championship</h4>
                  <p className="text-gray-600 text-sm">Aug 2023 | Mumbai</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">Police Athletics Meet</h4>
                  <p className="text-gray-600 text-sm">Feb 2022 | Chennai</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">North Zone Police Tournament</h4>
                  <p className="text-gray-600 text-sm">Sep 2022 | Chandigarh</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">State Police Championship</h4>
                  <p className="text-gray-600 text-sm">Jan 2022 | Delhi</p>
                </div>
                
                <div className="border-b pb-2">
                  <h4 className="font-medium">Inter-Department Swimming Competition</h4>
                  <p className="text-gray-600 text-sm">Jul 2023 | Delhi</p>
                </div>
                
                <div>
                  <h4 className="font-medium">CPO Tournament</h4>
                  <p className="text-gray-600 text-sm">Apr 2023 | Dehradun</p>
                </div>
              </div>
            </DataCard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AchievementsSection;
