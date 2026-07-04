import { useState, useEffect } from "react";
import { candidates as initialCandidates } from "./data";
import { CandidateList } from "./components/CandidateList";
import { CandidateForm } from "./components/CandidateForm";
import { StatisticsPanel } from "./components/StatisticsPanel";
import { deleteCandidate, addCandidate } from "./logic/candidate.service";
import type { Candidate } from "./types";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCandidates(initialCandidates);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer); // cleanup si le composant disparaît avant la fin
  }, []); // tableau vide = exécuté une seule fois, au montage

  function handleDelete(id: string) {
    setCandidates(deleteCandidate(candidates, id));
  }

  function handleAdd(candidate: Candidate) {
    setCandidates(addCandidate(candidates, candidate));
  }

  return (
    <div>
      <h1>Mini Talya — Candidate Tracker</h1>

      {loading && <p>Chargement des candidats...</p>}

      {!loading && (
        <>
          <StatisticsPanel candidates={candidates} />
          <CandidateForm onAdd={handleAdd} />
          {candidates.length === 0 ? (
            <p>Aucun candidat pour le moment.</p>
          ) : (
            <CandidateList candidates={candidates} onDelete={handleDelete} />
          )}
        </>
      )}
    </div>
  );
}

export default App;