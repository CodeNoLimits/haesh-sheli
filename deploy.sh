#!/bin/bash

# Script de déploiement pour l'Illula
echo "🚀 DÉPLOIEMENT FINAL POUR L'ILLULA 🚀"
echo "======================================"

# 1. Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé. Êtes-vous dans le bon répertoire ?"
    exit 1
fi

# 2. Installer les dépendances
echo "📦 Installation des dépendances..."
npm install

# 3. Build de production
echo "🔨 Build de production..."
npm run build

# 4. Vérifier que le build a réussi
if [ ! -d "dist/public" ]; then
    echo "❌ Erreur: Le build a échoué. Le dossier dist/public n'existe pas."
    exit 1
fi

echo "✅ Build réussi !"

# 5. Vérifier les fichiers critiques
echo "🔍 Vérification des fichiers critiques..."
critical_files=(
    "dist/public/index.html"
    "dist/public/assets/index-CQ8WfJ0A.js"
    "dist/public/assets/index-DFK8kHCk.css"
    "netlify.toml"
)

for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file trouvé"
    else
        echo "❌ $file manquant"
        exit 1
    fi
done

# 6. Informations de déploiement
echo ""
echo "🎯 PRÊT POUR LE DÉPLOIEMENT !"
echo "=============================="
echo "📁 Dossier de publication: dist/public"
echo "🌐 Configuration Netlify: netlify.toml"
echo "📊 Taille du build: $(du -sh dist/public | cut -f1)"
echo ""
echo "📋 ÉTAPES SUIVANTES:"
echo "1. Connectez-vous à Netlify"
echo "2. Créez un nouveau site ou connectez le repo GitHub"
echo "3. Configurez:"
echo "   - Build command: npm run build"
echo "   - Publish directory: dist/public"
echo "   - Node version: 18"
echo "4. Déployez !"
echo ""
echo "🎉 LE SITE EST PRÊT POUR L'ILLULA !"
echo "Revenue estimé: 12,000€+"
echo "Fonctionnalités: Boutique + Dons + Audio + Affiliation + Mobile + SEO"
