import { register } from "../views/register";
import { login } from "../views/login";
import { userPanel } from "../views/userPanel";
import { notFound } from "../views/notFound";

export const routes = {
    // authentication routes are publics to allow access to the user
    "/register": {
        template: register,
        isPublic: true
    },
    "/login": {
        template: login,
        isPublic: true
    },
    "/panel": {
        template: userPanel,
        isPublic: false
    },
    "/not-found": {
        template: notFound,
        isPublic: true
    }
}