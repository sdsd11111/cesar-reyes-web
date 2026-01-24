const fs = require('fs');
const path = require('path');

const blogDir = String.raw`d:\Abel paginas\Cesar Reyes\8 DE DICIEMBRE\cesar-reyes-web-main\content\blog`;

// Mapping from Unicode characters to their Windows-1252 byte values
const cp1252Map = {
    '\u20AC': 0x80, // €
    '\u201A': 0x82, // ‚
    '\u0192': 0x83, // ƒ
    '\u201E': 0x84, // „
    '\u2026': 0x85, // …
    '\u2020': 0x86, // †
    '\u2021': 0x87, // ‡
    '\u02C6': 0x88, // ˆ
    '\u2030': 0x89, // ‰
    '\u0160': 0x8A, // Š
    '\u2039': 0x8B, // ‹
    '\u0152': 0x8C, // Œ
    '\u017D': 0x8E, // Ž
    '\u2018': 0x91, // ‘
    '\u2019': 0x92, // ’
    '\u201C': 0x93, // “
    '\u201D': 0x94, // ”
    '\u2022': 0x95, // •
    '\u2013': 0x96, // –
    '\u2014': 0x97, // —
    '\u02DC': 0x98, // ˜
    '\u2122': 0x99, // ™
    '\u0161': 0x9A, // š
    '\u203A': 0x9B, // ›
    '\u0153': 0x9C, // œ
    '\u017E': 0x9E, // ž
    '\u0178': 0x9F, // Ÿ
};

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

function restoreUtf8(content) {
    const buffer = Buffer.alloc(content.length);
    let bufIdx = 0;

    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        const code = content.charCodeAt(i);

        if (code <= 0xFF) {
            // Standard Latin1 range keeps its byte value
            // Note: 0x80-0x9F in 'latin1' strings are technically control chars,
            // but if the string was created by decoding CP1252 bytes as UTF8 and then we act like it's a string...
            // Wait. The file on disk has BYTES. 
            // fs.readFileSync(file, 'utf8') read those bytes and tried to make a string.
            // If bytes were valid UTF-8 sequences, they became chars.
            // E.g. 0xC3 0xB3 -> ó (U+00F3).
            // My goal is to recover 0xC3 and 0xB3.
            // U+00F3 is 243. So `code` is 243. 243 maps to byte 243. Correct.

            // If bytes were 0xE2 0x80 0x9C (real UTF-8 “).
            // But they were interpreted as Win1252? valid UTF-8 IS valid Win1252?
            // No, wait. The valid UTF-8 sequence `E2 80 9C` for “
            // was READ as Win1252 chars: â € œ
            // And SAVED as UTF-8 for those chars: `C3 A2` `E2 82 AC` `C5 93`
            // So the file on disk has `C3 A2 E2 82 AC C5 93`.
            // When I read this with `utf8`, I get string "â€œ".
            // "â" is U+00E2. "€" is U+20AC. "œ" is U+0153.

            // My loop sees 'â' (U+00E2 = 226). 226 -> byte 0xE2. Correct.
            // My loop sees '€' (U+20AC). Not <= 0xFF.
            // Check map. '€' -> 0x80. Write byte 0x80. Correct.
            // My loop sees 'œ' (U+0153). Check map. -> 0x9C. Write byte 0x9C. Correct.

            buffer[bufIdx++] = code;
        } else if (cp1252Map[char]) {
            buffer[bufIdx++] = cp1252Map[char];
        } else {
            // Unknown char? Maybe legitimate unicode that wasn't corrupted?
            // If so, we can't represent it in a single byte.
            // This suggests the hypothesis (double encoding) might be partial or complex.
            // But for "fix", safely ignoring or keeping as replacement char '?' is acceptable if rare.
            console.warn(`Warning: char ${char} (code ${code}) not in CP1252 map.`);
            // Write '?' (0x3F)
            buffer[bufIdx++] = 0x3F;
        }
    }

    // Now we have the original bytes.
    // E.g. 0xE2 0x80 0x9C.
    // Decode this buffer as UTF-8.
    return buffer.subarray(0, bufIdx).toString('utf-8');
}

try {
    const files = getAllFiles(blogDir);
    console.log(`Found ${files.length} files.`);

    let fixedCount = 0;

    files.forEach(filePath => {
        if (!filePath.endsWith('.md')) return;

        const content = fs.readFileSync(filePath, 'utf8');

        // Only fix if it looks corrupted
        const patterns = ['Ã³', 'Ã¡', 'Ã©', 'Ã­', 'Ãº', 'Ã±', 'Â¿', 'â€”', 'â€œ'];
        const needsFix = patterns.some(p => content.includes(p));

        if (needsFix) {
            console.log(`Fixing: ${path.basename(filePath)}`);

            const fixed = restoreUtf8(content);

            // Strip BOM artifacts if present at start "﻿---" -> "---"
            let cleanFixed = fixed;
            if (!cleanFixed.startsWith('---')) {
                // Check for UTF-8 BOM char \uFEFF
                if (cleanFixed.charCodeAt(0) === 0xFEFF) {
                    cleanFixed = cleanFixed.substring(1);
                } else {
                    // Or find the first ---
                    const idx = cleanFixed.indexOf('---');
                    if (idx > -1 && idx < 5) cleanFixed = cleanFixed.substring(idx);
                }
            }

            fs.writeFileSync(filePath, cleanFixed, 'utf8');
            fixedCount++;
        }
    });

    console.log(`Fixed ${fixedCount} files.`);

} catch (err) {
    console.error('Error:', err);
}
