require("express")()
  .get("/", (req, res, next) => {
    console.log("request received", Date.now())
    res.send("hey world")
  })
  .listen(3000)
