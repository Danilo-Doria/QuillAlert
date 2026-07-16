// src/routes/authRoutes.js
import express from 'express';
// Cambia esto:
import { registerUser, loginUser, updateProfile, updatePassword, checkEmail, deleteAccount } from '../controllers/auth.controllers.js';

/* express.Router() es una clase de Express que te permite crear "mini-aplicaciones" modulares. 
Esto permite que el archivo app.js simplemente diga "todo lo que empiece por 
/api/auth pásaselo a este router". */

const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Edit profiile route
router.put('/update-profile', updateProfile);

// Check email exists
router.get('/check-email', checkEmail);

// Update password route (Supabase Auth)
router.put('/update-password', updatePassword);

// Delete account
router.delete('/delete-account', deleteAccount); 

export default router;