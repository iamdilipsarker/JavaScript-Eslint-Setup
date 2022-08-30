//vs code workspace settings
/* 
{
  // config related to code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
    
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
   
  },
  "javascript.validate.enable": false, //disable all built-in syntax checking
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.organizeImports": true
  },
  "eslint.alwaysShowStatus": true,
  // emmet
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
} 
*/

// Install Dev Dependencies

/*
 yarn add -D prettier
yarn add eslint @babel/core @babel/eslint-parser -D   or,  npm install eslint @babel/core @babel/eslint-parser --save-dev
npx install-peerdeps --dev eslint-config-airbnb
yarn add -D eslint-config-prettier eslint-plugin-prettier 
*/

//Setup Linting Configuration file
// Create a .eslintrc.json file in the project root and enter the below contents:

/*
 {
  "extends": [
    "airbnb",
    "prettier",
    "plugin:react/recommended"
  ],
   "module.exports": { 
  "parser": "@babel/eslint-parser"
  },
   "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es2021": true,
    "jest": true
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": 0,
    "react/state-in-constructor": 0,
    "indent": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  },
  "plugins": ["prettier", "react", "react-hooks"]
} 
*/
