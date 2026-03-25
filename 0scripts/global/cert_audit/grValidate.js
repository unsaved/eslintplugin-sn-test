const gr = new GlideRecord("sys_script_fix");
gr.setLimit(1);
if (gr.next()) gs.log("Got sys_script_fix " + gr.sys_id, "src");
gr.setValue("someField", "someVal");
if (!gr.update()) throw new Error("update failed");
