// ---- Imports ----

import { addCandidate } from "./candidate.service";
import { getAcceptedCandidates, getCandidatesBySkill } from "./candidate.query";
import { displayCandidates, displayStatistics } from "./display";
import { candidates } from "./data";
import { calculateStatistics } from "./statistics.service";

// ---- Main Application Logic ----

console.log("Welcome to the Candidate Tracker!\n");

const updatedCandidates = addCandidate(candidates, {
    id: "11",
    firstName: "Eve",
    lastName: "Williams",
    age: 29,
    email: "eve.williams@example.com",
    yearsOfExperience: 4,
    skills: ["React", "Docker"],
    status: "pending",
    salaryExpectation: 75000
});

const reactCandidates = getCandidatesBySkill(updatedCandidates, "React");
const acceptedCandidates = getAcceptedCandidates(updatedCandidates);

displayCandidates(updatedCandidates);
displayStatistics(calculateStatistics(updatedCandidates));

console.log(`\nReact candidates: ${reactCandidates.length}`);
console.log(`Accepted candidates: ${acceptedCandidates.length}`);