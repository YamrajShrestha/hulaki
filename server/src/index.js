const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

const cors = require("cors");
const connection = require("./db/connection");
const userRoute = require("./routes/user");
console.log(process.env.SECRET_KEY); // remove this after you've confirmed it is working

app.use(express.json());
app.use(cors());
app.use(userRoute);
connection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
