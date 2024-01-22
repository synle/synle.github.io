npm i
./node_modules/.bin/concurrently "npm start" "while sleep 3; do sh build.sh; done"
