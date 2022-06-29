var TstCls = Class.create();
TstCls.prototype.initialize = function(o) {
    this.o = o;
    this.p = String(Packages.java.lang.System.getProperty(o));
};
ctx.setAttribute("A", "aye");
