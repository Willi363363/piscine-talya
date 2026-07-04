// ---- Imports ----

import type { Candidate, Statistics } from "./types";

// ---- Statistics Functions ----

export function calculateStatistics(candidates: Candidate[]): Statistics {
	const initialSkillsDistribution: Statistics["skillsDistribution"] = {
		React: 0,
		TypeScript: 0,
		Node: 0,
		Docker: 0
	};

	const initialStatusDistribution: Statistics["statusDistribution"] = {
		pending: 0,
		interview: 0,
		accepted: 0,
		rejected: 0
	};

	const aggregate = candidates.reduce(
		(accumulator, candidate) => {
			accumulator.skillsDistribution = candidate.skills.reduce(
				(distribution, skill) => ({
					...distribution,
					[skill]: distribution[skill] + 1
				}),
				accumulator.skillsDistribution
			);

			accumulator.statusDistribution = {
				...accumulator.statusDistribution,
				[candidate.status]: accumulator.statusDistribution[candidate.status] + 1
			};
			accumulator.totalAge += candidate.age;
			accumulator.totalExperience += candidate.yearsOfExperience;
			accumulator.totalSalaryExpectation += candidate.salaryExpectation;
			accumulator.minSalaryExpectation = Math.min(
				accumulator.minSalaryExpectation,
				candidate.salaryExpectation
			);
			accumulator.maxSalaryExpectation = Math.max(
				accumulator.maxSalaryExpectation,
				candidate.salaryExpectation
			);

			return accumulator;
		},
		{
			totalAge: 0,
			totalExperience: 0,
			totalSalaryExpectation: 0,
			minSalaryExpectation: Number.POSITIVE_INFINITY,
			maxSalaryExpectation: Number.NEGATIVE_INFINITY,
			skillsDistribution: { ...initialSkillsDistribution },
			statusDistribution: { ...initialStatusDistribution }
		}
	);

	const totalCandidates = candidates.length;
	const mostPresentSkill = Object.entries(aggregate.skillsDistribution).reduce<
		Candidate["skills"][number] | null
	>((mostPresent, [skill, count]) => {
		if (mostPresent === null) {
			return skill as Candidate["skills"][number];
		}

		return count > aggregate.skillsDistribution[mostPresent]
			? (skill as Candidate["skills"][number])
			: mostPresent;
	}, null);

	return {
		totalCandidates,
		averageAge: totalCandidates === 0 ? 0 : aggregate.totalAge / totalCandidates,
		averageYearsOfExperience:
			totalCandidates === 0 ? 0 : aggregate.totalExperience / totalCandidates,
		averageSalaryExpectation:
			totalCandidates === 0 ? 0 : aggregate.totalSalaryExpectation / totalCandidates,
		minSalaryExpectation:
			totalCandidates === 0 ? 0 : aggregate.minSalaryExpectation,
		maxSalaryExpectation:
			totalCandidates === 0 ? 0 : aggregate.maxSalaryExpectation,
		mostPresentSkill,
		skillsDistribution: aggregate.skillsDistribution,
		statusDistribution: aggregate.statusDistribution
	};
}
