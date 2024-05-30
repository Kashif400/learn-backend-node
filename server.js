import express from "express";

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
