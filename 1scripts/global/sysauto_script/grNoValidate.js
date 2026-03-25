const gr = new GlideRecord("sys_script_fix");
gr.setLimit(1);
gr.next();
gs.log("Got sys_script_fix " + gr.sys_id, "src");
