import fs from 'fs';
import path from 'path';

function autoImportComponents() {
  return {
    name: 'vite-plugin-auto-import-components',
    apply: 'serve',
    enforce: 'pre',
    configureServer(server) {
      const listener = (file = '') =>
        file.includes(path.normalize('/src/components/')) ? generate() : null;
      server.watcher.on('add', listener);
      server.watcher.on('change', listener);
      server.watcher.on('unlink', listener);
    },
    async buildStart() {
      return generate();
    },
  };
}

function generate() {
  const componentsDir = path.resolve(__dirname, '../components');
  const indexFilePath = path.resolve(componentsDir, 'index.tsx');

  fs.readdir(componentsDir, (err, files) => {
    if (err) {
      console.error('Error reading components directory', err);
      return;
    }

    const imports = files
      .filter((file) => file.endsWith('.tsx') && file !== 'index.tsx')
      .map((file) => `export * from './${path.basename(file)}';`)
      .join('\n');

    fs.writeFile(indexFilePath, imports, (err) => {
      if (err) {
        console.error('Error writing index.tsx file', err);
      }
    });
  });
}

export default autoImportComponents;
