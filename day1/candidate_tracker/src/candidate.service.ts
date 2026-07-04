import type { Candidate } from "./types";

export function addCandidate(
    candidates: Candidate[],
    candidate: Candidate
): Candidate[] {
    return [...candidates, candidate];
}