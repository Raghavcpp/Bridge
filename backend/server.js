const dotenv = require("dotenv");
dotenv.config({ path: "./backend/config/config.env" });

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const configDb = require("./config/db");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

configDb();

const app = express();

// Middleware
app.use(cors({ origin: "https://bridge-communication.onrender.com", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(fileUpload({ useTempFiles: true }));

// API routes
app.use("/api/admin", require("./routes/adminRouter"));
app.use("/api/seeder", require("./routes/seedRouter"));
app.use("/api/user", require("./routes/userRouter"));
app.use("/api", require("./routes/problemRouter"));
app.use("/api", require("./routes/reviewRouter"));
app.use("/api", require("./routes/upload"));

// Health check route
app.get("/", (req, res) => {
	res.status(200).send("Backend API is running 🎉");
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
