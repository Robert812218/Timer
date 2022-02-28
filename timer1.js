
let inp = process.argv.slice(2);

const timer = (input) => {

  for (const i of input) {
    let timed = Number(i);
    setTimeout(() => {
      console.log("Beep");
      process.stdout.write('\x07');
    }, timed * 1000)
  }
}

timer(inp);