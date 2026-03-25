function(iput) {
    if (!iput.propertyName) return {"error" : "missing property name"};
	return (iput.propertyName + iput.propertyName).toUpperCase();
}
