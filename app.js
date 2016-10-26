require("express")()
  .get("/", (req, res, next) => {
    res.send("hey world")
  })
  .listen(3000)
