const SAME_TAB_LINK_SPLIT = "|";
const NEW_TAB_LINK_SPLIT = "|||";
const HEADER_SPLIT = "#";
const TITLE_SPLIT = "!";
const BLOCK_SPLIT = "```";

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

      if(elem.classList.contains('newTabLink')){// new tab
        output.push(`${description} ${NEW_TAB_LINK_SPLIT} ${fullLink}`);  
      } else {// same tab
        output.push(`${description} ${SAME_TAB_LINK_SPLIT} ${fullLink}`);
      }
    } else if (elem.classList.contains("block")) {
      const description = elem.innerText.trim();
      output.push(`\n${BLOCK_SPLIT}\n${description}\n${BLOCK_SPLIT}\n`);
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
      <div style="display: flex; align-items:center">
        <button onclick="window.onViewLinks(window.getLinkDom(document.querySelector('#input').value))">View Links UI</button>
        <button onclick="window.onTestNav()">Test Nav</button>
        <a target="_blank" style="text-align: center; margin: auto;" href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.js">View Source</a>
      </div>
      <textarea id='input' 
        placeholder="Bookmarklet Input Schema" 
        wrap="soft"
        spellcheck="false"
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
    [...document.querySelectorAll('#input,#output')].forEach(r => r.style.height = '');
    target.style.height = Math.max(450, document.body.clientHeight - 375) + "px";
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
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos);

        myField.setSelectionRange(startPos + myValue.length, endPos + myValue.length);
      }
    }

    function deleteAtCursor(myField, length) {
      var startPos = myField.selectionStart;
      var endPos = myField.selectionEnd;

      myField.value = myField.value.substring(0, startPos - 2) + myField.value.substring(endPos);

      myField.setSelectionRange(startPos - length, endPos - length);
    }
  });
};

window.onViewLinks = (linkDomHTML, hideSchemaForm) => {
  if (hideSchemaForm !== false) {
    document.body.innerHTML =
      linkDomHTML +
      `<div style="display: flex; margin-top: 1rem; align-items:center">
          <button onClick='window.onViewSchema()'>View Schema Source</button>
        </div>`;
  }

  document.querySelector("#fav").insertAdjacentHTML(
    "beforeend",
    `
      <form id='searchForm' onsubmit="return window.onSubmitNavigationSearch();">
        <input id='search' 
          list="linkList" 
          onInput="window.searchBookmarklet(document.querySelector('#search').value)"
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
  document.querySelector("#linkList").innerHTML = [...document.querySelectorAll("a.link")]
    .map((r) => r.innerText)
    .sort()
    .map((r) => `<option>${r}</option>`)
    .join("");
};

window.onGetGeneratedBookmarkletLink = (input) => {
  document.querySelector("#output").value = window.getNavBookmarkletFromSchema(input);
};

window.getNavBookmarkletFromSchema = (input) => {
  let output = window.getLinkDom(input);

  let rawOutput = `
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="https://synle.github.io/link/assets/navs.css">
      </head>
      <body>
        <div id='fav'>${output}</div>
        <js_script src="https://synle.github.io/link/assets/navs.js"></js_script>
        <js_script>
          window.onViewLinks(document.body.innerHTML);
          document.title = document.querySelector('.title').innerText.trim();
        </js_script>
      </body>
    </html>
  `
    .trim()
    .replace(/js_script/g, "script");

  return "data:text/html," + encodeURIComponent(rawOutput);
};

window.searchBookmarklet = (val) => {
  val = val.trim().toLowerCase();
  
  if(val.length === 0){
    for(const elem of document.querySelectorAll('#fav .header, #fav .link')){
      elem.classList.toggle("hidden", false);
    }  
    return;
  }

  // show or hide
  for(const elem of document.querySelectorAll('#fav .link')){
    let isHidden = true;
    
    const anchor = elem;
    if (val === "" || anchor.innerText.toLowerCase().includes(val) || anchor.href.toLowerCase().includes(val)) {
      isHidden = false;
    } else if (anchor.dataset.section && anchor.dataset.section.toLowerCase().trim().includes(val)){
      isHidden = false;
    }

    elem.classList.toggle("hidden", isHidden);
  }
  
  for(const elem of document.querySelectorAll('#fav .header')){
    let isHidden = true;
    
    const header = elem;
    let target = header.nextElementSibling;;
    let isVisible = false;

    while(target && target.classList.contains('link')){
      if(!target.classList.contains('hidden')){
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
  let currentHeaderName = '';

  let rawLinkHTML = lines.forEach((link) => {
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
      // section block
      if (isInABlock) {
        // end of a block
        newHTMLLines.push(`<pre class="block">${blockBuffer.trim()}</pre>`);
        isInABlock = false;
        blockBuffer = "";
        
        currentHeaderName = ''; // reset the header name
      } else {
        // start a block
        isInABlock = true;
      }
    } else {
      if (isInABlock) {
        // is in a block
        blockBuffer += link + "\n";
      } else {
        // anything else is a link
        let linkType;
        let linkText, linkUrl;

        try {
          // try parse as new tab link
          linkText = link.substr(0, link.indexOf(NEW_TAB_LINK_SPLIT)).trim();
          linkUrl = link.substr(link.indexOf(NEW_TAB_LINK_SPLIT) + NEW_TAB_LINK_SPLIT.length).trim();

          if (linkUrl && linkText) {
            linkType = 'newTabLink';
          }
        } catch (err) {}
        
        if(!linkType){
          // try parse as same tab link
          try {
            linkText = link.substr(0, link.indexOf(SAME_TAB_LINK_SPLIT)).trim();
            linkUrl = link.substr(link.indexOf(SAME_TAB_LINK_SPLIT) + SAME_TAB_LINK_SPLIT.length).trim();

            if (linkUrl && linkText) {
              linkType = 'sameTabLink';
            }
          } catch (err) {}
        }

        // if found a link type...
        if(linkType){
          if (linkUrl.indexOf("http://") !== 0 && linkUrl.indexOf("https://") !== 0) {
            linkUrl = `https://` + linkUrl;
          }

          if(linkType === 'sameTabLink'){
            newHTMLLines.push(`<a class="link sameTabLink" href="${linkUrl}" data-section="${currentHeaderName}">${linkText}</a>`);  
          } else { // new_tab_link
            newHTMLLines.push(`<a class="link newTabLink" href="${linkUrl}" target="_blank" data-section="${currentHeaderName}>${linkText}</a>`);
          }
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
  if(links && links.length > 0){
    location.href = links[0].href;
  }
  return false;
}

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

// special handling for ctrl + f to focus on searchbox
document.addEventListener('keydown', (e) => {
  const searchBox = document.querySelector('#search');
  if(searchBox){
    if(e.key === 'f' && (e.ctrlKey || e.altKey || e.metaKey)){
      searchBox.focus();
      e.preventDefault();
    }
  }
});
