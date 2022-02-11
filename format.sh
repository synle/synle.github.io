echo '>> format formatting'
npx prettier --write \
  *.{md,json,html} \
  **/**/**/**/*.{js,jsx,less,yml} \
&& echo '>> done formatting...'
