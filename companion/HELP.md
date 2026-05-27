# SLVideoSystem

Ce module Companion se connecte au serveur TCP SLVideoSystem sur le port 7891.

## Configuration

Renseignez l'adresse IP du serveur SLVideoSystem, puis la taille de grille attendue par SLVideoSystem.

Le port 7891 et l'authentification par HardwareID sont gérés automatiquement par le module.

Le module renvoie cette taille de grille a chaque connexion, puis une seconde fois juste apres pour resynchroniser un redemarrage du logiciel SLVideo.

## Utilisation recommandée

Companion ne transmet pas au module la position reelle d'un bouton. Le module ne peut donc pas deduire tout seul que ce bouton est en 0/3, 2/3, etc.

Utilisez les presets de la categorie `SLVideo Positions`.

Chaque preset de position ajoute en une seule fois :

- l'action `Déclencher le raccourci`
- le feedback avancé `État visuel du raccourci`
- le `shortcutId` du raccourci correspondant a cette position

Si vous ajoutez seulement l'action ou le feedback a la main, il faut choisir le raccourci SLVideo dans la liste. Sinon le bouton restera vide et n'enverra rien.

## Fonctionnement

Le module :

- envoie la taille de grille au serveur
- récupère les listes JSON générées par SLVideoSystem
- associe chaque preset de position au raccourci actuellement present sur cette case
