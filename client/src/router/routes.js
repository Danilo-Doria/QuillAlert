import { register } from "../views/register";
import { login } from "../views/login";

export const routes = {
    // authentication routes are publics to allow access to the user
    "/register": {
        template: register,
        isPublic: true
    },
    "/login": {
        template: login,
        isPublic: true
    }
}