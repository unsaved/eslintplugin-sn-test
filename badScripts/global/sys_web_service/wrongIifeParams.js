(function() {
var v = 3;
gs.log(request.http.inputParam + v, "src");
response.setStatus(200);
})(response, APCHandler);
