const mongoose = require('mongoose');
const { config } = require('dotenv');

config()
// Connect to MongoDB
export const connectToMongoDB = () => {
    if (process.env.MONGODB_KEY) {

        mongoose.connect(process.env.MONGODB_KEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }).then(() => console.log('MongoDB connected'))
            .catch(err => console.log(err))   
    } else {
        console.log('No MONGODB KEY FOUND PLEAS ADD IT TO YOUR PATH VARIABLE, USING "MONGODB_KEY"');
    }
}