angular.module('starter.controllers', [])

.controller('menuCtrl', function($scope) {


	  

}).controller('foundtransferCtrl', function($scope) {

	$scope.groups = [];
	  for (var i=0; i<10; i++) {
	    $scope.groups[i] = {
	      name: i,
	      items: []
	    };
	    for (var j=0; j<3; j++) {
	      $scope.groups[i].items.push(i + '-' + j);
	    }
	  }
	  
	  /*
	   * if given group is the selected group, deselect it
	   * else, select the given group
	   */
	  $scope.toggleGroup = function(group) {
	    if ($scope.isGroupShown(group)) {
	      $scope.shownGroup = null;
	    } else {
	      $scope.shownGroup = group;
	    }
	  };
	  $scope.isGroupShown = function(group) {
	    return $scope.shownGroup === group;
	  };
	  

})
.controller('LoginCtrl', function($scope,$state) {

	$scope.login=function(){
		$state.go("tab.foundtransfer");
	}

})
.controller('DashboardCtrl', function($scope) {
	$( function() {
	    $( "#datepicker" ).datepicker();
	  } );

//	cordova.exec(Success, Failure, "geolocationpermission",
//			"getPermission", []);
//	//cordova.exec(win, fail, "geolocationpermission", "getPermission", []);
//	function Success() {
//		alert("success");
//	}
//
//	function Failure() {
//		alert('onError!');
//	}
//	 var win = function() {
//		 alert("win");
////         var geo = cordova.require('cordova/modulemapper').getOriginalSymbol(window, 'navigator.geolocation');
////         geo.getCurrentPosition(success, error, args);
//       };
//       var fail = function() {
//    	   alert("error");
////           if (error) {
////               error(new PositionError (PositionError.PERMISSION_DENIED, 'Illegal Access'));
////           }
//       };

});

