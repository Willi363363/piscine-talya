import type { Candidate } from "../types";

interface CandidateCardProps {
  candidate: Candidate;
  onDelete: (id: string) => void;
}

export function CandidateCard({ candidate, onDelete }: CandidateCardProps) {
  return (
    <div className="candidate-card">
      <h3>{candidate.firstName} {candidate.lastName}</h3>
      <p>{candidate.skills.join(", ")}</p>
      <p>Statut : {candidate.status}</p>
      <p>Expérience : {candidate.yearsOfExperience} ans</p>
      <button onClick={() => onDelete(candidate.id)}>Supprimer</button>
    </div>
  );
}