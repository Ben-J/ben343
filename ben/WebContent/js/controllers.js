'use strict';

/* Home Controllers */

var benJControllers = angular.module('benJControllers', []);

benJControllers.controller('GlobalCtrl', ['$scope', '$log',
	function($scope, $log) {

		$scope.showFooter = true;
	}
]);

benJControllers.controller('HomeCtrl', ['$scope', '$http', '$timeout', '$log', '$animate', '$state', 
                                        '$location', '$anchorScroll', 'anchorSmoothScroll', '$filter',
    function($scope, $http, $timeout, $log, $animate, $state, $location, $anchorScroll, anchorSmoothScroll, $filter) {
		/* MENU ->*/
		$scope.menu = 
		[
		 {id: 0, title:'ACCUEIL', 		value:'services', 	css:'', 	active:''},
		 {id: 1, title:'MOI',		 	value:'founders',	css:'', 	active:''},
		 {id: 2, title:'SCOLAIRE', 		value:'process', 	css:'',  	active:''},
		 {id: 3, title:'PROFESSIONNAL',	value:'work',  		css:'',  		active:''},
		 {id: 4, title:'FAQ', 			value:'faq', 		css:'',  		active:''},
		 {id: 5, title:'CONTACT', 		value:'contact',  	css:'',  	active:''}
		 ];
		
		$scope.goToAnchor = function(x) {
			var value = $filter('filter')($scope.menu, {id:x})[0].value;
			$location.hash(value);
		    anchorSmoothScroll.scrollTo(value);
		    
			angular.forEach($scope.menu, function(row) {
				if(row.id == x) {
					row.css = 'active';
				} else {
					row.css = '';
				}
			});
		};
		
		$scope.goTop = function() {
			$location.hash('body');
		    anchorSmoothScroll.scrollTo('body');
		    angular.forEach($scope.menu, function(row) {
				row.css = '';
			});
		};
		/*<- MENU */
		
		/* TITLE ->*/
		$scope.title = {
			name: 'Benjamin Brion',
			job: 'Ingénieur Logiciel',
			accroche: 'Front-end Back-end'
		};
		
		/*<- TITLE */
		
		/* ACCUEIL ->*/
		$scope.services = [
		                   {
		                	   id: 0,
		                	   link: function() {
		                		   	$location.hash('process');
		               		    	anchorSmoothScroll.scrollTo('process');
		               		    	angular.forEach($scope.menu, function(row) {
		               					if(row.id == 2) {
		               						row.css = 'active';
		               					} else {
		               						row.css = '';
		               					}
		               				});
		                	   },
		                	   title: 'Scolaire',
		                	   src: 'img/web_site_img/wireframing.png',
		                	   text:'Si vous voulez en savoir un peu plus sur mon parcours scolaire... recliquer ici.',
		                	   active: false
		                   },
		                   {
		                	   id: 1,
		                	   link: function() {
		                			$location.hash('work');
		               		    	anchorSmoothScroll.scrollTo('work');
		               		    	angular.forEach($scope.menu, function(row) {
		               					if(row.id == 3) {
		               						row.css = 'active';
		               					} else {
		               						row.css = '';
		               					}
		               				});
		                	   },
		                	   title: 'Professionnel',
		                	   src: 'img/web_site_img/app_development.png',
		                	   text:'Pour découvrir dans les grandes lignes mon parcours professionnel, recliquer ici',
		                	   active:false
		                   },
		                   {
		                	   id: 2,
		                	   link: function() {
		                		   $location.path('/resume');
		                	   },
		                	   title: 'Loisir',
		                	   src: 'img/web_site_img/graphic_design.png',
		                	   text:'Si connaître mes loisirs t\'intéresse alors il faut recliquer ici.',
		                	   active:false
		                   }
		                  ];
		$scope.citation = {
				text: 'Ce que je sais faire le mieux, c\'est partager mon enthousiasme. ',
				author: 'Bill Gates'
		};
		$scope.isActive = function(val){
			return $scope.services[val].active;
		};
		
		$scope.setActive = function(val) {
			if(!$scope.services[val].active) {
				$scope.services[val].active = !$scope.services[val].active;
			} else {
				$scope.services[val].link();
			}
		};
		
		$scope.keys = ['Jeune', 'Développeur', 'Réunionnais', 'IT','Motard', 'JAVA', 'Voyage', 'Foot'];
		/*<- ACCUEIL */
		
		/* UNIVERSITY ->*/
		$scope.schools = 
		[
		 {id:0, label: 'Lycée', active: true, textcss: ''},
		 {id:1, label: 'Licence', active: false, textcss: 'goRight'},
		 {id:2, label: 'Master', active: false, textcss: 'goRight'},
		 {id:3, label: 'Projet Web', active: false, textcss: 'goRight'},
		 {id:4, label: 'Projet mobile', active: false, textcss: 'goRight'},
		 {id:5, label: 'Stage', active: false, textcss: 'goRight'}
		 ];
		
		$scope.currentSchoolPart = 0;
		$scope.setActiveSchoolPart = function(x) {
			if(x != $scope.currentSchoolPart) {
				angular.forEach($scope.schools, function(row){
					row.active = (row.id == x);
				});
				if(x > $scope.currentSchoolPart) {
					$scope.schools[$scope.currentSchoolPart].textcss = 'inTransition goLeft';
					$scope.schools[x].textcss = 'inTransition';
					for(var i=0;i<=5;i++) {
						if((i != $scope.currentSchoolPart) && (i != x)) {
							if(i <$scope.currentSchoolPart) {
								$scope.schools[i].textcss = 'goLeft';
							} else {
								$scope.schools[i].textcss = 'goRight goLeft';
							}
						}
					}
				} else {
					$scope.schools[$scope.currentSchoolPart].textcss = 'inTransition goRight';
					$scope.schools[x].textcss = 'inTransition';
					for(var i=0;i<=5;i++) {
						if((i != $scope.currentSchoolPart) && (i != x)) {
							$scope.schools[i].textcss = 'goLeft goRight';
						}
					}
				}
				$scope.currentSchoolPart = x;
			}
		};
		
		$scope.isActiveSchoolPart = function(x) {
			return $scope.schools[x].active;
		};
		
		/*<- UNIVERSITY */
		
		/* OLD VERSION */
	
		$scope.goTo = function(redir) {
			$scope.showFooter = false;
			$state.go(redir, {}, {reload: true});
		};
		
		$scope.carouselIndex = 0;
		$scope.carouselItems = [
		    {
		    	title: 'Benjamin Brion',
		    	src:'img/FOND_AMSTERDAM_LAC.JPG', 
		    	text: 'Mon parcours scolaire... mon parcours professionnel...',
		    	clickLabel: 'Regarder un peu',
		    	click: 'resume',
		    	active: true,
		    	id: 0,
		    	color: 'rgb(65, 59, 59)'
		    },
		    {
		    	title: 'Expérience Professionnelle',
		    	src:'img/FOND_BOUCAN.png', 
		    	text: '...',
		    	clickLabel: 'Y accéder',
		    	click: 'experience_pro',
		    	active: false,
		    	id: 1,
		    	color: '#E2E2E2'
		    },
		    {
		    	title: 'Mon CV',
		    	src:'img/FOND_FORET_NEIGE.JPG', 
		    	text: '...',
		    	clickLabel: 'Y accéder',
		    	click: 'todo',
		    	active: false,
		    	id: 2,
		    	color: 'rgb(139, 139, 139)'
		    }
	    ];
		
		$scope.navCarousel = function(direction, index) {
			var current = index % $scope.carouselItems.length;
			
			angular.forEach($scope.carouselItems, function(value) {
				value.active = false;
			});
			console.log("item", $scope.carouselItems[current]);
			$scope.carouselItems[current].active = true;
		};
  	}
]);

benJControllers.controller('CvCtrl', ['$scope', '$log',
	function($scope, $log) {
		$scope.test = 'Benjamin Brion';
}]);

benJControllers.controller('ResumeCtrl', ['$scope', '$log', '$state',
  	function($scope, $log, $state) {
		skrollr.init({
			constants: {
				box: '150p'
			}
		});
		$scope.friend=" et les amis";
		$scope.goToMenu = function() {
			$state.go("benJ", {}, {reload: true});
		};
		
		$scope.subtitle = "Bonjour visiteur, bienvenu sur le site privé ben343.fr. Sur ce site vous pourrez retrouver des informations sur la vie professionnelle de Benjamin Brion.";
		$scope.presentation = "Je suis Benjamin Brion, 26 ans, diplômé d’un master informatique à l’Université Paul Sabatier (TOULOUSE III). Issu d’un baccalauréat scientifique obtenu sur l’île de la Réunion (974), j’ai poursuivi ma formation en licence Informatique Fondamentale (Universite Paul Sabatier TOULOUSE III) pour enfin réaliser deux ans de master en informatique Développement Logiciel (toujours à l’UPS de Toulouse). Suite à ma formation, j'ai eu la chance de travailler dans plusieurs grandes entreprises telles qu'Orange, Thales, Apside, etc.";
		$scope.siteInfo = "Sur ce site, vous pourrez donc retrouver différentes informations concernant :";
		$scope.points = ["Mes principales compétences",
		                 "Mes principaux projets universitaires",
		                 "Mes principales expériences professionnelles"
		                 ];
		$scope.infoImg = "Toutes les images utilisées sur ce site ont été prises par Benjamin Brion.";
	}
]);

benJControllers.controller('ExperienceCtrl', ['$scope', '$log', '$state',
    function($scope, $log, $state) {
		skrollr.init({
			constants: {
				box: '150p'
			}
		});
		
		$scope.goToMenu = function() {
			$state.go("benJ", {}, {reload: true});
		};
		
	  	$scope.apsideDip = {
	  		title: "Ingénieur d’études – Conception et Développement Logiciel",
	  		subTitle: "Apside - Toulouse (du 10/2013 à aujourd’hui – assistance technique à Air France)",
	  		projectDate: "DIP - AIR FRANCE (DU 10/2013 A AUJOURD’HUI)",
	  		projectInfo: "Développement de l’application DIP (Démarche Innovation Participative). Cet outil, à destination des employés internes AF/KLM soit environ 90 000 personnes, est un outil collaboratif de gestion des idées et des challenges AF/KLM. Projet agile, au départ 3 ingénieurs développeurs pendant 4 mois, puis seul responsable.",
	  		projectTasks: ["Rédaction des spécifications fonctionnelles de l’application",
	  		               "Spécification et conception de l’architecture logicielle (UML)",
	  		               "Activités de chiffrage des fonctionnalités",
	  		               "Développement (MVC) de l’application (IHM inclue)",
	  		               "Spécifications et développement de tests unitaires",
	  		               "Gestion des livraisons et des versions",
	  		               "Maintenance applicative évolutive",
	  		               "Management de projet"
	  		               ],
	  		keywordTitle: "Mots clés DIP :",
	  		projectKeyword: "Java J2EE, GWT, GWT-D3 (wrapper d3.js), JavaScript, Spring, Oracle, JBPM4, Hibernate, SQL, CSS3, HTML5, XML, JUnit, CheckStyle, Eclipse, JPA, VisualVM, GIT, JIRA, Méthodes Agiles, Windows, Linux, Bamboo, UML (Papyrus), Shell, etc...",
	  		apsideImg: {
	  			url: "img/entreprises/apside-logo.png"
	  		},
	  		afImg: {
	  			url: "img/entreprises/af-logo.png"
	  		}
	  	};
	  	
	  	$scope.apsideSopra = {
	  		title: "Ingénieur d’études – Conception et Développement Logiciel",
	  		subTitle: "Apside - Toulouse (du 10/2013 à aujourd’hui – assistance technique à Air France)",
	  		projectDate: "SOPRA - AIR FRANCE (DU 12/2014 A AUJOURD’HUI)",
	  		projectInfo: "Réglementairement Air France doit s’assurer de la bonne diffusion des documents référentiels métier auprès de l’ensemble des agents concernés ainsi qu’auprès des sociétés de sous-traitance agissant pour le compte de la Compagnie.",
	  		projectTasks: ["Rédaction des spécifications fonctionnelles de l’application",
	  		               "Spécification et conception de l’architecture logicielle (UML)",
	  		               "Activités de chiffrage des fonctionnalités",
	  		               "Développement (MVC) de l’application (IHM inclue)",
	  		               "Spécifications et développement de tests unitaires",
	  		               "Gestion des livraisons et des versions",
	  		               "Management de projet"
	  		               ],
	  		keywordTitle: "Mots clés SOPRA :",
	  		projectKeyword: "Java J2EE, Spring, Angular.js, JavaScript, Oracle, Hibernate, SQL, CSS3, HTML5, XML, JUnit, CheckStyle, Sonar, Eclipse, JPA, VisualVM, GIT, JIRA, Bamboo, Méthodes Agiles, Windows, Linux, UML, Shell, etc...",
	  		apsideImg: {
	  			url: "img/entreprises/apside-logo.png"
	  		},
	  		afImg: {
	  			url: "img/entreprises/af-logo.png"
	  		}
	  	};
	  	
	  	$scope.thales = {
	  		title: "Apprentissage Ingénieur Développement Logiciel",
	  		subTitle: "Réalisation d'un composant logiciel JAVA pour l’interopérabilité du nouveau système de gestion et de contrôle du trafic aérien européen 4FLIGHT. Projet agile (SCRUM) de 7 ingénieurs développeurs logiciel",
	  		projectDate: "Thales Air Systems - Département R&D, Toulouse (du 09/2012 au 09/2013)",
	  		projectInfo: "Dans le cadre de ma dernière année de formation à l’Université Paul Sabatier (master Informatique Développement Logiciel), j’ai réalisé une alternance dans l’entreprise Thales Air Systems. Cette alternance, d’une durée de un an, a commencé le 09/09/2012 pour finir le 31/08/2013. Thales Air Systems est une entité du groupe Thales, aux activités diverses. Cette entité est elle-même divisée en sous entités dont la business line Air Traffic Management (ATM). ATM a pour principale mission de fournir des équipements et systèmes pour la gestion du trafic aérien et compte plusieurs sites, dont le site de Rungis (le siège) et le site de Toulouse où j’ai travaillé. Ma principale mission a été de participer à la conception et a l’implémentation du nouveau standard d’interopérabilité des systèmes de gestion et de contrôle du trafic aérien européen. J’ai donc été amené à effectuer plusieurs tâches dont les principales étaient : la conception, le développement, l’écriture de spécifications d’exigences de tests, de suivi de qualité, etc.",
	  		projectTasks: ["Rédaction des spécifications fonctionnelles du composant logiciel",
	  		               "Conception des nouvelles fonctionnalités du composant logiciel",
	  		               "Activités de codage et de tests de non-régression (tests unitaires, tests d’intégrations)",
	  		               "Correction des défauts trouvés lors des phases de validation",
	  		               "Mise en place d’une stratégie de tests performante",
	  		               "Apport de support aux équipes systèmes pendant les phases de validation",
	  		               "Mise en place d’outils pour améliorer la productivité"
	  		               ],
	  		keywordTitle: "Mots clés :",
	  		projectKeyword: "Java, CORBA, Web Services, XML, JUnit, Mockito, CheckStyle, PDM, FindBugs Eclipse, VisualVM, DOORS, ClearCase, JIRA, Méthodes Agiles (SCRUM), Windows, Linux, Jenkins, Sonar, UML (Objecteering), Shell.",
	  		thalesImg: {
	  			url: "img/entreprises/thales-logo.png"
	  		}
	  	};
	  	
	  	$scope.orange = {
	  		title: "Stage Développeur-Concepteur",
	  		subTitle: "Réalisation d’une application Web à destination des ressources humaines pour aider à la gestion des horaires des employés. Unique développeur, intégré dans l’équipe du service Système d’Information de l’UPR SO (Unité de Production du Réseau Sud –Ouest Orange).",
	  		projectDate: "Orange S.A. - Département SI, Toulouse (du 05/2012 au 09/2012)",
	  		projectInfo: "Pendant mon stage ma principale mission a été de continuer la conception et le développement d’une application Web appelé « REGLHO » (REGLementation des HOraires). Cet outil, à destination des ressources humaines, doit permettre a l’UPR SO de se conformer à la réglementation en vigueur, imposant un décompte des horaires de travail pour les collaborateurs soumis à des horaires individualisés. Si l’entreprise ne met pas toutes les données relatives au temps de présence des employés à disposition des inspecteurs du travail, elle peut encourir une amende de 750 euros par personne, ce qui n’est pas à prendre à la légère dans un groupe tel qu’Orange. A partir d’un cahier des charges livré, j’ai donc développé les fonctionnalités demandées pour l’application. Ces fonctionnalités étaient par exemple : la prise en charge des astreintes / des heures supplémentaires / des travaux programmés en heures non ouvrables (TPHNO), l’importation des régimes de travail de l’entreprise dans la base de données de l’application avec la mise à jour automatique des horaires de travail des salariés ou de leurs informations personnelles, l’export des différentes informations concernant l’ensemble des salariés de l’UPR SO (ses horaires, ses heures supplémentaires, ses astreintes, ses TPHNO), l’ajout d’aides à la saisie et à la modification des horaires des salariés, et bien d’autres fonctionnalités. Les langages de programmation utilisés lors de ce développement étaient principalement le PHP, le JAVASCRIPT et le SQL. La méthode utilisée pour guider le développement de l’application était le cycle en V. A la fin de mon stage, l’application REGLHO était fonctionnelle et prête à être utilisée par l’ensemble des utilisateurs de l’UPR SO. Mon rapport est disponible pour toutes les personnes intéressées (veuillez me contacter).",
	  		projectTasks: ["Etude des besoins du client et élaboration d'un cahier des charges",
	  		               "Prototypage IHM et conception",
	  		               "Développement du nouveau site administrable",
	  		               "Mise en place de l’application sur le serveur de production d’ORANGE S.A. sud-ouest"
	  		               ],
	  		keywordTitle: "Mots clés :",
	  		projectKeyword: "PHP, Apache, CSS3, HTML5, IHM, JavaScript, JQuery, Linux, MySQL, Photoshop, Prototypage IHM, UML",
	  		orangeImg: {
	  			url: "img/entreprises/orange-logo.jpg"
	  		}
	  	};
	  	
	  	$scope.alzheimer = {
	  		title: "Graphiste dans l’association Réunion France Alzheimer",
	  		subTitle: "Association Reunion France Alzheimer (Ile de la Reunion)",
	  		projectDate: "Etes 2010 a 2012",
	  		projectInfo: "Impliqué bénévolement dans l’association France Alzheimer Réunion, j’ai réalisé de nombreuses missions notamment lors de l’approche des journées mondiale de la maladie d’Alzheimer.",
	  		projectTasks: ["création d’affiches publicitaires et prospectus",
	  		               "participation à la création du site web : http://www.reunion-alzheimer.org",
	  		               "assistance technique (réseau)",
	  		               "assistance bureautique"
	  		               ],
	  		alzheimerImg: {
	  			url: "img/entreprises/far-logo.jpg"
	  		}
	  	};
	  	
	
	  	
	  	$scope.demeco = {
	  		title: "Déménageur Saisonnier",
	  		subTitle: "Demeco ATOI (Ile de la Reunion)",
	  		projectDate: "Etés 2008 a 2011 (durée de 4 mois)",
	  		projectInfo: "Pendant plus de quatre ans, j’ai travaillé en tant que déménageur saisonnier, à raison de 4 mois par an.",
	  		demecoImg: {
	  			url: "img/entreprises/demeco-logo.jpg"
	  		}
	  	};
	}
]);