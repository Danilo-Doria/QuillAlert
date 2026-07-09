const url = "http://localhost:3000/users";

export const createUser = async (user) => {
    try {
        const response = await fetch(url, {
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

