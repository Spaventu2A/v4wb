import { useState, useEffect } from 'react';
import { DashboardData, ClassData, UpcomingSession, PendingEvaluation, CompetenceData } from '@/types/dashboard';

// Simuler un délai d'API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simuler un appel API
async function fetchApi<T>(endpoint: string): Promise<T> {
  await delay(1000); // Simuler un délai réseau
  // Ici, vous feriez normalement un fetch réel
  // return await fetch(`/api/${endpoint}`).then(res => res.json());
  
  // Pour l'exemple, on retourne des données mockées
  const mockData: Record<string, any> = {
    classData: [
      { 
        name: "6ème A", 
        average: 13.8, 
        trend: [13.5, 13.7, 13.8],
        students: [
          { name: "Alice", grades: [12, 13, 14] },
          { name: "Bob", grades: [14, 15, 15] },
          { name: "Charlie", grades: [13, 14, 15] },
          { name: "David", grades: [11, 12, 13] },
          { name: "Eva", grades: [15, 16, 16] },
        ]
      },
      { 
        name: "5ème B", 
        average: 14.2, 
        trend: [14.0, 14.1, 14.2],
        students: [
          { name: "Frank", grades: [14, 14, 15] },
          { name: "Grace", grades: [15, 15, 14] },
          { name: "Henry", grades: [13, 14, 14] },
          { name: "Ivy", grades: [15, 15, 16] },
        ]
      },
    ],
    upcomingSessions: [
      { id: 1, class: "6ème A", subject: "Mathématiques", date: "2023-06-15" },
      { id: 2, class: "5ème B", subject: "Histoire", date: "2023-06-16" },
      { id: 3, class: "4ème C", subject: "Sciences", date: "2023-06-17" },
    ],
    pendingEvaluations: [
      { id: 1, class: "6ème A", competence: "Résolution de problèmes", students: ["Alice", "Bob", "Charlie"] },
      { id: 2, class: "5ème B", competence: "Analyse de documents", students: ["Frank", "Grace"] },
    ],
    competencesData: [
      { name: "6ème A", completed: 75, remaining: 25, details: { "Algèbre": 80, "Géométrie": 70, "Statistiques": 75 } },
      { name: "5ème B", completed: 80, remaining: 20, details: { "Algèbre": 85, "Géométrie": 75, "Statistiques": 80 } },
    ],
    classesInInternship: ["3ème D", "3ème E"],
  };

  return mockData[endpoint] as T;
}

export function useDashboardData() {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    classData: [],
    upcomingSessions: [],
    pendingEvaluations: [],
    competencesData: [],
    classesInInternship: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [
          classData,
          upcomingSessions,
          pendingEvaluations,
          competencesData,
          classesInInternship
        ] = await Promise.all([
          fetchApi<ClassData[]>('classData'),
          fetchApi<UpcomingSession[]>('upcomingSessions'),
          fetchApi<PendingEvaluation[]>('pendingEvaluations'),
          fetchApi<CompetenceData[]>('competencesData'),
          fetchApi<string[]>('classesInInternship'),
        ]);

        setDashboardData({
          classData,
          upcomingSessions,
          pendingEvaluations,
          competencesData,
          classesInInternship,
        });
        setError(null);
      } catch (err) {
        setError('Une erreur est survenue lors du chargement des données');
        console.error('Erreur lors du chargement des données du tableau de bord:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return { dashboardData, loading, error };
}