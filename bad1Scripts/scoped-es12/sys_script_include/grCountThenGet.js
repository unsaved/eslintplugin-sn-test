"use strict";

const g = new GlideRecord();
if (g.count() > 0) {
    if (!g.get("sysid")) throw new Error("_get failed");
    gs.info(`Next ${g.sys_id}`);
}
