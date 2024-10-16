import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Vous pouvez ajouter d'autres fonctions utilitaires ici
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function calculateAverage(grades: number[]): number {
  if (grades.length === 0) return 0
  const sum = grades.reduce((a, b) => a + b, 0)
  return parseFloat((sum / grades.length).toFixed(2))
}