const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages', 'destinations');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to swap WhyChooseSection and PackagesGrid
  // <WhyChooseSection /> might have some whitespace before and after it.
  const regex = /(\s*<WhyChooseSection \/>\s*)(<PackagesGrid[\s\S]*?\/>)/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, '\n\n        $2$1');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
