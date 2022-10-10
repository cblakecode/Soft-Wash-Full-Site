require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { logger, logEvents } = require("./src/middleware/logger");
const { errorHandler } = require("./src/middleware/errorHandler");
const cookieParser = require("cookie-parser");
const corsOptions = require("./src/configs/corsOptions");
const connectDB = require("./src/configs/dbConn");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(logger);

app.use(cookieParser());

app.use(cors(corsOptions));

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "src/public")));

app.use("/", require("./src/routes/root"));
app.use("/auth", require("./src/routes/authRoute"));
app.use("/members", require("./src/routes/membersRoute"));

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

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Listening on port ${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
