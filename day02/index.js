//creating server
let http = require("http");
const { json } = require("stream/consumers");

let server = http.createServer((req, res) => {
  if ((req.url = "/news")) {
    let obj = {
      status: 1,
      data: [
        {
          id: 1,
          tittle: "Rushi",
          surname: "bhingare",
        },
        {
          id: 2,
          tittle: "http",
          surname: "create server",
        },
      ],
    };
    res.end(JSON.stringify(obj));
  }
  if (req.url == "/about") {
    res.end("about page");
  }
});

server.listen("8000");
