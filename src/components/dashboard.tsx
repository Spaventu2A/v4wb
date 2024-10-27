"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardSummary } from '@/components/dashboard/DashboardSummary'
import { ClassStatistics } from '@/components/dashboard/ClassStatistics'
import { UpcomingSessions } from '@/components/dashboard/UpcomingSessions'
import { CompetencesProgress } from '@/components/dashboard/CompetencesProgress'
import { PendingEvaluations } from '@/components/dashboard/PendingEvaluations'
import { ClassesInInternship } from '@/components/dashboard/ClassesInInternship'
import { Navbar } from '@/components/layout/Navbar'
import { Sidebar } from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'
import { useDashboardData } from '@/hooks/useDashboardData'
import { useState } from 'react'

export default function Dashboard() {
  const [selectedClass, setSelectedClass] = useState("all")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { dashboardData, loading, error } = useDashboardData()

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const { classData, upcomingSessions, pendingEvaluations, competencesData, classesInInternship } = dashboardData

  const filteredClassData = selectedClass === "all" ? classData : classData.filter(c => c.name === selectedClass)
  const filteredCompetencesData = selectedClass === "all" ? competencesData : competencesData.filter(c => c.name === selectedClass)

  if (loading) return <div>Chargement...</div>
  if (error) return <div>Erreur : {error}</div>

  return (
    <div className="relative min-h-screen bg-[#FEFCFB] flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} pt-16 flex-grow`}>
        <div className="container mx-auto p-4">
          <DashboardSummary 
            classData={classData}
            upcomingSessions={upcomingSessions}
            pendingEvaluations={pendingEvaluations}
            classesInInternship={classesInInternship}
          />

          <div className="mb-6 mt-8">
            <Select onValueChange={setSelectedClass} defaultValue="all">
              <SelectTrigger className="w-[180px] bg-[#FEFCFB] border-[#034078] text-[#0A1128]">
                <SelectValue placeholder="Sélectionner une classe" />
              </SelectTrigger>
              <SelectContent className="bg-[#FEFCFB] border-[#034078]">
                <SelectItem value="all">Toutes les classes</SelectItem>
                {classData.map((c) => (
                  <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClassStatistics 
              selectedClass={selectedClass}
              filteredClassData={filteredClassData}
            />
            <UpcomingSessions sessions={upcomingSessions} />
            <CompetencesProgress data={filteredCompetencesData} />
            <PendingEvaluations evaluations={pendingEvaluations} />
            <ClassesInInternship classes={classesInInternship} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
