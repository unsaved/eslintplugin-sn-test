(function() {
if (!current.update()) throw new Error("update failed");
})(previous, current);
