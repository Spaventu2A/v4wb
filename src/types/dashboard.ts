export interface Student {
    name: string;
    grades: number[];
  }
  
  export interface ClassData {
    name: string;
    average: number;
    trend: number[];
    students: Student[];
  }
  
  export interface UpcomingSession {
    id: number;
    class: string;
    subject: string;
    date: string;
  }
  
  export interface PendingEvaluation {
    id: number;
    class: string;
    competence: string;
    students: string[];
  }
  
  export interface CompetenceDetails {
    [key: string]: number;
  }
  
  export interface CompetenceData {
    name: string;
    completed: number;
    remaining: number;
    details: CompetenceDetails;
  }
  
  export interface DashboardData {
    classData: ClassData[];
    upcomingSessions: UpcomingSession[];
    pendingEvaluations: PendingEvaluation[];
    competencesData: CompetenceData[];
    classesInInternship: string[];
  }