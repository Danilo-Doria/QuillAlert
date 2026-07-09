import { home } from "../views/home";
import { register } from "../views/register";
import { registerAuth } from "../controllers/register.controller";
import { loginAuth } from "../controllers/login.controller";
import { login } from "../views/login";
import { panel } from "../views/panel";
import { updateLinks } from "../utils/linkState";
import { renderMap } from "../views/map";
import { profile } from "../views/profile";
import { notFound } from "../views/notFound";
import { mapImg } from "../views/map";


export const routes = {
    // authentication routes are publics to allow access to the user
    "/": {
        template: home,
        isPublic: true
    },
    "/register": {
        template: register,
        actions: registerAuth,
        isPublic: true,
        isLogged: true
    },
    "/login": {
        template: login,
        actions: loginAuth,
        isPublic: true,
        isLogged: true
    },
    "/panel": {
        template: panel,
        actions: [updateLinks],
        isPublic: false,
        admin: false
    },
    "/map": {
        template: renderMap,
        actions: [mapImg, updateLinks],
        isPublic: false,
        admin: true
    },
    "/profile": {
        template: profile,
        actions: updateLinks,
        isPublic: false,
        admin: true
    },
    "/not-found": {
        template: notFound,
        isPublic: true
    }
}