Inspired with this repo https://github.com/yangzhaox/solid-web

Now I create SolidJS to run locally without install it and no CDN.

# solid-web.js

> [solid.js](https://www.solidjs.com/) is a truly reactive UI library, similiar to React but better. 
> [solid-web.js](https://raw.githubusercontent.com/rafimrfdn/solid-js-no-cdn/main/js/solid-web/solid-web-new.js) is an attempt to show how to use solid.js with NO build and NO cdn.

- Do you want to try out solid.js? 
- Do you want to quickly test it out without learning all the complicated toolchain?
- Do you wish to NOT use any CDN so your app is self sufficient?

## Run locally?

- clone this repo
- npx serve
- visit http://localhost:3000

## The hard part

It is tricky to write javascript code using Solid with this repo, because we have to understand how to write it in `javascript literal syntax`.

```js
${() => {
    return html`
<p>halo</p>
`
}}
```

Do not return empty html tag like JSX do `<>`

If you are confused, just ask ChatGPT to fix your code.

## More info

- this is based on solid.js v1.8.18
- initial code (/js/solid-js) is downloaded from https://unpkg.com/solid-js

## License

- MIT License
