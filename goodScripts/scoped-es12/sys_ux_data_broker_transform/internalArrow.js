function(iput) {
    if (!iput.propertyNames) return {"error" : "missing property names"};
    iput.propertyNames.forEach(p => { gs.info(`Next prop (${p})`); });
    return null;
}
