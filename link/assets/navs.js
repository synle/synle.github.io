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
      <pre>${output}</pre>
      <div style="display: flex;">
        <button onclick="window.onViewLinks()">View Links UI</button>
        <a target="_blank" style="width: 200px; margin: auto;" href="https://synle.github.io/link/nav-generator.html">Nav Link Generator</a>
      </div>
    `;
    window.linkData = document.body.innerHTML;
  }

  document.body.innerHTML = window.schemaData;
}

window.onViewLinks = () => {
  document.body.innerHTML = window.linkData;
}

// script to run after the page has loaded
setTimeout(() => {
    document.body.innerHTML += `<div><button onClick='window.onViewSchema()'>View Schema Source</button></div>`
});
