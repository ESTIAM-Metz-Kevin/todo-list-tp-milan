# Faire une application TODO list

L'objectif est de rendre dynamique cette application avec REACT.

## Lancement du projet

- `pnpm install`
- `pnpm run dev`

## Fonctionnalités

### Composant Barre de recherche

- La barre de recherche permet d'entrer la description d'une tâche
- En appuyant sur le bouton d'ajout, transmet la description saisie (action qui prévient le composant parent)
- Le champ texte est réinitialisé

### Composant TodoItem

- Checkbox pour définir que la tâche est faite, dans ce cas de figure il y a :
  - background color qui change
  - le trait qui barre le texte
  - la checkbox reste cochée
  - Cocher est une action qui prévient le composant parent
- On peut également décocher (action qui prévient le composant parent)
- On peut choisir de vouloir supprimer la tâche (action qui prévient le composant parent)

### Composant TodoApp

- La liste est triée, d'abord ce qui n'est pas fait, ensuite ce qui a été fait
- Ce composant gère la mutation de la data (`useState`) et modifie la data en fonction des deux autres composants (si on a ajouté une tâche, coché une tâche, supprimé une tâche, ...)

## Remarques

- Vous devez créer les différents composants

## Ressources

- N'oubliez pas de reprendre les ressources sur Teams pour trouver revoir les bases vues en cours ;-)
