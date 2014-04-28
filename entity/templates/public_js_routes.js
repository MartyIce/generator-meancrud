'use strict';

//Setting up route
angular.module('mean.<%= entityName %>s').config(['$stateProvider',
    function($stateProvider) {

        //================================================
        // Check if the user is connected
        //================================================
        var checkLoggedin = function($q, $timeout, $http, $location) {
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
                // Authenticated
                if (user !== '0')
                    $timeout(deferred.resolve, 0);

                // Not Authenticated
                else {
                    $timeout(function() {
                        deferred.reject();
                    }, 0);
                    $location.url('/login');
                }
            });

            return deferred.promise;
        };

        // states for my app
        $stateProvider
            .state('all <%=entityName%>s', {
                url: '/<%=entityName%>s',
                templateUrl: 'public/<%=entityName%>s/views/list.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('create <%=entityName%>', {
                url: '/<%=entityName%>s/create',
                templateUrl: 'public/<%=entityName%>s/views/create.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('edit <%=entityName%>', {
                url: '/<%=entityName%>s/:<%=entityName%>Id/edit',
                templateUrl: 'public/<%=entityName%>s/views/edit.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('<%=entityName%> by id', {
                url: '/<%=entityName%>s/:<%=entityName%>Id',
                templateUrl: 'public/<%=entityName%>s/views/view.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            });
    }
]);
