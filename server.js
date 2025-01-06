const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

//POST http://localhost:3030/concat
app.post("/concat", async (req, res) => {
	const { variableA, variableB } = req.body;
	try {
		var resultVar = variableA + variableB;
		res.status(200).json({
			success: true,
			result: resultVar,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
