const fs = require('fs');
const path = require('path');

(() => {
    const screens = fs.readdirSync(path.join(__dirname, '../', 'screens')).filter(i => /.+\.png/.test(i));
    for(let screen of screens) fs.unlinkSync(path.join(__dirname, '../', 'screens', screen));
})();