require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { logger } = require("./src/middleware/logger");
const { errorHandler } = require("./src/middleware/errorHandler");
const cookieParser = require("cookie-parser");
const corsOptions = require("./src/configs/corsOptions");
const app = express();
const port = process.env.PORT || 5000;

app.use(logger);

app.use(cookieParser());

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "src/public")));

app.use("/", require("./src/routes/root"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
