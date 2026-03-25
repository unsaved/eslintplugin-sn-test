(() => {
    gs.info("Pre");
    try {
        if (gs !== null) throw new Error("Forced error");
        gs.info("Mid");
    } catch (e) {
        gs.error(`Caught: ${e}`);
        return false;
    }
    return true;
})()
