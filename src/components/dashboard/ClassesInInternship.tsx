import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { DashboardData } from "@/types/dashboard";

export function ClassesInInternship({ classes }: { classes: DashboardData['classesInInternship'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="bg-[#FEFCFB] border-[#034078]">
        <CardHeader className="bg-gradient-to-r from-[#001F54] to-[#034078] text-[#FEFCFB]">
          <CardTitle>Classes en stage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-full py-8">
            <div className="text-center">
              <Briefcase className="h-16 w-16 mx-auto text-[#034078]" />
              <p className="text-2xl font-bold text-[#034078] mt-4">{classes.length}</p>
              <p className="text-sm text-[#001F54] mt-2">Classes actuellement en stage</p>
              <ul className="mt-4 space-y-2">
                {classes.map((className, index) => (
                  <li key={index} className="text-lg text-[#034078]">{className}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}