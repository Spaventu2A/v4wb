import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { DashboardData } from "@/types/dashboard";

export function PendingEvaluations({ evaluations }: { evaluations: DashboardData['pendingEvaluations'] }) {
  const handleEvaluateNow = () => {
    console.log("Commencer les évaluations clicked");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="bg-[#FEFCFB] border-[#034078]">
        <CardHeader className="bg-gradient-to-r from-[#001F54] to-[#034078] text-[#FEFCFB]">
          <CardTitle>Évaluations en attente</CardTitle>
        </CardHeader>
        <CardContent>
          {evaluations.length > 0 ? (
            <div className="space-y-4 mt-4">
              {evaluations.map((evaluation) => (
                <Alert key={evaluation.id} className="bg-[#1282A2] bg-opacity-10 border-[#034078]">
                  <BookOpen className="h-4 w-4 text-[#034078]" />
                  <AlertTitle className="text-[#0A1128]">{evaluation.class} - {evaluation.competence}</AlertTitle>
                  <AlertDescription className="text-[#001F54]">
                    Élèves: {evaluation.students.join(", ")}
                  </AlertDescription>
                </Alert>
              ))}
              <Button onClick={handleEvaluateNow} className="w-full bg-[#034078] hover:bg-[#001F54] text-[#FEFCFB]">
                Commencer les évaluations
              </Button>
            </div>
          ) : (
            <p className="text-[#0A1128] mt-4">Aucune évaluation en attente.</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}