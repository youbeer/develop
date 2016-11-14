# webpack tutorial

[step by stepで始めるwebpack][*1]のチュートリアルをdockerを使って試してみる。

## 構成

ディレクトリ構造

```
tutorial
  - webpack
    - app
      - app.js
      - cats.js
    - webpack
      - Dockerfile
      - package.json
    - docker-compose.yml
```

## webpackの実行まで

app.jsとcats.jsはチュートリアルどおり

```app.js
var cats = require('./cats.js');
console.log(cats);
```

```cats.js
var cats = ['tama', 'kuro', 'tora']
module.exports = cats;
```

webpack用のDockerfile

```Dockerfile
FROM node:7.1.0
WORKDIR /my_webpack
COPY ./package.json package.json 
RUN npm install

CMD ["node", "node_modules/.bin/webpack", "app/app.js", "app/bundle.js"]
```

```package.json
{
  "name": "my_webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "2.1.0-beta.26"
  }
}
```

```docker-compose.yml
webpack:
  build: ./webpack
  volumes:
   - ./app:/my_webpack/app
   - ./webpack/package.json:/my_webpack/package.json
```

dockerコンテナの作成・実行を行う。

```bash
$ docker-compose build
$ docker-compose up
```

実行後、appディレクトリ以下にbundle.jsが作成される。

```
app
  - app.js
  - cats.js
  - bundle.js
```

## 実行方法の最適化

package.jsonにビルドスクリプトを記述する。

```package.json
{
  "name": "my_webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack app/app.js app/bundle.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "2.1.0-beta.26"
  }
}
```

Dockerfileを修正。

```Dockerfile
FROM node:7.1.0
WORKDIR /my_webpack
RUN npm init -y
RUN npm install --save-dev webpack@2.1.0-beta.26

CMD ["npm", "run", "build"]
```

コンテナを作り直してビルド実行

```bash
$ docker-compose build
$ docker-compose up
```

## ビルドしたjsを実行

```bash
$ docker-compose run --rm webpack node app/bundle.js
```

※ --rm: コンテナを実行し終わったら削除[*](../../provision/docker/compose.md)

## webpack.config.jsの作成

```webpack/webpack.config.js
module.exports = {
  entry: './app/app.js',
  output: {
    filename: './app/bundle.js'
  }
};
```

```docker-compose.yml
webpack:
  build: ./webpack
  volumes:
   - ./app:/my_webpack/app
   - ./webpack/package.json:/my_webpack/package.json
   - ./webpack/webpack.config.js:/my_webpack/webpack.config.js
```


## 参考

[step by stepで始めるwebpack][*1]

[*1]:http://qiita.com/howdy39/items/48d85c430f90a21075cd