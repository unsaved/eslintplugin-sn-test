_unused = function($scope) {
    /* I had to put this script under bad2Scripts instead of bad1Scripts to accommodate an
     * ESLint bug where varsIgnorePatterns are sometimes not honored, including for "_unused". */
    "use strict";
    /* global _unused:writable */
    const fName = "spclient/" + $scope.widget.id + ":" + $scope.$id;
	console.warn("UPDATE02");
    console.warn("$scope", $scope);
	console.info("Executing " + fName + " with this", this);
	this.thisVar = "I am here";  // To facilitate checking for this exact instance
	console.info(fName + " inputs", this.inputs);
	console.info(fName + " data", this.data);
	console.info(fName + " options", this.options);
	$scope.pneu = "new string";
	console.info("this", this);
};
