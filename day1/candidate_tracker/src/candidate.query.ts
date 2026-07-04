// ---- Imports ----

import type { Candidate } from "./types";

// ---- Query Functions ----

export function getCandidateById(
    candidates: Candidate[],
    candidateId: string
): Candidate | undefined {
    return candidates.find((candidate) => candidate.id === candidateId);
}

export function getAcceptedCandidates(candidates: Candidate[]): Candidate[] {
    return candidates.filter((candidate) => candidate.status === "accepted");
}

export function getCandidatesBySkill(
    candidates: Candidate[],
    skill: Candidate["skills"][number]
): Candidate[] {
    return candidates.filter((candidate) => candidate.skills.includes(skill));
}

export function getCandidatesWithExperienceAbove(
    candidates: Candidate[],
    minYearsOfExperience: number
): Candidate[] {
    return candidates.filter(
        (candidate) => candidate.yearsOfExperience > minYearsOfExperience
    );
}

export function hasRejectedCandidate(candidates: Candidate[]): boolean {
    return candidates.some((candidate) => candidate.status === "rejected");
}

export function allCandidatesHaveEmail(candidates: Candidate[]): boolean {
    return candidates.every((candidate) => candidate.email.trim().length > 0);
}

export function hasCandidateWithoutSkills(candidates: Candidate[]): boolean {
    return candidates.some((candidate) => candidate.skills.length === 0);
}