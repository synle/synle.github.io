// helpers
const helper = {};
helper.getNavBookmarkletFromSchema = (input) => {
  let rawOutput = `
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="https://synle.github.io/link/assets/navs.css" />
          <meta charset='utf-8' />
          <title>Loading...</title>
        </head>
        <body>
          <div style="text-align: center; margin: 2rem; font-size: 2rem">Loading...</div>
        </body>
        <js_script id='schema' type='schema'>${input}</js_script>
        <js_script src="https://synle.github.io/link/assets/helpers.js"></js_script>
        <js_script src="https://unpkg.com/@babel/standalone/babel.min.js"></js_script>
        <js_script type="text/babel" data-presets="react" data-type="module" src="https://synle.github.io/link/assets/navs.js"></js_script>
      </html>
    `
    .trim()
    .replace(/js_script/g, 'script');

  return 'data:text/html,' + encodeURIComponent(rawOutput);
};

helper.navigateToDataUrl = async (base64URL, forceOpenWindow) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(
      decodeURIComponent(base64URL.replace('data:text/html,', '')),
      'text/html',
    );
    const schema = doc.querySelector('#schema').innerText.trim();
    const childWindow = window.open('https://synle.github.io/link/nav-generator.html?loadNav');
    const messageOrigin = '*';

    // post message to redirect the data url accordingly
    const intervalTryPostingMessage = setInterval(_doPostMessage, 100);
    setTimeout(() => clearInterval(intervalTryPostingMessage), 5000);

    function _doPostMessage() {
      childWindow.postMessage({ type: 'onViewLinks', schema }, messageOrigin);
    }
  } catch (err) {
    // show it in the prompt
    await prompt('Data URL (copy to your clipboard):', base64URL);
  }
};

helper.onCopyToClipboard = async (text, autoDismiss) => {
  try {
    await navigator.clipboard.writeText(text);
    await alert('Copied to clipboard!', true);
  } catch (err) {
    await prompt('Clipboard', text, autoDismiss);
  }
};

helper.persistBufferSchema = (value) => {
  try {
    sessionStorage['schemaData'] = value;
  } catch (err) {}
};

helper.getPersistedBufferSchema = () => {
  try {
    return sessionStorage['schemaData'] || '';
  } catch (err) {
    return '';
  }
};

// prompts and alert overrides
(async () => {
  let timeoutRemoveAlertDiv;
  let timeoutRemovePromptDiv;

  window.prompt = (promptText, promptInput, autoDismiss) => {
    clearTimeout(timeoutRemovePromptDiv);

    return new Promise((resolve) => {
      document.body.insertAdjacentHTML(
        'beforeend',
        `
        <div id='promptModal' tabindex='0' style="display: flex; flex-direction: column; align-items: center; justify-content: center; transition: all 0.4s ease-out; position: fixed; background: rgba(80, 80, 80, 0.6); color: #fff; top: 0px; left: 0px; right: 0px; bottom: 0px; text-align: center; font-weight: bold; border: 2px solid #eee; padding: 2rem 3rem; z-index: 1;">
          <div style="max-width: 800px; width: 100%; font-size: 16px; font-weight: bold; padding: 10px; background: #000;">${promptText}</div>
          <textarea id='promptInput' style='max-width: 800px; width: 100%; max-height: 650px; padding: 10px; font-size: 16px; font-family: monospace; border: none !important; outline: none !important;' rows='3'></textarea>
        </div>
      `,
      );

      setupPrompt();

      function setupPrompt() {
        document.querySelector('#promptModal #promptInput').value = promptInput;
        document.querySelector('#promptModal #promptInput').focus();
        document
          .querySelector('#promptModal #promptInput')
          .setSelectionRange(0, promptInput.length);
        const rowCount = promptInput
          .trim()
          .split('\n')
          .reduce((totalCount, s) => {
            totalCount += Math.max(Math.floor(s.length / 75), 1);
            return totalCount;
          }, 1);
        document.querySelector('#promptModal #promptInput').rows = Math.min(rowCount, 15);
        document.querySelector('#promptModal #promptInput').onblur = removePrompt;

        if (autoDismiss) {
          timeoutRemovePromptDiv = setTimeout(removePrompt, 1300);
        }
      }

      function removePrompt() {
        clearTimeout(timeoutRemovePromptDiv);

        document.querySelector('#promptModal').style.opacity = '0.05';
        document.querySelector('#promptModal').addEventListener('transitionend', () => {
          try {
            document.querySelector('#promptModal').remove();
          } catch (err) {}
        });

        resolve();
      }
    });
  };

  window.alert = (alertText, manualDismiss) => {
    clearTimeout(timeoutRemoveAlertDiv);

    return new Promise((resolve) => {
      document.body.insertAdjacentHTML(
        'beforeend',
        `
        <div id='alertModal' tabindex='0' style="display: flex; flex-direction: column; align-items: center; justify-content: center; transition: all 0.4s ease-out; position: fixed; background: rgba(80, 80, 80, 0.6); color: #fff; top: 0px; left: 0px; right: 0px; bottom: 0px; text-align: center; font-weight: bold; border: 2px solid #eee; padding: 2rem 3rem; z-index: 1;">
          <div id='alertBody' style="max-width: 800px; width: 100%; font-size: 16px; font-weight: bold; padding: 10px; background: #000;" tabindex='0'>${alertText}</div>
        </div>
      `,
      );

      setupAlert();

      function setupAlert() {
        if (manualDismiss !== false) {
          timeoutRemoveAlertDiv = setTimeout(removeAlert, 1300);
        } else {
          document.querySelector('#alertModal #alertBody').focus();
          document.querySelector('#alertModal #alertBody').onblur = removeAlert;
        }
      }

      function removeAlert() {
        clearTimeout(timeoutRemoveAlertDiv);

        document.querySelector('#alertModal').style.opacity = '0.05';
        document.querySelector('#alertModal').addEventListener('transitionend', () => {
          try {
            document.querySelector('#alertModal').remove();
          } catch (err) {}
        });

        resolve();
      }
    });
  };
})();

// special handling to override the fetch
(() => {
  const _onHandlePostMessageEvent = (event) => {
    const { type } = event.data;
    const newSchema = event.data.schema;
    if (type === 'onViewLinks') {
      try {
        helper.persistBufferSchema(newSchema);
        window.fetchSchemaScript = async () => newSchema;
        window.removeEventListener('message', _onHandlePostMessageEvent);
      } catch (err) {}
    }
  };
  window.addEventListener('message', _onHandlePostMessageEvent);
})();
