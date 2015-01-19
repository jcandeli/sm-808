utils = require('../../angular-utils')

utils.addDirective('sequencer', () ->
    restrict: 'E'
    replace: true
    templateUrl: 'modules/sm-808/sequencerView.html'

    controller: ['$scope', 'beatService', ($scope, beatService) ->
        beatService.getBeats().then (beats) ->
            $scope.beats = beats.data
    ]
)