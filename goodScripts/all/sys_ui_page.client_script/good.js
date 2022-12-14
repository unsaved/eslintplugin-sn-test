function cancel() {
    "use strict";
    const c = gel('cancelled');
    c.value = "true";
    GlideDialogWindow.get().destroy();
    return false;
}

function ok() {
    "use strict";
    return true;
}
