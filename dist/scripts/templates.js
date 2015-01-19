angular.module('sm808App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/sm-808/sequencerView.html',
    "<div class=\"sequencer\">\n" +
    "    <div ng-repeat=\"beat in beats\">\n" +
    "\n" +
    "        <ul class=\"list-unstyled\">\n" +
    "            <li ng-repeat=\"(sample, sequence) in beat.sequence\">\n" +
    "\n" +
    "                <div class=\"sample\">{{sample}}</div>\n" +
    "\n" +
    "                <ul class=\"list-inline notes\">\n" +
    "                    <li ng-repeat=\"note in sequence track by $index\" class=\"note\">\n" +
    "                        {{note}}\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
