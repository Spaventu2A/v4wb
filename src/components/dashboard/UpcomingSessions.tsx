import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardData } from "@/types/dashboard";

export function UpcomingSessions({ sessions }: { sessions: DashboardData['upcomingSessions'] }) {
  const handleSessionClick = (sessionId: number) => {
    console.log(`Session ${sessionId} clicked`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="bg-[#FEFCFB] border-[#034078]">
        <CardHeader className="bg-gradient-to-r from-[#001F54] to-[#034078] text-[#FEFCFB]">
          <CardTitle>Séances à venir</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 mt-4">
            {sessions.map((session) => (
              <button
                key={session.id}
                className="flex justify-between items-center w-full text-left hover:bg-[#1282A2] hover:bg-opacity-10 p-3 rounded-md transition-colors border border-[#034078]"
                onClick={() => handleSessionClick(session.id)}
              >
                <div>
                  <p className="font-medium text-[#0A1128]">{session.class}</p>
                  <p className="text-sm text-[#001F54]">{session.subject}</p>
                </div>
                <Badge className="bg-[#1282A2] text-[#FEFCFB]">{session.date}</Badge>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}