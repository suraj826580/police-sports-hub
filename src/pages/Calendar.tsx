
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import DataCard from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { addDays } from "date-fns";

const Calendar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const upcomingEvents = [
    {
      id: 1,
      title: "68th All India Police Hockey Championship",
      date: "April 15-25, 2025",
      location: "Delhi",
      type: "Tournament",
      sport: "Hockey",
      status: "Registered"
    },
    {
      id: 2,
      title: "National Police Games",
      date: "June 10-20, 2025",
      location: "Mumbai",
      type: "Multi-Sport Event",
      sport: "Multiple",
      status: "Registration Open"
    },
    {
      id: 3,
      title: "Training Camp",
      date: "May 1-10, 2025",
      location: "Pune",
      type: "Training",
      sport: "Hockey",
      status: "Mandatory"
    }
  ];
  
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`flex-1 overflow-auto p-4 md:p-6 transition-all duration-300 ${sidebarOpen ? 'ml-0 md:ml-64' : 'ml-0'}`}>
          <div className="animate-fade-in">
            <h1 className="text-2xl font-bold mb-6 text-police-blue">Sports Calendar</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <DataCard>
                  <h3 className="font-semibold mb-4">Upcoming Events</h3>
                  
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div>
                            <h4 className="font-medium">{event.title}</h4>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.location}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <span className="text-xs px-2 py-1 bg-police-blue/10 text-police-blue rounded-full">{event.sport}</span>
                              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">{event.type}</span>
                              {event.status === "Registered" && (
                                <span className="text-xs px-2 py-1 bg-green-500/10 text-green-600 rounded-full">{event.status}</span>
                              )}
                              {event.status === "Registration Open" && (
                                <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-600 rounded-full">{event.status}</span>
                              )}
                              {event.status === "Mandatory" && (
                                <span className="text-xs px-2 py-1 bg-red-500/10 text-red-600 rounded-full">{event.status}</span>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {event.status === "Registration Open" ? (
                              <Button className="bg-police-blue hover:bg-police-blue/90">
                                Register Now
                              </Button>
                            ) : (
                              <Button variant="outline">
                                View Details
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </DataCard>
                
                <div className="mt-6">
                  <DataCard>
                    <h3 className="font-semibold mb-4">Annual Sports Calendar 2025</h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[600px]">
                        <thead>
                          <tr className="border-b">
                            <th className="py-3 px-4 text-left">Event</th>
                            <th className="py-3 px-4 text-left">Dates</th>
                            <th className="py-3 px-4 text-left">Location</th>
                            <th className="py-3 px-4 text-left">Registration Deadline</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="py-3 px-4">68th All India Police Hockey Championship</td>
                            <td className="py-3 px-4">April 15-25, 2025</td>
                            <td className="py-3 px-4">Delhi</td>
                            <td className="py-3 px-4">March 15, 2025</td>
                            <td className="py-3 px-4">
                              <Button size="sm" variant="outline">Details</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">All India Police Athletics Meet</td>
                            <td className="py-3 px-4">May 5-15, 2025</td>
                            <td className="py-3 px-4">Hyderabad</td>
                            <td className="py-3 px-4">April 5, 2025</td>
                            <td className="py-3 px-4">
                              <Button size="sm" variant="outline">Details</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">National Police Games</td>
                            <td className="py-3 px-4">June 10-20, 2025</td>
                            <td className="py-3 px-4">Mumbai</td>
                            <td className="py-3 px-4">May 10, 2025</td>
                            <td className="py-3 px-4">
                              <Button size="sm" variant="outline">Details</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">All India Police Swimming Championship</td>
                            <td className="py-3 px-4">July 8-18, 2025</td>
                            <td className="py-3 px-4">Chennai</td>
                            <td className="py-3 px-4">June 8, 2025</td>
                            <td className="py-3 px-4">
                              <Button size="sm" variant="outline">Details</Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">All India Police Boxing Tournament</td>
                            <td className="py-3 px-4">August 12-22, 2025</td>
                            <td className="py-3 px-4">Pune</td>
                            <td className="py-3 px-4">July 12, 2025</td>
                            <td className="py-3 px-4">
                              <Button size="sm" variant="outline">Details</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DataCard>
                </div>
              </div>
              
              <div>
                <DataCard>
                  <h3 className="font-semibold mb-4">Calendar</h3>
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </DataCard>
                
                <div className="mt-6">
                  <DataCard>
                    <h3 className="font-semibold mb-4">This Month's Activities</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-12 text-center pt-1">
                          <div className="font-semibold">15</div>
                          <div className="text-xs text-gray-500">Apr</div>
                        </div>
                        <div className="flex-1 border-l-2 border-police-blue pl-3 pb-3">
                          <h4 className="font-medium">68th All India Police Hockey Championship</h4>
                          <p className="text-sm text-gray-600">Begins in Delhi</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-12 text-center pt-1">
                          <div className="font-semibold">20</div>
                          <div className="text-xs text-gray-500">Apr</div>
                        </div>
                        <div className="flex-1 border-l-2 border-yellow-500 pl-3 pb-3">
                          <h4 className="font-medium">Hockey Semifinal</h4>
                          <p className="text-sm text-gray-600">Delhi vs. Mumbai</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-12 text-center pt-1">
                          <div className="font-semibold">25</div>
                          <div className="text-xs text-gray-500">Apr</div>
                        </div>
                        <div className="flex-1 border-l-2 border-red-500 pl-3">
                          <h4 className="font-medium">Hockey Championship Final</h4>
                          <p className="text-sm text-gray-600">Final match and closing ceremony</p>
                        </div>
                      </div>
                    </div>
                  </DataCard>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Calendar;
