require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


// app.get('/t',(req,res) => {
//     res.status(200).send({message:"Email Verified Successful"})
// })


// database connection and server start
connection()
  .then(() => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process if the database connection fails
  });
