const LINK_SPLIT = "|";
const SECTION_HEADER_SPLIT = "#";
const TITLE_SPLIT = "!";

window.onViewSchema = () => {
  var output = [];
  var elems = document.querySelectorAll(".title,.link,.header");
  for (var elem of elems) {
    if (elem.classList.contains("title")) {
      var description = elem.innerText.trim();
      output.push(`\n${TITLE_SPLIT} ${description}`);
    } else if (elem.classList.contains("link")) {
      var link = elem;
      var fullLink = link.href;
      var description = link.innerHTML;
      output.push(`${description} ${LINK_SPLIT} ${fullLink}`);
    } else {
      var header = elem;
      var description = header.innerHTML;

      output.push(`\n${SECTION_HEADER_SPLIT} ${description}`);
    }
  }

  output = output.join("\n").trim();

  const rawSchemaDataDom = `
    <div><h1>Navigation Form</h1></div>
    <div style="display: flex; margin-bottom: 1rem; align-items:center">
      <button onclick="window.onViewLinks(window.getLinkDom(document.querySelector('#input').value))">View Links UI</button>
      <button onclick="window.onTestNav()">Test Nav</button>
      <a target="_blank" style="text-align: center; margin: auto;" href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.js">View Source</a>
    </div>
    <textarea id='input' placeholder="Bookmarklet Input Schema" wrap="soft" onfocus="window.zoominInput(this)" onblur="window.zoominOutput(this)" onkeyup="window.onGetGeneratedBookmarkletLink(document.querySelector('#input').value)">${output}</textarea>
    <textarea id='output' placeholder="Bookmarklet Output" wrap="soft" onfocus="window.zoominInput(this)" onblur="window.zoominOutput(this)"></textarea>
  `;

  window.zoominInput = (target) => {
    target.style.minHeight = document.body.clientHeight - 275 + "px";
  };

  window.zoominOutput = (target) => {
    target.style.minHeight = "";
  };

  document.body.innerHTML = rawSchemaDataDom;

  window.onGetGeneratedBookmarkletLink(document.querySelector("#input").value);
};

window.onViewLinks = (linkDomHTML) => {
  // append the extra stuffs
  document.body.innerHTML =
    linkDomHTML +
    `<div style="display: flex; margin-top: 1rem; align-items:center">
        <button onClick='window.onViewSchema()'>View Schema Source</button>
      </div>`;

  document
    .querySelector(".title")
    .insertAdjacentHTML(
      "afterend",
      `<input id='search' onInput="window.searchBookmarklet(document.querySelector('#search').value)" placeholder="Search bookmarklet" style="display: block" autofocus />`
    );
};

window.onGetGeneratedBookmarkletLink = (input) => {
  document.querySelector("#output").value = window.getNavBookmarkletFromSchema(input);
};

window.getNavBookmarkletFromSchema = (input) => {
  let output = [];
  let foundNavigation = false;

  for (const link of (input || "")
    .trim()
    .split("\n")
    .map((r) => r.trim())
    .filter((r) => !!r)) {
    if (link.indexOf(TITLE_SPLIT) === 0) {
      const description = link.replace(TITLE_SPLIT, "").trim();

      foundNavigation = true;

      output.push(`<h1 class='title'>${description}</h1>`);
    } else if (link.indexOf(SECTION_HEADER_SPLIT) === 0) {
      const description = link.replace(SECTION_HEADER_SPLIT, "").trim();

      output.push(`<h2 class='header'>${description}</h2>`);
    } else {
      const [description, fullLink] = link.split(LINK_SPLIT).map((r) => r.trim());

      output.push(`<a class='link' href="${fullLink}">${description}</a>`);
    }
  }

  if (!foundNavigation) {
    output.unshift(`<h1 class='title'>Navigation ${new Date().toLocaleString()}</h1>`);
  }

  let rawOutput = `
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="https://synle.github.io/link/assets/navs.css">
      </head>
      <body>
        <div id='fav'>${output.join("\n")}</div>
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

  for (const anchor of document.querySelectorAll("a")) {
    if (val === "" || anchor.innerText.toLowerCase().includes(val) || anchor.href.toLowerCase().includes(val)) {
      anchor.style.display = "block";
    } else {
      anchor.style.display = "none";
    }
  }
};

window.getLinkDom = (linkDomHTML) => {
  let rawLinkHTML = linkDomHTML
    .trim()
    .split("\n")
    .map((r) => r.trim())
    .filter((r) => !!r)
    .map((r) => {
      const link = r;

      if (link.indexOf(TITLE_SPLIT) === 0) {
        // page title
        const headerText = r.replace(TITLE_SPLIT, "").trim();
        return `<h1 class="title">${headerText}</h1>`;
      }

      if (link.indexOf(SECTION_HEADER_SPLIT) === 0) {
        // section header
        const headerText = r.replace(SECTION_HEADER_SPLIT, "").trim();
        return `<h2 class="header">${headerText}</h2>`;
      }

      try {
        let linkText, linkUrl;
        linkText = r.substr(0, r.indexOf(LINK_SPLIT)).trim();
        linkUrl = r.substr(r.indexOf(LINK_SPLIT) + 1).trim();

        if (linkUrl && linkText) {
          return `<a class="link" href="${linkUrl}">${linkText}</a>`;
        }
      } catch (err) {}

      return undefined;
    })
    .filter((r) => !!r)
    .join("\n");

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

// insert zoom scale of 1 for mobile
document.head.insertAdjacentHTML("beforeend", `<meta name="viewport" content="width=device-width, initial-scale=1" />`);
