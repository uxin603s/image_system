angular.module("app").directive("imageLoad",['$parse','$timeout',function($parse,$timeout) {
    return {
		templateUrl:function($element,$attrs) {
           return $attrs.templateUrl || 'imageAutoWH.html?t='+Date.now()
		},
		restrict: 'E',
		replace:true,
		scope:{
			src:'=',
		},
        link: function($scope,$element,$attr) {
			var img=new Image;
			img.onload=function(){
				$scope.width=img.width;
				$scope.height=img.height;
				$scope.$apply();
			}
			img.src=$scope.src;
        },
    }
}]);