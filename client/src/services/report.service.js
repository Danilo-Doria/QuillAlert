const endpoint = "http://localhost:3000/reports";

export const consultAllReports = async (userId) => {
    const url = userId ? `${endpoint}?userId=${userId}` : `${endpoint}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to consult reports");
        }
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

export const updateReports = async (report) => {
    try {
        const response = await fetch(endpoint, {
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