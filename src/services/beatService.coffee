# simple service to abstract the HTTP call to get beats instead of injecting $http into my controller. 
utils = require('../angular-utils')

utils.addService('beatService', ['$http', ($http) ->
    getBeats: () ->
        $http.get('modelData/beats.json')
])