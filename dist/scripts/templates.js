angular.module('sm808App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/sm-808/sequencerView.html',
    "<div>\n" +
    "\n" +
    "    <div class=\"sequencer\">\n" +
    "        <h1>\n" +
    "            <img src=\"splice-logo.png\" />\n" +
    "            M-808\n" +
    "        </h1>\n" +
    "\n" +
    "        <div class=\"info\">\n" +
    "            <h3>{{beat.name}}</h3>\n" +
    "            <h4>BPM {{beat.bpm}}</h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"padded-lg bordered\">\n" +
    "            <ul class=\"list-unstyled\">\n" +
    "                <li ng-repeat=\"(sample, sequence) in beat.sequence\">\n" +
    "\n" +
    "                    <div class=\"sample\">{{sample}}</div>\n" +
    "\n" +
    "                    <ul class=\"list-inline notes\">\n" +
    "                        <li\n" +
    "                            ng-repeat=\"note in sequence track by $index\"\n" +
    "                            class=\"note\"\n" +
    "                            ng-class=\"{selected: note, playing: $index == step}\"\n" +
    "                            ng-click=\"toggleNote(sequence, $index)\"\n" +
    "                        ></li>\n" +
    "                    </ul>\n" +
    "\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <a ng-click=\"toggleState()\" class=\"btn btn-primary\">\n" +
    "            <i class=\"glyphicon\" ng-class=\"{'glyphicon-play': state == 'stopped', 'glyphicon-stop': state == 'playing'}\"></i>\n" +
    "            <span ng-if=\"state == 'stopped'\">Start</span>\n" +
    "            <span ng-if=\"state == 'playing'\">Stop</span>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"margined-lg\">\n" +
    "        <h4>Beats</h4>\n" +
    "\n" +
    "        <ul class=\"list-unstyled\">\n" +
    "            <li ng-repeat=\"beat in beats\">\n" +
    "                <a ng-click=\"selectBeat(beat)\">{{beat.name}}</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "</div>"
  );

}]);
