# Git and Github

## What is Git?

- Git is a version control software (source control).
  - Tracks changes in our code line by line.
  - Every change we make and save, you can describe those changes with a message
  - It allows us to easily go back and forth between these different changes
- We create a repository, or "repo" for short
  - Just a folder on our computer that we set git to manage
- Really helps and protects our code, especially when working on team
  - For ourselves, we can back up our code
  - Even more important for teams 
    - Easily work on the same project.
      - Changes are tracked per person
- Git allows for non-linear workflows
  - We do this with branches
    - There is always a main branch
    - We can have other branches, which are like parallel version of the main, but we can work on these parallel versions separately from the main code.


## What is Github

- NOT GIT
- Is a cloud storage (like onedrive or icloud or google drive)
- Github uses (or is integrated with) git
  - Github allows us to upload our git repos
  - Have all the benefits of Git on our cloud storage as well
- We can backup our code
- We can share our code.
  - I can push my changes to github, then my team members can download (pull) those changes


### How to install git for Mac

1. Check if you have Homebrew by opening a terminal and typing brew -v.
2. If you see a version, then you have brew installed. If not, you must install brew.
3. To install brew, paste this into your terminal:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
4. Brew requires the Xcode CLI. Confirm when the installer asks your permission.
5. After installation of XCode CLI and Brew, install git by typing brew install git in the terminal.

### How to install git for PC

 1. Go to https://git-scm.com/
 2. Download and run the installer.

### Configure Git for the First Time

 1. Configure your username by opening a terminal and typing "git config --global user.name (your_github_user_name or your_actual_name)"
 2. Configure your email by typing "git config --global user.email (your_github_email)"
 3. Verify by typing "git config --global --list"

### Create a new local Git repository using VS Code's built-in GUI

 1. From the file menu, choose "Open Folder."
 2. Navigate to your project folder. Open it in VS Code. **This is very important!** *Open your project folder and only your project folder. Do not open a parent folder.*
 3. Toggle open your Source Control pane by clicking the Source Control icon on the left. It looks like three circles with lines connecting them.
 4. Click the "Initialize Repository" button.
 5. Click the plus sign next to each file you want to add to the repo. If you want to add all the files, click the plus sign next to "Changes".
 6. Write a caption (message) for your snapshot (commit) in the message window.
 7. Click the checkmark.
 8. Click publish. If this is the first time you are trying to push a local git repo to Github, you will be asked to give authorization. Switch to your browser to do that. Just click through and accept at every point they ask.
 9. Make sure you choose the public option if you want your instructor (or anyone else) to be able to view your repo on Github.
 10. After it's done pushing, you can view your repo on Github.


# I really like pizza