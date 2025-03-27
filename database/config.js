const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log("✅ Connected to Trekking Database");
    } catch (error) {
        console.error("❌ Something went wrong:", error.message);
        process.exit(1); // Salir del proceso si la conexión falla
    }
};

module.exports = dbConnect;
