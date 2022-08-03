const mongoose = require("mongoose");

async function connectDB() {
	const URI =
		"mongodb+srv://server_admin:QRY2MYULDO3pGAfu@mauroserver.mm4wif1.mongodb.net/?retryWrites=true&w=majority";
	try {
		await mongoose.connect(URI);
		console.log("Connected to mongoDB");
	} catch (error) {
		console.log("Failed to connect to MongoDB", error);

		process.exit(1);
	}
}

connectDB();
