# Vue renderless components

A collection of Vue renderless components.

## Installation

You can install the package via npm:

```bash
npm install vue-renderless-components --save-dev
```

## Usage

You can import all components:

```js
import Vue from 'vue';
import VueRenderlessComponents from 'vue-renderless-components';

Vue.use(VueRenderlessComponents);
```

or only selected ones:

```js
import Vue from 'vue';
import { RenderlessToggler } from 'vue-renderless-components';

Vue.component(RenderlessToggler);
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
