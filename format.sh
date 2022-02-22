echo '>> format formatting'
npx prettier --write \
  **/*.{js,jsx,ts,tsx,less,yml,md,json,html} \
&& echo '>> done formatting...'
