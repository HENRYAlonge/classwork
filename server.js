// const express = require("express");
// const app = express();

// app.use(express.json());

// let products = [];
// let nextId = 1;

// // Create a product
// app.post("/products", (req, res) => {
//   const { name, price, category, quantity } = req.body;

//   if (!name || price === undefined || !category || quantity === undefined) {
//     return res.status(400).json({ message: "name, price, category and quantity are required" });
//   }

//   const product = { id: nextId++, name, price, category, quantity };
//   products.push(product);
//   res.status(201).json(product);
// });

// // Read all products
// app.get("/products", (req, res) => {
//   res.json(products);
// });

// // Read a single product
// app.get("/products/:id", (req, res) => {
//   const product = products.find((p) => p.id === Number(req.params.id));

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   res.json(product);
// });

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
