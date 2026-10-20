function shout(s: string | null): string {
    if (s == null) return "NOTHING"
    else return s.toUpperCase()
}

type User = { name: string; address?: { city: string } };
const users: User[] = [
    { name: "Asha", address: { city: "Pune" } },
    { name: "Ravi" },
];

function printCity(u: User[]): void {
    for (const user of u) {
        console.log(user.address?.city ?? "NOTHING");
    }
}

// narrowing and discriminated unions

type ApiResult =
    | { status: "success"; data: string[] }
    | { status: "error"; message: string };

const ok: ApiResult = { status: "success", data: ["Dune", "Clean Code"] };
const bad: ApiResult = { status: "error", message: "Not found" };

function handle(r: ApiResult): string {
    if (r.status == "error") {
        return `Error :${r.message}`
    } else {
        return r.data.join(", ")
    }
}

type Circle = { kind: "circle"; radius: number }
type Rect = { kind: "rect"; width: number; height: number }
type Shape = Circle | Rect

function area(s: Shape): number {
    if (s.kind === "circle") return Math.PI * s.radius * s.radius;
    else return s.width * s.height;
}