// ---- Import Statements ----

import type { Candidate } from "./types";

// ---- Candidate Service Functions ----

export function addCandidate(
    candidates: Candidate[],
    candidate: Candidate
): Candidate[] {
    return [...candidates, candidate];
}

export function updateCandidate(
    candidates: Candidate[],
    candidateId: string,
    updatedFields: Partial<Candidate>
): Candidate[] {
    return candidates.map((candidate) =>
        candidate.id === candidateId ? { ...candidate, ...updatedFields } : candidate
    );
}

export function deleteCandidate(
    candidates: Candidate[],
    candidateId: string
): Candidate[] {
    return candidates.filter((candidate) => candidate.id !== candidateId);
}