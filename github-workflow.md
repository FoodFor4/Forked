Initial Setup

1. Fork repo from org
  github fork repo
1.1 Clone repo from fork
  git clone https://github.com/YOURNAME/forked.git
1.2 Add upstream as remote
  git remote add upstream https://github.com/foodfor4/forked.git

During work

2. Upstream changed
  git pull --rebase upstream feature/branch OR master
2.1 npm install
3. Push to origin
  git push origin
4. Open a pull request
  github pull request

// REBASE IS BAD DISCUSSION

Setup.
	1
		Fork rep from org
	2
		clone repo from fork
		```git clone https://github.com/YOURNAME/forked.git```
	3
		add upstream as remote
		```git remote add upstream https://github.com/foodfor4/forked.git```
	4
		create your feature branch
		```git branch feature/FEATURE_NAME```

Merge
	1
		Pull master from org
		```git pull upstream master```
	2
		merge changes
		```git merge master```
		** FROM YOUR FEATURE BRANCH **
	3
		commit after merge

PullRequest
	1
		Make sure you're on latest
	2
		Push changes to your fork
	3
		Make a pull request for your feature branch
	4
		Wait for it to be accepted