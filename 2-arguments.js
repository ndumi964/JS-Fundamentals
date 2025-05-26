const args = process.argv.slice(2); //Removes 'node' and script path, keeps only arguments
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Arguments found");
} else {
  console.log("Arguments found");
}
