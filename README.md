# minimal-time-helpers

> minimal time helpers, implemented in TypeScript

It provides few helpers to do date manipulation and conversion using native `Date` under the hood.
It is implemented in TypeScript and exports its own type definitions.

## Synopsis

```js
import { today, getDay } from "minimal-time-helpers";

const nextBaby = getDay(today()).plus(9).months;
```

## Pure ESM

This package is implemented with ECMAScript modules. CommonJS is not supported, nor bundle is provided.

If you need a bundle, you can do something like.

```sh
git clone git@github.com:fibo/minimal-time-helpers.git
cd minimal-time-helpers
esbuild --bundle src/index.ts --minify --outfile=time.js
```

It will produce a 5.6kb (minified, not gzipped) _time.js_ file.

## License

[MIT](https://fibo.github.io/mit-license)

