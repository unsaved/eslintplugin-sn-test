function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    "use strict";
    if (isLoading || newValue === '') {
        return;
    }
    console.info("All is well");
}
