const express = require("express");
const songsRouter = require("./routes/songs");
const statisticsRoutes = require("./routes/statistics");
const cors = require("cors");
const { connect } = require("./middleware/database");

const app = express();

const corsOptions = {
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: ["http://localhost:5173", "http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());

connect();

app.use("/songs", songsRouter);
app.use("/statistics", statisticsRoutes);

app.use("/", async (req, res) => {
  res.send("Wellcome to my Music App, try another routes!");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("\x1b[32m%s\x1b[0m", `Server is running on port ${PORT}`);
});

module.exports = app;
