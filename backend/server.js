const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
    const users = [
        {
            id: 1,
            username: "John",
            email: "john@email.com",
            phone: "12345678900",
            address: "Rua 1, 123",
        }, 
        {
            id: 2,
            username: "Carl",
            email: "carl@email.com",
            phone: "12345678900",
            address: "Rua 1, 123",
        }
    ]

    res.json(users);
})

app.get("/user", (req, res) => {
    const user = {
        id: 1,
        username: "John",
        email: "john@email.com",
        password: "1234",
        cpf: "12345678900",
        phone: "12345678900",
        address: "Rua 1, 123",
    }
    res.json(user);
})

app.get("/me/user", (req, res) => {
    const user = {
        id: 1,
        username: "John",
        email: "john@email.com",
        cpf: "12345678900",
        phone: "12345678900",
        address: "Rua 1, 123",
    }
    res.json(user);
})

app.post("/user", (req, res) => {
    const user = req.body;

    res.json(user);
})

app.put("/user/:id", (req, res) => {
    const user = req.body;

    res.json(user);
})

app.patch("/user/:id", (req, res) => {
    const user = req.body;

    res.json(user);
})


app.delete("/user/:id", (req, res) => {
    const user = req.body;
    res.json(user);
})

app.get("/product", (req, res) => {
    const product = {
        id: 1,
        name: "Product 1",
        description: "Description 1",
        price: 10.00,
        quantity: 10,
    }

    res.json(product);
})

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Description 1",
            price: 10.00,
            quantity: 10,
        }, 
        {
            id: 2,
            name: "Product 2",
            description: "Description 2",
            price: 20.00,
            quantity: 20,
        }
    ]

    res.json(products);
})

app.post("/product", (req, res) => {
    const product = req.body;

    res.json({...product, cnpj: "12345678900"});
})

app.patch("/product/:id", (req, res) => {
    const product = req.body;

    res.json(product);
})

app.put("/product/:id", (req, res) => {
    const product = req.body;

    res.json(product);
})

app.delete("/product/:id", (req, res) => {
    const product = req.body;

    res.json(product);
})

app.listen(4000, () => {
    console.log('Server has started on port 4000');
})