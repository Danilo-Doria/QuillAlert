// En tu auth.service.js
export const SESSION_KEY = 'current-user';

export const saveSession = (user) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

export const getSession = () => {
    const sessionActive = localStorage.getItem(SESSION_KEY);
    return sessionActive ? JSON.parse(sessionActive) : null;
};

export const removeSession = () => {
    localStorage.removeItem(SESSION_KEY)
}