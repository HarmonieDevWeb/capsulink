// On charge les variables d'environnement situer dans le fichier .env
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from "./app/routes/router.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

// On spécifie également le dossier qui contient les fichiers statiques / fichier qui ne sont pas modifier mais renvoyer tels quels (images, css, js front, ...)
app.use(express.static("public"));

// On ajoute un middleware pour récupérer les données envoyées par les formulaires html
app.use(express.urlencoded());

app.use(router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});