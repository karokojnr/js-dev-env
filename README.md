# js-dev-env
:books:Javascript Development Environment:zap:

## Display Table issue fixed by adding the following in [`package.json`](https://github.com/kenkarolz99/js-dev-env/blob/master/package.json)

```json
"jest": {
    "modulePathIgnorePatterns": [
      "node_modules"
    ]
  }
  ```

