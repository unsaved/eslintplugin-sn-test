// This passes test because we assign to the new class.
// This is how SI classes are generally instantiated on SN, because this
// is how the auto-generated code templates do it.
var OtherAjaxProcessor = Class.create();
 
OtherAjaxProcessor.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    type: "OtherAjaxProcessor",
	_getStringParam: function() {
        return undefined;
    },
});
