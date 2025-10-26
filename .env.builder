# ========================================
# BUILDER.IO CONFIGURATION
# ========================================

# Public API Key (client-side safe)
VITE_BUILDER_PUBLIC_KEY=03781aef3e954725b18e9139cb9e6001
BUILDER_PUBLIC_KEY=03781aef3e954725b18e9139cb9e6001

# Private API Key (server-side ONLY - never expose!)
BUILDER_PRIVATE_KEY=03781aef3e954725b18e9139cb9e6001

# Organization/Space ID
BUILDER_SPACE=haesh-sheli

# ========================================
# CURSOR INTEGRATION
# ========================================

# Enable Builder.io sync in development
BUILDER_SYNC_ENABLED=true

# Auto-sync interval (seconds)
BUILDER_SYNC_INTERVAL=300

# ========================================
# NOTES
# ========================================
# - Copie ce fichier vers .env.local pour Cursor
# - BUILDER_PRIVATE_KEY ne doit JAMAIS être committé
# - Pour production, configure ces vars dans Render/Netlify
