#!/bin/bash

# ========================================
# HAESH SHELI - PROJECT SETUP SCRIPT
# ========================================
# This script will help you set up the project from scratch
# Run with: bash setup.sh

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# ========================================
# STEP 1: Check Prerequisites
# ========================================
print_header "ÉTAPE 1: Vérification des prérequis"

if command_exists node; then
    NODE_VERSION=$(node -v)
    print_success "Node.js installé: $NODE_VERSION"
else
    print_error "Node.js n'est pas installé"
    print_info "Télécharge Node.js depuis: https://nodejs.org/"
    exit 1
fi

if command_exists npm; then
    NPM_VERSION=$(npm -v)
    print_success "npm installé: v$NPM_VERSION"
else
    print_error "npm n'est pas installé"
    exit 1
fi

if command_exists git; then
    GIT_VERSION=$(git --version)
    print_success "Git installé: $GIT_VERSION"
else
    print_warning "Git n'est pas installé (optionnel mais recommandé)"
fi

echo ""

# ========================================
# STEP 2: Install Dependencies
# ========================================
print_header "ÉTAPE 2: Installation des dépendances"

print_info "Installation des packages npm..."
npm install

if [ $? -eq 0 ]; then
    print_success "Dépendances installées avec succès"
else
    print_error "Erreur lors de l'installation des dépendances"
    exit 1
fi

echo ""

# ========================================
# STEP 3: Environment Variables Setup
# ========================================
print_header "ÉTAPE 3: Configuration des variables d'environnement"

if [ ! -f .env ]; then
    print_error "Fichier .env non trouvé"
    print_info "Création d'un fichier .env de base..."
    cat > .env << 'EOF'
# HAESH SHELI - ENVIRONMENT VARIABLES
VITE_PUBLIC_BUILDER_KEY=03781aef3e954725b18e9139cb9e6001
DATABASE_URL=
STRIPE_SECRET_KEY=
GEMINI_API_KEY=
SENDGRID_API_KEY=
NODE_ENV=development
EOF
    print_success "Fichier .env créé"
else
    print_success "Fichier .env trouvé"
fi

print_warning "N'oublie pas de remplir les variables d'environnement dans .env"
print_info "Variables requises:"
echo "  - DATABASE_URL (Neon PostgreSQL)"
echo "  - STRIPE_SECRET_KEY (Stripe)"
echo "  - GEMINI_API_KEY (Google AI)"
echo "  - SENDGRID_API_KEY (SendGrid)"

echo ""

# ========================================
# STEP 4: Database Setup (Optional)
# ========================================
print_header "ÉTAPE 4: Configuration de la base de données (optionnel)"

if grep -q "DATABASE_URL=postgresql" .env 2>/dev/null; then
    print_info "DATABASE_URL détecté dans .env"
    read -p "Veux-tu pousser le schéma vers la base de données? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_info "Exécution de drizzle-kit push..."
        npm run db:push
        if [ $? -eq 0 ]; then
            print_success "Schéma de base de données poussé avec succès"
        else
            print_error "Erreur lors du push du schéma"
        fi
    else
        print_info "Push de la base de données ignoré"
    fi
else
    print_warning "DATABASE_URL non configuré - base de données ignorée"
    print_info "L'application fonctionnera avec un stockage en mémoire"
fi

echo ""

# ========================================
# STEP 5: Build Verification
# ========================================
print_header "ÉTAPE 5: Vérification du build"

print_info "Test du build de production..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build réussi!"
else
    print_error "Échec du build"
    exit 1
fi

echo ""

# ========================================
# STEP 6: Git Setup (Optional)
# ========================================
print_header "ÉTAPE 6: Configuration Git (optionnel)"

if [ -d .git ]; then
    print_success "Repository Git déjà initialisé"
else
    read -p "Veux-tu initialiser un repository Git? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git init
        git add .
        git commit -m "🎉 Initial commit - Haesh Sheli setup"
        print_success "Repository Git initialisé"
    else
        print_info "Initialisation Git ignorée"
    fi
fi

echo ""

# ========================================
# STEP 7: Final Summary
# ========================================
print_header "✅ SETUP TERMINÉ!"

echo ""
print_success "Ton projet Haesh Sheli est prêt!"
echo ""
print_info "Prochaines étapes:"
echo ""
echo "  1. Remplis les variables d'environnement dans .env"
echo "     Édite le fichier: nano .env"
echo ""
echo "  2. Lance le serveur de développement:"
echo "     ${GREEN}npm run dev${NC}"
echo ""
echo "  3. Ouvre ton navigateur sur:"
echo "     ${BLUE}http://localhost:5000${NC}"
echo ""
echo "  4. Pour builder en production:"
echo "     ${GREEN}npm run build${NC}"
echo ""
echo "  5. Pour lancer en production:"
echo "     ${GREEN}npm start${NC}"
echo ""

print_info "Documentation des variables d'environnement:"
echo "  - Builder.io: https://www.builder.io/c/docs/using-your-api-key"
echo "  - Neon DB: https://neon.tech/"
echo "  - Stripe: https://dashboard.stripe.com/apikeys"
echo "  - Gemini AI: https://makersuite.google.com/app/apikey"
echo "  - SendGrid: https://app.sendgrid.com/settings/api_keys"
echo ""

print_warning "N'oublie pas de ne JAMAIS committer .env avec des secrets réels!"
echo ""

print_success "Happy coding! 🚀"
echo ""
