import { supabase } from '../config/supabaseClient.js';

const endpoint = "http://localhost:3000/api/reports";

export const consultAllReports = async (userId) => {
    const url = userId ? `${endpoint}?userId=${userId}` : `${endpoint}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) throw new Error("Failed to consult reports");
        return data;
    } catch (error) {
        console.error("Error en consultAllReports:", error);
        throw error;
    }
}

export const consultReportById = async (id) => {

    const url = `${endpoint}/${id}`; 
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to consult report");
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const createReports = async (report) => {
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(report),
        });
        if (!response.ok) {
            throw new Error("Failed to create report");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateReports = async (id, report) => {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(report),
        });
        if (!response.ok) {
            throw new Error("Failed to update report");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateStatusReports = async (id, status) => {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        });
        if (!response.ok) {
            throw new Error("Failed to update report");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteReports = async (id) => {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error("Failed to delete report");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const uploadReportPhoto = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    
    const filePath = `${fileName}`; 

    const { data, error } = await supabase.storage
        .from('report_images')
        .upload(filePath, file);

    if (error) {
        throw new Error(`Error al subir la imagen: ${error.message}`);
    }

    const { data: publicUrlData } = supabase.storage
        .from('report_images')
        .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
};