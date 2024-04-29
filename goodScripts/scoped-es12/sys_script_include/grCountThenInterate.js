"use strict";

const g = new GlideRecord();
if (g.count() > 1) while (g._next()) gs.info(`Next ${g.sys_id}`);
