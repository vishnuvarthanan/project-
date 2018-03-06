/**
 * Angular Module
 */
var app=angular.module("app",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/editprofile',{
		templateUrl:'views/updateform.html',
		controller:'UserController'
	})
	.when('/home',{
		templateUrl:'views/home.html'
	})
	.when('/addjob',{  //V to C
		templateUrl:'views/jobform.html',//ng-model
		controller:'JobController' //$scope.job
	})
	.when('/getalljobs',{//C to V
		templateUrl:'views/jobslist.html',  //ng-repeat
		controller:'JobController'// $scope.jobs
	})
	.when('/getjob/:id',{// C to V
		templateUrl:'views/jobdetail.html',
		controller:'JobController'//$scope.job=response.data
	})
	.when('/addblog',{
		templateUrl:'views/blogform.html',
		controller:'BlogController'
	})
	.when('/getblogs',{
		templateUrl:'views/blogslist.html',
		controller:'BlogController'
	})
	.when('/getblog/:id',{
		templateUrl:'views/blogpostdetail.html',
		controller:'BlogPostDetailController'
	})
	.otherwise({
		templateUrl:'views/login.html',
		controller:'UserController'
	})
})
app.run(function($rootScope,$cookieStore,UserService,$location){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('loggedInUser')
		
		$rootScope.logout=function(){
		UserService.logout().then(function(response){
			    $rootScope.successMessage="LoggedOut Successfully.."
			    delete $rootScope.loggedInUser
			    $cookieStore.remove("loggedInUser")
				$location.path('/login')
		},function(response){
			$rootScope.errorMessage="Please login.."
				$location.path('/login')
		})
	}
	
})
.when('/addjob',{  //V to C
		templateUrl:'views/jobform.html',//ng-model
		controller:'JobController' //$scope.job
	})
	.when('/getalljobs',{//C to V
		templateUrl:'views/jobslist.html',  //ng-repeat
		controller:'JobController'// $scope.jobs
	})
	.when('/getjob/:id',{// C to V
		templateUrl:'views/jobdetail.html',
		controller:'JobController'
	})
	app.config

.when('/getnotification/:id',{
		templateUrl:'views/notificationdetails.html',
		controller:'NotificationController'
	})

.when('/home',{
		templateUrl:'views/home.html',
		controller:'NotificationController'
	})
	var app=angular.module("app",['ngRoute'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.otherwise({
		templateUrl:'views/home.html'
	})
})
.when('/suggestedusers',{
		templateUrl:'views/suggestedusers.html',
		controller:'FriendCtrl'
	})
	.when('/pendingrequests',{
		templateUrl:'views/pendingrequests.html',
		controller:'FriendCtrl'
	})
	.when('/friends',{
		templateUrl:'views/friendslist.html',
		controller:'FriendCtrl'
	})
	.when('/profilepic',{
		templateUrl:'views/uploadprofilepic.html'
	})



