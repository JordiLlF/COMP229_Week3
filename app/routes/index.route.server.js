// Index Routes
import { Router } from "express";
import { displayHomePage, displayAboutPage, displayProjectsPage, displayServicestPage, displayContactPage } from "../controllers/index.controller.server.js";

// Instanciating the router
const router = Router();

// add middleware to connect application
router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicestPage);
router.get('/contact', displayContactPage);

export default router;