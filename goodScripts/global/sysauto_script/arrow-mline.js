const
  combine
  =
  (p1,
  p2)   =>
  {
    const intP1 = p1;  // eslint-disable-line no-unused-vars
    const intP2 = p2;  // eslint-disable-line no-unused-vars
    return `${p1}|${p2}`;
}
;
gs.log(combine(1, "two"), "logsrc");
