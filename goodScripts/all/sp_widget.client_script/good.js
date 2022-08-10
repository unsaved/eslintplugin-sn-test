let v = "four";
const dblr = v=>{'use strict'; return v+v;};

api.onLoad = function($scope) {
    "use strict";
    console.info('Running api.onLoad');
    $scope.thisRef = this;
};

v = dblr(v);
console.info(window.name, v, jQuery("body").length, document.URL);
