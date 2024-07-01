(function runAction(/*GlideRecord*/ current, /*GlideRecord*/ event, /*EmailWrapper*/ email, /*ScopedEmailLogger*/ logger, /*EmailClassifier*/ classifier) {
    // Have to satisfy "use strict" or would have to complicate eslintplugin-sn-test design to
    // allow arbitrarily-specified number of failures, or at least add support for 3 failures.
    // Doing this instead of eslint-disable notation since that would conflict with wrapping:
    "use strict";

	// Implement email action here
})(current, event, email, logger, classifier);
