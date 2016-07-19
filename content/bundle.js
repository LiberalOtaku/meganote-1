"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var configFunction=function(e){e.otherwise("/notes/")},run=function(e,n){e.$on("$stateChangeSuccess",function(){return e.$state=n}),e.$on("$stateChangeError",function(){return n.go("sign-in")})};angular.module("meganote",["ui.router","ngFlash","textAngular","angularSpinner","ngResource","meganote.notes","meganote.notesForm","meganote.layout","meganote.signUp","meganote.signIn","meganote.users"]).config(configFunction).run(run),configFunction.$inject=["$urlRouterProvider"],run.$inject=["$rootScope","$state"],angular.module("meganote.layout",[]),angular.module("meganote.notes",["ui.router"]),angular.module("meganote.notesForm",[]),angular.module("meganote.signIn",[]),angular.module("meganote.signUp",[]),angular.module("meganote.users",[]),angular.module("meganote").constant("DATABASE_URL","https://shrouded-mountain-90850.herokuapp.com/api/v1/");var AuthInterceptor=function(e,n){return{request:function(t){var r=e.get();return r&&t.url.includes(n)&&(t.headers.Authorization=r),t}}},authConfig=function(e){return e.interceptors.push("AuthInterceptor")};angular.module("meganote").factory("AuthInterceptor",AuthInterceptor).config(authConfig),AuthInterceptor.$inject=["AuthToken","DATABASE_URL"],authConfig.$inject=["$httpProvider"],!function(){var e=function(){return{restrict:"AE",templateUrl:"layout/directives/header.html",controller:n,controllerAs:"vm",bindToController:!0,scope:{}}},n=function(e){var n=this;n.isLoggedIn=e.get,n.logout=e.clear};angular.module("meganote.layout").directive("myHeader",e),n.$inject=["AuthToken"]}();var Note=function(e,n){return e(n+"notes/:id",null,{update:{method:"PUT"}})};angular.module("meganote.notes").factory("Note",Note),Note.$inject=["$resource","DATABASE_URL"],!function(){var e=function(e){e.state("notes",{url:"/notes",templateUrl:"notes/notes.html",controller:"NotesController",controllerAs:"vm",resolve:{authenticated:n},data:{title:"Notes"}})},n=function(e){return new Promise(function(n,t){e.isLoggedIn()?n():t()})};angular.module("meganote.notes").config(e),e.$inject=["$stateProvider"],n.$inject=["CurrentUser"]}();var NotesController=function(e){function n(){e.query().$promise.then(function(e){return t.notes=e})}var t=this;t.notes=e.query(),t.refresh=n};angular.module("meganote.notes").controller("NotesController",NotesController),NotesController.$inject=["Note"];var NotesService=function(e,n){function t(){var n=e.get(s);return n.then(function(e){return l.notes=e.data}),n}function r(n){var t=e.post(s,{note:n});return t.then(function(e){return l.notes.unshift(e.data.note)}),t}function o(n){var t=e.put(""+s+n._id,{note:n});return t.then(function(e){l.removeById(e.data.note._id),l.notes.unshift(e.data.note)}),t}function a(n){var t=e["delete"](""+s+n._id);return t.then(function(e){return l.removeById(e.data.note._id)}),t}function u(e){for(var n=0;n<l.notes.length;n++)if(l.notes[n]._id===e)return l.notes.splice(n,1)}function i(e){for(var n=0;n<l.notes.length;n++)if(l.notes[n]._id===e)return angular.copy(l.notes[n])}var s=n+"notes/",l={notes:[],getNotes:t,create:r,update:o,deleteNote:a,removeById:u,find:i};return l};angular.module("meganote.notes").factory("NotesService",NotesService),NotesService.$inject=["$http","DATABASE_URL"];var myNotesForm=function(){return{restrict:"AE",templateUrl:"notesForm/directives/notesForm.html"}};angular.module("meganote.notesForm").directive("myNotesForm",myNotesForm);var notesFormConfig=function(e){e.state("notes.form",{url:"/:noteId",template:"<div my-notes-form></div>",controller:"NotesFormController",controllerAs:"vm"})};angular.module("meganote.notesForm").config(notesFormConfig),notesFormConfig.$inject=["$stateProvider"];var NotesFormController=function(e,n,t,r){function o(){return n.params.noteId?r.get({id:n.params.noteId}):new r}function a(){s.note={title:"",body_html:""}}function u(){s.loading=!0,s.note._id?s.note.$update({id:s.note._id}).then(function(e){s.refresh(),s.note=e,t.create("success","Saved!"),n.go("notes.form",{noteId:s.note._id})},function(){return t.create("danger","Oops! Something went wrong.")})["finally"](function(){return s.loading=!1}):s.note.$save().then(function(e){s.refresh(),s.note=e,t.create("success","Saved!")},function(){return t.create("danger","Oops! Something went wrong.")})["finally"](function(){return s.loading=!1})}function i(){s.loading=!0,s.note.$delete({id:s.note._id}).then(function(){s.refresh(),n.go("notes.form",{noteId:void 0})})["finally"](function(){return s.loading=!1})}var s=this;s.note=o(),s.clearForm=a,s.save=u,s.deleteNote=i,s.refresh=e.$parent.vm.refresh};angular.module("meganote.notesForm").controller("NotesFormController",NotesFormController),NotesFormController.$inject=["$scope","$state","Flash","Note"];var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("meganote.signIn").directive("mySignIn",["$state","Flash","UsersService",function(e,n,t){var r=function(){function r(){_classCallCheck(this,r)}return _createClass(r,[{key:"submit",value:function(){var r=this;r.loading=!0,t.login(r.user).then(function(){return e.go("notes.form",{noteId:void 0})})["catch"](function(e){return n.create("danger",e.message)})["finally"](function(){return r.loading=!1})}}]),r}();return{restrict:"EA",templateUrl:"signIn/signIn.html",controller:r,controllerAs:"vm",bindToController:!0,scope:{}}}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("meganote.signUp").directive("mySignUp",["$state","Flash","UsersService",function(e,n,t){var r=function(){function r(){_classCallCheck(this,r),this.user={}}return _createClass(r,[{key:"submit",value:function(){var r=this;r.loading=!0,t.create(r.user).then(function(){return e.go("notes.form",{noteId:void 0})})["catch"](function(e){return n.create("danger",e.message)})["finally"](function(){return r.loading=!1})}}]),r}();return{restrict:"EA",templateUrl:"signUp/signUp.html",controller:r,controllerAs:"vm",bindToController:!0,scope:{}}}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("meganote.users").service("AuthToken",["$window",function(e){var n=function(){function n(){_classCallCheck(this,n),this.token=e.localStorage.getItem("authToken")}return _createClass(n,[{key:"set",value:function(n){this.token=n,e.localStorage.setItem("authToken",this.token)}},{key:"get",value:function(){return e.localStorage.getItem("authToken")}},{key:"clear",value:function(){this.token=void 0,e.localStorage.removeItem("authToken")}}]),n}();return new n}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("meganote.users").service("CurrentUser",["$window",function(e){var n=function(){function n(){_classCallCheck(this,n),this.user=JSON.parse(e.localStorage.getItem("currentUser"))}return _createClass(n,[{key:"set",value:function(n){this.user=n,e.localStorage.setItem("currentUser",JSON.stringify(this.user))}},{key:"get",value:function(){return this.user||{}}},{key:"clear",value:function(){this.user=void 0,e.localStorage.removeItem("currentUser")}},{key:"isLoggedIn",value:function(){return!!this.get()._id}}]),n}();return new n}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("meganote.users").directive("myUserProfile",["CurrentUser","UsersService","Flash",function(e,n,t){var r=function(){function r(){_classCallCheck(this,r);var n=this;n.user=angular.copy(e.get())}return _createClass(r,[{key:"submit",value:function(){var e=this;e.loading=!0,n.update(e.user).then(function(){return t.create("success","Your changes have been saved!")})["finally"](function(){return e.loading=!1})}}]),r}();return{restrict:"EA",template:'\n            <div us-spinner="{ top: \'10%\' }" spinner-on="vm.loading"></div>\n\n            <div class="container">\n              <div class="row">\n                <div class="col-xs-6 col-xs-offset-4">\n                  <h3>Update Your Profile</h3>\n                  <form id="new_user" ng-submit="vm.submit()">\n                    <p>\n                      <label for="name">Full Name</label><br>\n                      <input\n                        type="text"\n                        name="name"\n                        autofocus="autofocus"\n                        ng-model="vm.user.name"\n                        required>\n                    </p>\n                    <p>\n                      <label for="username">Username</label><br>\n                      <input\n                        type="text"\n                        name="username"\n                        ng-model="vm.user.username"\n                        required>\n                    </p>\n                    <input type="submit" name="commit" value="Save Changes" class="btn btn-default">\n                    <span class="login">\n                      <a ui-sref="notes.form({ noteId: undefined })">Back To My Notes</a>\n                    </span>\n\n                    <flash-message\n                      duration="3000"\n                      show-close="false"></flash-message>\n\n                  </form>\n                </div>\n              </div>\n            </div>\n          ',controller:r,controllerAs:"vm",bindToController:!0,scope:{}}}]);var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("meganote.users").directive("userLinks",["CurrentUser","AuthToken",function(e,n){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"user",value:function(){return e.get()}},{key:"isLoggedIn",value:function(){return e.isLoggedIn()}},{key:"logout",value:function(){e.clear(),n.clear()}}]),t}();return{restrict:"EA",template:'\n            <div class="user-links">\n              <span ng-show="vm.isLoggedIn()">\n                <a ui-sref="profile">Signed in as {{ vm.user().name }}</a>\n                |\n                <a ui-sref="sign-up" ng-click="vm.logout()">Log Out</a>\n              </span>\n              <span ng-show="!vm.isLoggedIn()">\n                <a ui-sref="sign-up">Sign Up</a>\n              </span>\n            </div>\n          ',controller:t,controllerAs:"vm",bindToController:!0,scope:{}}}]);var usersConfig=function(e){e.state("sign-up",{url:"/sign-up",template:"<div my-sign-up></div>",onExit:["Flash",function(e){return e.clear()}],data:{title:"Sign Up"}}).state("sign-in",{url:"/sign-in",template:"<div my-sign-in></div>",onExit:["Flash",function(e){return e.clear()}],data:{title:"Sign In"}}).state("profile",{url:"/profile",template:"<div my-user-profile></div>",onExit:["Flash",function(e){return e.clear()}],data:{title:"Profile"}})};angular.module("meganote.users").config(usersConfig),usersConfig.$inject=["$stateProvider"];var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();angular.module("meganote.users").service("UsersService",["$http","DATABASE_URL","AuthToken","CurrentUser",function(e,n,t,r){var o=n+"users/",a=function(){function a(){_classCallCheck(this,a)}return _createClass(a,[{key:"create",value:function(n){return e.post(o,{user:n}).then(function(e){t.set(e.data.authToken),r.set(e.data.user)})}},{key:"login",value:function(o){return e.post(n+"sessions/",{user:o}).then(function(e){t.set(e.data.authToken),r.set(e.data.user)})}},{key:"update",value:function(n){return e.put(""+o+n._id,{user:n}).then(function(e){return r.set(e.data.user)})}}]),a}();return new a}]);
//# sourceMappingURL=bundle.js.map