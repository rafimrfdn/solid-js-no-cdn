'use strict'

import { html } from "../solid-web/solid-web-new.js"
import Header from "./header.js"
import Counter from "./counter.js"
import ForComp from "./for.js"
import MyUser from "./fetch.js"
import FetchPost from "./fetchpost.js"
import CounterButton from "./counter-button.js"
import CatsLink from "./for-cat.js"

const App = () => {
  return html`
    <${Header} />
    <hr/>
    <${Counter} />
    <hr/>
    <${CounterButton} />
    <hr/>
    <${ForComp} />
    <hr/>
    <${CatsLink} />
    <hr/>
    <${MyUser} />
    <hr/>
    <${FetchPost} />
    `
}

export default App
