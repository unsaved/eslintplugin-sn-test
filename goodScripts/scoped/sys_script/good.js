// Test availability of scoped vars from the different component lists:
gs.info("a message");  // coreServerObjects.txt
gs.info(Object.keys(new sn_codesearch.CodeSearch()).length);  // SIScopes

var varsAreAllowed = "a val";
gs.info(varsAreAllowed);

const con = "a val";
con += "addition";  // Can't test for const changes
gs.info(con);
