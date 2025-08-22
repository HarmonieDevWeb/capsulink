✅ 1. Conception & Design

    🔲 Figma

    Créer les wireframes desktop & mobile (Accueil, Capsule, Tableau de bord, Formulaire…)

- [Voir PDF Figma](./CapsuLink.pdf)

      Créer les maquettes UI finales (couleurs, typographie, spacing…)

- [Voir maquette UI](./maquetteUI.md)

      Définir les composants UI réutilisables (boutons, cartes, modales, inputs…)

✅ 2. Modélisation des données

    🔲 MDL / MCD / MVD

      MDL (Modèle de Lien) : relations entre capsules, utilisateurs, messages, cadeaux, etc.

      MCD (Modèle Conceptuel de Données) : entités + attributs

      Capsule (id, titre, description, visibilité, date d’ouverture…)

      User (id, email, mot de passe, etc.)

      Message (texte, auteur, capsuleId)

      Cadeau (type, message, capsuleId)

      MVD (Modèle Vue de Données) : comment les données sont affichées sur le front

✅ 3. Installation et configuration VSCode

    🔲 Initialisation du projet
    Créer un dossier projet

    Initialiser Git

    npm init -y

    🔲 Dépendances principales
    Backend (Node.js + Express + Sequelize)
      bash
      npm install express sequelize pg dotenv

    Frontend (Svelte)
      bash
      npm create svelte@latest frontend
      
    cd frontend
    npm install

    Développement
      bash
      npm install --save-dev nodemon eslint prettier
      
    Autres
      ESLint: 
      npx eslint --init

    Dotenv : pour les variables d’environnement
    Svelte : UI dynamique
    Tailwind (optionnel mais recommandé pour un style moderne)

✅ 4. Arborescence du projet dans VSCode

    /mon-projet-capsules
    │
    ├── backend/
    │   ├── config/
    │   │   └── database.js
    │   ├── controllers/
    │   ├── models/
    │   │   └── user.js
    │   │   └── capsule.js
    │   ├── routes/
    │   ├── middlewares/
    │   ├── .env
    │   ├── server.js
    │
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── routes/
    │   │   ├── App.svelte
    │   │   └── main.js
    │   └── tailwind.config.js (si utilisé)
    │
    ├── .gitignore
    ├── README.md

✅ 5. Étapes de développement (Back + Front)

    Backend
          Connexion à la base de données avec Sequelize
          Création des modèles Sequelize (User, Capsule, Message…)
          Routes API REST sécurisées avec JWT
          Middleware d’authentification

    Frontend
          Connexion API depuis Svelte (via fetch)
          Création des pages (Accueil, Connexion, Capsule, Création, etc.)
          Gestion du décompte avec JavaScript (ou lib type countdown.js)
          Affichage météo via API externe (ex: OpenWeatherMap)
