var myApp = angular.module("app",[]);
myApp.controller("myCtrl",function($scope,getData){
    getData.then(function(res){
        $scope.items = res.data;     
    })
});


