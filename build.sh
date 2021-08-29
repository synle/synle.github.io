echo '>> build css'
./node_modules/.bin/lessc ./index.less ./index.css
./node_modules/.bin/lessc ./link/assets/navs.less ./link/assets/navs.css

sh format.sh
