window.onViewSchema = () => {
  if(!window.schemaData){
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

    window.schemaData = `
      <pre contenteditable="true">${output}</pre>
      <div style="display: flex;">
        <button onclick="window.onViewLinks(window.linkData)">View Links UI</button>
        <a target="_blank" style="width: 200px; margin: auto;" href="https://synle.github.io/link/nav-generator.html">Nav Link Generator</a>
      </div>
    `;
    window.linkData = document.body.innerHTML;
  }

  document.body.innerHTML = window.schemaData;
}

window.onViewLinks = (linkDomHTML) => {
  if(linkDomHTML){
    document.body.innerHTML = linkDomHTML;
  }
  document.body.innerHTML += `<div><button onClick='window.onViewSchema()'>View Schema Source</button></div>`
}

// init
setTimeout(() => {
  // script to run after the page has loaded
  window.onViewLinks();
    
    
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

      document.querySelector('#search').focus();
    }
  })
  //
});
