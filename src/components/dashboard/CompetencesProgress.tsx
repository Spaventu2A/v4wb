import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { DashboardData } from "@/types/dashboard";

const COLORS = ['#D741A7', '#3A1772', '#5398BE', '#F2CD5D', '#DEA54B'];

export function CompetencesProgress({ data }: { data: DashboardData['competencesData'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-[#FEFCFB] border-[#034078]">
        <CardHeader className="bg-gradient-to-r from-[#001F54] to-[#034078] text-[#FEFCFB]">
          <CardTitle className="text-2xl flex flex-wrap">
            <span className="whitespace-nowrap">Compétences traitées</span>
            <span className="whitespace-nowrap ml-1">par classe</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {data.map((entry, index) => (
              <div key={entry.name} className="flex flex-col items-center bg-[#1282A2] bg-opacity-10 p-4 rounded-lg">
                <ResponsiveContainer width="100%" height={100}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Completed', value: entry.completed },
                        { name: 'Remaining', value: entry.remaining },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={40}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {[entry.completed, entry.remaining].map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-sm font-medium mt-2 text-[#3A1772]">{entry.name}</p>
                <p className="text-sm text-[#D741A7]">{entry.completed}% traité</p>
                <div className="mt-2">
                  {Object.entries(entry.details).map(([key, value]) => (
                    <p key={key} className="text-xs text-[#5398BE]">{key}: {value}%</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}