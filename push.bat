@echo off
cd /d "%~dp0"
git add -A
set /p MSG="Message de commit: "
git commit -m "%MSG%"
git push origin main
pause
