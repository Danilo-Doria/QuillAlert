import express from 'express';
import { registerUser, loginUser, updateProfile, updatePassword, checkEmail, deleteAccount, getUserById } from '../controllers/auth.controllers.js';

/* express.Router() is an Express class that lets you create modular “mini-apps.”

This allows the app.js file to pass everything that starts with /api/auth to this router */

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Edit profiile route
router.put('/update-profile', updateProfile);

// Check email exists
router.get('/check-email', checkEmail);

// Update password route (Supabase Auth)
router.put('/update-password', updatePassword);

// Delete account
router.delete('/delete-account', deleteAccount); 

// Get user by id
router.get('/users/:id', getUserById);

export default router;