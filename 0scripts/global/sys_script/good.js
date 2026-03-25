(function() {
var varsAreAllowed;
const con = "a val";
// Test availability of global vars from the different component lists:
gs.log("a message", "a source");  // coreServerObjects.txt
gs.log(SNC.CMDBUtil.getTables0("sys_db_object"), "src");  // directly in exports.js
gs.log(Object.keys(new sn_codesearch.CodeSearch()).length, "src");  // SIScopes

varsAreAllowed = "a val";
gs.log(varsAreAllowed, "2nd");

con += "addition";  // Can't test for const changes
gs.log(con, "2nd");
})(previous, current);
