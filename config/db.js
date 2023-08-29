const { mongoose } = require("mongoose");

const connectDB = async () => {
    const cann = await mongoose.connect((process.env.MONGO_URI))
    console.log(`MongoDB connected`.cyan.underline)
    // console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
}

module.exports = connectDB