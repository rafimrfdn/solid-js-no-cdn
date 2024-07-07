'use strict'

import { createSignal, createEffect, html } from "../solid-web/solid-web-new.js"


// const CounterButton = () => {
//       // Create a signal to hold the counter value
//       const [count, setCount] = createSignal(0);
//
//       // Function to increment the counter
//       const increment = () => setCount(count() + 1);
//
//       // Function to decrement the counter
//       const decrement = () => setCount(count() - 1);
//
//       return html`
//         <div>
//           <h2>Count: ${count}</h2>
//             <p>click button to count</p>
//           <button onClick=${increment}>Increment</button>
//           <button onClick=${decrement}>Decrement</button>
//         </div>
//       `;
// }

const CounterButton = () => {
  const [count, setCount] = createSignal(0);
      const increment = () => setCount(count() + 1);
      const decrement = () => setCount(count() - 1);

  createEffect(() => { console.log("The count is now", count()); });

  return html`
         <div>
           <h2>Count: ${count}</h2>

            <button onClick=${() => setCount(count() + 1)}>Click with createEffect ${count}</button>

             <p>click button to count</p>
           <button onClick=${increment}>Increment</button>
           <button onClick=${decrement}>Decrement</button>
         </div>
    `
}

export default CounterButton
