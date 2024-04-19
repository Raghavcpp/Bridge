const dotenv = require("dotenv");
dotenv.config({ path: "./backend/config/config.env" });
const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const configDb = require("./config/db");
const morgan = require("morgan")
const fileUpload = require('express-fileupload')
const path = require('path')
configDb();

const PORT = process.env.PORT;

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json())
app.use(cookieParser())
app.use(morgan("tiny"));
app.use(
	fileUpload({
		useTempFiles: true,
	})
)
// var distDir = __dirname + "/dist/";
// app.use(express.static(distDir));
app.use('/api/admin', require('./routes/adminRouter'));
app.use('/api/seeder', require('./routes/seedRouter'));
app.use('/api/user', require('./routes/userRouter'));
app.use('/api', require('./routes/projectRouter'));
app.use('/api', require('./routes/reviewRouter'));
app.use('/api', require('./routes/upload'))

// __dirname = path.resolve();

// if(process.env.NODE_ENV === 'production'){

app.use(express.static(path.resolve("./frontend/build")));

app.get("*", (req, res) => {
	res.sendFile(path.resolve("./frontend/build/index.html"));
});
// }
// else{

// app.get("/", (req, res) => {
// 	res.status(200).send("Api is running!");
//   });
// }


app.listen(process.env.PORT, console.log(`Server is running on port ${PORT}`));
