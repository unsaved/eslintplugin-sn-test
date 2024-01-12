function($scope) {
    "use strict";
    const fName = "spclient/" + $scope.widget.id + ":" + $scope.$id;
	console.warn("UPDATE02");
    console.warn("$scope", $scope);
	console.info("Executing " + fName + " with this", this);
	this.thisVar = "I am here";  // To facilitate checking for this exact instance
	console.info(fName + " inputs", this.inputs);
	gs.info(fName + " data", this.data);
	console.info(fName + " options", this.options);
	$scope.pneu = "new string";
	console.info("this", this);
}
