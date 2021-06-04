# lh-libs

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```


### 提交时校验commit
```js
    yarn add  @commitlint/cli @commitlint/config-conventional -D
    echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
    yarn add husky@4.3.8 -D  
    用npm run commit 代替 git commit -m ""
```