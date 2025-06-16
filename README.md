# Wedding Planner Application

Application de planification de mariage construite avec la stack MERN (MongoDB, Express, React, Node.js).

## 🚀 Instructions de lancement

### Backend

1. Naviguer vers le dossier serveur :
```bash
cd server
```

2. Installer les dépendances :
```bash
npm install
```

3. Créer un fichier `.env` dans le dossier server avec les variables suivantes :
```env
MONGODB_URI=mongodb+srv://leoncarolina35:bLHSgQf2yF8wKNrf@cluster0.bqic8pd.mongodb.net/?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=wedding_secret_key_2025
```

4. Lancer le serveur :
```bash
# Mode développement
npm run dev

# Mode production
npm start
```

### Frontend

1. Naviguer vers le dossier client :
```bash
cd client
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer l'application :
```bash
npm run dev
```

L'application sera accessible à l'adresse : `http://localhost:5173`

## 📁 Structure du projet

```
wedding-planner/
├── client/                # Frontend React
│   ├── src/
│   │   ├── components/    # Composants React
│   │   ├── pages/        # Pages de l'application
│   │   ├── contexts/     # Contextes React (Auth, etc.)
│   │   └── services/     # Services API
│   └── public/           # Assets statiques
│
└── server/               # Backend Node.js
    ├── src/
    │   ├── resources/    # Resources de l'API
    │   │   ├── auth/     # Authentification
    │   │   ├── wedding/  # Gestion des mariages
    │   │   ├── vendor/   # Gestion des prestataires
    │   │   ├── guest/    # Gestion des invités
    │   │   └── budget/   # Gestion du budget
    │   └── middleware/   # Middlewares Express
    └── .env             # Variables d'environnement
```

## 🔐 Variables d'environnement requises

### Backend (.env)

```env
MONGODB_URI=votre_uri_mongodb
PORT=5000
JWT_SECRET=votre_secret_jwt
```

## 🛣️ Routes API disponibles

### Authentification

#### Inscription
```http
POST /api/auth/register
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}
```

#### Connexion
```http
POST /api/auth/login
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "password123"
}
```

### Mariages

#### Créer un mariage
```http
POST /api/weddings
Authorization: Bearer votre_token_jwt
Content-Type: application/json

{
    "couple": {
        "spouse1": {
            "name": "John Doe",
            "email": "john@example.com"
        },
        "spouse2": {
            "name": "Jane Doe",
            "email": "jane@example.com"
        }
    },
    "date": "2025-12-25",
    "ceremony": {
        "venue": "Beautiful Church",
        "address": "123 Wedding Street"
    },
    "estimatedBudget": 25000
}
```

### Prestataires

#### Ajouter un prestataire
```http
POST /api/vendors
Authorization: Bearer votre_token_jwt
Content-Type: application/json

{
    "name": "PhotoPro",
    "category": "photographer",
    "contact": {
        "email": "contact@photopro.com",
        "phone": "0123456789"
    },
    "services": [
        {
            "name": "Package Complet",
            "description": "Photos cérémonie + réception",
            "price": 2000
        }
    ],
    "wedding": "wedding_id"
}
```

### Invités

#### Ajouter un invité
```http
POST /api/guests
Authorization: Bearer votre_token_jwt
Content-Type: application/json

{
    "name": "Alice Smith",
    "email": "alice@example.com",
    "category": "family",
    "side": "spouse1",
    "plusOne": {
        "allowed": true
    },
    "wedding": "wedding_id"
}
```

### Budget

#### Créer un budget
```http
POST /api/budgets/wedding/:weddingId
Authorization: Bearer votre_token_jwt
Content-Type: application/json

{
    "totalBudget": 25000,
    "items": [
        {
            "category": "venue",
            "description": "Location salle",
            "estimatedAmount": 5000
        }
    ]
}
```

## 🔒 Protection des routes

Toutes les routes (sauf /api/auth/login et /api/auth/register) nécessitent un token JWT valide dans le header :
```http
Authorization: Bearer votre_token_jwt
```

## 📱 Fonctionnalités principales

- Authentification JWT
- Gestion complète des mariages
- Gestion des prestataires
- Gestion des invités
- Gestion du budget
- Interface utilisateur responsive
- Notifications temps réel avec react-hot-toast
- Gestion des formulaires avec react-hook-form
- Formatage des dates avec date-fns
