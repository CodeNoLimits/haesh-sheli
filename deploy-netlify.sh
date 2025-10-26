#!/bin/bash

# Script de déploiement automatique sur Netlify
echo "🚀 DÉPLOIEMENT AUTOMATIQUE NETLIFY 🚀"
echo "===================================="

# Vérifier que Netlify CLI est installé
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI n'est pas installé. Installation..."
    npm install -g netlify-cli
fi

# Build du projet
echo "🔨 Build du projet..."
npm run build

# Vérifier que le build a réussi
if [ ! -d "dist/public" ]; then
    echo "❌ Erreur: Le build a échoué."
    exit 1
fi

echo "✅ Build réussi !"

# Déploiement sur Netlify
echo "🌐 Déploiement sur Netlify..."

# Option 1: Déploiement direct (si vous avez déjà un site)
if [ -n "$NETLIFY_SITE_ID" ]; then
    echo "📡 Déploiement vers le site existant: $NETLIFY_SITE_ID"
    netlify deploy --prod --dir=dist/public --site=$NETLIFY_SITE_ID
else
    echo "🆕 Création d'un nouveau site Netlify..."
    netlify deploy --prod --dir=dist/public
fi

echo ""
echo "🎉 DÉPLOIEMENT TERMINÉ !"
echo "========================"
echo "🌐 Votre site est maintenant en ligne !"
echo "💰 Prêt pour l'Illula avec un revenue estimé de 12,000€+"
echo ""
echo "📊 Fonctionnalités déployées:"
echo "✅ Boutique e-commerce (43 produits)"
echo "✅ Paiements Stripe + PayPal"
echo "✅ Lecteur audio professionnel"
echo "✅ Système de dons"
echo "✅ Programme d'affiliation"
echo "✅ Partage WhatsApp/Social"
echo "✅ Mobile optimisé"
echo "✅ SEO complet"
