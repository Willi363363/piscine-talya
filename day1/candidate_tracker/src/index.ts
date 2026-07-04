// ---- Candidate Tracker ----

// ---- Context ----
// Tu travailles chez Talya
// Les recruteurs reçoivent des candidatures.
// Tu dois développer un petit programme permettant de gérer ces candidats.
// Tout se passe en mémoire (pas de base de données).

// ---- Objectifs ----
// Utiliser :
// interfaces
// types
// tableaux d'objets
// map
// filter
// reduce
// find
// some
// every
// fonctions pures
// immutabilité
// destructuring
// optional chaining
// union types
// propriétés optionnelles
// organisation propre du code

// ---- Fonctionnalités ----

// Créer un candidat.
// Supprimer un candidat.
// Modifier le statut.
// Ajouter une compétence.
// Ajouter une note.

// Trouver un candidat par id.
// Trouver tous les candidats "accepted".
// Trouver tous ceux ayant React.
// Trouver tous ceux ayant plus de X années d'expérience.

// Y a-t-il au moins un candidat accepté ?
// Tous les candidats ont-ils une adresse mail ?
// Existe-t-il un candidat sans compétence ?

// Nombre de candidats.
// Salaire moyen demandé.
// Salaire maximum.
// Salaire minimum.
// Nombre de candidats par statut.
// Compétence la plus présente.
// Moyenne d'expérience.

// displayCandidate() qui affiche joliment un candidat.
// displayStatistics()

// --- Contraintes ----

// Pas de boucle for.
// Pas de while.

// Utilise uniquement :
// map
// filter
// reduce
// find
// some
// every

// ---- Types ----

type CandidateStatus =
    | "pending"
    | "interview"
    | "accepted"
    | "rejected";

type StatusDistribution = Record<CandidateStatus, number>;

// ---- Interfaces ----

interface Candidate {
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

interface Statistics {
    totalCandidates: number;
    averageAge: number;
    averageYearsOfExperience: number;
    skillsDistribution: Record<string, number>;
    statusDistribution: StatusDistribution;
}
