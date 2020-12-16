# OhNo-OhNo-OhNoNoNoNooo

## Synthèse du projet et analyse 

TO WRITE...

## Synthèse du travail de conception 

Le site web sera composé en deux partie :
La partie Quizz, qui permettra de répondre aux questions afin de découvrir le quizz ou alors perfectionner ses résultats.
La partie compte, celle-ci contient les scores du joueur, ses statistiques, et un accès au leaderboard afin de se comparer avec les autres joueurs. 

Afin de pouvoir participer au Quizz il est nécessaire de s’inscrire sur le site. Nous utiliserons PostgreSQL pour la partie base de données.
Le modèle de base de donnée pour l’inscription sera de la forme : 
pseudo, 
mot de passe, 
confirmation de mot de passe.

La base donnée comprendra aussi une table pour enregistrer les scores des joueurs qui sera de la forme :
pseudo du joueur,
numéro du quiz,
score.

## Feuille de route 

https://docs.google.com/spreadsheets/d/1Ek0QMXgEH73pQNfZTnAHggwNIvll0N9HoeywLDI-IVw/edit?usp=sharing

## Objectif du prototype initial 

L’objectif est de créer un site web proposant aux utilisateurs un quiz avec des questions plutôt simples mais chaque réponse sera entourée d’un principe de mini qui rendra celle-ci plus compliquée. L’utilisateur pourra s’inscrire et se connecter pour enregistrer ses scores dans un leaderboard. Nous proposons en premier lieu un seul quiz mais pourquoi pas par la suite ajouter plusieurs quizz qui se retrouvent dans l’espace de l’utilisateur qui pourra voir ceux qu’il a déjà réalisé ainsi que les nouveaux.

Fonctionnalités : 
Login sécurisé
Conception d’un quiz (20 questions / Mini jeu)
Récupération des scores dans une base de donnée
Multijoueur 

Scénario d’interaction : 
L’utilisateur arrive sur le site qui lui propose de se créer un compte pour pouvoir lancer le premier quiz. 
L’utilisateur répond aux 20 questions du quiz
Fin du quiz.
Affichage du résultat 
Retour au compte de l’utilisateur ou le quiz est marqué comme terminé et le score est affiché.
Possibilité de rejouer le quiz ou d’en choisir un autre 
