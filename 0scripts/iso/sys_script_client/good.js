let v = "four";
const dblr = v=>{'use strict'; return v+v;};

function onLoad() {
    'use strict';
    console.info("I am here in onLoad");
}

v = dblr(v);
console.info(v, new URL("https://cnn.com/"));
