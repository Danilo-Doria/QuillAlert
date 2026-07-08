import { home } from "../views/home";
import { register } from "../views/register";
import { login } from "../views/login";
import { userPanel } from "../views/userPanel";
import { adminPanel } from "../views/adminPanel";
import { renderMap } from "../views/map";
import { notFound } from "../views/notFound";
import { mapImg } from "../views/map";

export const routes = {
    // authentication routes are publics to allow access to the user
    "/": {
        template: home,
        isPublic: true
    },"/register": {
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
        isPublic: true
    },
    "/map": {
        template: renderMap,
        actions: mapImg,
        isPublic: true
    },
    "/not-found": {
        template: notFound,
        isPublic: true
    }
}