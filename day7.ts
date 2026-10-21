
function last<T>(arr: T[]): T {
    let length = arr.length
    // return arr[length - 1];
}

type ApiResponse<T> = { success: boolean; data: T }

let list: ApiResponse<string[]> = { success: true, data: ["A", "B"] }

// utility tpes and constraints

type User = { id: number; name: string; email: string; age: number };

type UserUpdate = Partial<User>;                // every field optional
type UserPreview = Pick<User, "id" | "name">;   // only id and name
type UserNoEmail = Omit<User, "email">;         // everything except email
type Stock = Record<string, number>;            // any text key, number value
const s: Stock = { pen: 10, book: 5 };
const locked: Readonly<User> = { id: 1, name: "A", email: "a@x.com", age: 20 };
// locked.age = 21;                                // ERROR: read-only

function getId<T extends { id: number }>(item: T): number {
    //
}
getId({ id: 1, name: "x" });    // ok
// getId({ name: "x" });           // ERROR: no id

function updateUser(user: User, changes: Partial<User>): User {
    return { ...user, ...changes }
}

type UserCard = Pick<User, "name" | "email">
type NewUser = Omit<User, "id">
