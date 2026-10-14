import pluginReact from "eslint-plugin-react";

export default [
  {
    ignores: ["out/**", ".next/**", "node_modules/**", "dist/**", ".vercel/**"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: "writable",
      },
    },
    settings: {
      react: {
        version: "18",
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      quotes: [2, "double", { avoidEscape: true }],
      "react/no-unescaped-entities": 0,
      "react/jsx-max-props-per-line": 0,
      "react/jsx-first-prop-new-line": 0,
      "no-console": 0,
      "react/prop-types": 0,
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "max-len": [2, 1050],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 1,
        },
      ],
      "no-underscore-dangle": [
        "error",
        {
          allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"],
        },
      ],
      "react/jsx-filename-extension": 0,
      "react/jsx-one-expression-per-line": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/alt-text": 0,
      "jsx-a11y/no-autofocus": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "react/no-array-index-key": 0,
    },
  },
];