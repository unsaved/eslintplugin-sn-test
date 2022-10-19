const gr = new GlideRecord("sys_script_fix");
gr.setLimit(1);
if (gr.next()) console.info(`Got sys_script_fix ${gr.sys_id}`);
gr.setValue("someField", "someVal");
if (!gr.update()) throw new Error("update failed");
