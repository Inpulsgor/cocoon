module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true },
    ],
    "react/prop-types": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
      alias: {
        "@fonts": "src/fonts",
        "@scss": "src/scss",
        "@images": "src/images",
        "@pages": "src/pages",
        "@templates": "src/templates",
        "@components": "src/components",
        "@subcomponents": "src/subcomponents",
      },
    },
  },
};
