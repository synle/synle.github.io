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

  output = output.join("<br />").trim()

  const rawSchemaDataDom = `
    <div><h1>Navigation Form</h1></div>
    <pre id='schemaDataContainer' contenteditable="true">${output}</pre>
    <div style="display: flex;">
      <button onclick="window.onViewLinks(document.querySelector('#schemaDataContainer').innerText)">View Links UI</button>
      <button onclick="window.onGetGeneratedBookmarkletLink(document.querySelector('#schemaDataContainer').innerText)">Get Bookmarklet Link</button>
      <a target="_blank" style="width: 200px; margin: auto;" href="https://synle.github.io/link/nav-generator.html">Nav Link Generator</a>
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

// init
setTimeout(() => {
  if(!location.href.includes('data:text/html')){
    // only do this for the main page not the data encoded
    return;
  }
  
  // script to run after the page has loaded
  // append the on view schema button
  document.body.innerHTML += `<div><button onClick='window.onViewSchema()'>View Schema Source</button></div>`
    
  // other events
   document.body.addEventListener('keydown', (e) => {
    switch(e.key){
      case 'Tab':
      case 'Enter':
      case 'Shift':
      case 'Control':
      case 'Alt':
      case 'Meta':
      case ' ':
        return;
    }

    if(document.activeElement !== document.querySelector('#search')){
      if(document.querySelectorAll('a.link') && document.querySelectorAll('a.link').length > 0){
        if(!document.querySelector('#search')){
            document.body.innerHTML = `<input id="search" autocomplete="off" style="margin-top: 1rem;background: #666; font-size: 18px; padding: 8px 10px;width: 100%;border: 1px solid #ccc;" placeholder="Search">` + document.body.innerHTML

            document.querySelector('#search').addEventListener('blur', (e) => {
              window.focused = false;
            })
            document.querySelector('#search').addEventListener('input', (e) => search(e.target.value))

            function search(val){
              val = val.trim().toLowerCase();

              for(const anchor of document.querySelectorAll('a')){
                if(val === '' || anchor.innerText.toLowerCase().includes(val) || anchor.href.toLowerCase().includes(val)){
                  anchor.style.display = 'block';
                } else {
                  anchor.style.display = 'none';
                }
              }
            }
          }
      }

      document.querySelector('#search') && document.querySelector('#search').focus();
    }
  })
  //
});
