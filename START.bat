@echo off
title AiAutomate47 - Starting Website...
cd /d "%~dp0"
echo.
echo ==========================================
echo   AiAutomate47 Website Starting...
echo ==========================================
echo.
echo Opening website at: http://localhost:3000
echo.
start "" "http://localhost:3000"
npm run dev
pause