import { parse } from "https://deno.land/std@0.190.0/flags/mod.ts";

const { encode, decode, help } = parse(Deno.args, {
  boolean: ["encode", "decode", "help"],
  alias: { e: "encode", d: "decode", h: "help" },
});

if (help) {
    console.log("Usage: base64_cli [options] <text>");
    console.log("\nOptions:");
    console.log("  -e, --encode    Encode the provided text to Base64");
    console.log("  -d, --decode    Decode the provided Base64 text to plain text");
    console.log("  -h, --help      Show this help message");
    Deno.exit(0);

}

const text = Deno.args[Deno.args.length - 1];

if(encode){
    const encoded = btoa(text);
    console.log(encoded)
}else if(decode){
    const decoded = atob(text);
    console.log(decoded)
}else{
    console.log("please specify either --encode or --decode");
    Deno.exit(1);
}
