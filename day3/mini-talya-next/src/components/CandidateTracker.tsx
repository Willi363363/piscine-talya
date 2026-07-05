"use client";

import { useState } from "react";
import { CandidateList } from "./CandidateList";
import { CandidateForm } from "./CandidateForm";
import { StatisticsPanel } from "./StatisticsPanel";
import { deleteCandidate, addCandidate } from "@/lib/candidate.service";
import type { Candidate } from "@/types";

interface CandidateTrackerProps {
  initialCandidates: Candidate[];
}

export function CandidateTracker({ initialCandidates }: CandidateTrackerProps) {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);

  function handleDelete(id: string) {
    setCandidates(deleteCandidate(candidates, id));
  }

  function handleAdd(candidate: Candidate) {
    setCandidates(addCandidate(candidates, candidate));
  }

  return (
    <>
      <StatisticsPanel candidates={candidates} />
      <CandidateForm onAdd={handleAdd} />
      <CandidateList candidates={candidates} onDelete={handleDelete} />
    </>
  );
}