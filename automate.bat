@echo off

REM Check if a commit message is provided as an argument
if "%~1" == "" (
    echo Usage: %~nx0 ^<commit_message^>
    exit /b 1
)

REM Add all files to the staging area
git add .

REM Commit with the provided message
set "commit_message=%~1"
git commit -m "%commit_message%"

REM Push to the remote repository (Assuming you have set the remote URL as 'origin')
git push origin master

echo Files committed and pushed to the remote repository successfully.