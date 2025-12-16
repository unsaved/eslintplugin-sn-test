function(iput) {
    if (!iput.propertyName) return {"error" : "missing property name"};
	console.info(`getCappedProp:brokerscr input (${iput.propertyName})`);
	return (iput.propertyName + iput.propertyName).toUpperCase();
}
