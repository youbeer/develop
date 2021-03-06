FROM node:11.5.0

# コンテナ上の作業ディレクトリ作成
WORKDIR /app

# 後で確認出来るようにpackage.jsonを作成
RUN npm init -y

## for js
### babel
RUN yarn add --dev @babel/core \
                  @babel/cli \
                  @babel/preset-env
RUN yarn add @babel/polyfill

### lint
RUN yarn add --dev eslint \
                   eslint-plugin-import \
                   eslint-config-airbnb-base \
                   eslint-plugin-jasmine

### esdoc
RUN yarn add --dev esdoc esdoc-standard-plugin

## for ts
RUN yarn add --dev typescript
RUN yarn add --dev tslint tslint-config-airbnb
RUN yarn add --dev typedoc 

## for css
### sass
RUN yarn add --dev node-sass

### postcss
RUN yarn add --dev postcss postcss-cli
RUN yarn add --dev autoprefixer

### lint
RUN yarn add --dev stylelint 
RUN yarn add --dev stylelint-scss
RUN yarn add --dev stylelint-order
RUN yarn add --dev stylelint-config-sass-guidelines

## elm

RUN yarn add --dev elm
RUN yarn add --dev elm-format
### elm minify
RUN yarn add --dev uglify-js
RUN npm i -g uglify-js

## webpackインストール
RUN yarn add --dev webpack
RUN yarn add --dev webpack-cli
RUN yarn add --dev webpack-merge
RUN yarn add --dev webpack-dev-server

## plugin
RUN yarn add --dev mini-css-extract-plugin
RUN yarn add --dev html-minifier-webpack-plugin
RUN yarn add --dev clean-webpack-plugin
RUN yarn add --dev copy-webpack-plugin

### loaders
RUN yarn add --dev babel-loader
RUN yarn add --dev file-loader
RUN yarn add --dev style-loader
RUN yarn add --dev css-loader
RUN yarn add -D html-loader

## pug
RUN yarn add --dev pug
RUN yarn add --dev pug-cli#master
RUN yarn add --dev https://github.com/pugjs/pug-cli.git

## watch
RUN yarn add --dev chokidar
RUN yarn add --dev chokidar-cli

## script
### elm
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"build-elm\": \"yarn run elm make \/app\/src\/assets\/elm\/ElmTest.elm --output=\/app\/dist\/elm\/ElmTest.js\",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"elm-watch\": \"yarn run chokidar '\/app\/**\/*.elm' -p -c 'yarn run build-elm' \",/g" /app/package.json

### pug
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"pug\": \"pug -o \/app\/dist -P \",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"build-pug\": \"pug \/app\/src -o \/app\/dist \",/g" /app/package.json
RUN sed -i -e "s/\(\"scripts\": {\)/\1\n    \"watch\": \"chokidar '\/app\/**\/*.pug' -p -c 'npm run build-pug' \",/g" /app/package.json
