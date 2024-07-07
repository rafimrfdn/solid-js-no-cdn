'use strict'

import { createSignal, onCleanup, html } from "../solid-web/solid-web-new.js"

const Counter = () => {
  const [count, setCount] = createSignal(0)
  const timer = setInterval(() => setCount(count() + 1), 1000)
  onCleanup(() => clearInterval(timer))
  return html`
<h2>my counter</h2>
<h4>${count}</h4>
`
}

export default Counter
