# 🏊 Piscine Talya — J-5 avant l'entretien technique

> Programme intensif inspiré du format Epitech, pour passer de C/systèmes à la stack web/IA de Talya en 5 jours.

## 🎯 Objectif

Pas de devenir expert Next.js/Supabase en 5 jours — impossible et pas attendu. L'objectif est de :
- Comprendre les **concepts clés** de chaque brique de la stack
- Avoir un **mini-projet fonctionnel** à montrer/raconter en entretien
- Être capable de **discuter intelligemment** de choix techniques (pas juste réciter)

Rappel : ta logique de programmation (algo, structures de données, rigueur) ne change pas entre C et JS/TS. Seule la syntaxe et l'écosystème changent. Tes projets Epitech (42sh, CoreWar) sont une vraie preuve de capacité d'apprentissage rapide — n'hésite pas à le mentionner en entretien.

---

## 🛠️ Setup (avant de commencer J1)

- [ ] Installer [Node.js](https://nodejs.org) (version LTS)
- [ ] Installer les extensions VSCode : ESLint, Prettier, ES7+ React snippets
- [ ] Créer un compte [Supabase](https://supabase.com) (gratuit)
- [ ] Créer un compte [Vercel](https://vercel.com) (gratuit, optionnel pour déployer ton mini-projet)
- [ ] Vérifier que `node -v` et `npm -v` fonctionnent dans ton terminal

---

## Jour 1 — JavaScript moderne + TypeScript

**Objectif** : passer du JS "vanilla" basique à la syntaxe ES6+ utilisée partout en React/Next.js.

### Concepts à maîtriser
- [ ] `const` / `let` (et pourquoi on n'utilise plus jamais `var`)
- [ ] Arrow functions : `(a, b) => a + b`
- [ ] Destructuring : `const { name, age } = user`
- [ ] Spread / rest : `[...arr]`, `{...obj}`
- [ ] Template literals : `` `Bonjour ${name}` ``
- [ ] `map`, `filter`, `reduce` sur les tableaux
- [ ] `Promise`, `async/await`, `fetch`
- [ ] Modules : `import` / `export`

### TypeScript (les bases)
- [ ] Typer une variable/fonction : `function add(a: number, b: number): number`
- [ ] `interface` vs `type`
- [ ] Types optionnels : `age?: number`
- [ ] Union types : `status: "pending" | "done"`

> 💡 Analogie C : TypeScript, c'est un peu comme si le compilateur te gueulait dessus AVANT l'exécution plutôt qu'un segfault en runtime. C'est un allié, pas un ennemi.

### Ressources
- [javascript.info](https://javascript.info) — sections "Modern JS" + "Promises, async/await"
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — juste les 30 premières minutes

### Exercice
Écris 5-6 petites fonctions en TS (ex : filtrer une liste de candidatures par statut, calculer un taux de réponse) pour te faire la main sur la syntaxe.

---

## Jour 2 — React

**Objectif** : comprendre comment une UI réactive fonctionne — le concept le plus éloigné du C.

### Concepts à maîtriser
- [ ] Composants (une fonction qui retourne du JSX)
- [ ] Props (données passées du parent à l'enfant)
- [ ] State avec `useState`
- [ ] `useEffect` (exécuter du code au montage / changement de state)
- [ ] Rendu conditionnel (`{condition && <div>...</div>}`)
- [ ] Listes + `key` (pourquoi React a besoin d'une clé unique)
- [ ] Flux de données unidirectionnel (parent → enfant, jamais l'inverse directement)

> 💡 Analogie : le state, c'est un peu ta mémoire globale dans un programme C, sauf que React "réagit" tout seul et redessine l'écran quand elle change — pas besoin d'appeler manuellement une fonction "refresh".

### Ressources
- [react.dev/learn](https://react.dev/learn) — nouveau site officiel, très pédagogique et interactif, fais les premiers chapitres

### Exercice pratique
Construis un petit compteur, puis une todo-list simple (ajouter/supprimer/cocher une tâche) en local, sans backend. Objectif : manipuler `useState` sans réfléchir.

---

## Jour 3 — Next.js

**Objectif** : comprendre le framework spécifique qu'utilise Talya par-dessus React.

### Concepts à maîtriser
- [ ] App Router : la structure de dossiers `app/` définit les routes du site
- [ ] Différence **Server Components** (par défaut) vs **Client Components** (`"use client"`)
- [ ] **Server Actions** : fonctions exécutées côté serveur, appelables directement depuis un composant
- [ ] API Routes (`app/api/.../route.ts`) pour un endpoint classique si besoin
- [ ] Navigation avec `<Link>` et `useRouter`

### Pourquoi ça compte pour Talya
Next.js + Vercel = déploiement quasi instantané, rendu côté serveur pour la perf, et Server Actions pour éviter d'écrire une API séparée à chaque fois. C'est probablement ce qui leur permet d'itérer aussi vite sur le produit.

### Ressources
- [Next.js Learn](https://nextjs.org/learn) — tutoriel officiel guidé, fais-le en entier si possible (~3-4h)

### Exercice
Crée un projet (`npx create-next-app@latest`) avec 2-3 pages, et une route API simple qui renvoie du JSON statique.

---

## Jour 4 — Supabase + Mini-projet

**Objectif** : relier une vraie base de données à ton app Next.js — reproduire en miniature ce que fait Talya.

### Concepts à maîtriser
- [ ] Créer une table dans Supabase (ex : `candidatures` avec `id`, `entreprise`, `poste`, `statut`, `date`)
- [ ] Requêtes basiques via le client JS : `.select()`, `.insert()`, `.update()`, `.delete()`
- [ ] Concept de **Row Level Security (RLS)** — pourquoi c'est essentiel pour la sécurité multi-utilisateurs
- [ ] Connecter le client Supabase à ton projet Next.js

### 🎯 Mini-projet : "Mini Talya"
Un tracker de candidatures simplifié :
- [ ] Table Supabase `candidatures` (entreprise, poste, statut, date)
- [ ] Page Next.js qui liste les candidatures (fetch depuis Supabase)
- [ ] Formulaire pour ajouter une candidature (Server Action → insert Supabase)
- [ ] Bonus si le temps le permet : bouton pour changer le statut (pending / entretien / refusé)

C'est LE truc à montrer et raconter en entretien : *"j'ai fait un mini clone simplifié de votre tracker en 2 jours pour comprendre votre stack"* — ça a un impact énorme, bien plus que réciter des définitions.

### Ressources
- [Supabase + Next.js Quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

## Jour 5 — Consolidation + Prépa entretien

### Matin — Relecture technique
- [ ] Relire tes notes J1-J4
- [ ] Refaire tourner ton mini-projet, vérifier que tout marche encore
- [ ] Relire une fois Server vs Client Components (souvent LE piège en entretien Next.js)

### Après-midi — Prépa entretien pur
- [ ] Prépare 2-3 phrases sur ton parcours (42sh, CoreWar → preuve de capacité à apprendre une stack vite et en autonomie)
- [ ] Relis les questions à poser (section ci-dessous)
- [ ] Prépare une réponse courte si on te demande "t'as jamais fait de web avant ?" → sois honnête, mets en avant la logique transférable + ce que t'as construit cette semaine

### Soir
- [ ] Pas de code après 21h. Repos, relis juste ce README en diagonale avant de dormir.

---

## 📋 Questions à poser en entretien

**Archi / Backend**
- Vous utilisez plutôt les Server Actions / Route Handlers de Next.js directement, ou il y a un backend séparé pour la logique lourde (scraping, scoring) ?
- Comment est architecturé le scraping des offres ? Jobs schedulés, workers séparés, ou intégré dans l'app ?

**IA / Coûts** *(sujet qu'ils t'ont eux-mêmes amené au premier entretien)*
- Sur l'optimisation des coûts IA, vous pensez plutôt model routing selon la tâche, prompt caching, ou traitement batch/asynchrone ?
- Les traitements IA sont synchrones ou vous avez des files d'attente en arrière-plan ?

**Équipe / Process**
- Vous êtes combien dans l'équipe tech actuellement ?
- Concrètement, sur quoi je travaillerais en priorité les premières semaines ?

> Conseil : 2-3 questions max selon comment la conversation tourne, pas toutes d'un coup.

---

## 🧠 Rappel — Stack Talya

| Couche | Techno |
|---|---|
| Frontend + hosting | Next.js (React) sur **Vercel**, région Paris (fra1) |
| DB / Auth / Storage | **Supabase** (Postgres), région Francfort (EU Central) |
| IA | **Claude (Anthropic)** via **AWS Bedrock**, traitement 100% UE |
| Monitoring | Sentry via BetterStack, région EU |

---

## ✅ Checklist finale avant l'entretien

- [ ] Mini-projet "Mini Talya" fonctionnel et compris (pas juste copié-collé)
- [ ] Je sais expliquer la différence Server vs Client Component
- [ ] Je sais expliquer ce qu'est le state et pourquoi on en a besoin
- [ ] Je sais ce qu'est Supabase et pourquoi la RLS existe
- [ ] J'ai 2-3 questions prêtes à poser
- [ ] J'ai une réponse claire sur "pourquoi je viens de C/systèmes et pas du web"
- [ ] Setup technique testé (caméra/micro pour la visio, connexion stable)

**Bonne chance 🚀**