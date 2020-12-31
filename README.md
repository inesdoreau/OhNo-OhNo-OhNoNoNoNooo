# OhNo-OhNo-OhNoNoNoNooo

## Synthèse du projet et analyse 

Ce projet permet de faire la synthèse de toutes les connaissances que nous avons reçues au cours des derniers mois.
Le cahier des charges du projet est simple: utiliser git pour faire un site web fonctionnel avec un système de login, qui, une fois terminé sera déployé sur le web.

L'objectif est de réaliser un projet qui soit amusant et ludique, nous avons décidé de partir sur un site web permettant de jouer à un mini-jeu. Ce jeu prend la forme d’un quiz sur un ton léger, qui a pour objectif de tester votre connaissance générale sur de multiples domaines tout en vous faisant réaliser de petits challenges pour répondre à certaines questions.


## Synthèse du travail de conception 

Le site web sera composé en deux partie :
La partie Quiz, qui permettra de répondre aux questions afin de découvrir le quiz ou alors perfectionner ses résultats.
La partie compte, celle-ci contient les scores du joueur, ses statistiques, et un accès au leaderboard afin de se comparer avec les autres joueurs. 
Afin de pouvoir participer au Quiz il est nécessaire de s’inscrire sur le site. Nous utiliserons PostgreSQL pour la partie base de données.
Le modèle de base de donnée pour l’inscription sera de la forme : 
* id du joueur
* pseudo
* mot de passe
* is Admin
  
Pour enregistrer le score du joueur nous avons décidé de rajouter dans la table de nos utilisateur une colonne pour envoyer son score pour un quiz (pour le moment)
* id du joueur
* pseudo
* mot de passe
* is Admin
* score
 
  
La partie sera gérée par un Vue JS afin d’avoir un défilement des questions dynamiques et de ne pas changer de pages entre chaque question.


## Feuille de route 

https://docs.google.com/spreadsheets/d/1Ek0QMXgEH73pQNfZTnAHggwNIvll0N9HoeywLDI-IVw/edit?usp=sharing

## Objectif du prototype initial 

L’objectif est de créer un site web proposant aux utilisateurs un quiz avec des questions plutôt simples, mais chaque réponse sera entourée d’un principe de mini jeu qui rendra celle-ci plus compliquée. L’utilisateur pourra s’inscrire et se connecter pour enregistrer ses scores dans un leaderboard. Nous proposons en premier lieu un seul quiz mais pourquoi pas par la suite ajouter plusieurs quiz qui se retrouvent dans l’espace de l’utilisateur qui pourra voir ceux qu’il a déjà réalisé ainsi que les nouveaux.

Fonctionnalités : 
* Login sécurisé
* Conception d’un quiz (20 questions / Mini jeu)
* Récupération des scores dans une base de donnée
* Multijoueur 

Scénario d’interaction : 
* L’utilisateur arrive sur le site qui lui propose de se créer un compte pour pouvoir lancer le premier quiz. 
* L’utilisateur répond aux 20 questions du quiz
* Fin du quiz.
* Affichage du résultat 
* Retour au compte de l’utilisateur ou le quiz est marqué comme terminé et le score est affiché.
* Possibilité de rejouer le quiz ou d’en choisir un autre 

![UserStory](https://user-images.githubusercontent.com/73130585/102514981-73111d80-408d-11eb-92fc-64860af40c93.png)
