() => {
    "use strict";
    const $document = $injector.get("$document");
    const $interval = $injector.get("$interval");
    const $location = $injector.get("$location");
    const $timeout = $injector.get("$timeout");
    const $window = $injector.get("$window");
	console.info("document", $document);
	console.info("interval", $interval);
	console.info("location", $location);
	console.info("timeout", $timeout);
	console.info("window", $window);
}
