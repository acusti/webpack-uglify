const purifyCSS = require('purify-css');

console.log(
    purifyCSS(
    `
    <div class="foo">

    </div>`,
    `
    .foo {
        background-color: red;
    }
    .bar {
        color: pink;
    }`
    )
);