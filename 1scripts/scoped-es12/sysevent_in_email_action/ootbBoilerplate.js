(function runAction(/*GlideRecord*/ current, /*GlideRecord*/ event, /*EmailWrapper*/ email, /*ScopedEmailLogger*/ logger, /*EmailClassifier*/ classifier) {

	// Implement email action here
    logger.info(`Input params (${current}) (${event}) (${email}) (${classifier})`);
})(current, event, email, logger, classifier);
