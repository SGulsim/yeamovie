import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ============================================
// НАСТРОЙКИ
// ============================================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = 'project-context.txt';

// Папки для сканирования
const INCLUDE_DIRS = ['src', 'public'];

// Файлы в корне проекта
const INCLUDE_ROOT_FILES = [
	'package.json',
	'vite.config.ts',
	'tsconfig.json',
	'tsconfig.node.json',
	'.eslintrc.cjs',
	'index.html',
];

// Расширения файлов для включения
const INCLUDE_EXTENSIONS = [
	'.ts',
	'.tsx',
	'.js',
	'.jsx',
	'.scss',
	'.css',
	'.json',
	'.html',
	'.md',
];

// Исключения (папки и файлы)
const EXCLUDE_PATTERNS = [
	'node_modules',
	'dist',
	'build',
	'.git',
	'.vscode',
	'.idea',
	'coverage',
	'.DS_Store',
	'project-context.txt',
	'collect-project.mjs',
];

// ============================================
// ФУНКЦИИ
// ============================================

function shouldExclude(filePath) {
	return EXCLUDE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function shouldIncludeFile(filePath) {
	const ext = path.extname(filePath);
	return INCLUDE_EXTENSIONS.includes(ext);
}

function getRelativePath(filePath, baseDir) {
	return path.relative(baseDir, filePath).replace(/\\/g, '/');
}

function collectFiles(dir, baseDir, result = []) {
	const items = fs.readdirSync(dir);

	items.forEach(item => {
		const fullPath = path.join(dir, item);

		if (shouldExclude(fullPath)) {
			return;
		}

		const stat = fs.statSync(fullPath);

		if (stat.isDirectory()) {
			collectFiles(fullPath, baseDir, result);
		} else if (stat.isFile() && shouldIncludeFile(fullPath)) {
			result.push(fullPath);
		}
	});

	return result;
}

function generateOutput() {
	const output = [];
	const baseDir = process.cwd();

	// ============================================
	// ЗАГОЛОВОК
	// ============================================
	output.push('# PROJECT CONTEXT');
	output.push('# Generated: ' + new Date().toISOString());
	output.push('');
	output.push('='.repeat(80));
	output.push('');

	// ============================================
	// СТРУКТУРА ПРОЕКТА
	// ============================================
	output.push('## PROJECT STRUCTURE');
	output.push('');

	const allFiles = [];

	// Собираем файлы из корня
	INCLUDE_ROOT_FILES.forEach(fileName => {
		const filePath = path.join(baseDir, fileName);
		if (fs.existsSync(filePath)) {
			allFiles.push(filePath);
		}
	});

	// Собираем файлы из папок
	INCLUDE_DIRS.forEach(dir => {
		const dirPath = path.join(baseDir, dir);
		if (fs.existsSync(dirPath)) {
			const files = collectFiles(dirPath, baseDir);
			allFiles.push(...files);
		}
	});

	// Сортируем для удобства
	allFiles.sort();

	// Выводим дерево
	allFiles.forEach(filePath => {
		const relativePath = getRelativePath(filePath, baseDir);
		output.push(`  ${relativePath}`);
	});

	output.push('');
	output.push('='.repeat(80));
	output.push('');

	// ============================================
	// СОДЕРЖИМОЕ ФАЙЛОВ
	// ============================================
	output.push('## FILES CONTENT');
	output.push('');

	allFiles.forEach(filePath => {
		const relativePath = getRelativePath(filePath, baseDir);
		const content = fs.readFileSync(filePath, 'utf-8');

		output.push('─'.repeat(80));
		output.push(`FILE: ${relativePath}`);
		output.push('─'.repeat(80));
		output.push('');
		output.push(content);
		output.push('');
	});

	output.push('='.repeat(80));
	output.push('# END OF PROJECT CONTEXT');

	return output.join('\n');
}

// ============================================
// ЗАПУСК
// ============================================
try {
	console.log('📦 Collecting project files...');

	const content = generateOutput();
	fs.writeFileSync(OUTPUT_FILE, content, 'utf-8');

	const stats = fs.statSync(OUTPUT_FILE);
	const sizeKB = (stats.size / 1024).toFixed(2);

	console.log('✅ Project context saved to:', OUTPUT_FILE);
	console.log(`📊 File size: ${sizeKB} KB`);
} catch (error) {
	console.error('❌ Error:', error.message);
	process.exit(1);
}
