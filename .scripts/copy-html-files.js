const fs = require('fs-extra');
const glob = require('glob').glob;
const path = require('path');

// Define the source and destination directories
const sourceDir = path.join(__dirname, '..', 'docs');
const destDir1 = path.join(__dirname, '..', 'static');
const destDir2 = path.join(__dirname, '..', 'static', 'examples');

// Find all .html files in the source directory
glob(`${sourceDir}/**/*.html`, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Found files:', files);

    // Copy each file to the destination directories
    files.forEach(file => {
        const relativePath = path.relative(sourceDir, file);
        const destFile1 = path.join(destDir1, relativePath);
        const destFile2 = path.join(destDir2, relativePath);

        fs.copy(file, destFile1)
            .then(() => console.log(`Copied ${file} to ${destFile1}`))
            .catch(err => console.error(err));

        fs.copy(file, destFile2)
            .then(() => console.log(`Copied ${file} to ${destFile2}`))
            .catch(err => console.error(err));
    });
});