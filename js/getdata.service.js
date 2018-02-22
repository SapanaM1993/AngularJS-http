
myApp.factory("getData",function($http){
  return $http.get("https://jsonplaceholder.typicode.com/posts")
    
});