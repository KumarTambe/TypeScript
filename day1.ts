// let username = "asha";
// let marks = 82;
// let passed = true;

// marks = 89;
// passed = false;
// console.log(username.toUpperCase());
// console.log(username.toUpperCase());

let prices = [450, 300, 250, 500];
let titles = ["Clean Code", "Dune"];
let input: unknown = 42;

prices.push(350);
titles.push("Atomic Habits");

// prices.push("350");
// titles.push(150);

let total: number = 0

for (const item of prices) {
    total += item;
}


if (typeof input === 'number') {
    console.log(input * 2)
}


