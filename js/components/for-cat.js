'use strict'

import { html, For, createSignal } from "../solid-web/solid-web-new.js"

const CatsLink = () => {
  const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ]);
  
  return html`
    <h2>Another loop using For</h2>
    <p>In this section, I practice how to write syntax literal and For module.</p>
    <ul>
    <${For} each=${cats(setCats)}>
        ${(cat, i) => html`
         <li>
             ${i() + 1}: <a target="_blank" href=${`https://www.youtube.com/watch?v=${cat.id}`}>${cat.name}</a></li>
        `}
        </${For}
    </ul>
  `;
}

export default CatsLink
