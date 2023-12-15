# どうやってコード例を追加するか

1. `docs/examples/` フォルダに新しい markdownx `.mdx` ファイルを作成します。
    - 推奨されるファイル名は、使用しているライブラリ、つまり `maplibre` と例の名前、`lines.mdx` です。
    - 例: `docs/examples/maplibre/lines.mdx`

2. 同じ構造の新しい html ファイルを `docs/examples/` フォルダに作成します。
   - 推奨されるファイル名は、使用しているライブラリ、つまり `maplibre` と例の名前、`lines.html` です。
   - 例: `docs/examples/maplibre/lines.html`
3. `LiveHtmlEditor` コンポーネントを markdown ファイルにインポートします。

```md
import LiveHtmlEditor from '@site/src/components/LiveHtmlEditor';
```

4. 次のコードを markdown ファイルに追加します。`fileUrl` を html の `FILE_NAME` に置き換えます。

```md
<LiveHtmlEditor fileUrl="./FILE_NAME.html" />
```

5. html ファイルを `static/examples` フォルダにコピーして、ビルドディレクトリにコピーされるようにします。

### 完成した例

```mdx
import LiveHtmlEditor from '@site/src/components/LiveHtmlEditor';

# Leaflet Live Editing test

This is an example of a Leaflet map with live editing. To get this to work, you need to create a react component that renders the map, and then use the `LiveHtmlEditor` tag to render it.

<LiveHtmlEditor fileUrl="./leaflet-tz.html" />
```
