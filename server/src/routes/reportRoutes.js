import { Router } from 'express';
import { getAllReports, createReport, updateReport, updateStatus, deleteReport } from '../controllers/report.controllers.js';

const router = Router();

router.get('/', getAllReports);          // Maneja GET /reports y /reports?userId=...
router.post('/', createReport);          // Maneja POST /reports
router.put('/:id', updateReport);        // Maneja PUT /reports/:id
router.patch('/:id', updateStatus);      // Maneja PATCH /reports/:id
router.delete('/:id', deleteReport);     // Maneja DELETE /reports/:id

export default router;