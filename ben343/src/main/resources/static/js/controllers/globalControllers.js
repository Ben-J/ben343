'use strict';

var benJControllers = angular.module('GlobalControllers', []);

benJControllers.controller('GlobalCtrl', ['$scope', '$log',
	function($scope, $log) {
		$scope.showFooter = true;
		$scope.error = {
				msg: 'Hey mec !!! Tu demandes une page inaccessible là !!!',
				goHome: 'Revenir sur la page d\'accueil'
		}
	}
]);

benJControllers.controller('PrivacyCtrl', ['$scope', '$log', '$state',
  	function($scope, $log, $state) {
  		$scope.showFooter = true;
  		$scope.privacy = {
  			title : 'Politique de confidentialité de ', 
  			subTitle: 'Cette Application collecte certaines Données Personnelles de ses Utilisateurs.',
  			intro: 'Données Personnelles collectées pour les raisons suivantes et en utilisant les services suivants:',
  			data: [
  			       {
  			    	   title:'Accès aux comptes des services tiers'
  			    	},
  			    	{
   			    	   title:'Accès au compte Facebook', 
   			    	   content: 'Permissions: Accéder aux listes des amis, Anniversaire, Créer des Évènements, Email de contact, Localité actuelle, Photos et À mon sujet'
   			    	},
   			    	{
   			    	   title: 'Accès au compte Twitter', 
   			    	   content: 'Données Personnelles: Divers types de Données figurant dans la politique de confidentialité du service.'
   			    	},
   			        {
   			    	   title:'Contacter l\'Utilisateur'
   			    	},
   			        {
			    	   title: 'Liste de distribution ou Newsletter', 
			    	   content: 'Données Personnelles: Adresse électronique, Code postal, Cookie, Date de Naissance, Données d\'utilisation, Nom de famille, Numéro de téléphone, Pays, Profession, Province, Prénom, Sexe, Ville et État'
			    	},
   			        {
			    	   title: 'Inscription et authentification'
			    	},
   			        {
			    	   title: 'Twitter OAuth', 
			    	   content: 'Données Personnelles: Divers types de Données figurant dans la politique de confidentialité du service.'
			    	},
  			       ]
  		}
  		
  		$scope.coordinate = {
  				title: 'Coordonnées',
  				property: 'Propriétaire',
  				address: 'Saint-Cyprien 31000 Toulouse (France), bubblespirit343@gmail.com'
  		}
  		
  		$scope.lastUpdate = 'Dernière mise à jour: 5 Aout 2015';
  		$scope.goFuther = 'Voir la politique de confidentialité en entier';
  		
  		$scope.goToMenu = function() {
  			$state.go("benJ", {'#':'privacy'}, {reload: true});
  		};
  	}
  ]);