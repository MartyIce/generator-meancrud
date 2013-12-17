angular.module('mean.<%= _.slugify(entityName) %>s').controller('<%= entityName %>sController', ['$scope', '$routeParams', '$location', 'Global', '<%= entityName %>s', function ($scope, $routeParams, $location, Global, <%= entityName %>s) {
    $scope.global = Global;

    $scope.create = function() {
        var <%= _.slugify(entityName) %> = new <%= entityName %>s({
            name: this.name,
            description: this.description
        });
        <%= _.slugify(entityName) %>.$save(function(response) {
            $location.path("<%= _.slugify(entityName) %>s");
        });

        this.name = "";
        this.description = "";
    };

    $scope.remove = function(<%= _.slugify(entityName) %>) {
        if (<%= _.slugify(entityName) %>) {
            <%= _.slugify(entityName) %>.$remove();

            for (var i in $scope.<%= _.slugify(entityName) %>s) {
                if ($scope.<%= _.slugify(entityName) %>s[i] == <%= _.slugify(entityName) %>) {
                    $scope.<%= _.slugify(entityName) %>s.splice(i, 1);
                }
            }
        }
        else {
            $scope.<%= _.slugify(entityName) %>.$remove();
            $location.path('<%= _.slugify(entityName) %>s');
        }
    };

    $scope.update = function() {
        var <%= _.slugify(entityName) %> = $scope.<%= _.slugify(entityName) %>;
        if (!<%= _.slugify(entityName) %>.updated) {
            <%= _.slugify(entityName) %>.updated = [];
        }
        <%= _.slugify(entityName) %>.updated.push(new Date().getTime());

        <%= _.slugify(entityName) %>.$update(function() {
            $location.path('<%= _.slugify(entityName) %>s');
        });
    };

    $scope.find = function() {
        <%= entityName %>s.query(function(<%= _.slugify(entityName) %>s) {
            $scope.<%= _.slugify(entityName) %>s = <%= _.slugify(entityName) %>s;
        });
    };

    $scope.findOne = function() {
        <%= entityName %>s.get({
            <%= _.slugify(entityName) %>Id: $routeParams.<%= _.slugify(entityName) %>Id
        }, function(<%= _.slugify(entityName) %>) {
            $scope.<%= _.slugify(entityName) %> = <%= _.slugify(entityName) %>;
        });
    };
}]);