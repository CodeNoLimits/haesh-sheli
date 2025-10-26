#!/bin/bash

# Script de publication automatique sur Builder.io
echo "🎨 PUBLICATION AUTOMATIQUE BUILDER.IO 🎨"
echo "========================================"

# Configuration Builder.io
BUILDER_API_KEY="your_builder_api_key"
BUILDER_SPACE_ID="your_builder_space_id"
BUILDER_API_URL="https://builder.io/api/v1"

# Fonction pour publier du contenu
publish_content() {
    local model=$1
    local content=$2
    local name=$3
    
    echo "📝 Publication du modèle: $model ($name)"
    
    curl -X POST "$BUILDER_API_URL/content/$model" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $BUILDER_API_KEY" \
        -d "{
            \"name\": \"$name\",
            \"data\": $content,
            \"spaceId\": \"$BUILDER_SPACE_ID\",
            \"published\": true
        }"
    
    echo ""
}

# Contenu de la page d'accueil
HOME_PAGE_CONTENT='{
    "title": "האש שלי - חנות ספרי ברסלב",
    "subtitle": "החנות למכירת ספרי רבי נחמן מברסלב במחיר הקרן",
    "heroImage": "/images/hero-books-composition.png",
    "sections": [
        {
            "type": "hero",
            "title": "ברוכים הבאים להאש שלי",
            "subtitle": "ספרי ברסלב במחירים מעולים",
            "buttonText": "גלה את החנות",
            "buttonLink": "/store"
        },
        {
            "type": "featured-products",
            "title": "המוצרים המובילים",
            "products": [
                {
                    "id": "likutei-moharan",
                    "title": "ליקוטי מוהרן",
                    "price": 95,
                    "image": "/attached_assets/ליקוטי מוהרן 1_1757275910545.jpg"
                }
            ]
        }
    ]
}'

# Contenu de la page boutique
STORE_PAGE_CONTENT='{
    "title": "חנות ספרי ברסלב",
    "subtitle": "43 ספרים נבחרים במחירים מעולים",
    "filters": {
        "categories": ["ספרי רבינו", "ספרי רבי נתן", "ספרי חסידות"],
        "languages": ["עברית", "אנגלית", "צרפתית"],
        "formats": ["סקאי", "סקאי עם מפרשים", "כריכה קשה"]
    },
    "features": [
        "משלוחים חינם החל מ-399 ש״ח",
        "תשלום מאובטח",
        "תמיכה מלאה"
    ]
}'

# Contenu de la page dons
DONATE_PAGE_CONTENT='{
    "title": "תרומה לקרן הרב ישראל",
    "subtitle": "תמכו במשימה שלנו להפיץ את תורתו של רבי נחמן מברסלב",
    "donationAmounts": [50, 100, 200, 500, 1000, 2000],
    "impact": [
        "תמיכה בהדפסת ספרים חדשים",
        "הפצת תורת ברסלב בעולם",
        "תמיכה בפעילות חינוכית"
    ]
}'

# Publication des pages
echo "🚀 Publication des pages..."

publish_content "page" "$HOME_PAGE_CONTENT" "Page d'accueil"
publish_content "page" "$STORE_PAGE_CONTENT" "Page boutique"
publish_content "page" "$DONATE_PAGE_CONTENT" "Page dons"

echo ""
echo "✅ Publication Builder.io terminée !"
echo "======================================"
echo "📊 Pages publiées:"
echo "  - Page d'accueil"
echo "  - Page boutique"
echo "  - Page dons"
echo ""
echo "🔗 Liens Builder.io:"
echo "  - Dashboard: https://builder.io/dashboard"
echo "  - Space: $BUILDER_SPACE_ID"
echo ""
echo "🎯 Prochaines étapes:"
echo "  1. Connectez-vous à Builder.io"
echo "  2. Configurez les clés API dans .env"
echo "  3. Personnalisez le contenu via l'interface"
echo ""
echo "🎉 Le contenu est maintenant disponible sur Builder.io !"
