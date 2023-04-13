// utils/dbConnect.js
import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
        return;
    }
      
      await mongoose.connect( process.env.MONGODB_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Base de datos Operativa');
  } catch (error) {
    console.log("🚀 ~ file: dbConnect.js:21 ~ dbConnect ~ error:", error)
    
  }
};

export default dbConnect;
