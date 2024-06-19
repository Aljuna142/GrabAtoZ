const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = 'frontend';
const destDir = 'frontend_backups'; 

const backupDir = `frontend_backup_${new Date().toISOString().replace(/[:.]/g, '-')}`;
const backupParentDir = path.join(process.cwd(), destDir);

if (!fs.existsSync(backupParentDir)) {
  fs.mkdirSync(backupParentDir);
}

const backupPath = path.join(backupParentDir, backupDir);
fs.mkdirSync(backupPath);

try {
  execSync(`cp -r ${sourceDir}/* ${backupPath}`);
  console.log(`Frontend backup created at: ${backupPath}`);
} catch (error) {
  console.error('Error occurred during backup:', error);
}


