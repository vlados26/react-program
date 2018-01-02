# react-program
How to start react project:

1. Create new repo in github

2. git clone https://github.com/...

3. npm init

4. Add this code in package.json
```javascript
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
},
"dependencies": {
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "react-scripts": "1.0.17"
}
```

5. Create .gitignore.txt with this code
```javascript
# See https://help.github.com/ignore-files/ for more about ignoring files.
# dependencies
/node_modules


# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
6. Create public -> index.html and 
          src    -> index.css + index.js

7. Add in index.js imports
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```
