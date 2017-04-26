
/* JavaScript content from js/controllers.js in folder common */
angular.module('starter.controllers', [])

.controller('menuCtrl', function($scope) {


	  

}).controller('foundtransferCtrl', function($scope) {

alert("foundtransferCtrl");
	  

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

