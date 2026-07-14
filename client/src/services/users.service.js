import { supabase } from '../config/supabase.client.js';
import {SupabaseCRUD} from '../services/supabase.service.js';
import { ROLES } from '../types/roles.js';


const endpoint = "http://localhost:3000/users";

export const createUser = async (user) => {
    try {

        const roles = await SupabaseCRUD.read("roles",1,10,{"name":ROLES.CIUDADANO})
        console.log(roles)
        const rol_default = roles.datos[0].id
        user.role_id= rol_default
        return SupabaseCRUD.create("users",user)
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const verifyUser = async (email, password) => {

    try {
        const userRead = (await SupabaseCRUD.read("users",1,10,{"email":email})).datos
        if(userRead.lenght==0){
            return false
        }
        else if (userRead[0].password != password){
            return false
        }else{
            return userRead[0]
            //entra el usuario
        }
    
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateUser = async (name, last_name, email) => {
    try {
        const updateInfoUser = (await SupabaseCRUD.update("users", "email" ,{"name":name,"last_name":last_name,"email":email})).datos
        let query = supabase
        .from("users")
        .update({"name":name,"last_name":last_name,"email":email})

        Object.entries(filtro).forEach(([columna, valor]) => {
        query = query.eq(columna, valor);
    });

    const { data, error } = await query.select();

    if (error) throw error;
    return data;
    //sigue  guiandote de supabase.service
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const removeUser = async (id) => {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error("Failed to remove user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

