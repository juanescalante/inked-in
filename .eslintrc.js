module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: { "linebreak-style": 0, "eslint no-unused-expressions": 0 }
};
