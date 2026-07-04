"use strict";
// ---- TypeScript Learning Project ----
Object.defineProperty(exports, "__esModule", { value: true });
// ---- User logic ----
function displayUserInfo({ name, age, salesCount, purchaseCount }) {
    const totalActivity = salesCount + purchaseCount;
    console.log(`Mon nom est ${name} et j'ai ${age} ans.`);
    console.log(`Activité totale (ventes + achats) : ${totalActivity}`);
}
// ---- Notes logic ----
const addNote = (notes, note) => [...notes, note];
const doubleNotes = (notes) => notes.map((note) => note * 2);
const filterNotes = (notes, threshold) => notes.filter((note) => note >= threshold);
const sumNotes = (notes) => notes.reduce((sum, note) => sum + note, 0);
const getStudentNames = (students) => students.map((student) => student.name);
// ---- Execution ----
const user = {
    name: "William",
    age: 18,
    salesCount: 1,
    purchaseCount: 3,
};
const baseNotes = [10, 12, 15, 8, 9];
// Step 1: enrich data
const notesWithExtra = addNote(baseNotes, 14);
// Step 2: transform
const doubledNotes = doubleNotes(notesWithExtra);
// Step 3: filter
const filteredNotes = filterNotes(doubledNotes, 20);
// Step 4: aggregate
const total = sumNotes(filteredNotes);
// Step 5: array of objects
const students = [
    { name: "William", grade: 12, status: "passed" },
    { name: "Alex", grade: 18, status: "passed" },
    { name: "Sarah", grade: 9, status: "failed" }
];
const student = students.find((student) => student.name === "Alex");
const hasFailingStudent = students.some((student) => student.status === "failed");
const allPassed = students.every((student) => student.status === "passed");
// ---- Outputs ----
displayUserInfo(user);
console.log("Noms des étudiants :", getStudentNames(students));
console.log("Note de Alex :", student?.grade);
console.log("Y a-t-il un étudiant en échec ?", hasFailingStudent);
console.log("Tous les étudiants ont-ils réussi ?", allPassed);
console.log("Notes initiales :", baseNotes);
console.log("Notes enrichies :", notesWithExtra);
console.log("Notes doublées :", doubledNotes);
console.log("Notes filtrées :", filteredNotes);
console.log("Total final :", total);
//# sourceMappingURL=index.js.map