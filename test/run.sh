# ./node_modules/.bin/mocha --recursive -r test/test-helper.js "$@"


# Recursively run all tests in the given directory
# Run test-helper.js to setup a mock application environment
# Output code coverage data to coveralls
# FORKED_COVERAGE=1 ./node_modules/.bin/mocha --recursive -r test/test-helper.js "$@" -R mocha-lcov-reporter |\
#  ./node_modules/coveralls/bin/coveralls.js

#./node_modules/.bin/mocha --recursive -r test/test-helper.js "$@"

istanbul cover ./node_modules/mocha/bin/_mocha --recursive -r test/test-helper.js test/**/*.js --report lcovonly -- -R spec
cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

#istanbul cover ./node_modules/mocha/bin/mocha --recursive -r test/test-helper.js "$@" --report lcovonly -- -R spec && cat ./coverage/lcov.info\
# | ./node_modules/coveralls/bin/coveralls.js