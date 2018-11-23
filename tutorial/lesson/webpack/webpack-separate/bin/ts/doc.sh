#!/bin/bash

# このシェルスクリプトのディレクトリの絶対パスを取得。
bin_dir=$(cd $(dirname $0) && pwd)
name=${1:-ts}
dir_docker="$bin_dir/../../docker"
# docker-composeの起動。 
cd $dir_docker  && docker-compose run $name yarn run  typedoc --target es6  --ignoreCompilerErrors --out ./docs/ts ./src/
