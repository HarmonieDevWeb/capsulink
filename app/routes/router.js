import express from "express";
import homeController from "../controllers/homeController.js";

const router = express.Router();

// Rôle du router :
// Quand une requête arrive (par exemple un navigateur qui va sur l'url `/promos`)
// Il va regarder si l'url correspond à une route définie dans le router
router.get("/", homeController.homepage);



export default router;