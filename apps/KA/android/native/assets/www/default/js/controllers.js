
/* JavaScript content from js/controllers.js in folder common */
angular.module('starter.controllers', [])

.controller('menuCtrl', function($scope) {

}).controller('listViewCtrl', function($scope) {
	function myMap() {
		  var map;
		var mapProp= {
		    center:new google.maps.LatLng(51.508742,-0.120850),
		    zoom:5,
		};
		 map=new google.maps.Map(document.getElementById("mapp"),mapProp);
		}
//	var invocationData = {
//			adapter : 'sampleHttp',
//			procedure : 'getFeed',
//			parameters : [ "cbe" ]
//		}
//		WL.Client.invokeProcedure(invocationData, {
//			onSuccess : function(res) {
//			alert(JSON.stringify(res));	
//			},
//			onFailure : function(res) {
//				alert('fail', res);
//			}
//		});

//	var map;
//	 	
//	     var myLatlng = new google.maps.LatLng(11.0168,76.9558);
//	   
//
//	  
//	    function initmaps(){
//	     map = new google.maps.Map(document.getElementById('mapp'), {
//	        center: myLatlng,
//	        zoom: 15,
//	      });
//
//
//
//
//
//	   }
	   google.maps.event.addDomListener(window, 'load', myMap());
	
	
}).controller('foundtransferCtrl1', function($scope) {
	$scope.datas = [ {
		"key" : "amount",
		"values" : "100"
	}, {
		"key" : "From accound",
		"values" : "Current **** **** 7896"
	}, {
		"key" : "To accound",
		"values" : "Savings **** **** 1234"
	}, {
		"key" : "Exchange Rate",
		"values" : "N/A"
	}, {
		"key" : "Future/Current Date",
		"values" : "January 1,2017"
	}, {
		"key" : "Narration",
		"values" : "Lorem ipsum dolor sit amet"
	} ];

}).controller('foundtransferCtrl', function($scope) {

	$scope.shownGroup = null;
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

}).controller('LoginCtrl', function($scope, $state) {

	$scope.login = function() {
		$state.go("tab.listview");
	}

}).controller('DashboardCtrl', function($scope) {
	$(function() {
		$("#datepicker").datepicker();
	});

	// cordova.exec(Success, Failure, "geolocationpermission",
	// "getPermission", []);
	// //cordova.exec(win, fail, "geolocationpermission", "getPermission", []);
	// function Success() {
	// alert("success");
	// }
	//
	// function Failure() {
	// alert('onError!');
	// }
	// var win = function() {
	// alert("win");
	// // var geo =
	// cordova.require('cordova/modulemapper').getOriginalSymbol(window,
	// 'navigator.geolocation');
	// // geo.getCurrentPosition(success, error, args);
	// };
	// var fail = function() {
	// alert("error");
	// // if (error) {
	// // error(new PositionError (PositionError.PERMISSION_DENIED, 'Illegal
	// Access'));
	// // }
	// };

});
