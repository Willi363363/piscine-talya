import { getCandidates } from "@/lib/data";
import { CandidateTracker } from "@/components/CandidateTracker";

export default async function Page() {
  const candidates = await getCandidates();

  return (
    <main className="app-shell">
      <h1>Mini Talya — Candidate Tracker</h1>
      <CandidateTracker initialCandidates={candidates} />
    </main>
  );
}