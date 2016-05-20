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
