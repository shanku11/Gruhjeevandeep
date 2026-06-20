const fs = require('fs');
const path = require('path');

const dirs = [
    'backend', 
    'frontend', 
    'frontend/css', 
    'frontend/js', 
    'frontend/images', 
    'frontend/videos', 
    'frontend/pages'
];

console.log("Creating directories...");
dirs.forEach(d => { 
    if (!fs.existsSync(d)) {
        fs.mkdirSync(d, { recursive: true }); 
    }
});

const moves = {
    'server.js': 'backend/server.js',
    'index.html': 'frontend/pages/index.html',
    'Education.html': 'frontend/pages/Education.html',
    'agri.html': 'frontend/pages/agri.html',
    'healthcare.html': 'frontend/pages/healthcare.html',
    'policies.html': 'frontend/pages/policies.html',
    'global.css': 'frontend/css/global.css',
    'style.css': 'frontend/css/style.css',
    'edu_style.css': 'frontend/css/edu_style.css',
    'agri_style.css': 'frontend/css/agri_style.css',
    'health_style.css': 'frontend/css/health_style.css',
    'policy.css': 'frontend/css/policy.css',
    'app.js': 'frontend/js/app.js',
    'tutor.js': 'frontend/js/tutor.js',
    'script.js': 'frontend/js/script.js',
    'translation.js': 'frontend/js/translation.js',
    'home.js': 'frontend/js/home.js',
    'outer.js': 'frontend/js/outer.js',
    'GJD_logo.png': 'frontend/images/GJD_logo.png',
    'wm.jpg': 'frontend/images/wm.jpg',
    'gruhjeevandeep.mp4': 'frontend/videos/gruhjeevandeep.mp4',
    'video_gjd.mp4': 'frontend/videos/video_gjd.mp4'
};

console.log("Moving files...");
for (const [src, dest] of Object.entries(moves)) {
    if (fs.existsSync(src)) {
        try {
            fs.renameSync(src, dest);
            console.log(`Moved ${src} -> ${dest}`);
        } catch (e) {
            console.error(`Error moving ${src}: ${e.message}`);
        }
    } else {
        console.log(`Skipped ${src} (already moved or missing)`);
    }
}

console.log("All done! Project is now structured into frontend and backend.");
