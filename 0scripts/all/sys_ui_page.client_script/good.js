function cancel() {
    const c = gel('cancelled');
    c.value = "true";
    GlideDialogWindow.get().destroy();
    return false;
}

function ok() {
    return true;
}
