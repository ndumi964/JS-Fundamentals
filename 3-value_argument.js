const arg = process.argv[]; // Gets the first user argument (index 2 because [0]=node, [1]=script path

if (arg === undefined)  {
  console.log("No argument");
} else {
  console.log(arg);
}
