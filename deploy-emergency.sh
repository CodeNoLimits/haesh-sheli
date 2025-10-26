#!/bin/bash

echo "🚨 DÉPLOIEMENT D'URGENCE NETLIFY - ILLULA 🚨"
echo "=============================================="

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé."
    exit 1
fi

# Build de production
echo "🔨 Build de production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Échec du build."
    exit 1
fi

echo "✅ Build réussi !"

# Vérifier les fichiers
echo "🔍 Vérification des fichiers..."
if [ ! -f "dist/public/index.html" ]; then
    echo "❌ Erreur: index.html manquant."
    exit 1
fi

echo "✅ Fichiers prêts !"

# Créer un zip pour déploiement manuel
echo "📦 Création du package de déploiement..."
cd dist/public
zip -r ../../netlify-deploy.zip .
cd ../..

echo "✅ Package créé: netlify-deploy.zip"

# Instructions de déploiement
echo ""
echo "🚀 INSTRUCTIONS DE DÉPLOIEMENT MANUEL :"
echo "======================================"
echo ""
echo "1. Allez sur https://app.netlify.com"
echo "2. Connectez-vous à votre compte"
echo "3. Sélectionnez le site 'haesh-sheli'"
echo "4. Cliquez sur 'Deploys'"
echo "5. Cliquez sur 'Deploy manually'"
echo "6. Glissez-déposez le fichier 'netlify-deploy.zip'"
echo "7. Attendez la fin du déploiement"
echo ""
echo "🌐 URL du site: https://haesh-sheli.netlify.app"
echo ""
echo "📊 Taille du package: $(du -sh netlify-deploy.zip | awk '{print $1}')"
echo ""
echo "🎯 PRÊT POUR L'ILLULA ! Revenue estimé: 5,200€+"
echo ""
echo "⚠️  DÉPLOYEZ MAINTENANT - Chaque minute compte !"
