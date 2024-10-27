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
          <div className="flex flex-col items-center justify-center h-full py-6">
            <Briefcase className="h-12 w-12 text-[#034078] mb-2" />
            <p className="text-sm text-[#001F54] mb-4">Classes actuellement en stage</p>
            <ul className="w-full space-y-3">
              {classes.map((className, index) => (
                <li key={index} className="text-xl font-semibold text-[#034078] bg-[#E3F2FD] py-2 px-4 rounded-md shadow-sm">
                  {className}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
