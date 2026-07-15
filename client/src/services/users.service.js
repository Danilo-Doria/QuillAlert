import { supabase } from '../config/supabase.client.js';
import { SupabaseCRUD } from './supabase.service.js';
import { ROLES } from '../types/roles.js';

export const createUser = async (user) => {
    try {
        const roles = await SupabaseCRUD.read('roles', 1, 10, { name: ROLES.CIUDADANO });
        const rol_default = roles && roles.datos && roles.datos[0] ? roles.datos[0].id : null;
        if (rol_default) user.role_id = rol_default;

        const created = await SupabaseCRUD.create('users', user);
        return Array.isArray(created) ? created[0] : created;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * verifyUser(email, password?)
 * - If only email provided: returns the user object if exists, otherwise false
 * - If email and password provided: returns the user object when credentials match, otherwise false
 */
export const verifyUser = async (email, password = null) => {
    try {
        const resp = await SupabaseCRUD.read('users', 1, 1, { email });
        const users = resp && resp.datos ? resp.datos : [];
        if (!users || users.length === 0) return false;

        const user = users[0];
        if (password !== null) {
            return user.password === password ? user : false;
        }
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateUser = async (id, nuevosDatos) => {
    try {
        const updated = await SupabaseCRUD.update('users', { id }, nuevosDatos);
        return Array.isArray(updated) ? updated[0] : updated;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const removeUser = async (id) => {
    try {
        const deleted = await SupabaseCRUD.delete('users', { id });
        return deleted;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

