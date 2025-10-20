# 🔒 SYSTÈME DE RESTORE POINTS - HaeshSheliClone

## 📋 PROTOCOLE DE SÉCURITÉ

Ce système permet de revenir en arrière en cas de problème durant le développement.

---

## 🎯 PRINCIPE

Avant **CHAQUE modification importante**, un restore point est créé avec :
- ✅ Tag Git avec date/heure
- ✅ Documentation de l'état actuel
- ✅ Description des fonctionnalités présentes
- ✅ Instructions de restauration
- ✅ Backup GitHub automatique

---

## 📍 LISTE DES RESTORE POINTS

### RP-00-INITIAL - 2025-01-20 (AVANT amélioration CSS)
- **Tag Git**: `restore-point-00-initial`
- **Commit**: `cd1bb76 - fix: GitHub Pages base path, SW + manifest paths`
- **Date**: 20 Janvier 2025
- **État**: Site 100% fonctionnel, CSS actuel (1252 lignes)
- **GitHub Backup**: HaeshSheliOriginal (créé automatiquement)
- **Documentation**: Voir `RP-00-INITIAL/ETAT.md`

---

## 🔧 COMMENT RESTAURER UN POINT

### Option 1 : Restauration complète (annule tout)
```bash
# Aller dans le dossier du projet
cd "/Users/codenolimits-dreamai-nanach/Desktop/SITE KEREN 2/HaeshSheliClone"

# Voir tous les restore points disponibles
git tag | grep restore-point

# Restaurer vers un point spécifique (exemple: RP-00-INITIAL)
git reset --hard restore-point-00-initial

# ATTENTION: Cela supprime TOUTES les modifications après ce point
```

### Option 2 : Créer une branche de sauvegarde (recommandé)
```bash
# Sauvegarder l'état actuel dans une branche
git branch sauvegarde-$(date +%Y%m%d-%H%M%S)

# Puis restaurer le point
git reset --hard restore-point-00-initial
```

### Option 3 : Restaurer depuis GitHub backup
```bash
# Si tout est cassé localement, cloner le backup
git clone https://github.com/[votre-username]/HaeshSheliOriginal.git

# Ou récupérer un tag spécifique
git fetch origin tag restore-point-00-initial
git checkout restore-point-00-initial
```

---

## 📸 CRÉATION D'UN NOUVEAU RESTORE POINT

```bash
# 1. Commiter tous les changements en cours
git add .
git commit -m "Description des modifications"

# 2. Créer le tag avec numéro et description
git tag -a restore-point-01-css-tokens -m "RP-01: Architecture CSS modulaire créée"

# 3. Pousser vers GitHub backup
git push origin restore-point-01-css-tokens

# 4. Documenter dans ce fichier README.md
```

---

## ⚠️ RÈGLES IMPORTANTES

1. **TOUJOURS** créer un restore point **AVANT** une modification majeure
2. **TOUJOURS** pousser les tags vers GitHub (backup distant)
3. **JAMAIS** supprimer un restore point sans raison valable
4. **TOUJOURS** documenter l'état du site dans le restore point
5. **VÉRIFIER** que le site fonctionne avant de créer le restore point
6. En cas de doute, **TOUJOURS** créer un restore point

---

## 📊 QUAND CRÉER UN RESTORE POINT ?

✅ Avant refactoring majeur (CSS, composants, architecture)
✅ Avant migration de librairies
✅ Avant modifications de la base de données
✅ Avant déploiement en production
✅ Après avoir terminé une fonctionnalité importante (backup de succès)
✅ Avant toute expérimentation risquée

❌ Pas besoin pour corrections mineures (typos, commentaires)
❌ Pas besoin pour modifications de contenu simple

---

## 🚨 EN CAS DE CATASTROPHE

Si quelque chose ne fonctionne plus :

1. **NE PAS PANIQUER** ✋
2. Identifier le dernier restore point fonctionnel
3. Lire la documentation du restore point
4. Créer une sauvegarde de l'état actuel (branche Git)
5. Restaurer le restore point fonctionnel DEPUIS GITHUB si nécessaire
6. Analyser ce qui a causé le problème

---

## 🔐 BACKUP GITHUB

**Repo de backup**: `HaeshSheliOriginal`
- ✅ Tous les restore points y sont poussés automatiquement
- ✅ Permet de récupérer même si le repo local est corrompu
- ✅ Historique complet préservé
- ⚠️ Ce repo N'EST PAS utilisé pour le développement actif

---

**DERNIÈRE MISE À JOUR**: 20 Janvier 2025
**MAINTENEUR**: Claude Code + User
**PROJET**: HaeshSheliClone - Site Keren Breslov
