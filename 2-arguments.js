const args = process.argv.slice(2); // Keeps only command line arguments

if (args.length === 0) {
  console.log("No argument");
} else {
  console.log("Argument 1:", args[0]);
}
const args = process.argv.slice(2); //Removes 'node' and script path, keeps only arguments


