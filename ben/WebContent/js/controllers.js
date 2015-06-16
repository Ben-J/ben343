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
    function($scope, $http, $timeout, $log, $animate, $state, $location, $anchorScroll, 
    		anchorSmoothScroll, $filter) {
		/* MENU ->*/
		$scope.menu = 
		[
		 {id: 0, menuTitle:'Accueil', 		title:'Présentation', 		value:'services', 	css:''},
		 {id: 1, menuTitle:'Loisir',		title:'Loisir',		 		value:'founders',	css:''},
		 {id: 2, menuTitle:'Carrière', 		title:'Ma Carrière', 		value:'process', 	css:''},
		 {id: 3, menuTitle:'Projets',		title:'Projets',	value:'work',  		css:''},
		 {id: 4, menuTitle:'FAQ', 			title:'FAQ', 				value:'faq', 		css:''},
		 {id: 5, menuTitle:'Contact', 		title:'Contact', 			value:'contact',  	css:''}
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
			$location.hash('hero');
		    anchorSmoothScroll.scrollTo('hero');
		    angular.forEach($scope.menu, function(row) {
				row.css = '';
			});
		};
		
		$scope.setActiveMenu = function(name) {
			angular.forEach($scope.menu, function(row) {
				if(row.value == name) {
					row.css = 'active';
				} else {
					row.css = '';
				}
			});
			if($scope.stream != null || $scope.stream != undefined) {
				$scope.stream.pause();
			}
		};
		/*<- MENU */
		
		/* MOI ->*/
		$scope.title = {
			name: 'Benjamin Brion',
			job: 'Ingénieur Logiciel',
			accroche: '26 ans de créativité'
		};
		
		/*<- MOI */
		
		/* ACCUEIL ->*/
		$scope.plans = 
		  [
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
	    	   title: 'Carrière',
	    	   src: 'img/web_site_img/wireframing.png',
	    	   text:'Si vous voulez en connaitre un peu plus sur mon parcours scolaire et professionnel... recliquer ici.',
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
	    	   title: 'Projets',
	    	   src: 'img/web_site_img/app_development.png',
	    	   text:'Pour découvrir quelques projets grandement menés au cours de ma petite vie recliquer ici',
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
			return $scope.plans[val].active;
		};
		
		$scope.setActive = function(val) {
			if(!$scope.plans[val].active) {
				$scope.plans[val].active = !$scope.plans[val].active;
			} else {
				$scope.plans[val].link();
			}
		};
		
		$scope.keys = ['Jeune', 'Développeur', 'Réunionnais', 'IT','Motard', 'JAVA', 'Voyage', 'Foot'];
		
		/*<- ACCUEIL */
		
		/* CAREER PLAN ->*/
		$scope.career = 
		[
		 {
			id:0, 
			label: 'Lycée', 
			active: true, 
			textcss: '',
			url: '',
			text: 'Baccalauréat scientifique option Physique-Chimie obtenu sur l’île de la Réunion (974) au lycée de Bellepierre.'
		 },
		 {
			id:1, 
			label: 'Université', 
			active: false, 
			textcss: 'goRight',
			url: '',
			text: 'Obtention d\'une licence en Informatique Fondamentale (Universite Paul Sabatier TOULOUSE III) et un master en informatique Développement Logiciel (toujours à l\’UPS de Toulouse).'
		},
		 {
			id:2, 
			label: 'Orange S.A.', 
			active: false, 
			textcss: 'goRight',
			url: 'orange',
			text: 'Stage Développeur-Concepteur. Réalisation d’une application Web à destination des ressources humaines pour aider à la gestion des horaires des employés. Unique développeur...'},
		 {
			id:3, 
			label: 'Thales Group', 
			active: false, 
			textcss: 'goRight',
			url: 'thales',
			text: 'Apprentissage Ingénieur Développement Logiciel. Réalisation d\'un composant logiciel JAVA pour l’interopérabilité du nouveau système de gestion et de contrôle du trafic aérien européen 4FLIGHT.'
		 },
		 {
			 id:4, 
			 label: 'Apside', 
			 active: false, 
			 textcss: 'goRight',
			 url: 'apside',
			 text: 'Ingénieur d\'études – Conception et Développement Logiciel. En assitance technique pendant 2 ans chez Air France. J\'ai eu la chance de développer trois applications web...'},
		 {
			 id:5, 
			 label: 'Astek', 
			 active: false, 
			 textcss: 'goRight',
			 url: '',
			 text: 'Ingénieur d\'études et de développement. En mission pour Thales Avionics et Air France afin de développer des applications destinées aux pilotes.'}
		 ];
		
		$scope.currentSchoolPart = 0;
		$scope.setActiveSchoolPart = function(x) {
			if(x != $scope.currentSchoolPart) {
				angular.forEach($scope.career, function(row){
					row.active = (row.id == x);
				});
				if(x > $scope.currentSchoolPart) {
					$scope.career[$scope.currentSchoolPart].textcss = 'inTransition goLeft';
					$scope.career[x].textcss = 'inTransition';
					for(var i=0;i<=5;i++) {
						if((i != $scope.currentSchoolPart) && (i != x)) {
							if(i <$scope.currentSchoolPart) {
								$scope.career[i].textcss = 'goLeft';
							} else {
								$scope.career[i].textcss = 'goRight';
							}
						}
					}
				} else {
					$scope.career[$scope.currentSchoolPart].textcss = 'inTransition goRight';
					$scope.career[x].textcss = 'inTransition';
					for(var i=0;i<=5;i++) {
						if((i != $scope.currentSchoolPart) && (i != x)) {
							$scope.career[i].textcss = 'goLeft goRight';
						}
					}
				}
				$scope.currentSchoolPart = x;
			}
		};
		
		$scope.isActiveSchoolPart = function(x) {
			return $scope.career[x].active;
		};
		
		/*<- CAREER PLAN */
		
		/* DIVERS ->*/
		$scope.video = {title: 'Ma dernière video'};
		$scope.hide = true;
		$scope.playVideo = function() {
			$scope.stream = document.getElementById('theVideo');
			$scope.stream.play();
			$scope.hide = false;
		};
		/*<- DIVERS */
		
		/* PROJECTS ->*/
		$scope.currentProject = 0;
		$scope.projects = 
		[
		 {
			 active: true,
			 css:'',
			 text:
				 [
				  {paragraph: true, content: 'Application web J2EE - angularJS. Outil de gestion de documents réglementaires AF (édition, diffusion, briefing, statistique)'},
				  {paragraph: true, content: '"Cette application ne ressemble en rien aux précédentes... son design et son côté intuitif la rendent très symphatique."'},
				  {paragraph: false, content: 'Plus de détails, dans l\'espace "Carrière - Apside".'}
				  ]
		 },
		 {
			 active: false,
			 css:'goRight',
			 text:
				 [
					{paragraph: true, content: 'Page d\'accueil de DIP (Démarche Innovation Participative). Cet outil, à destination des employés internes AF/KLM soit environ 90 000 personnes, est un outil collaboratif de gestion des idées et des challenges AF/KLM'},
					{paragraph: true, content: 'Application web J2EE. Principales technologies utilisées : Java J2EE, GWT, GWT-D3 (wrapper d3.js), JavaScript, Spring, Oracle, JBPM4, Hibernate, SQL, CSS3, HTML5, XML, JUnit, CheckStyle, Eclipse, JPA, VisualVM, GIT, JIRA, Méthodes Agiles, Windows, Linux, Bamboo, UML (Papyrus), Shell, etc...'},
					{paragraph: false, content: 'Plus de détails, dans l\'espace "Carrière - Apside".'}
				  ]
		 },
		 {
			 active: false,
			 css:'goRight',
			 text:
				 [
					{paragraph: true, content: 'Je voudrais une application qui puisse tourner à la fois sur un navigateur web, mais également sur mobile (ios, android, windows phone'},
					{paragraph: true, content: 'Application hybride. La principale technologie utilisée est cordova (ngCordova plus précisemment).'}
				  ]
		 }
		];
		
		$scope.isActiveProject = function(val) {
			return val == $scope.currentProject;
		};
		
		$scope.modulo = function(n, m) {
			return ((n % m) + m) % m;
		};

		$scope.jumpToProject = function(val) {
			var prevTrans = 'inTransition goLeft';
			var nextTrans = 'goRight goLeft';
			if(val < $scope.currentProject) {
				prevTrans = 'goLeft';
				nextTrans = 'inTransition goRight';
			}
			$scope.currentProject = $scope.modulo(val, 3);
			$scope.projects[$scope.modulo(($scope.currentProject-1), 3)].css = prevTrans;
			$scope.projects[$scope.currentProject].css = 'inTransition';
			$scope.projects[$scope.modulo(($scope.currentProject+1), 3)].css = nextTrans;
		};
		
		$scope.projectLeft = function() {
			$scope.currentProject = $scope.modulo(($scope.currentProject-1), 3);
			$scope.projects[$scope.modulo(($scope.currentProject-1), 3)].css = 'goLeft';
			$scope.projects[$scope.currentProject].css = 'inTransition';
			$scope.projects[$scope.modulo(($scope.currentProject+1), 3)].css = 'inTransition goRight';
		};
		
		$scope.projectRight = function() {
			$scope.projects[$scope.currentProject].css = 'inTransition goLeft';
			$scope.projects[($scope.currentProject+1)%3].css = 'inTransition';
			$scope.projects[($scope.currentProject+2)%3].css = 'goRight goLeft';
			$scope.currentProject = ($scope.currentProject+1) % 3;
		};

		/*<- PROJECTS */
		
		/*<- FAQ */
		$scope.questions = 
		[
		 {
			 active: true,
			 css: '',
			 content: 
				 [
				  {
					  title: "Quelles technologies sont utilisées pour ben343.fr ?",
					  text: "Ce site web (~application web) se doit d'être une petite vitrine de mes compétences. Par conséquence j'ai décidé d'utiliser les technologies suivantes : angularJS, Node.js, Apache Tomcat. De nombreuses librairies comme : font-awesome, hammerjs, skrollr, etc. Des outils tels que Npm, bower, gulp, etc."
				  },
				  {
					  title: "Quel est ton prénom ?",
					  text: "Je m'appelle Benjamin, mais tu peux m'appeler Ben.",
				  },
				  {
					  title: "Quelles sont tes principaux loisirs ?",
					  text: "Je suis à l'affût des nouvelles technologies de manière générale. Je suis sportif, je fais principalement du foot. J'ai été licencié footballeur pendant plus de 15 ans à l'île de la réunion. Je fais actuellement du futsal toutes les semaines... Je possède actuellement une Honda Hornet 600 avec laquelle j'entreprends quelques balades le week-end."
				  },
				  {
					  title: "Quel développeur es-tu ?",
					  text: "J'ai conçu et développé de nombreux logiciels : des sites web, des applications web, des applications mobile, des applications bureautique, et pleins d'autres choses. Je ne me restreins pas à un langage ou à une technologie même si je ne vous cache pas que j'ai une petite préférence pour la conception et le développement de composant/logiciel JAVA. Ce genre de projet où la technique est primordiale."
				  },
				  {
					  title: "Es-tu un geek ?",
					  text: "Geek ? Oui je le suis un peu... forcement. J'aime les jeux vidéos et les jeux de réflexions. Mais au-delà de ça je joue parce que j’y trouve un intérêt, ce n’est pas seulement pour le plaisir de jouer. J'aime à dire que le cerveau est un muscle et jouer c'est le soumettre à un stimuli pour éviter qu'il s’atrophie. Par je leu j'entraîne donc ma mémoire, mes réflexes et ma vigilance."
				  }
				 ]
		 },
		 {
			 active: true,
			 css: 'goRight',
			 content:
				 [
				  {
					  title: "Pourrais-tu m'aider ?",
					  text: "Si tu as des questions à me poser concernant ce site web, si tu souhaites développer un site ou une application web et que tu aimerais utiliser un de mes composants graphiques, si tu veux télécharger mes différents rapports de projets (Orange S.A et Thales Air Systems), si tu veux discuter de mes loisirs (foot, moto, nouvelles technologies), si tu veux discuter de ma carrière, alors n'hésites pas à <a href='#contact'>me contacter</a>. Si tu as un projet web en tête et que tu te poses des questions sur : les technologies à utiliser ? l'architecture à mettre en place ? le temps de développement ? le côut de développement ? alors ici aussi, n'hésites pas à <a href='#contact'>me contacter</a>."
				  },
				  {
					  title: "As-tu une vie associative ?",
					  text: "En parallèle de mes activités personnelles et professionnelles, je me suis engagé dans des associations. En effet, j'ai été pendant 2 ans responsable du pôle évènements de l'association des anciens élèves du master Développement Logiciel (association M2DL) de l'Université Paul Sabatier III. <a href='m2dl' target='_blank'>(site de l'association)</a>. Je suis également engagé depuis plus de dix ans dans l'association France Alzheimer Réunion. Pour plus de détails sur mon engagement, vous pouvez consulter <a href='associationFAR' target='_blank'>cette page</a>."
				  },
				  {
					  title: "Quelques technos pour développer une web app ?",
					  text: "Node.js with express.js <br> MongoDB with Mongoose <br>REST API <br> HTML, CSS, JavaScript <br> PhoneGap, Cordova<br> Git, GitHub<br>"
				  }
				 ]
		 }
		];
		$scope.currentQuestion = 0;
		$scope.isActiveFaq = function(val) {
			return val == $scope.currentQuestion;
		};
		
		$scope.jumpToFaq = function(val) {
			console.log("val : ", val);
			if(val > $scope.currentQuestion) {
				$scope.faqRight();
			} else {
				$scope.faqLeft();
			}
		};
		
		$scope.faqRight = function() {
			$scope.currentQuestion = $scope.modulo(($scope.currentQuestion-1), 2);
			$scope.questions[$scope.modulo(($scope.currentQuestion-1), 2)].css = 'inTransition goLeft';
			$scope.questions[$scope.currentQuestion].css = 'inTransition';
			$timeout( function(){
				$scope.questions[$scope.modulo(($scope.currentQuestion-1), 2)].css = 'goRight';
				$scope.questions[$scope.currentQuestion].css = '';
			}, 900);
		};
		
		$scope.faqLeft = function() {
			$scope.currentQuestion = $scope.modulo(($scope.currentQuestion+1), 2);
			$scope.questions[$scope.currentQuestion].css = 'inTransition';
			$scope.questions[$scope.modulo(($scope.currentQuestion+1), 2)].css = 'inTransition goRight';
			$timeout( function(){
				$scope.questions[$scope.currentQuestion].css = '';
				$scope.questions[$scope.modulo(($scope.currentQuestion+1), 2)].css = 'goLeft';
			}, 900);
		};
		
		/*<- FAQ */
		
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
		$scope.goToMenu = function() {
			$state.go("benJ", {'#':'process'}, {reload: true});
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