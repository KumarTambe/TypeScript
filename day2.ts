//function

// Q.1 

function multiply(a: number, b: number): number {
    return a * b;
}

// Q.2 

function formatPrice(price: number, curreny = "₹"): string {
    return `${curreny} ${price}`;
}

// console.log(formatPrice(500))
// console.log(formatPrice(500, "$"))

// Q.3

function printTitle(title: string, author?: string): void {
    if (author == undefined) {
        console.log(title);
    } else {
        console.log(`${title} by ${author}`)
    }
}

//objects

let products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 60 },
];

let student: { name: string; marks: number; city?: string; readonly roll: number } = {
    name: "ABC", marks: 10, roll: 15
};

function totalPrice(items: { name: string; price: number }[]): number {
    let sum = 0;
    for (const item of items) {
        sum += item.price;
    }
    return sum;
}

function describe(p: { name: string; price: number; discount?: number }): string {
    if (p.discount == undefined) {
        return `${p.name} : ${p.price}`;
    } else {
        let newPrice: number = p.price - p.discount;
        return `${p.name} : ${newPrice} (discount ${p.discount})`
    }
}