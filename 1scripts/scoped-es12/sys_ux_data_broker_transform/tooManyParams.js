function(iput, additional) {
    if (!iput.propertyName) return {"error" : "missing property name"};
	gs.info(`transformTst:brokertran requested prop '${iput.propertyName}'`);
	gs.info(`transformTst:brokertran additional param '${additional}'`);
	return `${gs.getProperty(iput.propertyName)}>`;
}
