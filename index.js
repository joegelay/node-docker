const app = require("express")();

app.get("/", (request, response) => {
  response.json({ message: "Hi! I'm a node app!" });
});

app.listen(4000);
