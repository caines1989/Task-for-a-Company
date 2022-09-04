require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const statisticsRoutes = require("./routes/statistics");

const app = express();

//middeware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/statistics", statisticsRoutes);

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    app.listen(process.env.PORT, () => {
      console.log("connected to DB listening on port", process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
