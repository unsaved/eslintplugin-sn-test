(() => {
    // Have to satisfy "use strict" or would have to complicate eslintplugin-sn-test design to
    // allow arbitrarily-specified number of failures, or at least add support for 3 failures.
    // Doing this instead of eslint-disable notation since that would conflict with wrapping:
    "use strict";

    ["u_a", "u_b", "u_c"].forEach(n => outputs[n] = inputs[n]);
})(inputs, outputs, stepResult, timeout));
