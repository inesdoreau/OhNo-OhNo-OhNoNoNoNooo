# OhNo-OhNo-OhNoNoNoNooo

## Synthèse du projet et analyse 

Dans le cadre des cours de programmation événementielle et asynchrone nous avons été amenés à découvrir et expérimenter le développement web sous un angle totalement différent de ce que nous connaissions alors. Nous avons alors appris les bases de Node et Vue JS tout en ayant des rappels des langages HTML, CSS et même SQL. Ce projet permet de faire la synthèse de toutes les connaissances que nous avons reçues au cours des derniers mois.
Le cahier des charges du projet est simple: utiliser git pour faire un site web fonctionnel avec un système de login, qui, une fois terminé sera déployé sur le web.

Nous nous sommes alors fixés comme objectif de réaliser un projet qui soit amusant et ludique, nous avons donc décidé de partir sur un site web permettant de jouer à un mini-jeu. Ce jeu prend la forme d’un quizz sur un ton léger, qui a pour objectif de tester votre connaissance générale sur de multiples domaines tout en vous faisant réaliser de petits challenges pour répondre à certaines questions.


## Synthèse du travail de conception 

Le site web sera composé en deux partie :
La partie Quizz, qui permettra de répondre aux questions afin de découvrir le quizz ou alors perfectionner ses résultats.
La partie compte, celle-ci contient les scores du joueur, ses statistiques, et un accès au leaderboard afin de se comparer avec les autres joueurs. 
Afin de pouvoir participer au Quizz il est nécessaire de s’inscrire sur le site. Nous utiliserons PostgreSQL pour la partie base de données.
Le modèle de base de donnée pour l’inscription sera de la forme : 
* id du joueur
* pseudo
* mot de passe
  
La base donnée comprendra aussi une table pour enregistrer les scores des joueurs qui sera de la forme :
* id de la partie
* temps effectué
* score
  
Et nous aurons une table permettant de mettre en commun les résultats des parties en fonctions des joueurs sous la forme :
 * id joueur
 * id de la partie
  
La partie sera gérée par un Vue JS afin d’avoir un défilement des questions dynamiques et de ne pas avoir besoin de changer de pages entre chaque question.


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
