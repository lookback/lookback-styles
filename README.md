# Lookback Styles

[![CircleCI](https://circleci.com/gh/lookback/lookback-styles.svg?style=shield&circle-token=647054ef54fe6d852b8a19d7e80ebf65285c74cc)](https://circleci.com/gh/lookback/lookback-styles)

Shared SCSS styles for Lookback's web projects. Includes variables, components, mixins, and other reusable patterns.

## Setup

It's possible to use this repository as an npm module, if in a Node project. You can also clone it as a submodule, and endure aeons of pains. For the npm path, here's how:

1. Add `lookback-styles` to the `dependencies` key in `package.json`:

  ```
...
"lookback-styles": "lookback/lookback-styles"
  ```

  The value refers to the GitHub path to this private repo. Npm solves the private state of the repo automatically, based on your SSH keys. Unfortunately, [yarn](https://yarnpkg.com) doesn't support private GH repos at the time of writing, so we have to use the `npm` command for now.

2. Add `node_modules/lookback-styles` to sass's `includePaths` option, however you use it. Gulp example:

  ```
gulp.src('./src/stylesheets')
  .pipe(sass({
    includePaths: [
      './node_modules/lookback-styles/'
    ]
  }))
  .pipe(gulp.dest('./dist/css'));
```

  This makes it possible to `@import` files from this module into your main app's SCSS code base 🎉

3. Import the files you need, or import all:

  ```
@import "lookback/variables";
# etc..

# or import the minimal foundation needed to get started:

@import "lookback/base";

# your code ..
```

## Testing

We just test that the whole shebang compiles with `node-sass`:

```
npm test
```
