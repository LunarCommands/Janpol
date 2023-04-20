const fs = require('fs');
const path = require('path');

// Loop through the images in the folder
fs.readdirSync('../public/realizacje').forEach((filename) => {
  // Extract the name of the image without file extension
  const imageName = path.parse(filename).name;

  // Create the markdown content using the image data
  const markdownContent = `---
title: ${filename}
src: "/realizacje/${filename}"
alt: "${imageName}"
---`;

  // Create the markdown file with the corresponding data
  fs.writeFileSync(`../src/content/realizacje/${imageName}.md`, markdownContent);
});

console.log('Markdown files created successfully!');
