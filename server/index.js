import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import couponRoutes from './routes/couponRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// CORS Configuration
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true 
}));

app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.DB)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('DB Connection Error:', err));

app.use('/api/coupons', couponRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
