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
// git status

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