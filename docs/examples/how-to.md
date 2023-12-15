# How to contribute a live code example

1. Create a new markdownx `.mdx` file in the `docs/examples/` folder.
    - it is recommended to name the file after the library you are using,i.e. `maplibre` and the name of the example,`lines.mdx`.
2. Create a new html file in the `docs/examples/` folder with same structure.
    - it is recommended to name the file after the library you are using,i.e. `maplibre` and the name of the example,`lines.html`
3. Import the `LiveHtmlEditor` component into the markdown file:

```md
import LiveHtmlEditor from '@site/src/components/LiveHtmlEditor';
```

4. Add the following code to the markdown file, replacing the `fileUrl` with your html `FILE_NAME`.

```md
<LiveHtmlEditor fileUrl="./FILE_NAME.html" />
```
5. Copy your html file into the `static/examples` folder so that it gets copied to the build directory.

### Finished example

```mdx
import LiveHtmlEditor from '@site/src/components/LiveHtmlEditor';

# Leaflet Live Editing test

This is an example of a Leaflet map with live editing. To get this to work, you need to create a react component that renders the map, and then use the `LiveHtmlEditor` tag to render it.

<LiveHtmlEditor fileUrl="./leaflet-tz.html" />
```
