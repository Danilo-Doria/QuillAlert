// server/src/app.js
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

const app = express();

// Middlewares globales
app.use(cors()); // Para que el frontend se comunique sin problemas de CORS
app.use(express.json()); // Para poder leer req.body en JSON

// Rutas principales de enrutamiento
app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);

export default app;