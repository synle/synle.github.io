echo '> build index.html'
node src/generate-index-html.js

echo '> build css'
npx -p less lessc src/index.less index.css

echo '> format code'
npm run format

echo '> build syle-resume.pdf'
node src/generate-resume.js
