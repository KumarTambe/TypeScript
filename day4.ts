
let value: number | string;

value = 69;
value = "69"
// value = false;

// console.log(value);

function double(x: number | string): number | string {
    if (typeof x === "number") return x * 2;
    else return x + x;
}

// console.log(double(4))
// console.log(double("ab"))

type Status = "pending" | "shipped" | "delivered"

type Order = { id: number; status: Status };

function nextStatus(s: Status): Status {
    switch (s) {
        case "pending":
            return "shipped";
        case "shipped":
            return "delivered";
        case "delivered":
            return "delivered";
    }
}


