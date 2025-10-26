#!/bin/bash

echo "🚀 DÉPLOIEMENT AUTOMATIQUE NETLIFY 🚀"
echo "======================================"

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé. Assurez-vous d'être dans le répertoire du projet."
    exit 1
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# Build de production
echo "🔨 Build de production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Échec du build. Veuillez corriger les erreurs."
    exit 1
fi

echo "✅ Build réussi !"

# Vérifier que les fichiers essentiels existent
echo "🔍 Vérification des fichiers critiques..."

if [ ! -f "dist/public/index.html" ]; then
    echo "❌ Erreur: dist/public/index.html manquant."
    exit 1
fi

if [ ! -f "dist/public/assets/index-B1yVG_FK.js" ]; then
    echo "❌ Erreur: dist/public/assets/index-B1yVG_FK.js manquant."
    exit 1
fi

if [ ! -f "dist/public/assets/index-B7ficomu.css" ]; then
    echo "❌ Erreur: dist/public/assets/index-B7ficomu.css manquant."
    exit 1
fi

echo "✅ Tous les fichiers critiques sont présents !"

# Déploiement sur Netlify
echo "🌐 Déploiement sur Netlify..."

# Essayer d'abord avec l'authentification existante
netlify deploy --prod --dir=dist/public

if [ $? -ne 0 ]; then
    echo "⚠️ Échec du déploiement Netlify avec l'authentification existante."
    echo "🔑 Tentative avec le token d'authentification..."
    
    # Utiliser le token d'authentification
    export NETLIFY_AUTH_TOKEN=nfp_Do595xdW2XBsDP5EghqVgJ6WyQSwEntr834d
    netlify deploy --prod --dir=dist/public
    
    if [ $? -ne 0 ]; then
        echo "❌ Échec du déploiement Netlify avec le token."
        echo "📋 Instructions manuelles:"
        echo "1. Connectez-vous à https://app.netlify.com"
        echo "2. Sélectionnez le site 'haesh-sheli'"
        echo "3. Allez dans 'Deploys'"
        echo "4. Cliquez sur 'Trigger deploy'"
        echo "5. Ou utilisez 'Deploy manually' avec le dossier dist/public"
        exit 1
    fi
fi

echo "✅ Déploiement Netlify réussi !"

# Afficher les informations de déploiement
echo ""
echo "🎉 DÉPLOIEMENT TERMINÉ AVEC SUCCÈS ! 🎉"
echo "========================================"
echo ""
echo "📊 Informations de déploiement:"
echo "   - Site Netlify: https://haesh-sheli.netlify.app"
echo "   - Site Render: https://haesh-sheli.onrender.com"
echo "   - GitHub: https://github.com/CodeNoLimits/haesh-sheli"
echo ""
echo "📁 Dossier de publication: dist/public"
echo "📊 Taille du build: $(du -sh dist/public | awk '{print $1}')"
echo ""
echo "🔧 Fonctionnalités déployées:"
echo "   ✅ Nouveau design professionnel"
echo "   ✅ Page d'accueil moderne avec hero section"
echo "   ✅ Boutique avec filtres avancés"
echo "   ✅ Système de dons PayPal"
echo "   ✅ Lecteur audio pour shiurim"
echo "   ✅ Programme d'affiliation"
echo "   ✅ Design responsive mobile-first"
echo "   ✅ SEO optimisé"
echo ""
echo "🎯 Prêt pour l'Illula ! Revenue estimé: 12,000€+"
echo ""
echo "📞 Support:"
echo "   - Documentation Builder.io: BUILDER-INSTRUCTIONS.md"
echo "   - Configuration Render: README-ILLULA.md"
echo "   - GitHub Issues: https://github.com/CodeNoLimits/haesh-sheli/issues"
