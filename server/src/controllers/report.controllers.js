import { supabase } from '../config/supabaseClient.js';

export const getAllReports = async (req, res) => {
    try {
        // Id para cpnsulta filtrada
        const { userId } = req.query;
        // Consulta base
        let query = supabase.from('reports').select('*');
        
        if (userId) {
            query = query.eq('user_id', userId);
        }
        
        const { data, error } = await query;

        console.log("Dato que enviaré al frontend:", data);

        if (error) {
            console.error("Error detallado de Supabase:", error);
            return res.status(500).json({ error: error.message });
        }

        return res.json(data);
        
    } catch (err) {
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

// POST
export const createReport = async (req, res) => {
    // req.body ahora trae los nombres exactos: title, description, image_url, etc.
    const { data, error } = await supabase
        .from('reports')
        .insert([req.body]); // Como el objeto ya tiene los nombres de columna se inserta directo

    if (error) return res.status(500).json({ error: error.message });
    res.status(201).json(data);
};

// PUT
export const updateReport = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('reports').update(req.body).eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// PATCH
export const updateStatus = async (req, res) => {    
    const { id } = req.params;
    const { status } = req.body;
    const { data, error } = await supabase.from('reports').update({ status }).eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
};

// DELETE
export const deleteReport = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('reports').delete().eq('id', id);
    if (error) return res.status(500).json({ error: error.message });
    res.json({ message: "Reporte eliminado" });
};