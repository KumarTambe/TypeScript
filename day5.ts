type Post = { title: string }
type timeStamps = { createdAt: string }

type SavedPost = Post & timeStamps

let sp: SavedPost = { title: "ABC", createdAt: "Today" }

enum Direction { Up = "UP", Down = "DOWN", Left = "LEFT", Right = "RIGHT" }

function move(d: Direction): string {
    return `Moving ${d}`;
}

console.log(move(Direction.Up))

enum Level { Low, Medium, High }

console.log(Level.High);
console.log(Level[1])