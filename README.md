# js-dev-env![alt ](https://img.shields.io/badge/starter--kit-node.js-green)
:books:Javascript Development Environment:zap:

## Display Table issue `Watch mode on Linux causes a ENOSPC` fixed by adding the following in [`package.json`](https://github.com/kenkarolz99/js-dev-env/blob/master/package.json)

```json
"jest": {
    "modulePathIgnorePatterns": [
      "node_modules"
    ]
  }
  ```
  ## How modern is your Node?:rotating_light:
  run the following in your terminal:
```javascript
$ node

// Modern JS test
> (async (a = 1, ...b) => ({ ...b, a, [a]: `${a}` }))()

// New Promise APIs
> util.promisify
> require('fs').promises
```
