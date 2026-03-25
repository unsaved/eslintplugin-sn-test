const combine = (p1, p2) => {
    const inP1 = p1;  // eslint-disable-line no-unused-vars
    const inP2 = p2;  // eslint-disable-line no-unused-vars
    return `${inP1}|${inP2}`;
};
gs.log(combine(1, "two"), "logsrc");
