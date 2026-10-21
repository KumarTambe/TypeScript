import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())

type Book = { id: number, title: string, price: number };
const books: Book[] = [
    { id: 1, title: "Dune", price: 350 },
    { id: 2, title: "Clean Code", price: 450 }
]

app.get('/books/price/:max', (req: Request, res: Response) => {
    const result = books.filter((b) => b.price <= Number(req.params.max))
    res.status(200).json(result);
})

app.get('/search', (req: Request, res: Response) => {
    const input = req.query.title
    if (typeof input !== "string") {
        res.status(400).json({ message: "Title req" })
        return;
    }
    const result = books.find((b) => b.title.toLowerCase().includes(input.toLowerCase()))
})