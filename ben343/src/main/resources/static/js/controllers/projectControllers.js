var benJControllers = angular.module('ProjectControllers', []);

benJControllers.controller('ProjectCtrl', ['$scope', '$log', '$state',
	function($scope, $log, $state) {
		$scope.project = {
				title: 'Projets Universitaires',
				subtitle: 'Juste... quelques projets'
		};
		
		$scope.goToAccueil = function() {
			$state.go("benJ", {'#':'process'});
		};
		
		$scope.projects = 
			[
			 {
				 title: 'Projet «Mirror Game» – Android',
			     src: 'img/projects/project-mirror-game.png',
				 subTitle: 'Université Paul Sabatier, master 2 Développement Logiciel – Année 2013',
				 context: 'Dans le cadre du challenge Android M2DL, j’ai réalisé en équipe un jeu de précision et de rapidité utilisant notamment l’accéléromètre du téléphone.',
				 team: '3 personnes, dont Benjamin Brion : Chef de projet, développeur',
				 conception: ['Modélisation (cas d’utilisation, diagramme d’activité, diagramme de classe)', 'Prototypage (console + téléphone)', 'Développement'],
				 environment: 'Android, Java, SVN, XML'
			 },
			 {
				 title: 'Projet «TouchMyCircle» – Android',
			     src: 'img/projects/project-touch-my-circle.jpg',
				 subTitle: 'Université Paul Sabatier, master 2 Développement Logiciel – Année 2013',
				 context: 'Réalisation en équipe d’un jeu de précision humoristique. Projet dans le cadre de l’UE TER du M2DL.',
				 team: '3 personnes, dont Benjamin Brion : Chef de projet, développeur',
				 conception: ['Modélisation (cas d’utilisation, diagramme d’activité, diagramme de classe)', 'Prototypage (console + téléphone)', 'Développement'],
				 environment: 'Android, Java, SVN, XML'
			 },
			 {
				 title: 'Projet «I-Jude» – Android',
			     src: 'img/projects/project-i-jude.png',
				 subTitle: 'Université Paul Sabatier, master 2 Développement Logiciel – Année 2012',
				 context: 'Réalisation d’un jeu musical. Reproduire de manière interactive la musique « Hey Jude » The Beatles. Projet réalisé en équipe dans le but d’acquérir rapidement des connaissances en Android.',
				 team: '3 personnes, dont Benjamin Brion : chef de projet, développeur',
				 conception: ['Modélisation (cas d’utilisation, diagramme d’activité, diagramme de classe)', 'Prototypage (console + téléphone)', 'Développement'],
				 environment: 'Android, Java, SVN, XML'
			 },
			 {
				 title: 'Projet «Mystic EdT» – Système Multi-Agents Java',
			     src: 'img/projects/project-sma.png',
				 subTitle: 'Université Paul Sabatier, master 1 Développement Logiciel – Année 2012',
				 context: 'Développement d’un système capable de fournir (entre autres) un emploi du temps pour chaque étudiant de M1DL. Le système est basé sur les Systèmes Multi-Agents Coopératifs (ou Adaptative Multi-Agents System) sur lesquels travaille actuellement l’équipe SMAC de l’IRIT. L’application était à destination du secrétariat de l’université Paul Sabatier – Toulouse III',
				 team: '4 personnes, dont Benjamin Brion : Responsable qualité, développeur',
				 conception: ['Etude des besoins du secrétariat de l’université département informatique (analyse du domaine)', 'Gestion de projets', 'Gestion des risques', 'Gestion qualité', 'Conception (méthode ADELFE)', 'Développement du système multi-agents'],
				 environment: 'Java, SMA, ADELFE, Eclipse, API JMS, UML, GANTT, SVN'
			 },
			 {
				 title: 'Réseau Social «My Pub» – J2EE',
			     src: 'img/projects/project-my-pub.png',
				 subTitle: 'Université Paul Sabatier, master 1 Développement Logiciel – Année 2011',
				 context: 'Développement d’un réseau social qui permet aux utilisateurs de trouver des « pubs » (bar, club, restaurant) qui correspondent le mieux à leurs centres dintérêts.',
				 team: '4 personnes, dont Brion Benjamin : Chef de projet, développeur',
				 conception: ['Etude des besoins', 'Prototypage IHM et conception', 'Conception du réseau social', 'Développement de MyPub'],
				 environment: 'Groovy, Ajax, GSP, Hibernate, MySQL, Grails, GIT, IHM, Plugin Security Core, Photoshop, Prototypage IHM'
			 },
			 {
				 title: 'Réseau Social «iPop» – J2EE',
			     src: 'img/projects/project-i-pop.jpg',
				 subTitle: 'Université Paul Sabatier, master 1 Développement Logiciel – Année 2011',
				 context: 'Développement d’un réseau social (en binôme) basé sur la popularité et la réputation de ses membres. En effet, chaque membre du réseau aura le choix de voter (au moins une fois par jour) parmi deux personnes choisies aléatoirement dans la base de données de l’application',
				 team: '',
				 conception: ['Etude des besoins', 'Gestion de projets', 'Gestion des risques (planification, contrôle qualité)', 'Prototypage IHM et conception', 'Conception du réseau social', 'Développement d\'IPop'],
				 environment: 'Groovy, Ajax, GSP, API Google Map, Hibernate, MySQL, Grails, GIT, IHM, Plugin Security Core, Photoshop, Prototypage IHM'
			 },
			 {
				 title: 'Jeu Puissance 4 Jetons Spéciaux (C, OpenGL)',
				 subTitle: 'Université Paul Sabatier, licence Informatique Fondamentale – Année 2010-2011',
				 context: 'Développement d’un jeu puissance 4 graphique, avec insertion de nouveaux jetons spéciaux.',
				 team: '',
				 conception: ['Etude des besoins', 'Prototypage IHM et conception', 'Conception du jeu', 'Développement du jeu'],
				 environment: 'C, librairies graphique OpenGL'
			 }
			 ];
	}
]);