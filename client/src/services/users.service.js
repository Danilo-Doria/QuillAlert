const endpoint = "http://localhost:3000/users";

export const createUser = async (user) => {
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Failed to create user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const verifyUser = async (email, password) => {

    const url = password ? `${endpoint}?email=${email}&password=${password}` : `${endpoint}?email=${email}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to verify user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateUser = async (id, updatedUser) => {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        });
        if (!response.ok) {
            throw new Error("Failed to update user");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

