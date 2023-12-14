// scripts/generate-tutorials-json.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function generateTutorialsJson() {
    const tutorialsDirectory = path.join(process.cwd(), 'docs/tutorials');
    const allTutorialsData = getFilesRecursively(tutorialsDirectory)
        .filter(file => path.extname(file) === '.md')
        .map(file => {
            const relativePath = path.relative(tutorialsDirectory, file);
            const id = relativePath.replace(/\.md$/, '');
            const fileContents = fs.readFileSync(file, 'utf8');
            const matterResult = matter(fileContents);
          
            return {
              id,
              ...matterResult.data
            };
          });
    fs.writeFileSync(
        path.join(process.cwd(), 'src', 'tutorials.json'),
        JSON.stringify(allTutorialsData)
    );
}

function getFilesRecursively(directory) {
    const result = [];

    (function readDirectory(directory) {
        const files = fs.readdirSync(directory);

        for (const file of files) {
            const fullPath = path.join(directory, file);

            if (fs.statSync(fullPath).isDirectory()) {
                readDirectory(fullPath);
            } else {
                result.push(fullPath);
            }
        }
    })(directory);

    return result;
}

generateTutorialsJson();