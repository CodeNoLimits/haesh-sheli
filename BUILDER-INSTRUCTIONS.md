# 🎨 Instructions Builder.io Complètes - Site Haesh Sheli

## 📋 **CONFIGURATION INITIALE**

### 1. **Création du Space Builder.io**
```bash
# Connectez-vous à Builder.io
# Créez un nouveau space: "Haesh Sheli"
# Notez le Space ID et l'API Key
```

### 2. **Variables d'environnement**
```bash
# Ajoutez dans votre .env.local
VITE_BUILDER_PUBLIC_KEY=your_builder_api_key_here
BUILDER_PUBLIC_KEY=your_builder_api_key_here
BUILDER_SPACE_ID=your_builder_space_id_here
```

## 🏗️ **MODÈLES À CRÉER**

### 1. **Page d'accueil (Home Page)**
```json
{
  "name": "Home Page",
  "fields": [
    {
      "name": "heroTitle",
      "type": "text",
      "required": true,
      "defaultValue": "האש שלי"
    },
    {
      "name": "heroSubtitle", 
      "type": "text",
      "required": true,
      "defaultValue": "החנות המובילה למכירת ספרי רבי נחמן מברסלב במחיר הקרן"
    },
    {
      "name": "heroDescription",
      "type": "longText",
      "required": true
    },
    {
      "name": "heroBackgroundImage",
      "type": "file",
      "required": true
    },
    {
      "name": "ctaButtonText",
      "type": "text",
      "defaultValue": "גלה את החנות"
    },
    {
      "name": "ctaButtonLink",
      "type": "url",
      "defaultValue": "/store"
    },
    {
      "name": "featuredProducts",
      "type": "list",
      "subFields": [
        {
          "name": "productId",
          "type": "text",
          "required": true
        },
        {
          "name": "title",
          "type": "text",
          "required": true
        },
        {
          "name": "price",
          "type": "number",
          "required": true
        },
        {
          "name": "image",
          "type": "file",
          "required": true
        },
        {
          "name": "link",
          "type": "url",
          "required": true
        }
      ]
    }
  ]
}
```

### 2. **Page Boutique (Store Page)**
```json
{
  "name": "Store Page",
  "fields": [
    {
      "name": "pageTitle",
      "type": "text",
      "defaultValue": "חנות ספרי ברסלב"
    },
    {
      "name": "pageDescription",
      "type": "longText",
      "defaultValue": "43 ספרים נבחרים במחירים מעולים"
    },
    {
      "name": "filters",
      "type": "list",
      "subFields": [
        {
          "name": "category",
          "type": "text"
        },
        {
          "name": "format",
          "type": "text"
        },
        {
          "name": "size",
          "type": "text"
        },
        {
          "name": "language",
          "type": "text"
        }
      ]
    },
    {
      "name": "sortOptions",
      "type": "list",
      "subFields": [
        {
          "name": "label",
          "type": "text"
        },
        {
          "name": "value",
          "type": "text"
        }
      ]
    }
  ]
}
```

### 3. **Page Produit (Product Page)**
```json
{
  "name": "Product Page",
  "fields": [
    {
      "name": "productId",
      "type": "text",
      "required": true
    },
    {
      "name": "title",
      "type": "text",
      "required": true
    },
    {
      "name": "description",
      "type": "longText",
      "required": true
    },
    {
      "name": "images",
      "type": "list",
      "subFields": [
        {
          "name": "image",
          "type": "file",
          "required": true
        },
        {
          "name": "alt",
          "type": "text"
        }
      ]
    },
    {
      "name": "variants",
      "type": "list",
      "subFields": [
        {
          "name": "format",
          "type": "text"
        },
        {
          "name": "binding",
          "type": "text"
        },
        {
          "name": "size",
          "type": "text"
        },
        {
          "name": "price",
          "type": "number"
        },
        {
          "name": "inStock",
          "type": "boolean"
        }
      ]
    },
    {
      "name": "relatedProducts",
      "type": "list",
      "subFields": [
        {
          "name": "productId",
          "type": "text"
        }
      ]
    }
  ]
}
```

### 4. **Page Dons (Donate Page)**
```json
{
  "name": "Donate Page",
  "fields": [
    {
      "name": "title",
      "type": "text",
      "defaultValue": "תרומה לקרן הרב ישראל"
    },
    {
      "name": "subtitle",
      "type": "text",
      "defaultValue": "תמכו במשימה שלנו להפיץ את תורתו של רבי נחמן מברסלב"
    },
    {
      "name": "donationAmounts",
      "type": "list",
      "subFields": [
        {
          "name": "amount",
          "type": "number"
        },
        {
          "name": "label",
          "type": "text"
        }
      ]
    },
    {
      "name": "impact",
      "type": "list",
      "subFields": [
        {
          "name": "description",
          "type": "text"
        }
      ]
    }
  ]
}
```

## 🎨 **COMPOSANTS À CRÉER**

### 1. **Hero Section**
```json
{
  "name": "Hero Section",
  "fields": [
    {
      "name": "title",
      "type": "text",
      "required": true
    },
    {
      "name": "subtitle",
      "type": "text"
    },
    {
      "name": "description",
      "type": "longText"
    },
    {
      "name": "backgroundImage",
      "type": "file",
      "required": true
    },
    {
      "name": "ctaButtonText",
      "type": "text",
      "defaultValue": "גלה עוד"
    },
    {
      "name": "ctaButtonLink",
      "type": "url",
      "defaultValue": "/store"
    }
  ]
}
```

### 2. **Product Grid**
```json
{
  "name": "Product Grid",
  "fields": [
    {
      "name": "title",
      "type": "text",
      "defaultValue": "המוצרים המובילים"
    },
    {
      "name": "products",
      "type": "list",
      "subFields": [
        {
          "name": "productId",
          "type": "text",
          "required": true
        },
        {
          "name": "title",
          "type": "text",
          "required": true
        },
        {
          "name": "price",
          "type": "number",
          "required": true
        },
        {
          "name": "image",
          "type": "file",
          "required": true
        },
        {
          "name": "link",
          "type": "url",
          "required": true
        }
      ]
    },
    {
      "name": "maxProducts",
      "type": "number",
      "defaultValue": 6
    }
  ]
}
```

### 3. **Testimonial**
```json
{
  "name": "Testimonial",
  "fields": [
    {
      "name": "quote",
      "type": "longText",
      "required": true
    },
    {
      "name": "author",
      "type": "text",
      "required": true
    },
    {
      "name": "authorImage",
      "type": "file"
    },
    {
      "name": "authorTitle",
      "type": "text"
    },
    {
      "name": "rating",
      "type": "number",
      "min": 1,
      "max": 5,
      "defaultValue": 5
    }
  ]
}
```

### 4. **Features Grid**
```json
{
  "name": "Features Grid",
  "fields": [
    {
      "name": "title",
      "type": "text",
      "defaultValue": "למה לבחור בנו?"
    },
    {
      "name": "features",
      "type": "list",
      "subFields": [
        {
          "name": "icon",
          "type": "text",
          "defaultValue": "🚚"
        },
        {
          "name": "title",
          "type": "text",
          "required": true
        },
        {
          "name": "description",
          "type": "text",
          "required": true
        }
      ]
    }
  ]
}
```

## 🔧 **INTÉGRATION REACT**

### 1. **Installation des packages**
```bash
npm install @builder.io/react @builder.io/sdk-react
```

### 2. **Configuration Builder.io**
```typescript
// src/config/builder.ts
import { builder } from '@builder.io/react';

builder.init('YOUR_BUILDER_API_KEY');

export { builder };
```

### 3. **Composant Builder.io**
```typescript
// src/components/BuilderComponent.tsx
import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';

interface BuilderComponentProps {
  model: string;
  content?: any;
}

export function BuilderComponent({ model, content }: BuilderComponentProps) {
  const [builderContent, setBuilderContent] = useState(null);

  useEffect(() => {
    if (content) {
      setBuilderContent(content);
    } else {
      builder.get(model).promise().then(setBuilderContent);
    }
  }, [model, content]);

  return builderContent ? (
    <BuilderComponent model={model} content={builderContent} />
  ) : (
    <div className="loading">Loading...</div>
  );
}
```

### 4. **Utilisation dans les pages**
```typescript
// src/pages/home.tsx
import { BuilderComponent } from '../components/BuilderComponent';

export default function Home() {
  return (
    <div>
      <BuilderComponent model="home-page" />
    </div>
  );
}
```

## 📱 **CONFIGURATION MOBILE**

### 1. **Responsive Design**
- Utilisez les breakpoints Builder.io
- Configurez les styles mobile-first
- Testez sur différents appareils

### 2. **Images optimisées**
- Utilisez le lazy loading
- Compressez les images
- Utilisez les formats WebP

## 🚀 **DÉPLOIEMENT**

### 1. **Build avec Builder.io**
```bash
npm run build
```

### 2. **Déploiement sur Netlify**
```bash
netlify deploy --prod --dir=dist/public
```

### 3. **Déploiement sur Render**
```bash
# Le déploiement se fait automatiquement via GitHub
```

## 📊 **ANALYTICS ET TRACKING**

### 1. **Google Analytics**
- Intégrez GA4 dans Builder.io
- Trackez les conversions
- Analysez le comportement utilisateur

### 2. **Builder.io Analytics**
- Utilisez les analytics intégrés
- Trackez les performances des composants
- Optimisez le contenu

## 🔐 **SÉCURITÉ**

### 1. **API Keys**
- Gardez les clés API sécurisées
- Utilisez les variables d'environnement
- Limitez les permissions

### 2. **Validation**
- Validez tous les inputs
- Utilisez les schémas Zod
- Implémentez la validation côté serveur

## 📞 **SUPPORT**

### 1. **Documentation Builder.io**
- https://builder.io/docs
- https://builder.io/docs/react

### 2. **Communauté**
- Discord Builder.io
- GitHub Issues
- Stack Overflow

---

## 🎯 **ÉTAPES SUIVANTES**

1. **Créez le space Builder.io**
2. **Configurez les modèles**
3. **Intégrez les composants React**
4. **Testez le déploiement**
5. **Optimisez les performances**

**Votre site sera maintenant entièrement configuré avec Builder.io ! 🚀**
