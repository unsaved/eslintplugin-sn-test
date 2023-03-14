function(iput) {
    if (!iput.propertyName) return {"error" : "missing property name"};
	gs.info(`getCappedProp:brokerscr  input (${iput.propertyName})`);
	return "Z" + (iput.propertyName + iput.propertyName).toUpperCase();

