import { register } from "../views/register";
import { login } from "../views/login";
import { userPanel } from "../views/userPanel";
import { adminPanel } from "../views/adminPanel";
import { notFound } from "../views/notFound";
import { menuToggle } from "../views/adminPanel";

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
        isPublic: true
    },
    "/admin-panel": {
        template: adminPanel,
        actions: menuToggle,
        isPublic: true
    },
    "/not-found": {
        template: notFound,
        isPublic: true
    }
}