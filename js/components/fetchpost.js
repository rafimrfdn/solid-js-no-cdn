'use strict'


import { createResource, createSignal, For, html } from "../solid-web/solid-web-new.js"

const fetchPosts = async () => (await fetch('https://jsonplaceholder.typicode.com/posts')).json();


    const FetchPost = () => {
      const [posts] = createResource(fetchPosts);

      // return html`
      //   <div>
      //     <ul>
      //       ${() => {
      //         if (posts.loading) {
      //           return html`<li>Loading...</li>`;
      //         } else if (posts.error) {
      //           return html`<li>Error: ${posts.error.message}</li>`;
      //         } else {
      //           return html`
      //             <${For} each=${posts()} fallback=${html`<li>Loading...</li>`}>
      //               ${(post) => html`<li key=${post.id}>${post.title}</li>`}
      //             </${For}
      //           `;
      //         }
      //       }}
      //     </ul>
      //   </div>
      // `;
    
      return html`
        <div>
            ${() => {
              if (posts.loading) {
                return html`<li>Loading...</li>`;
              } else if (posts.error) {
                return html`<li>Error: ${posts.error.message}</li>`;
              } else {
                return html`
                    <${For} each=${posts()} fallback=${html`<li>Loading...</li>`}>
                    ${(post) => html`
                    <h2>${post.id}. ${post.title}</h2>
                    <p>${post.body}</p>`}
                    </${For}
                `;
              }
            }}
        </div>
      `;
    };


export default FetchPost
