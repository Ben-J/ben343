'use strict';

var benJControllers = angular.module('SkillControllers', []);

benJControllers.controller('SkillCtrl', ['$scope', '$log',
 	function($scope, $log) {
	
		$scope.range = function(i){return i?$scope.range(i-1).concat(i):[]}
		
		$scope.getNumber = function(num) {
	    	return $scope.range(num);   
		};
		
		$scope.isSM = function() {
			return $scope.windowWidth<=767;
		}
		
		$scope.java = 
		{
				title: 'JAVA'
		};
	
		$scope.j2ee = 
			[
			 {
				 title: 'AngularJs',
				 type: 'Langage',
				 stars: '4'
			 },
			 {
				 title: 'GWT',
				 type: 'development tools',
				 stars: '4'
			 },
			 {
				 title: 'Java',
				 type: 'Langage',
				 stars: '4'
			 },
			 {
				 title: 'HTML, CSS',
				 type: 'Langage',
				 stars: '4'
			 },
			 {
				 title: 'Hibernate',
				 type: 'Framework',
				 stars: '4'
			 },
			 {
				 title: 'JPA',
				 type: 'API',
				 stars: '4'
			 },
			 {
				 title: 'Apache Tomcat',
				 type: 'server',
				 stars: '4'
			 },
			 {
				 title: 'Node.js',
				 type: 'server',
				 stars: '4'
			 },
			 {
				 title: 'ORACLE / MYSQL / SQL',
				 type: 'BDD',
				 stars: '4'
			 },
			 {
				 title: 'Maven',
				 type: 'ProjectManagement',
				 stars: '4'
			 },
			 {
				 title: 'XML, DTD, XPath, XSLT, Json',
				 type: 'Langage',
				 stars: '4'
			 },
			 {
				 title: 'Shell',
				 type: 'Langage',
				 stars: '3'
			 }
			 ];
		
		$scope.mobile = 
			[
			 {
				 title: 'cordova',
				 type: 'API',
				 stars: '4'
			 },
			 {
				 title: 'Android SDK',
				 type: 'SDK',
				 stars: '4'
			 }
			 ];
		
		$scope.environments = 
			[
			 {
				 title: 'Windows',
				 type: 'os',
				 stars: '4'
			 },
			 {
				 title: 'Mac OS / Linux Distrib.',
				 type: 'os',
				 stars: '4'
			 }
			 ];
		
		$scope.othersLanguages = 
			[
			 {
				 title: 'Script Shell',
				 type: 'Langage',
				 stars: '3'
			 },
			 {
				 title: 'PHP',
				 type: 'Langage',
				 stars: '3'
			 },
			 {
				 title: 'C/C++',
				 type: 'Langage',
				 stars:'2'
			 },
			 {
				 title: 'C#',
				 type: 'Langage',
				 stars: '2'
			 },
			 {
				 title: 'Groovy',
				 type: 'Langage',
				 stars: '3'
			 },
			 {
				 title: 'Ocaml',
				 type: 'Langage',
				 stars: '3'
			 }
			 ];
		
		$scope.management = 
			[
			 {
				 title: 'JIRA',
				 type: 'tool',
				 stars: '4'
			 },
			 {
				 title: 'Bamboo / Jenkins',
				 type: 'tool',
				 stars: '3'
			 },
			 {
				 title: 'DOORS',
				 type: 'tool',
				 stars: '3'
			 },
			 {
				 title: 'Git',
				 type: 'tool',
				 stars: '4'
			 },
			 {
				 title: 'SVN',
				 type: 'tool',
				 stars: '4'
			 },
			 {
				 title: 'Clearcase',
				 type: 'tool',
				 stars: '3'
			 }
			 ];
		
		$scope.ides = 
			[
			 {
				 title: 'Eclipse - STS',
				 type: 'ide',
				 stars: '4'
			 },
			 {
				 title: 'NetBeans',
				 type: 'ide',
				 stars: '4'
			 },
			 {
				 title: 'XCode',
				 type: 'ide',
				 stars: '2'
			 },
			 {
				 title: '.NET Framework',
				 type: 'ide',
				 stars: '2'
			 }
			 ];
		
		$scope.methods = 
			[
			 {
				 title: 'Méthode Agile',
				 type: 'method',
				 stars: '5'
			 },
			 {
				 title: 'Cycle en V',
				 type: 'method',
				 stars: '4'
			 }
			 ];
		
		$scope.othersTechnos = 
			[
			 {
				 title: 'CMS : Wordpress, GuppY, Typo3',
				 type: 'techno',
				 stars: '4'
			 }
			 ];
		
		$scope.conceptions = 
			[
			 {
				 title: 'Test unitaire (avec jUnit, Karma, Jasmine)',
				 type: 'conceptions',
				 stars: '4'
			 },
			 {
				 title: 'Designs patterns JAVA (réf. Gang of Four)',
				 type: 'conceptions',
				 stars: '4'
			 },
			 {
				 title: 'Qualimétrie logicielle (Sonar, Checkstyle, PMD...)',
				 type: 'conceptions',
				 stars: '4'
			 },
			 {
				 title: 'UML (Objecteering, StarUml,..), SysML',
				 type: 'conceptions',
				 stars: '4'
			 },
			 {
				 title: 'AADM',
				 type: 'conceptions',
				 stars: '2'
			 },
			 {
				 title: 'Wright',
				 type: 'conceptions',
				 stars: '2'
			 }
			 ];
		
		$scope.angularTools = 
			[
			 {
				 title: 'npm, bower, gulp, etc.',
				 type: 'techno',
				 stars: '3'
			 }
			 ];
 	}
 ]);