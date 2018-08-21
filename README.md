## Tools to use:
- [webpack](https://github.com/petehunt/webpack-howto) to auto rebuild code.
- [babel 6](http://babeljs.io/docs/setup/#webpack) to compile es6/7 code to es5.
- [Extensions Reloader](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) for easier reload extension


## npm scripts inside `package.json`:
```
  "scripts": {
    "build": "NODE_ENV=production node utils/build.js",
    "start": "NODE_ENV=development node utils/webserver.js --display-error-details"
  },
```

## Setup
* Navigate to `chrome://extensions/`
* Make sure developer mode is turned on
* Click load unpacked extension and select the `trello-for-crystal` folder
