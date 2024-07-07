'use strict'

import { html, For, createSignal } from "../solid-web/solid-web-new.js"

const initialPeople = [
  {
    name: "Amy",
    age: 15,
  },
  {
    name: "Bob",
    age: 25,
  },
  {
    name: "Charlee",
    age: 20,
  },
];

const ForComp = () => {

    const [people] = createSignal(initialPeople);
    // return html`
    //     <div>
    //         <h2>Listing using For function</h2>
    //         <ul>
    //             ${For({
    //             each: people(),
    //             children: (person, index) => html`
    //             <li>${index() + 1}. ${person.name} - Age: ${person.age}</li>
    //             `,
    //             })}
    //         </ul>
    //     </div>
    //     `;

    return html`
        <div>
            <h2>Listing using For function</h2>
            <ul>
                ${For({
                each: people(),
                children: (person) => html`
                <li>${person.name} - Age: ${person.age}</li>
                `,
                })}
            </ul>
        </div>
        `;
};

export default ForComp
