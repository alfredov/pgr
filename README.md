# Dashboard-ui


## Install and running
```bash
$ yarn install
$ yarn playground
```

Then you should open some browser on [localhost:3000](http://localhost:3000)

## Usage
All the UI's component are located in `./components` folder. To document a single component you have to create a `.mdx` file within on it using [docz](https://www.docz.site).

In the case you've created a new `Button` component; the tree folder should be like so:
```
|- Button
  |- index.js
  |- index.mdx
  |- Button.js
```

And with this `index.mdx` content:
```markdown
---
name: Button
---

import { Playground, PropsTable } from 'docz'
import Button from './'

# Button

<PropsTable of={Button} />

## Basic usage

<Playground>
  <Button>Click me</Button>
  <Button kind="secondary">Click me</Button>
</Playground>
```

Further reading about documenting, [here](https://www.docz.site/documentation)
