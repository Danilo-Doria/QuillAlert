import { home } from "../views/home";
import { register } from "../views/register";
import { registerAuth } from "../controllers/register.controller";
import { loginAuth } from "../controllers/login.controller";
import { login } from "../views/login";
import { userPanel } from "../views/userPanel";
import { adminPanel } from "../views/adminPanel";
import { updateLinks } from "../utils/linkState";
import { renderMap } from "../views/map";
import { notFound } from "../views/notFound";
import { mapImg } from "../views/map";
import { newReportUser } from "../views/newReportUser";
import { initNewReport } from "../controllers/newReport.controller";


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
        template: userPanel,
        actions: updateLinks,
        isPublic: false,
        admin: false
    },
    "/admin-panel": {
        template: adminPanel,
        actions: updateLinks,
        isPublic: false,
        admin: true
    },
    "/map": {
        template: renderMap,
        actions: [mapImg, updateLinks],
        isPublic: false,
        admin: true
    },
    "/not-found": {
        template: notFound,
        isPublic: true
    }
}