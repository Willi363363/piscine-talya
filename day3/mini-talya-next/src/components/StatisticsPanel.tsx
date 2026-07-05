import type { Candidate } from "../types";
import { calculateStatistics } from "@/lib/statistics.service";

interface StatisticsPanelProps {
  candidates: Candidate[];
}

export function StatisticsPanel({ candidates }: StatisticsPanelProps) {
  const stats = calculateStatistics(candidates);

  return (
    <div className="statistics-panel">
      <h2>Statistiques</h2>
      <p>Total candidats : {stats.totalCandidates}</p>
      <p>Âge moyen : {stats.averageAge.toFixed(1)}</p>
      <p>Expérience moyenne : {stats.averageYearsOfExperience.toFixed(1)} ans</p>
      <p>Salaire moyen : {stats.averageSalaryExpectation.toLocaleString()} €</p>
      <p>Compétence la plus présente : {stats.mostPresentSkill ?? "Aucune"}</p>
    </div>
  );
}