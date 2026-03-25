(scope) => {
    "use strict";
    const fName = "splink/" + scope.widget.id + ":" + scope.$id;
	console.warn("UPDATE02");
    console.warn("scope", scope);
	console.info("Executing " + fName + " with this", this);
	this.thisVar = "I am here";  // To facilitate checking for this exact instance
	scope.pneu = "new string";
}
