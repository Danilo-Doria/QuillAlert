import { supabase } from '../config/supabase.client.js';
import { SupabaseCRUD } from './supabase.service.js';


const TABLE = "reports";


export const createReports = async (reports) => {
    const response = await SupabaseCRUD.create(
        TABLE,
        reports
    );

    return response[0];
};



export const consultAllReports = async (userId = null) => {

    const filtro = userId
        ? { userId }
        : null;


    const response = await SupabaseCRUD.read(
        TABLE,
        1,
        100,
        filtro
    );


    return response.datos;
};


export const consultAllReportsById = async (id) => {

    const response = await SupabaseCRUD.read(
        TABLE,
        1,
        1,
        {
            id
        }
    );


    return response.datos[0] || null;
};


export const updateReports = async (id, reports) => {

    const response = await SupabaseCRUD.update(
        TABLE,
        {
            id
        },
        reports
    );


    return response[0];
};


export const updateStatusReports = async (id, status) => {

    const response = await SupabaseCRUD.update(
        TABLE,
        {
            id
        },
        {
            status
        }
    );


    return response[0];
};


export const deleteReports = async (id) => {

    const response = await SupabaseCRUD.delete(
        TABLE,
        {
            id
        }
    );


    return response[0];
};