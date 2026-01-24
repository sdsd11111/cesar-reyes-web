const fs = require('fs');
const path = require('path');

const blogDir = String.raw`d:\Abel paginas\Cesar Reyes\8 DE DICIEMBRE\cesar-reyes-web-main\content\blog`;

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

try {
    const files = getAllFiles(blogDir);
    console.log(`Found ${files.length} files.`);

    let fixedCount = 0;

    files.forEach(filePath => {
        if (!filePath.endsWith('.md')) return;

        const content = fs.readFileSync(filePath, 'utf8');

        // Simple heuristic to check if it needs fixing
        // If it contains "Ã³" (common for ó) or "Ã¡" (common for á) or "Ã±" (ñ)
        // We can also just try to fix and see if it changes significantly or looks valid.

        // Check for common double-encoded patterns
        // Ã³ (ó), Ã¡ (á), Ã© (é), Ã­ (í), Ãº (ú), Ã± (ñ), Â¿ (¿)
        const patterns = ['Ã³', 'Ã¡', 'Ã©', 'Ã­', 'Ãº', 'Ã±', 'Â¿', 'â€”', 'â€œ'];

        const needsFix = patterns.some(p => content.includes(p));

        if (needsFix) {
            console.log(`Fixing: ${path.basename(filePath)}`);

            // Apply fix
            let fixed = Buffer.from(content, 'binary').toString('utf-8');

            // Remove potential garbage at the start if it was a BOM that got mangled to 
            // The replacement character  is \uFFFD
            if (fixed.startsWith('\uFFFD')) {
                fixed = fixed.substring(1);
            }

            // Also check for the raw BOM bytes if they were somehow preserved incorrectly?
            // No, usually it's best just to strip leading whitespace/garbage before '---'
            if (!fixed.startsWith('---')) {
                const dashIndex = fixed.indexOf('---');
                if (dashIndex > -1 && dashIndex < 5) {
                    fixed = fixed.substring(dashIndex);
                }
            }

            fs.writeFileSync(filePath, fixed, 'utf8');
            fixedCount++;
        }
    });

    console.log(`Fixed ${fixedCount} files.`);

} catch (err) {
    console.error('Error:', err);
}
