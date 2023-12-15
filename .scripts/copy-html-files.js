const fs = require('fs-extra');
const glob = require('glob').glob;
const path = require('path');

// Define the source and destination directories
const sourceDir = path.join(__dirname, '..', 'docs');
const destDir = path.join(__dirname, '..', 'static');

// Find all .html files in the source directory
glob(`${sourceDir}/**/*.html`, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Found files:', files);

    // Copy each file to the destination directory
    files.forEach(file => {
        const relativePath = path.relative(sourceDir, file);
        const destFile = path.join(destDir, relativePath);

        fs.copy(file, destFile)
            .then(() => console.log(`Copied ${file} to ${destFile}`))
            .catch(err => console.error(err));
    });
});