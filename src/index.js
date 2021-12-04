import GLPK from "glpk.js";
const glpk = await GLPK();
const options = {
  msglev: glpk.GLP_MSG_ALL,
  presol: true,
  cb: {
    call: (progress) => console.log(progress),
    each: 1,
  },
};
// 例題: ナップサック問題 http://web.tuat.ac.jp/~miya/fujie_ORSJ.pdf
const res = await glpk.solve(
  {
    name: "LP",
    generals: [],
    binaries: ["x0", "x1", "x2", "x3", "x4"],
    objective: {
      direction: glpk.GLP_MAX,
      name: "obj",
      vars: [
        { name: "x0", coef: 17 },
        { name: "x1", coef: 16 },
        { name: "x2", coef: 14 },
        { name: "x3", coef: 10 },
        { name: "x4", coef: 8 },
      ],
    },
    subjectTo: [
      {
        name: "constraint0",
        vars: [
          { name: "x0", coef: 60 },
          { name: "x1", coef: 50 },
          { name: "x2", coef: 40 },
          { name: "x3", coef: 30 },
          { name: "x4", coef: 20 },
        ],
        bnds: { type: glpk.GLP_UP, ub: 100, lb: 0 },
      },
    ],
  },
  options
);
console.log(res.result);
