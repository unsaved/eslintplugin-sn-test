(function(inputs, outputs, stepResult, timeout) {
    // Have to satisfy "use strict" or would have to complicate eslintplugin-sn-test design to
    // allow arbitrarily-specified number of failures, or at least add support for 3 failures.
    // Doing this instead of eslint-disable notation since that would conflict with wrapping:
    "use strict";
})(inputs, outputs, stepResult, timeout));
