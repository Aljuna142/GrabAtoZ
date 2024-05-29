const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const backupDir = `frontend_backup_${new Date().toISOString().replace(/[:.]/g, '-')}`;


const sourceDir = 'frontend';

const destDir = 'frontend_backups'; 


const backupPath = path.join(destDir, backupDir);
fs.mkdirSync(backupPath);

execSync(`cp -r ${sourceDir}/* ${backupPath}`);

console.log(`Frontend backup created at: ${backupPath}`);
