// ---- Types ----

export type CandidateStatus =
    | "pending"
    | "interview"
    | "accepted"
    | "rejected";

type StatusDistribution = Record<CandidateStatus, number>;

type Skill = "React" | "TypeScript" | "Node" | "Docker";

// ---- Interfaces ---

export interface Candidate {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    yearsOfExperience: number;
    skills: Skill[];
    status: CandidateStatus;
    salaryExpectation: number;
    notes?: string[];
}

export interface Statistics {
    totalCandidates: number;
    averageAge: number;
    averageYearsOfExperience: number;
    averageSalaryExpectation: number;
    minSalaryExpectation: number;
    maxSalaryExpectation: number;
    mostPresentSkill: Skill | null;
    skillsDistribution: Record<Skill, number>;
    statusDistribution: StatusDistribution;
}