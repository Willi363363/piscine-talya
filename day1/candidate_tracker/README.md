# Candidate Tracker

## Pourquoi ce projet

Ce projet a été réalisé pour apprendre TypeScript en conditions proches d’un projet livrable en entreprise.

L’objectif n’était pas seulement de faire fonctionner des exercices, mais de pratiquer une base de code plus réaliste : code modulaire, responsabilités séparées, typage explicite, fonctions pures, règles de lisibilité et structure prête à grandir.

## Contexte fonctionnel

L’application simule un mini outil de gestion de candidatures chez Talya.

Les recruteurs manipulent une liste de candidats en mémoire pour :

- créer et supprimer des candidats
- modifier un statut
- ajouter des compétences et des notes
- rechercher et filtrer les profils
- calculer des statistiques utiles au suivi du recrutement

## Choix d’architecture

J’ai volontairement séparé le projet en petits modules avec une responsabilité claire.

- `data.ts` contient les données de départ utilisées comme source d’exemple
- `types.ts` centralise le modèle métier et les types partagés
- `candidate.service.ts` contient les opérations d’écriture sur les tableaux immuables
- `candidate.query.ts` contient les opérations de lecture et les recherches métier
- `statistics.service.ts` calcule les agrégations et les indicateurs
- `display.ts` gère l’affichage console
- `index.ts` orchestre le flux global de l’application

Cette découpe suit une logique simple proche de ce qu’on attend dans une petite base de code de production : lire, écrire, calculer, afficher, sans mélanger les responsabilités.

## Stockage des données

Le projet utilise uniquement un stockage en mémoire.

Ce choix est volontaire pour se concentrer sur la logique métier et sur TypeScript, sans ajouter la complexité d’une base de données ou d’une couche d’accès réseau.

Conséquences de ce choix :

- les données sont simples à manipuler et à tester
- l’état est prévisible
- toutes les opérations restent pures et immuables
- le projet reste facile à faire évoluer vers une vraie persistance plus tard

## Modèle de données

Le cœur du projet repose sur un type `Candidate` fortement typé.

Les points importants du modèle :

- les statuts sont limités à une union de valeurs connues
- les compétences sont représentées par un type précis
- certaines données sont optionnelles, comme les notes
- les transformations restent typées de bout en bout

Cette approche permet de détecter très tôt les incohérences et d’obtenir un code plus sûr, plus lisible et plus maintenable.

## Principes appliqués

Le projet applique plusieurs pratiques que je voulais consolider dans un contexte proche du développement pro :

- immutabilité systématique des tableaux et des objets
- fonctions pures pour les services et les requêtes
- séparation claire entre lecture, écriture, calcul et affichage
- typage explicite pour éviter les ambiguïtés
- usage de `map`, `filter`, `reduce`, `find`, `some` et `every` à la place de boucles impératives

## UI console

L’interface du projet est volontairement une interface console.

L’objectif était de travailler la clarté de sortie sans complexifier l’outillage front-end.

L’affichage a été structuré pour rendre les résultats lisibles en local :

- en-têtes de section
- cartes candidat plus lisibles
- résumé des statistiques
- distributions par statut et par compétence

## Contraintes respectées

- pas de boucle `for`
- pas de boucle `while`
- logique métier exprimée avec les méthodes de tableau autorisées
- code organisé pour rester extensible

## Ce que ce projet m’a permis d’apprendre

- structurer un projet TypeScript de manière propre
- séparer les responsabilités comme dans un backend simple
- manipuler des types avancés sans rendre le code illisible
- écrire des transformations immuables
- penser en termes d’architecture et pas seulement de résultat immédiat
- produire un code plus proche d’un livrable maintenable que d’un simple exercice

## Évolution possible

Si le projet devait évoluer vers un vrai contexte produit, les prochaines étapes naturelles seraient :

- ajouter une persistance réelle
- brancher une API HTTP
- écrire des tests unitaires sur les services et les queries
- ajouter un vrai système de validation d’entrée
- séparer davantage le domaine métier de la couche d’affichage

## Lancement

Le projet est pensé pour être exécuté en TypeScript dans la console.

La compilation actuelle passe avec :

```bash
npx tsc --noEmit
```