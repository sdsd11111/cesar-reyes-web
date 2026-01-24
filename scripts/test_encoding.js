const fs = require('fs');
const path = require('path');

const filePath = String.raw`d:\Abel paginas\Cesar Reyes\8 DE DICIEMBRE\cesar-reyes-web-main\content\blog\desarrollo-web\como-hacer-menu-digital-restaurante-rapido.md`;
const outputPath = path.join(__dirname, 'test_output.txt');

try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Method: Convert string to binary (latin1) to get the raw bytes, then decode as utf-8.
    const fixed = Buffer.from(content, 'binary').toString('utf-8');

    let log = '';
    log += '--- ORIGINAL SNIPPET ---\n';
    log += content.substring(0, 200) + '\n';
    log += '------------------------\n';

    log += '--- FIXED SNIPPET ---\n';
    log += fixed.substring(0, 200) + '\n';
    log += '---------------------\n';

    if (fixed.includes('Cómo') && !fixed.includes('CÃ³mo')) {
        log += 'SUCCESS: Fix verified!\n';
    } else {
        log += 'FAILURE: Fix did not work as expected.\n';
    }

    fs.writeFileSync(outputPath, log);
    console.log('Done writing to ' + outputPath);

} catch (err) {
    console.error('Error:', err);
    fs.writeFileSync(outputPath, 'Error: ' + err.message);
}
