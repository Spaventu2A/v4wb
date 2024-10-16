import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Bell, Briefcase } from "lucide-react";
import { DashboardData } from "@/types/dashboard";

export function DashboardSummary({ classData, upcomingSessions, pendingEvaluations, classesInInternship }: {
  classData: DashboardData['classData'],
  upcomingSessions: DashboardData['upcomingSessions'],
  pendingEvaluations: DashboardData['pendingEvaluations'],
  classesInInternship: DashboardData['classesInInternship']
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-gradient-to-br from-[#001F54] to-[#034078] text-[#FEFCFB]">
        <CardHeader>
          <CardTitle className="text-2xl">Résumé</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-4 bg-[#0A1128] bg-opacity-20 p-4 rounded-lg">
              <Users className="h-8 w-8" />
              <div>
                <p className="text-sm font-medium text-[#FEFCFB] opacity-80">Classes</p>
                <p className="text-2xl font-bold">{classData?.length || 0}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-[#0A1128] bg-opacity-20 p-4 rounded-lg">
              <Calendar className="h-8 w-8" />
              <div>
                <p className="text-sm font-medium text-[#FEFCFB] opacity-80">Séances à venir</p>
                <p className="text-2xl font-bold">{upcomingSessions?.length || 0}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-[#0A1128] bg-opacity-20 p-4 rounded-lg">
              <Bell className="h-8 w-8" />
              <div>
                <p className="text-sm font-medium text-[#FEFCFB] opacity-80">Évaluations en attente</p>
                <p className="text-2xl font-bold">{pendingEvaluations?.length || 0}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-[#0A1128] bg-opacity-20 p-4 rounded-lg">
              <Briefcase className="h-8 w-8" />
              <div>
                <p className="text-sm font-medium text-[#FEFCFB] opacity-80">Classes en stage</p>
                <p className="text-2xl font-bold">{classesInInternship?.length || 0}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}