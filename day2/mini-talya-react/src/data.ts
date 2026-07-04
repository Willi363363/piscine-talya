// ---- Import Statements ----

import type { Candidate } from "./types";

// Generate test data for the candidate tracker application

export const candidates: Candidate[] = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john.doe@example.com",
        yearsOfExperience: 5,
        skills: ["React", "TypeScript"],
        status: "pending",
        salaryExpectation: 80000
    },
    {
        id: "2",
        firstName: "Jane",
        lastName: "Smith",
        age: 28,
        email: "jane.smith@example.com",
        yearsOfExperience: 3,
        skills: ["Node", "Docker"],
        status: "interview",
        salaryExpectation: 70000
    },
    {
        id: "3",
        firstName: "Alice",
        lastName: "Johnson",
        age: 35,
        email: "alice.johnson@example.com",
        yearsOfExperience: 7,
        skills: ["React", "Node"],
        status: "accepted",
        salaryExpectation: 90000
    },
    {
        id: "4",
        firstName: "Bob",
        lastName: "Brown",
        age: 40,
        email: "bob.brown@example.com",
        yearsOfExperience: 8,
        skills: ["Docker", "TypeScript"],
        status: "rejected",
        salaryExpectation: 75000
    },
    {
        id: "5",
        firstName: "Charlie",
        lastName: "Davis",
        age: 33,
        email: "charlie.davis@example.com",
        yearsOfExperience: 6,
        skills: ["Node", "TypeScript"],
        status: "pending",
        salaryExpectation: 85000
    },
    {
        id: "6",
        firstName: "Eve",
        lastName: "Miller",
        age: 29,
        email: "eve.miller@example.com",
        yearsOfExperience: 4,
        skills: ["React", "Docker"],
        status: "interview",
        salaryExpectation: 75000
    },
    {
        id: "7",
        firstName: "Frank",
        lastName: "Wilson",
        age: 38,
        email: "frank.wilson@example.com",
        yearsOfExperience: 10,
        skills: ["Node", "TypeScript"],
        status: "accepted",
        salaryExpectation: 95000
    },
    {
        id: "8",
        firstName: "Grace",
        lastName: "Taylor",
        age: 31,
        email: "grace.taylor@example.com",
        yearsOfExperience: 5,
        skills: ["React", "Node"],
        status: "pending",
        salaryExpectation: 80000
    },
    {
        id: "9",
        firstName: "Hank",
        lastName: "Anderson",
        age: 27,
        email: "hank.anderson@example.com",
        yearsOfExperience: 4,
        skills: ["Docker", "TypeScript"],
        status: "pending",
        salaryExpectation: 75000
    },
    {
        id: "10",
        firstName: "Ivy",
        lastName: "Thomas",
        age: 34,
        email: "ivy.thomas@example.com",
        yearsOfExperience: 6,
        skills: ["React", "Node"],
        status: "pending",
        salaryExpectation: 85000
    }
];