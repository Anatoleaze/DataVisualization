# DataVisualization

## Description

Ce projet a été réalisé durant ma deuxième année de Master Internet, Données et Connaissances.
Il a pour objectif de rendre lisible par le biais de graphiques ( donuts, bars... ) quelques informations rendues accessibles par la Société Nationale des Chemins de fer Français ( S.N.C.F ).

## Technologies utilisées

Ce projet utilise le framework VueJS 3, la bibliothèque Axios pour récupérer les données issues de fichiers JSON locaux, la bibliothèque ApexChart pour le rendu graphique et la bibliothèque Leaflet pour la carte géographique de la France.

## Quelques détails sur les composants développés :

### Map

Utilise la bibliothèque Leaflet pour afficher la carte de France et indiquer à l'aide de marqueurs, les gares.

### DonutsObjets et DonutsIncidents

Affiche les catégories d'incidents ou d'objets perdus enregistrés par la S.N.C.F, sous forme d'un graphique Donuts

### Bar

Met en évidence les différents salaires moyens entre 2010 et 2018 des Cadres, Agents de conduite et Agents d'exécution.

## Installation et lancement du projet

### 1. Construire l'image Docker :

```bash
docker build -t vue-app .
```

### 2. Lancer le conteneur :

```bash
docker run -d -p 8080:80 vue-app
```

### 3. Accéder à l'application :

Ouvrez votre navigateur à l'adresse suivante :

```bash
http://localhost:8080
```
