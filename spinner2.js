
process.stdout.write('hello from spinner... \rheyyy\n');
let x = 80;

let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

for (const r of spinner) {
  setTimeout(() => {
    process.stdout.write(r);
  }, x)
  x += 200;
}