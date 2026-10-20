type Book = { title: string; price: number; inStock?: boolean }

const catalog: Book[] = [
    { title: "Dune", price: 350 },
    { title: "Clean Code", price: 450, inStock: true },
];

function cheapest(books: Book[]): Book {
    return books.reduce((minBook, currentBook) => currentBook.price < minBook.price ? currentBook : minBook)
}

interface Person { name: string; readonly id: number }
interface Student extends Person { marks: number }

let newStudent: Student = {
    name: "ABC",
    id: 10,
    marks: 50
}

console.log(`${newStudent.name} has ${newStudent.marks}`)


type Point = {
    x: number;
    y: number;
};

function distanceFromOrigin(p: Point): number {
    return Math.sqrt(p.x * p.x + p.y * p.y);
}

console.log(distanceFromOrigin({ x: 3, y: 4 })); 
