@echo off
echo Creating Backend and Frontend directories...
mkdir backend
mkdir frontend
mkdir frontend\css
mkdir frontend\js
mkdir frontend\images
mkdir frontend\videos
mkdir frontend\pages

echo Moving server.js to backend...
move server.js backend\

echo Moving HTML files to frontend\pages...
move index.html frontend\pages\
move Education.html frontend\pages\
move agri.html frontend\pages\
move healthcare.html frontend\pages\
move policies.html frontend\pages\

echo Moving CSS files...
move global.css frontend\css\
move style.css frontend\css\
move edu_style.css frontend\css\
move agri_style.css frontend\css\
move health_style.css frontend\css\
move policy.css frontend\css\

echo Moving JS files...
move app.js frontend\js\
move tutor.js frontend\js\
move script.js frontend\js\
move translation.js frontend\js\
move home.js frontend\js\
move outer.js frontend\js\

echo Moving Image files...
move GJD_logo.png frontend\images\
move wm.jpg frontend\images\

echo Moving Video files...
move gruhjeevandeep.mp4 frontend\videos\
move video_gjd.mp4 frontend\videos\

echo Done! The project is now structured into frontend and backend.
echo You can now safely delete this script.
pause
