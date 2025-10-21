const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = './public/attached_assets';
const outputDir = './public/attached_assets_optimized';

// Créer le dossier de sortie
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let totalOriginal = 0;
let totalOptimized = 0;
let filesProcessed = 0;
let errors = 0;

async function optimizeImage(filePath, fileName) {
  try {
    const outputPath = path.join(outputDir, fileName);
    const stats = fs.statSync(filePath);
    totalOriginal += stats.size;

    await sharp(filePath)
      .resize(1200, null, { // Max width 1200px, hauteur auto
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 85, progressive: true }) // Convertir en JPEG optimisé
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    totalOptimized += newStats.size;
    filesProcessed++;

    const reduction = ((1 - newStats.size / stats.size) * 100).toFixed(1);
    console.log(`✅ ${fileName}: ${(stats.size / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024 / 1024).toFixed(2)}MB (-${reduction}%)`);
  } catch (error) {
    errors++;
    console.error(`❌ Erreur avec ${fileName}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      await optimizeImage(filePath, file);
    }
  }
}

(async () => {
  console.log('🚀 Début de l\'optimisation des images...\n');

  await processDirectory(sourceDir);

  console.log('\n📊 RÉSUMÉ:');
  console.log(`✅ Fichiers traités: ${filesProcessed}`);
  console.log(`❌ Erreurs: ${errors}`);
  console.log(`📦 Taille originale: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 Taille optimisée: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🎉 Réduction totale: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
})();
