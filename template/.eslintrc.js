module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  extends: "airbnb",
  env: {
    browser: true
  },
  rules: {
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "no-plusplus": 0
  }
};
