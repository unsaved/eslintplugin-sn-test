((steps, params) => {
    "use strict";
    gs.info(`Provided functions:
${jasmine}
${describe}
${xdescribe}
${fdescribe}
${it}
${xit}
${fit}
${beforeEach}
${beforeAll}
${afterEach}
${afterAll}
${expect}
${fail}
${pending}
${spyOn}
+ input Params:
${steps}
${params}
`);
})(outputs, steps, params, stepResult, assertEqual);
