//<%= entityName %>s service used for <%= _.slugify(entityName) %>s REST endpoint
angular.module('mean.<%= _.slugify(entityName) %>s').factory("<%= entityName %>s", ['$resource', function($resource) {
    return $resource('<%= _.slugify(entityName) %>s/:<%= _.slugify(entityName) %>Id', {
        <%= _.slugify(entityName) %>Id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);