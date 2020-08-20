const http = require("http");

const hostname = "127.0.0.1";
const port = 80;

const path = require("path");
const express = require("express");
const app = express();

app.use("/public", express.static("public"));
app.use(express.urlencoded({
  extended: true
}));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const con = " This is the the website for college";
  const params = {
    title: "Webstie",
    content: con
  };
  res.status(200).render("home.pug", params);
});

app.get('/newsandevent', (req, res) => {
  const params = {};
  res.status(200).render("newsandevent.pug", params)
})

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});