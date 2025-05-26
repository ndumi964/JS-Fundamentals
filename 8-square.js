const size = math.floor(Number(process.argv[2]));

if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    let i = 0;
    const row = Array(size + 1).join("x");
    while (i < size) {
        console.log(row);
        i++;
    }
}
