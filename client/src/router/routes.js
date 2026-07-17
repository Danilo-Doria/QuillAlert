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
import { reports } from "../views/reports";
import { togglePassword } from "../utils/passwordToggle";
import { profileControllers } from "../controllers/profile.controller";
import { allReports } from "../views/allReports";
import { createReportModal, displayReports } from "../controllers/report.controller";
import { reportDetail } from "../views/reportDetails";
import { getReportDetails } from "../services/reportDetail.service";
import { dashboardData } from "../controllers/panel.controller";


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
        actions: [loginAuth, togglePassword],
        isPublic: true,
        isLogged: true
    },
    "/panel": {
        template: panel,
        actions: [updateLinks, createReportModal, displayReports, dashboardData],
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
        actions: [updateLinks, profileControllers],
        isPublic: false
    },
    "/reports": {
        template: reports,
        actions: [updateLinks, displayReports],
        isPublic: false
    },
    "/all-reports": {
        template: allReports,
        actions: [updateLinks, displayReports],
        isPublic: false,
    },
    "/report-detail": {
        template: reportDetail,
        actions:  getReportDetails,
        isPublic: false,
    },
    "/not-found": {
        template: notFound,
        isPublic: true
    }
}