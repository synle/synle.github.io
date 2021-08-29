echo '> format.sh'
sh format.sh

echo '> build the main app'
npx lessc ./index.less ./index.css

echo '> build react app'
./node_modules/.bin/parcel build link/assets/navs.jsx
mv dist/navs.js* ./link/assets/
