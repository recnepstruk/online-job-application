angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', '$http', function($scope, $http){
		
	}]);
appControl.$inject = ['$http'];
angular.module('JobApp')
	.controller('applicantController', appControl);
function appControl($http){
	var aCtrl = this;
	aCtrl.getApplicants = function(){
		$http.get('/getApplicants')
			.then(function(success){
				console.log(success.data);
				aCtrl.data = success.data;
			}, function(err){
				console.log(err);
			});
	}
};