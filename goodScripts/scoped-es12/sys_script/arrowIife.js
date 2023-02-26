(current => {
    "use strict";
    let pneu = 3;
    pneu++;

    gs.info(`job '${current.dscheduler.getRefRecord().name}' ${pneu}`);
})(current, previous);
