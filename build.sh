echo '> format.sh'
sh format.sh

echo '> build the main app'
npx lessc ./index.less ./index.css

echo '> build react app'
npx tsc --allowJs link/assets/navs.jsx
