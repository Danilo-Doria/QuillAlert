// server/src/app.js
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

const app = express();

// Global Middlewares
app.use(cors()); // Avoid CORS problems with frontend
app.use(express.json()); // To read req.body in JSON

// Main routing paths
app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);

export default app;