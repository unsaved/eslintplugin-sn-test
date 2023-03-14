function(iput) {
    if (!iput.propertyName) return {"error" : "missing property name"};
	gs.info(`transformTst:brokertran requested prop '${iput.propertyName}'`);
	return `${gs.getProperty(iput.propertyName)}>`;
}
