'use strict'

import { createSignal, createResource, html } from "../solid-web/solid-web-new.js"

const FetchUser = async (id) =>
      (await fetch(`https://swapi.dev/api/people/${id}/`)).json();

const MyUser = () => {
  const [userId, setUserId] = createSignal();
  const [user] = createResource(userId, FetchUser);

//   wrong syntax, it should be like this: ${() => }
//
//   return html `
// <>
//       <input
//         type="number"
//         min="1"
//         placeholder="Enter Numeric Id"
//         onInput=${(e) => setUserId(e.currentTarget.value)}
//       />
//       <span>${user.loading && "Loading..."}</span>
//       <div>
//         <pre>${JSON.stringify(user(), null, 2)}</pre>
//       </div>
// </>
//   `;

    return html`
        <div>
            <h2>Fetch data using createResource module</h2>
          <input
            type="number"
            min="1"
            placeholder="Enter Numeric Id"
            onInput=${(e) => setUserId(e.currentTarget.value)}
          />
          <span>${user.loading && "Loading..."}</span>
          <div>
            <pre>${() => JSON.stringify(user(), null, 2)}</pre>
          </div>
        </div>
      `;
};

export default MyUser
