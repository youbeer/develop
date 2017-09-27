#!/bin/bash

# このシェルスクリプトのディレクトリの絶対パスを取得。
bin_dir=$(cd $(dirname $0) && pwd)

cd $bin_dir/../tools && docker-compose run tsc /bin/bash -c "npm run tsc -- src/**/*.ts  --outDir dist --jsx preserve"