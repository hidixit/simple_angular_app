angExp.controller('myControl1', ['$scope','$http', function ($scope,$http) {
    
     
    $http({
  method: 'GET',
  url: '/data/myData.json'
        }).then(function (data) {
        
     $scope.artists = data;  
     console.log($scope.artists.data);
     
  }, function errorCallback(response) {
    
      console.log("Error in response");
  });
    
    
   
}]);