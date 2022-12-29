(function() {
    gs.debug("Single-param");
    gs.info("Multi-{1} with {0} placeholders", 2, "param");
    var dynamicMsg = "Does not contain placeholders";
    gs.warn(dynamicMsg, 2, "param");
})(g_processor, g_response, g_request);
