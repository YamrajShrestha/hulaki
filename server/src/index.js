const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;

const cors = require("cors");
const connection = require("./db/connection");
const userRoute = require("./routes/user");
console.log(process.env.SECRET_KEY);

app.use(express.json());
app.use(cors());
app.use(userRoute);
connection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
