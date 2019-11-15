module.exports = {
  env: {
    browser: true,
    es6: true,
    jest:true
  },
  extends: [
    "airbnb-base",
    "prettier",
    // "plugin:@typescript-eslint/recommended",
    // "prettier/@typescript-eslint"
  ],
  rules:{
    "no-console":0,
    "import/no-unresolved": 0,
    "import/prefer-default-export":0,
    "import/no-extraneous-dependencies":0
  },
  // parser: "@typescript-eslint/parser",
  plugins: ["prettier","import","jest"],  // "@typescript-eslint"
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"]
      }
    },
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"]
  }
};
