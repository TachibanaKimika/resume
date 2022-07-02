import * as ls from '../utils/ls'

import defaultTheme from './github'

export const init = (): void => {
  if (!ls.getStyle('default')) {
    ls.setStyle('default', defaultTheme)
  }
  if (!ls.getContent('default')) {
    ls.setContent('default', `
<style>
aaa
</style>

# h1
## h2
### h3
#### h4

> quote block

this is \`inline code\`

- list item1
- list item2

- [X] checkbox
- [ ] checkbox

<div class="custom">custom div<div>
    `)
  }
}