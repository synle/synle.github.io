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
    <textarea id='input' placeholder="Bookmarklet Schema">${output}</textarea>
    <div style="display: flex;">
      <button onclick="window.onViewLinks(document.querySelector('#input').value)">View Links UI</button>
      <button onclick="window.onGetGeneratedBookmarkletLink(document.querySelector('#input').value)">Get Bookmarklet Link</button>
    </div>
  `;

  document.body.innerHTML = rawSchemaDataDom;
}

window.onViewLinks = (linkDomHTML) => {
  linkDomHTML = (linkDomHTML || '').trim();
  
  if(linkDomHTML){
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
    
    document.body.innerHTML = rawLinkHTML;
  } else {
    document.body.innerHTML = '';
  }
  
  document.body.innerHTML += `<div><button onClick='window.onViewSchema()'>View Schema Source</button></div>`
}

window.onGetGeneratedBookmarkletLink = (input) => {
  prompt('New BookmarkLink: ', window.getNavBookmarkletFromSchema(input));
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

// init
setTimeout(() => {
  if(location.href.includes('data:text/html')){
    // append the on view schema button
    document.body.innerHTML = `<div><input id='search' onInput="window.searchBookmarklet(document.querySelector('#search').value)" placeholder="Search bookmarklet"/></div>` 
      + document.body.innerHTML
      + `<div><button onClick='window.onViewSchema()'>View Schema Source</button></div>`;

    return
  }
});
