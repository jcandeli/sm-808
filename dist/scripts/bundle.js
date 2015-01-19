(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  addDirective: function(name, directiveFactory) {
    return angular.module('directives').directive(name, directiveFactory);
  },
  addController: function(name, dependencies) {
    return angular.module('controllers').controller(name, dependencies);
  },
  addFactory: function(name, factoryFunction) {
    return angular.module('factories').factory(name, factoryFunction);
  },
  addService: function(name, serviceFunction) {
    return angular.module('services').factory(name, serviceFunction);
  },
  addFilter: function(name, filterFunction) {
    return angular.module('filters').filter(name, filterFunction);
  },
  addProvider: function(name, providerFunction) {
    return angular.module('providers').provider(name, providerFunction);
  }
};



},{}],2:[function(require,module,exports){
angular.module('ngTemplates', []);

angular.module('controllers', []);

angular.module('directives', []);

angular.module('services', []);

module.exports = angular.module('sm808App', ['ngTemplates', 'controllers', 'directives', 'services']);



},{}],3:[function(require,module,exports){
var utils;

utils = require('../../angular-utils');

utils.addDirective('sequencer', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'modules/sm-808/sequencerView.html',
    controller: [
      '$scope', 'beatService', function($scope, beatService) {
        return beatService.getBeats().then(function(beats) {
          return $scope.beats = beats.data;
        });
      }
    ]
  };
});



},{"../../angular-utils":1}],4:[function(require,module,exports){
var utils;

utils = require('../angular-utils');

utils.addService('beatService', [
  '$http', function($http) {
    return {
      getBeats: function() {
        return $http.get('modelData/beats.json');
      }
    };
  }
]);



},{"../angular-utils":1}]},{},[1,2,3,4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvanAvRG9jdW1lbnRzL3NtLTgwOC9zcmMvYW5ndWxhci11dGlscy5jb2ZmZWUiLCIvVXNlcnMvanAvRG9jdW1lbnRzL3NtLTgwOC9zcmMvYXBwLWNvbmZpZy5jb2ZmZWUiLCIvVXNlcnMvanAvRG9jdW1lbnRzL3NtLTgwOC9zcmMvbW9kdWxlcy9zbS04MDgvc2VxdWVuY2VyQ3RyLmNvZmZlZSIsIi9Vc2Vycy9qcC9Eb2N1bWVudHMvc20tODA4L3NyYy9zZXJ2aWNlcy9iZWF0U2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUNJO0FBQUEsRUFBQSxZQUFBLEVBQWMsU0FBQyxJQUFELEVBQU8sZ0JBQVAsR0FBQTtXQUNWLE9BQU8sQ0FBQyxNQUFSLENBQWUsWUFBZixDQUE0QixDQUFDLFNBQTdCLENBQXVDLElBQXZDLEVBQTZDLGdCQUE3QyxFQURVO0VBQUEsQ0FBZDtBQUFBLEVBR0EsYUFBQSxFQUFlLFNBQUMsSUFBRCxFQUFPLFlBQVAsR0FBQTtXQUNYLE9BQU8sQ0FBQyxNQUFSLENBQWUsYUFBZixDQUE2QixDQUFDLFVBQTlCLENBQXlDLElBQXpDLEVBQStDLFlBQS9DLEVBRFc7RUFBQSxDQUhmO0FBQUEsRUFNQSxVQUFBLEVBQVksU0FBQyxJQUFELEVBQU8sZUFBUCxHQUFBO1dBQ1IsT0FBTyxDQUFDLE1BQVIsQ0FBZSxXQUFmLENBQTJCLENBQUMsT0FBNUIsQ0FBb0MsSUFBcEMsRUFBMEMsZUFBMUMsRUFEUTtFQUFBLENBTlo7QUFBQSxFQVNBLFVBQUEsRUFBWSxTQUFDLElBQUQsRUFBTyxlQUFQLEdBQUE7V0FDUixPQUFPLENBQUMsTUFBUixDQUFlLFVBQWYsQ0FBMEIsQ0FBQyxPQUEzQixDQUFtQyxJQUFuQyxFQUF5QyxlQUF6QyxFQURRO0VBQUEsQ0FUWjtBQUFBLEVBWUEsU0FBQSxFQUFXLFNBQUMsSUFBRCxFQUFPLGNBQVAsR0FBQTtXQUNQLE9BQU8sQ0FBQyxNQUFSLENBQWUsU0FBZixDQUF5QixDQUFDLE1BQTFCLENBQWlDLElBQWpDLEVBQXVDLGNBQXZDLEVBRE87RUFBQSxDQVpYO0FBQUEsRUFlQSxXQUFBLEVBQWEsU0FBQyxJQUFELEVBQU8sZ0JBQVAsR0FBQTtXQUNULE9BQU8sQ0FBQyxNQUFSLENBQWUsV0FBZixDQUEyQixDQUFDLFFBQTVCLENBQXFDLElBQXJDLEVBQTJDLGdCQUEzQyxFQURTO0VBQUEsQ0FmYjtDQURKLENBQUE7Ozs7O0FDQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxhQUFmLEVBQThCLEVBQTlCLENBQUEsQ0FBQTs7QUFBQSxPQUNPLENBQUMsTUFBUixDQUFlLGFBQWYsRUFBOEIsRUFBOUIsQ0FEQSxDQUFBOztBQUFBLE9BRU8sQ0FBQyxNQUFSLENBQWUsWUFBZixFQUE2QixFQUE3QixDQUZBLENBQUE7O0FBQUEsT0FHTyxDQUFDLE1BQVIsQ0FBZSxVQUFmLEVBQTJCLEVBQTNCLENBSEEsQ0FBQTs7QUFBQSxNQUtNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsTUFBUixDQUFlLFVBQWYsRUFDYixDQUNJLGFBREosRUFFSSxhQUZKLEVBR0ksWUFISixFQUlJLFVBSkosQ0FEYSxDQUxqQixDQUFBOzs7OztBQ0FBLElBQUEsS0FBQTs7QUFBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLHFCQUFSLENBQVIsQ0FBQTs7QUFBQSxLQUVLLENBQUMsWUFBTixDQUFtQixXQUFuQixFQUFnQyxTQUFBLEdBQUE7U0FDNUI7QUFBQSxJQUFBLFFBQUEsRUFBVSxHQUFWO0FBQUEsSUFDQSxPQUFBLEVBQVMsSUFEVDtBQUFBLElBRUEsV0FBQSxFQUFhLG1DQUZiO0FBQUEsSUFJQSxVQUFBLEVBQVk7TUFBQyxRQUFELEVBQVcsYUFBWCxFQUEwQixTQUFDLE1BQUQsRUFBUyxXQUFULEdBQUE7ZUFDbEMsV0FBVyxDQUFDLFFBQVosQ0FBQSxDQUFzQixDQUFDLElBQXZCLENBQTRCLFNBQUMsS0FBRCxHQUFBO2lCQUN4QixNQUFNLENBQUMsS0FBUCxHQUFlLEtBQUssQ0FBQyxLQURHO1FBQUEsQ0FBNUIsRUFEa0M7TUFBQSxDQUExQjtLQUpaO0lBRDRCO0FBQUEsQ0FBaEMsQ0FGQSxDQUFBOzs7OztBQ0NBLElBQUEsS0FBQTs7QUFBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLGtCQUFSLENBQVIsQ0FBQTs7QUFBQSxLQUVLLENBQUMsVUFBTixDQUFpQixhQUFqQixFQUFnQztFQUFDLE9BQUQsRUFBVSxTQUFDLEtBQUQsR0FBQTtXQUN0QztBQUFBLE1BQUEsUUFBQSxFQUFVLFNBQUEsR0FBQTtlQUNOLEtBQUssQ0FBQyxHQUFOLENBQVUsc0JBQVYsRUFETTtNQUFBLENBQVY7TUFEc0M7RUFBQSxDQUFWO0NBQWhDLENBRkEsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9XG4gICAgYWRkRGlyZWN0aXZlOiAobmFtZSwgZGlyZWN0aXZlRmFjdG9yeSkgLT5cbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ2RpcmVjdGl2ZXMnKS5kaXJlY3RpdmUobmFtZSwgZGlyZWN0aXZlRmFjdG9yeSlcblxuICAgIGFkZENvbnRyb2xsZXI6IChuYW1lLCBkZXBlbmRlbmNpZXMpIC0+XG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCdjb250cm9sbGVycycpLmNvbnRyb2xsZXIobmFtZSwgZGVwZW5kZW5jaWVzKVxuXG4gICAgYWRkRmFjdG9yeTogKG5hbWUsIGZhY3RvcnlGdW5jdGlvbikgLT5cbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ2ZhY3RvcmllcycpLmZhY3RvcnkobmFtZSwgZmFjdG9yeUZ1bmN0aW9uKVxuXG4gICAgYWRkU2VydmljZTogKG5hbWUsIHNlcnZpY2VGdW5jdGlvbikgLT5cbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ3NlcnZpY2VzJykuZmFjdG9yeShuYW1lLCBzZXJ2aWNlRnVuY3Rpb24pXG5cbiAgICBhZGRGaWx0ZXI6IChuYW1lLCBmaWx0ZXJGdW5jdGlvbikgLT5cbiAgICAgICAgYW5ndWxhci5tb2R1bGUoJ2ZpbHRlcnMnKS5maWx0ZXIobmFtZSwgZmlsdGVyRnVuY3Rpb24pXG5cbiAgICBhZGRQcm92aWRlcjogKG5hbWUsIHByb3ZpZGVyRnVuY3Rpb24pIC0+XG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKCdwcm92aWRlcnMnKS5wcm92aWRlcihuYW1lLCBwcm92aWRlckZ1bmN0aW9uKVxuICAgICAgICAiLCJhbmd1bGFyLm1vZHVsZSgnbmdUZW1wbGF0ZXMnLCBbXSlcbmFuZ3VsYXIubW9kdWxlKCdjb250cm9sbGVycycsIFtdKVxuYW5ndWxhci5tb2R1bGUoJ2RpcmVjdGl2ZXMnLCBbXSlcbmFuZ3VsYXIubW9kdWxlKCdzZXJ2aWNlcycsIFtdKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdzbTgwOEFwcCcsXG4gICAgW1xuICAgICAgICAnbmdUZW1wbGF0ZXMnXG4gICAgICAgICdjb250cm9sbGVycydcbiAgICAgICAgJ2RpcmVjdGl2ZXMnXG4gICAgICAgICdzZXJ2aWNlcydcbiAgICBdXG4pIiwidXRpbHMgPSByZXF1aXJlKCcuLi8uLi9hbmd1bGFyLXV0aWxzJylcblxudXRpbHMuYWRkRGlyZWN0aXZlKCdzZXF1ZW5jZXInLCAoKSAtPlxuICAgIHJlc3RyaWN0OiAnRSdcbiAgICByZXBsYWNlOiB0cnVlXG4gICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3NtLTgwOC9zZXF1ZW5jZXJWaWV3Lmh0bWwnXG5cbiAgICBjb250cm9sbGVyOiBbJyRzY29wZScsICdiZWF0U2VydmljZScsICgkc2NvcGUsIGJlYXRTZXJ2aWNlKSAtPlxuICAgICAgICBiZWF0U2VydmljZS5nZXRCZWF0cygpLnRoZW4gKGJlYXRzKSAtPlxuICAgICAgICAgICAgJHNjb3BlLmJlYXRzID0gYmVhdHMuZGF0YVxuICAgIF1cbikiLCIjIHNpbXBsZSBzZXJ2aWNlIHRvIGFic3RyYWN0IHRoZSBIVFRQIGNhbGwgdG8gZ2V0IGJlYXRzIGluc3RlYWQgb2YgaW5qZWN0aW5nICRodHRwIGludG8gbXkgY29udHJvbGxlci4gXG51dGlscyA9IHJlcXVpcmUoJy4uL2FuZ3VsYXItdXRpbHMnKVxuXG51dGlscy5hZGRTZXJ2aWNlKCdiZWF0U2VydmljZScsIFsnJGh0dHAnLCAoJGh0dHApIC0+XG4gICAgZ2V0QmVhdHM6ICgpIC0+XG4gICAgICAgICRodHRwLmdldCgnbW9kZWxEYXRhL2JlYXRzLmpzb24nKVxuXSkiXX0=
