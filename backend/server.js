const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const { errorHandler } = require("./middlewares/errorMiddleware");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

const cors = require("cors");

const corsOptions = {
  exposedHeaders: "Authorization",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/records", require("./routes/recordsRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
