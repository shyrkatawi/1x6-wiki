module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    // 'react/prop-types': [0],
    // "react/prop-types": [<enabled>, { ignore: <ignore>, customValidators: <customValidator>, skipUndeclared: <skipUndeclared> }]
    // enabled: for enabling the rule. 0=off, 1=warn, 2=error. Defaults to 0.
    // ignore: optional array of props name to ignore during validation.
    // customValidators: optional array of validators used for propTypes validation.
    // skipUndeclared: optional boolean to only error on components that have a propTypes block declared.
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    "no-unused-vars": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"]
  },
};
