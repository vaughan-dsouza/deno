// import { copy } from "https://deno.land/std@0.224.0/fs/copy.ts";

// await copy("./foo", "./bar");


// import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";

// const app = new Application();
// app.use((ctx) => {
//     ctx.response.body = "hello form Oak in Deno";

// });

// await app.listen({ port: 8000});


// import { parse } from "https://deno.land/std@0.190.0/flags/mod.ts";

// const args = parse(Deno.args);
// console.log(args);


// import cowsay from "npm:cowsay@1.5.0";

// console.log(cowsay.say({ text: "Moo from npm in Deno"}));


// import { join } from "jsr:@std/path@0.213";

// console.log(join("usr", "local", "bin"));


import dayjs from "dayjs";

console.log(dayjs().format("YYYY-MM-DD"));