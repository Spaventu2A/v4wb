import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { DashboardData, Student } from "@/types/dashboard";

export function ClassStatistics({ selectedClass, filteredClassData }: { selectedClass: string, filteredClassData: DashboardData['classData'] }) {
  const formatRadarData = (students: Student[]) => {
    return students.map(student => ({
      name: student.name,
      average: parseFloat((student.grades.reduce((a, b) => a + b, 0) / student.grades.length).toFixed(2)),
      threshold: 10 // Adding a constant threshold value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[#FEFCFB] border-[#034078]">
        <CardHeader className="bg-gradient-to-r from-[#001F54] to-[#034078] text-[#FEFCFB]">
          <CardTitle>Statistiques de classe</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="average">
            <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#E6F3FF]">
              <TabsTrigger 
                value="average"
                className="data-[state=active]:bg-[#1282A2] data-[state=active]:text-[#FEFCFB]"
              >
                Moyenne
              </TabsTrigger>
              <TabsTrigger 
                value="evolution"
                className="data-[state=active]:bg-[#1282A2] data-[state=active]:text-[#FEFCFB]"
              >
                Évolution
              </TabsTrigger>
            </TabsList>
            <TabsContent value="average">
              {selectedClass !== "all" ? (
                <div className="flex flex-col items-center justify-center h-full py-8">
                  <p className="text-5xl font-bold text-[#034078]">{filteredClassData[0]?.average.toFixed(1)}</p>
                  <p className="text-xl text-[#001F54] mt-2">{filteredClassData[0]?.name}</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={filteredClassData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="average" fill="#1282A2" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </TabsContent>
            <TabsContent value="evolution">
              {selectedClass !== "all" ? (
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart outerRadius={90} width={730} height={250} data={formatRadarData(filteredClassData[0].students)}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 20]} />
                    <Radar name="Moyenne" dataKey="average" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Seuil" dataKey="threshold" stroke="red" fill="none" />
                    <Tooltip />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={filteredClassData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="trend[0]" name="Mois -2" stroke="#0A1128" />
                    <Line type="monotone" dataKey="trend[1]" name="Mois -1" stroke="#001F54" />
                    <Line type="monotone" dataKey="trend[2]" name="Mois actuel" stroke="#034078" />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
}