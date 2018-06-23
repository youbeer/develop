#!/bin/bash

# このシェルスクリプトのディレクトリの絶対パスを取得。
bin_dir=$(cd $(dirname $0) && pwd)

# コンテナ作成
cd $bin_dir/../docker && docker-compose build