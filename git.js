//will clone down an existing repo
git clone https://github.com/Rajesh-Reel/Notes.git
//initialise new repo
git init

//will install all dependecies in exising project (if any)
npm i 
npm install

//show changes not yet staged
git diff
//list new or unmodified files 
git status

//stage all changed files 
git add
git add . 
//stage single file 
git add filename

//commit previously staged changes
git commit
//commit change(s) with a message
git commit -m "enter message here"
//commit all local changes in tracked files 
git commit -a 
//change the last commit
git commit --amend 

//show full change history
git log

//list files in directory
ls 

//navigate inwards or outwards
cd folderOrFilename/
cd ..

//create a new branch 
git checkout newBranchName
//switch to a branch and update directory 
git checkout branchName
//delete branch 
git branch -d branchName 

//?
git stash 

//fetch all branches from remote repo
git fetch 
git fetch <remote>
//fetch remote version and update local branch 
git pull <remote> <branch>

//push the committed changes to remote repo
git push <remote> <branch>
//chaining commands
git add .; git commit -m "message"; git push

//merge specified branch into current branch 
git merge <branch>

//rebase current HEAD onto specified branch 
git rebase <branch>

//creates a new commit to revert the specified commit
git revert <branch>

//from this link: https://media.licdn.com/dms/image/D4E22AQFl7e5Du9qFxQ/feedshare-shrink_2048_1536/0/1702987836413?e=1706745600&v=beta&t=Mg84fw17r2Td8vuCYEZwEVWAC7J_X6E5D52VjwRneeI