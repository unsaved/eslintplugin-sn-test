(() => {
    "use strict";  // eslint-disable-next-line array-callback-return
    ["u_a", "u_b", "u_c"].forEach(n => outputs[n] = inputs[n]);
})(inputs, outputs, stepResult, timeout);
