const LINK_SPLIT = "|||";
const SECTION_HEADER_SPLIT= '#';

window.onViewSchema = () => {
  var LINK_SPLIT = "|||";
  var SECTION_HEADER_SPLIT = "#";
  var output = [];
  var elems = document.querySelectorAll(".link,.header");
  for (var elem of elems) {
      if (elem.classList.contains("link")) {
          var link = elem;
          var fullLink = link.href;
          var description = link.innerHTML;
          output.push(fullLink + LINK_SPLIT + description);
    } else {
      var header = elem;
      var description = header.innerHTML;

      output.push(SECTION_HEADER_SPLIT + description);
    }
  };

  output = output.join("\n").trim()

  const rawSchemaDataDom = `
    <div><h1>Navigation Form</h1></div>
    <textarea id='input' placeholder="Bookmarklet Input Schema" onfocus="window.zoominInput(this)" onblur="window.zoominOutput(this); window.onGetGeneratedBookmarkletLink(document.querySelector('#input').value)">${output}</textarea>
    <textarea id='output' placeholder="Bookmarklet Output" onfocus="window.zoominInput(this)" onblur="window.zoominOutput(this);"></textarea>
    <div style="display: flex;">
      <button onclick="window.onViewLinks(window.getLinkDom(document.querySelector('#input').value))">View Links UI</button>
      <a target="_blank" style="width: 200px; margin: auto;" href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.js">View Source</a>
    </div>
  `;
  
  window.zoominInput = (target) => {
    target.style.height = (document.body.clientHeight - 300 ) + 'px';
  }
  
  window.zoominOutput = (target) => {
    target.style.height = '';
  }

  document.body.innerHTML = rawSchemaDataDom;
  
  document.querySelector('#input').focus();
  
  window.onGetGeneratedBookmarkletLink(document.querySelector('#input').value);
}

window.onViewLinks = (linkDomHTML) => {  
  // append the extra stuffs
  document.body.innerHTML = `<input id='search' onInput="window.searchBookmarklet(document.querySelector('#search').value)" placeholder="Search bookmarklet" style="display: block" />` 
      + linkDomHTML
      + `<div><button onClick='window.onViewSchema()'>View Schema Source</button></div>`;
}

window.onGetGeneratedBookmarkletLink = (input) => {
  document.querySelector('#output').value = window.getNavBookmarkletFromSchema(input);
  document.querySelector('#output').focus();
}

window.getNavBookmarkletFromSchema = (input) => {
  let output = [];

  for (const link of (input || '')
    .trim()
    .split("\n")
    .map((r) => r.trim())
    .filter((r) => !!r)) {
    if(link.indexOf(SECTION_HEADER_SPLIT) === 0){
      const description = link.replace(SECTION_HEADER_SPLIT, '').trim();

      output.push(
        `<h2 class='header'>${description}</h2>`
      );
    } else {
      const [fullLink, description] = link
        .split(LINK_SPLIT)
        .map((r) => r.trim());

      output.push(
        `<a class='link' href="${fullLink}">${description}</a>`
      );
    }
  }

  let rawOutput = `
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="https://synle.github.io/link/assets/navs.css">
        <js_script src="https://synle.github.io/link/assets/navs.js"></js_script>
      </head>
      <body>
        <div>${output.join("\n")}</div>
        <js_script>window.onViewLinks(document.body.innerHTML)</js_script>
      </body>
    </html>
  `.trim().replace(/js_script/g, 'script');

  return 'data:text/html,' + encodeURIComponent(rawOutput);
}


window.searchBookmarklet = (val) => {
  val = val.trim().toLowerCase();

  for(const anchor of document.querySelectorAll('a')){
    if(val === '' || anchor.innerText.toLowerCase().includes(val) || anchor.href.toLowerCase().includes(val)){
      anchor.style.display = 'block';
    } else {
      anchor.style.display = 'none';
    }
  }
}

window.getLinkDom = (linkDomHTML) => {
  let rawLinkHTML = linkDomHTML.split('\n').map(r => {
    let [linkUrl, linkText] = r.split(LINK_SPLIT);
    linkUrl = (linkUrl || '').trim();
    linkText = (linkText || '').trim();

    if(linkUrl && linkText){
      return `<a class="link" href="${linkUrl}">${linkText}</a>`;
    }

    if(linkUrl[0] === SECTION_HEADER_SPLIT){
      linkUrl = linkUrl.replace(/#/g, '');
      return `<h2 class="header">${linkUrl}</h2>`
    }

    return undefined;
  }).filter(r => !!r).join('\n');

  rawLinkHTML = `<div>${rawLinkHTML}</div>`
  
  return rawLinkHTML;
}
