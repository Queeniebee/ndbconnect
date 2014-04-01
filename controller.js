angular.module('hello', []) //.module takes two parameters the first is it's name, the second is a list of dependencies
	.controller('HelloCtrl', function($scope){
		$scope.name = 'World';

		$scope.resp = $http({method: 'GET', url: 'http://localhost:10080/read-latest',
			params:{
				devicename=dribblea
			}
		}).success(function(data, status, headers, config) {
		

		});


	});

angular.module('read',[])
	.controller('NDBCtrl', function($scope){

		$scope.name = 'foo';

		
};


