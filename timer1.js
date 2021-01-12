const args = process.argv.splice(2); 
let boxOfTime = 0;

for(let beeps of args) {
  if(beeps > 0) {
    setTimeout(() => {
      process.stdout.write('.')
    }, boxOfTime += (beeps * 1000))
  }
};