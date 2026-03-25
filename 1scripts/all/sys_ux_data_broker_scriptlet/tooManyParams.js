function(iput, other) {
    if (!iput.propertyName) return {"error" : "missing property name"};
	return (iput.propertyName + other).toUpperCase();
}
