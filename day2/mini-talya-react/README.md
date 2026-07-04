# Mini Talya React

## Pourquoi ce projet

Ce projet a été réalisé pour apprendre TypeScript et React dans une logique proche d’un vrai projet livrable en entreprise.

L’objectif n’était pas seulement de faire un exercice qui fonctionne, mais de construire une base propre, lisible et scalable, avec une organisation de code proche de ce qu’on attend aujourd’hui dans une application front moderne.

J’ai donc volontairement travaillé plusieurs axes à la fois :

- typage strict avec TypeScript
- séparation claire des responsabilités
- état local React bien géré
- logique métier isolée de l’UI
- code prêt à évoluer sans tout réécrire

## Contexte fonctionnel

L’application simule un mini outil de gestion de candidatures chez Talya.

L’utilisateur peut :

- afficher une liste de candidats
- ajouter un candidat via un formulaire React
- supprimer un candidat
- visualiser les statistiques calculées automatiquement

Les données restent en mémoire côté front, ce qui permet de se concentrer sur l’architecture, le typage et la qualité du code plutôt que sur une base de données ou une API.

## Stack technique

### React

React a été choisi pour la couche UI car c’est une référence actuelle pour construire des interfaces déclaratives et composables.

Dans ce projet, React sert à :

- gérer l’état de l’application avec `useState`
- simuler un chargement initial avec `useEffect`
- composer l’interface en petits composants réutilisables

### TypeScript

TypeScript est au centre du projet.

Je l’ai utilisé pour :

- typer les candidats et les statistiques
- sécuriser les retours des fonctions métier
- éviter les erreurs de forme de données
- rendre les composants plus fiables et plus maintenables

### Vite

Vite sert d’outil de build et de dev server.

Ce choix est adapté ici car il apporte :

- un démarrage rapide en développement
- un build simple et moderne
- une intégration naturelle avec React et TypeScript
- une configuration légère, sans surcouche inutile

## Architecture du projet

Le projet est découpé par responsabilité, comme dans une base de code structurée.

- `src/App.tsx` orchestre l’application et relie les composants entre eux
- `src/components/` contient l’UI réutilisable
- `src/logic/` contient la logique métier pure
- `src/data.ts` contient les données initiales
- `src/types.ts` centralise les types partagés

Cette organisation évite de mélanger la vue, le calcul métier et les données. C’est volontairement simple, mais déjà pensé pour être maintenable et faire évoluer le projet plus tard.

## Flux des données

Le flux est volontairement clair :

1. `data.ts` fournit les candidats de départ
2. `App.tsx` récupère ces données dans un état local React
3. `CandidateForm` ajoute un nouveau candidat
4. `CandidateList` affiche la liste
5. `CandidateCard` gère l’affichage d’un candidat
6. `StatisticsPanel` calcule et affiche les statistiques
7. Les fonctions de `logic/` traitent les opérations métier sans mutation directe

Ce découpage permet de garder une vraie séparation entre l’UI et la logique de traitement.

## Stockage des données

Le projet utilise uniquement un stockage en mémoire côté front.

Concrètement :

- les candidats initiaux viennent de `src/data.ts`
- l’état React local devient la source de vérité au runtime
- les ajouts et suppressions passent par les services métier
- aucune base de données n’est utilisée
- aucune API n’est nécessaire pour cette version

Ce choix est volontaire pour apprendre le fonctionnement global d’une app front moderne sans complexifier inutilement le projet.

Il rend aussi la base de code plus facile à tester, plus rapide à lancer et plus simple à faire évoluer vers une persistance réelle plus tard.

## Choix de conception

### État local React comme source de vérité

`App.tsx` centralise les candidats dans un état local.

Ce choix permet de garder un flux simple et lisible : l’UI pilote l’état, puis les composants enfants déclenchent les actions via des callbacks.

### Services métiers immuables

Les fonctions de `candidate.service.ts` ne modifient pas les tableaux en place.

Elles renvoient toujours une nouvelle valeur :

- `addCandidate`
- `updateCandidate`
- `deleteCandidate`

Ce pattern est important pour rester prévisible, pour éviter les effets de bord et pour rester dans une logique propre à React.

### Statistiques calculées à la volée

`StatisticsPanel` appelle `calculateStatistics` à partir de la liste courante des candidats.

Le calcul est fait avec `reduce` pour rester dans une logique fonctionnelle, ce qui permet de produire :

- le nombre total de candidats
- l’âge moyen
- l’expérience moyenne
- le salaire moyen
- le salaire minimum et maximum
- la compétence la plus présente

### Formulaire contrôlé

`CandidateForm` repose sur des inputs contrôlés.

Ce choix donne un comportement plus propre en React car :

- l’état du formulaire reste explicite
- les champs sont faciles à réinitialiser
- l’ajout d’un candidat reste prévisible

## UI React

J’ai ajouté une UI React simple et volontairement lisible.

Le but n’était pas de faire une interface complexe, mais une interface propre qui montre clairement le fonctionnement de l’application.

L’UI affiche :

- un titre de page
- les statistiques principales
- un formulaire d’ajout
- la liste des candidats
- la suppression d’un candidat depuis l’interface

L’ensemble est branché directement sur la logique métier, sans couche inutile entre les composants et les services.

## Modèle de données

Le cœur du projet repose sur un type `Candidate` fortement typé.

Les points importants du modèle :

- les statuts sont limités à des valeurs connues
- les compétences sont typées
- les statistiques ont une structure dédiée
- les transformations sont cohérentes de bout en bout

Ce modèle permet de détecter rapidement les incohérences et de garder une base saine à mesure que l’application évolue.

## Principes appliqués

- immutabilité systématique
- fonctions pures pour la logique métier
- séparation UI / logique / données
- typage explicite partout où c’est utile
- composants React petits et lisibles
- code organisé pour rester scalable

## Ce que ce projet m’a permis d’apprendre

- construire une application React + TypeScript de bout en bout
- connecter correctement UI, état et logique métier
- structurer un projet comme une base livrable en entreprise
- séparer les responsabilités pour éviter le code spaghetti
- écrire du code plus maintenable que du simple prototype
- penser “scalabilité” dès la structure du dossier et des fonctions

## Évolutions possibles

Si le projet devait devenir une vraie application produit, les prochaines étapes naturelles seraient :

- ajouter une API backend
- brancher une base de données
- ajouter des validations de formulaire plus poussées
- gérer l’édition complète d’un candidat
- ajouter des filtres et recherches plus avancés
- écrire des tests unitaires et d’intégration

## Lancement

### Développement

```bash
npm install
npm run dev
```

### Vérification du build

```bash
npm run build
```

La compilation TypeScript et le build Vite passent correctement.