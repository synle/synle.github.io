const SAME_TAB_LINK_SPLIT = "|";
const NEW_TAB_LINK_SPLIT = "|||";
const HEADER_SPLIT = "#";
const TITLE_SPLIT = "!";
const BLOCK_SPLIT = "```";
const TAB_SPLIT = ">>>";
const TAB_TITLE_SPLIT = "|";

let hasPendingChanges = false;

window.onbeforeunload = function (e) {
  if (hasPendingChanges) {
    e.preventDefault();
    return (e.returnValue =
      "You have unsaved changes. Do you want to continue with exit?");
  }
  return undefined;
};

window.onViewSchema = () => {
  var output = [];
  var elems = document.querySelectorAll("#fav > *");
  for (const elem of elems) {
    if (elem.classList.contains("title")) {
      const description = elem.innerText.trim();
      output.push(`\n${TITLE_SPLIT} ${description}`);
    } else if (elem.classList.contains("link")) {
      const link = elem;
      const fullLink = link.href;
      const description = link.innerHTML;

      if (elem.classList.contains("newTabLink")) {
        // new tab
        output.push(`${description} ${NEW_TAB_LINK_SPLIT} ${fullLink}`);
      } else {
        // same tab
        output.push(`${description} ${SAME_TAB_LINK_SPLIT} ${fullLink}`);
      }
    } else if (elem.classList.contains("block")) {
      const description = elem.innerText.trim();
      const blockId = elem.id || "";
      output.push(
        `\n${BLOCK_SPLIT}${blockId}\n${description}\n${BLOCK_SPLIT}\n`
      );
    } else if (elem.classList.contains("tabs")) {
      const tabContent = [...elem.querySelectorAll("tab")]
        .map((tab) => {
          return `${tab.innerText.trim()}${TAB_TITLE_SPLIT}${
            tab.dataset.tabId
          }`;
        })
        .join(TAB_SPLIT);

      output.push(`\n${TAB_SPLIT}${tabContent}\n`);
    } else if (elem.classList.contains("header")) {
      const header = elem;
      const description = header.innerHTML;

      output.push(`\n${HEADER_SPLIT} ${description}`);
    }
  }

  output = output.join("\n").trim();

  const rawSchemaDataDom = `
    <div id='command'>
      <div><h1 class='title'>Navigation Form</h1></div>
      <div style="display: flex; align-items:center; justify-content: space-evenly;">
        <button onclick="window.onViewLinks(window.getLinkDom(document.querySelector('#input').value))">View Links UI</button>
        <button onclick="window.onTestNav()">Test Nav</button>
        <a target="_blank" style="text-align: center;" href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.js">Nav JS Code</a>
        <a target="_blank" style="text-align: center;" href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.css">Nav CSS Code</a>
      </div>
      <textarea id='input' 
        placeholder="Bookmarklet Input Schema" 
        wrap="soft"
        spellcheck="false"
        oninput="hasPendingChanges = true;"
        onfocus="window.zoominInput(this)" 
        onblur="window.onGetGeneratedBookmarkletLink(document.querySelector('#input').value)">${output}</textarea>
      <textarea 
        id='output' 
        placeholder="Bookmarklet Output" 
        wrap="soft" 
        spellcheck="false"
        onfocus="window.zoominInput(this)"></textarea>
    </div>
  `;

  window.zoominInput = (target) => {
    [...document.querySelectorAll("#input,#output")].forEach(
      (r) => (r.style.height = "")
    );
    target.style.height =
      Math.max(450, document.body.clientHeight - 375) + "px";
  };

  document.body.innerHTML = rawSchemaDataDom;

  window.onGetGeneratedBookmarkletLink(document.querySelector("#input").value);

  // hook up the tab and shift tab to do modification
  document.querySelector("#input").addEventListener("keydown", (e) => {
    const TAB_INDENT = "  ";
    if (e.key === "Tab") {
      e.preventDefault();
      if (e.shiftKey === true) {
        deleteAtCursor(e.target, TAB_INDENT.length);
      } else {
        insertAtCursor(e.target, TAB_INDENT);
      }
    }

    function insertAtCursor(myField, myValue) {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;

      if (startPos === endPos) {
        myField.value =
          myField.value.substring(0, startPos) +
          myValue +
          myField.value.substring(endPos);

        myField.setSelectionRange(
          startPos + myValue.length,
          endPos + myValue.length
        );
      }
    }

    function deleteAtCursor(myField, length) {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;

      myField.value =
        myField.value.substring(0, startPos - 2) +
        myField.value.substring(endPos);

      myField.setSelectionRange(startPos - length, endPos - length);
    }
  });
};

window.onViewLinks = (linkDomHTML, hideSchemaForm) => {
  document.body.innerHTML = linkDomHTML;

  if (hideSchemaForm !== false) {
    document.body.innerHTML += `<div style="display: flex; margin-top: 1rem; align-items:center; justify-content: center;">
      <button onClick='window.onViewSchema()'>View Schema</button>
    </div>`;
  }

  // insert the search form
  document.querySelector("#fav").insertAdjacentHTML(
    "beforeend",
    `
      <form id='searchForm' onsubmit="return window.onSubmitNavigationSearch();">
        <input id='search' 
          list="linkList" 
          onInput="window.searchBookmarklet()"
          placeholder="&#x1F50E;&#xFE0E; Search bookmark"
          style="display: block" 
          autocomplete="off"
          spellcheck="false"
          autofocus
          required />
        <datalist id="linkList"></datalist>
      </form>
    `
  );

  // setting up the autocomplete
  document.querySelector("#linkList").innerHTML = [
    ...new Set(
      [...document.querySelectorAll("a.link")].map((r) => r.innerText).sort()
    ),
  ]
    .map((r) => `<option>${r}</option>`)
    .join("\n");

  // show the first tab
  [...document.querySelectorAll("tabs")].forEach((tabs) => {
    const firstTab = tabs.querySelector("tab");
    window.onShowTab(firstTab);
  });
};

window.onGetGeneratedBookmarkletLink = (input) => {
  document.querySelector("#output").value =
    window.getNavBookmarkletFromSchema(input);
};

window.getNavBookmarkletFromSchema = (input) => {
  let rawOutput = `
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="https://synle.github.io/link/assets/navs.css">
      </head>
      <body>
        <div id='fav'></div>
        <js_script src="https://synle.github.io/link/assets/navs.js"></js_script>
        <js_script id='schema' type='schema'>${input}</js_script>
        <js_script>
          window.onViewLinks(window.getLinkDom(document.querySelector('#schema').innerText.trim()));
          document.title = document.querySelector('.title').innerText.trim();
        </js_script>
      </body>
    </html>
  `
    .trim()
    .replace(/js_script/g, "script");

  return "data:text/html," + encodeURIComponent(rawOutput);
};

window.searchBookmarklet = () => {
  // remove all non alphanumeric
  let val = document
    .querySelector("#search")
    .value.replace(/[\W_]+/gi, " ")
    .replace(/[ ][ ]+/, " ")
    .trim();

  // update the value
  document.querySelector("#search").value = val;

  if (val.length === 0) {
    for (const elem of document.querySelectorAll("#fav .header, #fav .link")) {
      elem.classList.toggle("hidden", false);
    }
    return;
  }

  const matchRegex = new RegExp(
    "[ ]*" + val.split("").join("[a-z0-9 -_]*"),
    "i"
  );

  // show or hide
  for (const elem of document.querySelectorAll("#fav .link")) {
    let isHidden = true;

    const anchor = elem;
    const link = elem.href
      .replace(/http[s]/gi, "")
      .replace(/www/gi, "")
      .replace(/html/gi, "")
      .replace(/index/gi, "")
      .replace(/[/.]/gi, "");
    if (anchor.innerText.match(matchRegex)) {
      isHidden = false;
    } else if (
      anchor.dataset.section &&
      anchor.dataset.section.match(matchRegex)
    ) {
      isHidden = false;
    } else if (link.match(matchRegex)) {
      isHidden = false;
    }

    elem.classList.toggle("hidden", isHidden);
  }

  for (const elem of document.querySelectorAll("#fav .header")) {
    let isHidden = true;

    const header = elem;
    let target = header.nextElementSibling;
    let isVisible = false;

    while (
      target &&
      (target.classList.contains("link") || target.classList.contains("block"))
    ) {
      if (!target.classList.contains("hidden")) {
        isVisible = true;
        break;
      }
      target = target.nextElementSibling;
    }

    isHidden = !isVisible;

    elem.classList.toggle("hidden", isHidden);
  }
};

window.getLinkDom = (linkDomHTML) => {
  const lines = linkDomHTML
    .trim()
    .split("\n")
    .filter((r) => r.indexOf("//") !== 0)
    .map((r) => r.trimEnd());

  if (lines[0][0] !== "!") {
    const headerSchemaSampleCode = `${TITLE_SPLIT} Unnamed Navigation - ${new Date().toLocaleString()}`;
    lines.unshift(headerSchemaSampleCode);
  }

  const newHTMLLines = [];

  let blockBuffer = "";
  let isInABlock = false;
  let currentHeaderName = "";
  let blockId = "";

  let rawLinkHTML = lines.forEach((link) => {
    if (isInABlock) {
      // is in a block
      if (link.indexOf(BLOCK_SPLIT) === 0) {
        // end of a block
        newHTMLLines.push(
          `<pre class='block' id='${blockId}' ondblclick='window.onCopyBlockToClipboard(this)'>${blockBuffer.trim()}</pre>`
        );
        isInABlock = false;
        blockBuffer = "";

        currentHeaderName = ""; // reset the header name

        blockId = "";
      } else {
        blockBuffer += link + "\n";
      }

      return;
    }

    if (link.indexOf(TITLE_SPLIT) === 0) {
      // page title
      const headerText = link.replace(TITLE_SPLIT, "").trim();
      newHTMLLines.push(`<h1 class="title">${headerText}</h1>`);
    } else if (link.indexOf(HEADER_SPLIT) === 0) {
      // section header
      const headerText = link.replace(HEADER_SPLIT, "").trim();
      newHTMLLines.push(`<h2 class="header">${headerText}</h2>`);

      currentHeaderName = headerText;
    } else if (link.indexOf(BLOCK_SPLIT) === 0) {
      // start a block
      isInABlock = true;
      if (link.length > BLOCK_SPLIT.length) {
        blockId = link.substr(
          blockId.indexOf(BLOCK_SPLIT) + BLOCK_SPLIT.length + 1
        );
      }
    } else if (link.indexOf(TAB_SPLIT) === 0) {
      // is a tab >>>tabName1|blockId1>>>tabName2|blockId3
      let tabContent = "";
      link
        .split(TAB_SPLIT)
        .map((r) => r.trim())
        .filter((r) => !!r)
        .forEach((t) => {
          const [tabName, tabId] = t.split(TAB_TITLE_SPLIT);
          if (tabName && tabId) {
            tabContent += `<tab tabindex='0' data-tab-id='${tabId.trim()}' onclick='window.onShowTab(this)'>${tabName.trim()}</tab>`;
          }
        });

      newHTMLLines.push(`<tabs class='tabs'>${tabContent}</tabs>`);
    } else {
      // anything else is a link
      let linkType;
      let linkText, linkUrl;

      try {
        // try parse as new tab link
        linkText = link.substr(0, link.indexOf(NEW_TAB_LINK_SPLIT)).trim();
        linkUrl = link
          .substr(link.indexOf(NEW_TAB_LINK_SPLIT) + NEW_TAB_LINK_SPLIT.length)
          .trim();

        if (linkUrl && linkText) {
          linkType = "newTabLink";
        }
      } catch (err) {}

      if (!linkType) {
        // try parse as same tab link
        try {
          linkText = link.substr(0, link.indexOf(SAME_TAB_LINK_SPLIT)).trim();
          linkUrl = link
            .substr(
              link.indexOf(SAME_TAB_LINK_SPLIT) + SAME_TAB_LINK_SPLIT.length
            )
            .trim();

          if (linkUrl && linkText) {
            linkType = "sameTabLink";
          }
        } catch (err) {}
      }

      // if found a link type...
      if (linkType) {
        if (
          linkUrl.indexOf("http://") !== 0 &&
          linkUrl.indexOf("https://") !== 0
        ) {
          linkUrl = `https://` + linkUrl;
        }

        if (linkType === "sameTabLink") {
          newHTMLLines.push(
            `<a class="link sameTabLink" href="${linkUrl}" data-section="${currentHeaderName}">${linkText}</a>`
          );
        } else {
          // new_tab_link
          newHTMLLines.push(
            `<a class="link newTabLink" href="${linkUrl}" target="_blank" data-section="${currentHeaderName}">${linkText}</a>`
          );
        }
      }
    }
  });

  rawLinkHTML = newHTMLLines.filter((r) => !!r).join("\n");

  rawLinkHTML = `<div id='fav'>${rawLinkHTML}</div>`;

  return rawLinkHTML;
};

window.onTestNav = () => {
  // open the new tab for testing
  const base64URL = document.querySelector("#output").value;
  var win = window.open();
  win.document.write(
    `
      <style>
        body{
          margin: 0;
        }
      </style>
      <iframe src="${base64URL}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>
    `.trim()
  );
};

window.onSubmitNavigationSearch = () => {
  const links = document.querySelectorAll("a.link:not(.hidden)");
  if (links && links.length > 0) {
    links[0].focus();

    if (links.length === 1) {
      location.href = links[0].href;
    }
  }
  return false;
};


let _timeoutRemoveClipboardDiv;
window.onCopyBlockToClipboard = (target) => {
  const text = target.innerText.trim();
  onCopyToClipboard(text);

  // show the toaster for content is copied
  clearTimeout(_timeoutRemoveClipboardDiv);
  document.querySelector("#copiedToClipboard") && document.querySelector("#copiedToClipboard").remove();
  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div id='copiedToClipboard' tabindex='0' style="transition: all 0.25s ease-out; opacity: 0.5; transform: translateX(-50%); position: fixed; background: blue; color: #fff; bottom: 60px; left: 50%; width: 180px; text-align: center; font-weight: bold; border: 2px solid #eee; padding: 5px 10px; z-index: 1;">Copied to clipboard</div>
    `
  );

  document.querySelector("#copiedToClipboard").style.opacity = '1';
  document.querySelector("#copiedToClipboard").focus();
  document
    .querySelector("#copiedToClipboard")
    .addEventListener("blur", removeClipboardDiv);

  function removeClipboardDiv() {
    clearTimeout(_timeoutRemoveClipboardDiv);
    try{
      if(document.querySelector("#copiedToClipboard")){
        document.querySelector("#copiedToClipboard").style.opacity = '0.1';
        setTimeout(() => document.querySelector("#copiedToClipboard").remove(), 500);
      }
    } catch(err){}
  }

  _timeoutRemoveClipboardDiv = setTimeout(removeClipboardDiv, 3000);
};

window.onCopyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {}
};

window.onShowTab = (targetTab) => {
  const targetTabId = targetTab.dataset.tabId;
  const tabs = [...targetTab.parentElement.querySelectorAll("tab")];

  for (const tab of tabs) {
    const tabId = tab.dataset.tabId;
    tab.classList.remove("selected");
    document.querySelector(`#${tabId}`).style.display = "none";
  }

  document.querySelector(`#${targetTabId}`).style.display = "block";
  targetTab.classList.add("selected");
};

// insert zoom scale of 1 for mobile
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="page-enter" content="revealtrans(duration=seconds,transition=num)" />
    <meta http-equiv="page-exit" content="revealtrans(duration=seconds,transition=num)" />
  `.trim()
);

document.addEventListener(
  "keydown",
  (e) => {
    // handling enter and spacebar on focusable div
    const { key } = e;
    const target = e.target;

    if (target.onclick) {
      if (key === "Enter" || key === " ") {
        target.onclick.apply(target);

        e.preventDefault();
        e.stopPropagation();

        return;
      }
    } else {
      // special handling for ctrl + f to focus on searchbox
      const searchBox = document.querySelector("#search");
      if (searchBox) {
        if (e.key === "f" && (e.ctrlKey || e.altKey || e.metaKey)) {
          searchBox.focus();
          e.preventDefault();
        }
      }
    }
  },
  true
);
