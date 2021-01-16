# 風来のシレン アイテム識別補助ツール

風来のシレンでアイテムを値段識別する際の補助ツール。

2021/01/16時点では、風来のシレン5plusにのみ対応。

## 開発メモ

風来のシレンとは無関係だが開発のためのメモを残しておく。
基本的に全部Dockerでやる。

### `create-react-app`

プロジェクト作成時に一度だけ叩く。

```sh
docker run -it --rm \
  -v "$PWD/app:/app" \
  -w /app \
  -u "$UID" \
  node:15.5.1-alpine \
  npx create-react-app app-name --template typescript
```

### ローカル開発環境

```sh
docker-compose build  # 初回のみ
docker-compose up
```

サーバが起動したら `http://localhost:8888`にアクセス。

### パッケージ追加

```sh
docker-compose run --rm dev-server yarn add [追加するnpmパッケージ]
```

### `gh-pages`

(TODO)
