function greet(name: string): string {
    return `Hello ${name}`;
}

const name = prompt("What is your name?");
console.log(greet(name || "world"));