const express = require("express");
const cors = require("cors");
const path = require("path");

const router = require("./src/routes");

const { json, urlencoded } = express;
const app = express();
const port = process.env.PORT || 2000;

app.use(json());
app.use(urlencoded({ extended: false }));

const corsOption = {
  origin: "*",
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));

app.use(router);

app.use("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/html/index.html"));
});

app.use("/", (req, res) => {
  res.send("this is the microservice 1 and version v1.0.0");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});