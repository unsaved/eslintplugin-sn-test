function(iput) {
    if (!iput.propertyName) return {"error" : "missing property name"};
	return "Z" + (iput.propertyName + iput.propertyName).toUpperCase();
}
