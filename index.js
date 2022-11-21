// console.log("Full Stack App");
// Web Request
// GET      => Requesting Information
// POST     => Add to Database
// PUT      =>  Edit to Database
// Delete  => Delete to Databs
// Express

const express = require("express");
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello From Hitesh Sir</h1>");
//   res.status(200).send("Hello From Hitesh Sir");
// });

// app.get("/insta", (req, res) => {
//   const insta = {
//     userName: "hiteshchoudharyoffical",
//     followers: 70,
//     follow: 200,
//   };
//   res.status(200).json({ insta });
// });

// app.get("/v1/twitter", (req, res) => {
//   const twitter = {
//     userName: "hiteshdotcom",
//     followrs: 70,
//     follows: 50,
//   };
//   res.status(200).json({ twitter });
// });

// app.get("/api/v1/:token", (req, res) => {
//   console.log(req.params.token);
//   res.status(200).json({ param: req.params.token });
// });

// app.listen(PORT, () => {
//   console.log("Server is Running");
// });


console.log("Calling app.listen().");

var server = app.listen(3000, function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
  console.log('Example app listening at http://%s:%s', host, port);
});

console.log("app.listen() executed.");