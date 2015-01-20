utils = require('../../angular-utils')

utils.addDirective('sequencer', () ->
    restrict: 'E'
    replace: true
    templateUrl: 'modules/sm-808/sequencerView.html'

    controller: ['$scope', 'beatService', '$interval', ($scope, beatService, $interval) ->
        # =========
        # Init
        # =========
        task = null

        # get all the saved beats
        beatService.getBeats().then (beats) ->
            $scope.beats = beats.data
            $scope.beat  = $scope.beats[0] # select first beat by default

        # =========
        # private functions
        # =========
        calcBeatInterval = (bpm) ->
            (60/bpm * 1000) / 4

        nextStep = () ->
            # step through each subdivision 
            $scope.step = if $scope.step == 15 then 0 else $scope.step + 1


        # =========
        # scoped variables
        # =========
        $scope.state = 'stopped'
        $scope.step  = -1

        $scope.toggleState = () ->
            if $scope.state == 'stopped'
                $scope.state = 'playing'
                task = $interval(nextStep, calcBeatInterval($scope.beat.bpm))

            else
                $interval.cancel(task)
                $scope.step = -1
                $scope.state = 'stopped'

        $scope.selectBeat = (beat) ->
            $scope.beat = beat

        $scope.toggleNote = (sequence, index) ->
            sequence[index] = if sequence[index] then '' else 'x'

    ]
)