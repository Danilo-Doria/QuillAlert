import { Router } from 'express';
import { getAllReports, createReport, updateReport, updateStatus, deleteReport } from '../controllers/report.controllers.js';

const router = Router();

router.get('/', getAllReports);          // Handles GET requests
router.post('/', createReport);          // Handles POST requests
router.put('/:id', updateReport);        // Handles PUT requests
router.patch('/:id', updateStatus);      // Handles PATCH requests
router.delete('/:id', deleteReport);     // Handles DELETE requests

export default router;