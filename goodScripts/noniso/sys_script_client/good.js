let v = "four";
const dblr = v=>{'use strict'; return v+v;};

function onLoad() {
    "use strict";
    console.info("Here in onLoad");
}

v = dblr(v);
console.info(window.name, v, jQuery("body").length, document.URL);
