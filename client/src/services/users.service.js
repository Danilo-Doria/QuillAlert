const AUTH_API = "https://quillalert.onrender.com/api/auth";
const USERS_API = "https://quillalert.onrender.com/api/users";

// Register
export const createUser = async (user) => {
    try {
        const response = await fetch(`${AUTH_API}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to create user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Login
export const verifyUser = async (email, password) => {
    try {
        const response = await fetch(`${AUTH_API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to verify user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const response = await fetch(`${AUTH_API}/users/${id}`);
        if (!response.ok) {
            throw new Error("Failed to get user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Update profile

export const updateUser = async (id, updatedUser) => {
    try {
        const response = await fetch(`${AUTH_API}/update-profile`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: updatedUser.name,
                lastName: updatedUser.lastName
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to update user");
        }
        return await response.json();
    } catch (error) {
        console.error("Error en el servicio de actualización:", error);
        throw error;
    }
};

// Update password (Supabase Auth)
export const updatePassword = async (newPassword, token) => {
    try {
        const response = await fetch(`${AUTH_API}/update-password`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ newPassword }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to update password");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al actualizar la contraseña:", error);
        throw error;
    }
};

// Check user Email

export const checkEmailExists = async (email) => {
    try {
        const response = await fetch(`${AUTH_API}/check-email?email=${encodeURIComponent(email)}`);

        if (!response.ok) {
            throw new Error("Error en la petición");
        }

        const data = await response.json();

        return data.exists; // Devuelve true o false

    } catch (error) {
        console.error(error);
        return false;
    }
};

// Delete account (Supabase Auth)
export const removeUser = async (token) => {
    try {
        const response = await fetch(`${AUTH_API}/delete-account`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to remove user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};