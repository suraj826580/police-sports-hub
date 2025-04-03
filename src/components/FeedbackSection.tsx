
import DataCard from "@/components/ui/DataCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle, MessageCircle, ThumbsUp } from "lucide-react";

const FeedbackSection = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6 text-police-blue">Feedback & Suggestions</h1>
      
      <Tabs defaultValue="feedback" className="w-full">
        <TabsList className="w-full bg-white shadow-sm mb-6 rounded-lg p-1">
          <TabsTrigger value="feedback" className="flex-1">Submit Feedback</TabsTrigger>
          <TabsTrigger value="suggestion" className="flex-1">Submit Suggestion</TabsTrigger>
          <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="feedback">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <DataCard>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <ThumbsUp className="h-5 w-5 text-police-blue" />
                  Submit Your Feedback
                </h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Feedback Category</Label>
                      <select id="category" className="w-full p-2 border rounded-md">
                        <option value="">Select a category</option>
                        <option value="event">Event Organization</option>
                        <option value="facilities">Sports Facilities</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="logistics">Travel & Logistics</option>
                        <option value="training">Training Programs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="event">Related Event (if applicable)</Label>
                      <select id="event" className="w-full p-2 border rounded-md">
                        <option value="">Select an event</option>
                        <option value="hockey67">67th All India Police Hockey Championship</option>
                        <option value="athletics">All India Police Athletics Meet</option>
                        <option value="games">National Police Games</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="title">Feedback Title</Label>
                    <Input id="title" placeholder="Enter a concise title for your feedback" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="feedback">Your Feedback</Label>
                    <Textarea id="feedback" placeholder="Please provide your detailed feedback..." className="min-h-[150px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Rate Your Experience</Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          className="w-10 h-10 rounded-full border bg-white hover:bg-gray-100 flex items-center justify-center text-lg"
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">1 = Poor, 5 = Excellent</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="attachments">Attachments (optional)</Label>
                    <Input id="attachments" type="file" className="p-2" />
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" className="bg-police-blue hover:bg-police-blue/90">Submit Feedback</Button>
                  </div>
                </form>
              </DataCard>
            </div>
            
            <div>
              <DataCard>
                <h3 className="font-semibold mb-4">Guidelines</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Constructive Feedback</h4>
                    <p className="text-gray-600">
                      Please provide specific details about your experience. Constructive feedback helps us improve our services.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Respectful Communication</h4>
                    <p className="text-gray-600">
                      We appreciate your input. Please maintain a respectful tone in your feedback.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Follow-up Process</h4>
                    <p className="text-gray-600">
                      All feedback is reviewed by the AIPSCB team. You may be contacted for additional information if needed.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Resolution Timeline</h4>
                    <p className="text-gray-600">
                      We aim to address all feedback within 7-10 working days.
                    </p>
                  </div>
                </div>
              </DataCard>
              
              <div className="mt-6">
                <DataCard>
                  <h3 className="font-semibold mb-4">Need Help?</h3>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      If you need assistance with submitting feedback or have any questions, please contact our support team.
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <HelpCircle className="h-4 w-4 text-police-blue" />
                      <span>Email: support@aipscb.gov.in</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <HelpCircle className="h-4 w-4 text-police-blue" />
                      <span>Phone: +91 11 12345678</span>
                    </div>
                    
                    <Button className="w-full mt-2 bg-police-blue hover:bg-police-blue/90">
                      Contact Support
                    </Button>
                  </div>
                </DataCard>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="suggestion">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <DataCard>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-police-blue" />
                  Submit Your Suggestion
                </h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="suggestion-category">Suggestion Category</Label>
                      <select id="suggestion-category" className="w-full p-2 border rounded-md">
                        <option value="">Select a category</option>
                        <option value="events">Events & Tournaments</option>
                        <option value="facilities">Sports Facilities</option>
                        <option value="welfare">Athlete Welfare</option>
                        <option value="training">Training Programs</option>
                        <option value="technology">Technology Improvements</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <select id="priority" className="w-full p-2 border rounded-md">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="suggestion-title">Suggestion Title</Label>
                    <Input id="suggestion-title" placeholder="Enter a concise title for your suggestion" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="suggestion">Your Suggestion</Label>
                    <Textarea id="suggestion" placeholder="Please describe your suggestion in detail..." className="min-h-[150px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="benefits">Expected Benefits</Label>
                    <Textarea id="benefits" placeholder="Describe the potential benefits of implementing your suggestion..." className="min-h-[100px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="suggestion-attachments">Attachments (optional)</Label>
                    <Input id="suggestion-attachments" type="file" className="p-2" />
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" className="bg-police-blue hover:bg-police-blue/90">Submit Suggestion</Button>
                  </div>
                </form>
              </DataCard>
            </div>
            
            <div>
              <DataCard>
                <h3 className="font-semibold mb-4">Recent Implemented Suggestions</h3>
                
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <h4 className="font-medium">Online Certificate System</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Implemented digital certificates for all events, making it easier for athletes to access their achievements.
                    </p>
                    <p className="text-xs text-green-600 mt-1">Implemented in March 2025</p>
                  </div>
                  
                  <div className="border-b pb-3">
                    <h4 className="font-medium">Mobile App Notifications</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Added real-time notifications for schedule changes and important announcements through the AIPSCB mobile app.
                    </p>
                    <p className="text-xs text-green-600 mt-1">Implemented in January 2025</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Improved Accommodation Facilities</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Enhanced accommodation standards for all national-level events based on athlete feedback.
                    </p>
                    <p className="text-xs text-green-600 mt-1">Implemented in December 2024</p>
                  </div>
                </div>
              </DataCard>
              
              <div className="mt-6">
                <DataCard>
                  <h3 className="font-semibold mb-4">Suggestion Process</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-police-blue text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <p className="text-gray-600">Submit your suggestion through this form</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-police-blue text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <p className="text-gray-600">AIPSCB committee reviews all suggestions</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-police-blue text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <p className="text-gray-600">Feasible suggestions are shortlisted for implementation</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-police-blue text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <p className="text-gray-600">You will be notified about the status of your suggestion</p>
                    </div>
                  </div>
                </DataCard>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <DataCard>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-police-blue" />
              Your Feedback & Suggestion History
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-4 text-left">Title</th>
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-left">Category</th>
                    <th className="py-3 px-4 text-left">Submission Date</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4">Improve Training Facilities</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs">Suggestion</span>
                    </td>
                    <td className="py-3 px-4">Facilities</td>
                    <td className="py-3 px-4">April 1, 2025</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-xs">Under Review</span>
                    </td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="outline">View Details</Button>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="py-3 px-4">Hockey Championship Organization</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded-full text-xs">Feedback</span>
                    </td>
                    <td className="py-3 px-4">Event Organization</td>
                    <td className="py-3 px-4">March 15, 2025</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded-full text-xs">Addressed</span>
                    </td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="outline">View Details</Button>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="py-3 px-4">Digital Medical Records</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs">Suggestion</span>
                    </td>
                    <td className="py-3 px-4">Technology</td>
                    <td className="py-3 px-4">February 10, 2025</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded-full text-xs">Implemented</span>
                    </td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="outline">View Details</Button>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="py-3 px-4">Accommodation at National Games</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded-full text-xs">Feedback</span>
                    </td>
                    <td className="py-3 px-4">Accommodation</td>
                    <td className="py-3 px-4">November 25, 2024</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded-full text-xs">Addressed</span>
                    </td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="outline">View Details</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DataCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeedbackSection;
