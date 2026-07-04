// ---- Import Statements ----

import type { Candidate, Statistics } from "./types";

// ---- Display Functions ----

function formatMoney(amount: number): string {
    return `$${amount.toLocaleString()}`;
}

function printSectionHeader(title: string): void {
    const line = "=".repeat(72);

    console.log(`\n${line}`);
    console.log(title.toUpperCase());
    console.log(line);
}

function printSubSectionHeader(title: string): void {
    console.log(`\n${title}`);
    console.log("-".repeat(title.length));
}

export function displayCandidates(candidates: Candidate[]): void {
    printSectionHeader("Candidate List");

    if (candidates.length === 0) {
        console.log("No candidates to display.");
        return;
    }

    candidates.forEach((candidate) => {
        printSubSectionHeader(`${candidate.firstName} ${candidate.lastName}`);
        console.log(`ID: ${candidate.id}`);
        console.log(`Age: ${candidate.age}`);
        console.log(`Email: ${candidate.email}`);
        console.log(`Experience: ${candidate.yearsOfExperience} years`);
        console.log(`Skills: ${candidate.skills.join(", ") || "None"}`);
        console.log(`Status: ${candidate.status}`);
        console.log(`Salary expectation: ${formatMoney(candidate.salaryExpectation)}`);

        if (candidate.notes?.length) {
            console.log(`Notes: ${candidate.notes.join(" | ")}`);
        }
    });
}

export function displayStatistics(statistics: Statistics): void {
    printSectionHeader("Statistics Overview");

    const summaryRows: Array<[string, string]> = [
        ["Total candidates", statistics.totalCandidates.toString()],
        ["Average age", statistics.averageAge.toFixed(1)],
        ["Average experience", `${statistics.averageYearsOfExperience.toFixed(1)} years`],
        ["Average salary", formatMoney(statistics.averageSalaryExpectation)],
        ["Minimum salary", formatMoney(statistics.minSalaryExpectation)],
        ["Maximum salary", formatMoney(statistics.maxSalaryExpectation)],
        ["Most present skill", statistics.mostPresentSkill ?? "None"]
    ];

    summaryRows.forEach(([label, value]) => {
        console.log(`${label.padEnd(24)}: ${value}`);
    });

    printSubSectionHeader("Status distribution");
    Object.entries(statistics.statusDistribution).forEach(([status, count]) => {
        console.log(`${status.padEnd(24)}: ${count}`);
    });

    printSubSectionHeader("Skills distribution");
    Object.entries(statistics.skillsDistribution).forEach(([skill, count]) => {
        console.log(`${skill.padEnd(24)}: ${count}`);
    });
}