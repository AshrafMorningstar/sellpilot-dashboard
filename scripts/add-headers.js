/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HEADER = `/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */
`;

const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.css'];
const IGNORE_DIRS = ['node_modules', 'dist', '.git', 'scripts'];

function addHeader(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('@author Ashraf Morningstar')) {
        return; // Already has header
    }
    
    // special handling for CSS imports vs JS imports? 
    // The header is a comment, safe for both JS/TS/CSS.
    // For CSS, it's /* ... */ which matches the JS docblock style usually.
    // Wait, CSS comments are /* ... */. JS is /** ... */.
    // The HEADER uses /** ... */ which is valid in both (CSS usually accepts * inside).
    // Actually standard CSS comment is /* */. JS is same or //
    // I'll stick to provided header.
    
    fs.writeFileSync(filePath, HEADER + '\n' + content);
    console.log(`Added header to ${filePath}`);
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) {
                traverse(fullPath);
            }
        } else {
            if (EXTENSIONS.includes(path.extname(file))) {
                addHeader(fullPath);
            }
        }
    }
}

// Run from project root (parent of scripts/)
traverse(path.join(__dirname, '../src'));
console.log("Headers added.");
