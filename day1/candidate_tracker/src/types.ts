// ---- Types ----

export type CandidateStatus =
    | "pending"
    | "interview"
    | "accepted"
    | "rejected";

export type StatusDistribution = Record<CandidateStatus, number>;

// ---- Interfaces ---

export interface Candidate {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    yearsOfExperience: number;
    skills: string[];
    status: CandidateStatus;
    salaryExpectation: number;
    notes?: string[];
}

export interface Statistics {
    totalCandidates: number;
    averageAge: number;
    averageYearsOfExperience: number;
    skillsDistribution: Record<string, number>;
    statusDistribution: StatusDistribution;
}