//vs code workspace settings
/* 
{
   //config related to code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
    
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.organizeImports": true
  },
  "eslint.alwaysShowStatus": true
  //config related to code formatting end
} 
*/

//Install Dev Dependencies
/*
 yarn add -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D eslint-config-prettier eslint-plugin-prettier 
*/

//Setup Linting Configuration file
// Create a .eslintrc.json file in the project root and enter the below contents:

/* 
{
  "extends": ["prettier", "airbnb-base"],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "env": {
    "commonjs": true,
    "node": true
  },
  "rules": {
    "no-console": 0,
    "indent": 0,
    "linebreak-style": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true
      }
    ]
  },
  "plugins": ["prettier"]
} 
*/
