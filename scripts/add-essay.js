#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a new essay file
function createEssayFile(filename, title, date, categories = []) {
  const postsDir = path.join(__dirname, '..', '_posts');
  
  // Create _posts directory if it doesn't exist
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }
  
  const filePath = path.join(postsDir, filename);
  
  // Create the frontmatter
  const frontmatter = `---
layout: post
title: "${title}"
date: ${date}
categories: [${categories.join(', ')}]
tags: [${categories.join(', ')}]
---

Your essay content goes here...

## References 
<span id="ref-1">[1] Reference 1</span>

<span id="ref-2">[2] Reference 2</span>
`;
  
  fs.writeFileSync(filePath, frontmatter);
  console.log(`✅ Created essay file: ${filename}`);
  console.log(`📝 Edit the file at: ${filePath}`);
  console.log(`🌐 Access it at: /essays/${filename.replace(/\.markdown$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')}`);
  console.log(`🔄 Run 'npm run process-essays' to include it in the app`);
}

// Main function
function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log('Usage: node scripts/add-essay.js <filename> <title> <date> [categories...]');
    console.log('Example: node scripts/add-essay.js "2025-01-15-my-new-essay.markdown" "My New Essay" "2025-01-15" "AI" "Machine Learning"');
    process.exit(1);
  }
  
  const filename = args[0];
  const title = args[1];
  const date = args[2];
  const categories = args.slice(3);
  
  // Validate filename format
  if (!filename.match(/^\d{4}-\d{2}-\d{2}-.*\.markdown$/)) {
    console.error('❌ Filename must be in format: YYYY-MM-DD-title.markdown');
    process.exit(1);
  }
  
  // Validate date format
  if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
    console.error('❌ Date must be in format: YYYY-MM-DD');
    process.exit(1);
  }
  
  createEssayFile(filename, title, date, categories);
}

main(); 