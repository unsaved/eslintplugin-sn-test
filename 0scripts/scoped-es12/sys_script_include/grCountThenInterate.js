
const g = new GlideRecord();
if (g.getRowCount() > 1) while (g._next()) gs.info(`Next ${g.sys_id}`);
