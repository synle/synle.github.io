echo '>> format formatting'
npx prettier --write \
  --no-error-on-unmatched-pattern \
  **/*.{js,jsx,ts,tsx,less,yml,md,json,html} \
&& echo '>> done formatting...'
