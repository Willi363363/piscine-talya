import type { Candidate } from "../types";
import { CandidateCard } from "./CandidateCard";

interface CandidateListProps {
  candidates: Candidate[];
  onDelete: (id: string) => void;
}

export function CandidateList({ candidates, onDelete }: CandidateListProps) {
  return (
    <div className="candidate-list">
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} onDelete={onDelete} />
      ))}
    </div>
  );
}