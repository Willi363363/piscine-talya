import { useState } from "react";
import type { Candidate } from "../types";

interface CandidateFormProps {
  onAdd: (candidate: Candidate) => void;
}

export function CandidateForm({ onAdd }: CandidateFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newCandidate: Candidate = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      age: 25,
      email,
      yearsOfExperience: 0,
      skills: [],
      status: "pending",
      salaryExpectation: 0
    };

    onAdd(newCandidate);

    // Reset des champs après ajout
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Prénom"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}