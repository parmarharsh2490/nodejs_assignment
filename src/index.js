import dotenv from "dotenv";
dotenv.config();
import { connectDB } from './DB/index.js';
import app from './app.js';

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000; 
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); 
});
