import fs from 'fs';
import path from 'path';
import url from 'url';

import inquirer from 'inquirer';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const templateDir = path.resolve(__dirname, './template/component');
const files = fs.readdirSync(templateDir);
const filesData = new Map<string, string>();
const cacheFile = path.resolve(__dirname, './.cache');

files.forEach((file) => {
  const filePath = path.resolve(templateDir, file);
  const fileData = fs.readFileSync(filePath, 'utf8');
  filesData.set(file, fileData);
});

function replaceMyComponent(text: string, name: string) {
  return text.replace(/CreateComponent/g, name);
}

function createComponent(directory: string, componentName: string) {
  const componentDir = path.resolve(directory, componentName);
  if (!fs.existsSync(componentDir)) fs.mkdirSync(componentDir, { recursive: true });

  files.forEach((file) => {
    const fileData = filesData.get(file);
    if (!fileData) return;
    const code = replaceMyComponent(fileData, componentName);
    const newFilePath = path.resolve(componentDir, replaceMyComponent(file, componentName));
    fs.writeFileSync(newFilePath, code);
  });
}

function notNull<T>(v: T | null): v is T {
  return v !== null;
}

async function main() {
  const { type } = await inquirer.prompt<{ type: 'in app _component' | 'common component' }>([
    {
      type: 'list',
      name: 'type',
      message: 'Do you want to save in "common component" directory or "in app _component" directory?',
      choices: ['in app _component', 'common component'],
      default: 'in app _component',
    },
  ]);

  let feature = 'sample';
  if (type === 'in app _component') {
    try {
      feature = fs.readFileSync(cacheFile, 'utf8');
    } catch {
      // cache 없으면 무시
    }
  }

  const questions = [
    type === 'in app _component'
      ? ({
          type: 'input',
          name: 'feature',
          message: 'Enter feature name',
          default: feature,
        } as const)
      : null,
    {
      type: 'input',
      name: 'names',
      message: 'Enter component name \x1b[2m(Separate multiple names with space)\x1b[0m',
    } as const,
  ].filter(notNull);

  const answers = await inquirer.prompt<{ feature?: string; names: string }>(questions);

  const dir =
    type === 'common component'
      ? path.resolve(__dirname, '../src/component')
      : path.resolve(__dirname, `../src/app/${answers.feature ?? feature}/_component`);

  const names = answers.names.split(' ').filter(Boolean);

  names.forEach((name) => createComponent(dir, name));

  if (type === 'in app _component') {
    fs.writeFileSync(cacheFile, answers.feature ?? feature, 'utf8');
  }
}

main();
