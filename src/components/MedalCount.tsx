
import { Medal } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import DataCard from "./ui/DataCard";

const MedalCount = () => {
  const medalData = [
    { name: "Gold", value: 5, color: "#FFD700" },
    { name: "Silver", value: 3, color: "#C0C0C0" },
    { name: "Bronze", value: 7, color: "#CD7F32" }
  ];

  const TOTAL_MEDALS = medalData.reduce((sum, medal) => sum + medal.value, 0);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6 text-police-blue">Medal Count</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DataCard className="text-center h-full flex flex-col items-center justify-center py-6">
          <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center mb-3">
            <Medal className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-yellow-500">{medalData[0].value}</h2>
          <p className="text-lg">Gold Medals</p>
        </DataCard>
        
        <DataCard className="text-center h-full flex flex-col items-center justify-center py-6">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-3">
            <Medal className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-500">{medalData[1].value}</h2>
          <p className="text-lg">Silver Medals</p>
        </DataCard>
        
        <DataCard className="text-center h-full flex flex-col items-center justify-center py-6">
          <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center mb-3">
            <Medal className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-amber-600">{medalData[2].value}</h2>
          <p className="text-lg">Bronze Medals</p>
        </DataCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <DataCard>
          <h3 className="font-semibold mb-3">Medal Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={medalData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {medalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </DataCard>
        
        <DataCard>
          <h3 className="font-semibold mb-3">Medal Summary</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-lg font-medium">Total Medals</p>
              <p className="text-4xl font-bold text-police-blue">{TOTAL_MEDALS}</p>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Medal Distribution by Sport</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>Hockey</span>
                    <span className="font-medium">8 medals</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-police-blue" style={{ width: "53%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>Athletics</span>
                    <span className="font-medium">4 medals</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-police-blue" style={{ width: "27%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span>Swimming</span>
                    <span className="font-medium">3 medals</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-police-blue" style={{ width: "20%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DataCard>
      </div>
      
      <DataCard>
        <h3 className="font-semibold mb-4">Medal Achievement Timeline</h3>
        
        <div className="relative">
          <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-6">
            <div className="relative pl-10">
              <div className="absolute left-2 w-5 h-5 rounded-full bg-yellow-500 z-10"></div>
              <div className="police-card border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Gold Medal - Hockey</h4>
                    <p className="text-sm text-gray-600">67th All India Police Hockey Championship</p>
                  </div>
                  <span className="text-sm text-gray-500">May 2024</span>
                </div>
                <p className="mt-2 text-sm">Scored the winning goal in the final match against Punjab Police.</p>
              </div>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-2 w-5 h-5 rounded-full bg-gray-300 z-10"></div>
              <div className="police-card border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Silver Medal - 100m Sprint</h4>
                    <p className="text-sm text-gray-600">All India Police Athletics Meet</p>
                  </div>
                  <span className="text-sm text-gray-500">Feb 2024</span>
                </div>
                <p className="mt-2 text-sm">Completed the race in 10.85 seconds, setting a new personal best.</p>
              </div>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-2 w-5 h-5 rounded-full bg-amber-600 z-10"></div>
              <div className="police-card border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Bronze Medal - Swimming</h4>
                    <p className="text-sm text-gray-600">National Police Games</p>
                  </div>
                  <span className="text-sm text-gray-500">Nov 2023</span>
                </div>
                <p className="mt-2 text-sm">Secured third position in the 100m freestyle swimming event.</p>
              </div>
            </div>
            
            <div className="relative pl-10">
              <div className="absolute left-2 w-5 h-5 rounded-full bg-yellow-500 z-10"></div>
              <div className="police-card border p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Gold Medal - Hockey</h4>
                    <p className="text-sm text-gray-600">66th All India Police Hockey Championship</p>
                  </div>
                  <span className="text-sm text-gray-500">May 2023</span>
                </div>
                <p className="mt-2 text-sm">Played a pivotal role as center forward throughout the tournament.</p>
              </div>
            </div>
          </div>
        </div>
      </DataCard>
    </div>
  );
};

export default MedalCount;
