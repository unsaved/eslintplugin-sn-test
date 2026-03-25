(function runAction(/*GlideRecord*/ current, /*GlideRecord*/ event, /*EmailWrapper*/ email, /*ScopedEmailLogger*/ logger, /*EmailClassifier*/ classifier) {
    "use strict";
    logger.info(`Input params (${current}) (${event}) (${email}) (${classifier})`);
})(current, event, email, logger, classifier);
