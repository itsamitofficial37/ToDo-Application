const express = require("express");
const dbConnect = require("./config/dataBase");
const todoRoutes = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.use("/api/todos", todoRoutes); // Prefix routes with /api/todos

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
