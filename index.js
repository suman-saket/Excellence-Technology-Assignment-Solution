const express = require("express");
const app = express();
const port = 5555;
const mongoose = require("mongoose");

//local Database connection
mongoose
  .connect("mongodb://localhost:27017/Excellence-Tech-DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connection established to Mongodb"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use(require("./routes/candidate.js"));

//Server Running on predefined port
app.listen(port, () => {
  console.log(`Server is connected to ${port}`);
});
