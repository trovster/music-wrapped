![](./screenshot.webp)

# Music Wrapped

This is a Web Component for creating a music card similar to end-of-year
statistics provided by Spotify or Apple Music.

## Installation

```bash
npm install @trovster/music-wrapped --save
```

## Usage

These are [Web
Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components) and
must be imported before the custom elements can be used. If you are using the
fitness card, then you do not need to import the activity ring.

```html
<script type="module">
  import '@trovster/music-wrapped/src/MusicWrapped.js';
</script>
```

The card requires the lists inside the component. These should contain a
`title=""` attribute, which is used for the list title. You can add the optional
“Minutes Listened” and ”Top Genre” information by using the `seconds` and
`genre` attributes.

```html
<music-wrapped seconds="600000" genre="Popular">
  <ol title="Top Artists">
    <li>Taylor Swift</li>
    <li>Bad Bunny</li>
    <li>Post Malone</li>
    <li>Ed Sheeran </li>
  </ol>
</music-wrapped>
```

## Development

### Linting and Formatting

To scan the project for linting and formatting errors, run:

```bash
npm run lint
```

To automatically fix linting and formatting errors, run:

```bash
npm run format
```

### Local Demo with `web-dev-server`

To start a local development server that serves the basic demo located in
`docs/index.html`, run:

```bash
npm start
```

### Tooling Configs

For most of the tools, the configuration is in the `package.json` to minimize
the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to
individual files.
