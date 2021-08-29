import React, { useState, useEffect, useRef } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

(async () => {
  // code start here
  const SAME_TAB_LINK_SPLIT = '|';
  const NEW_TAB_LINK_SPLIT = '|||';
  const HEADER_SPLIT = '#';
  const TITLE_SPLIT = '!';
  const BLOCK_SPLIT = '```';
  const TAB_SPLIT = '>>>';
  const TAB_TITLE_SPLIT = '|';
  const FAV_ICON_SPLIT = '@';

  let isRenderedInDataUrl = location.href.indexOf('data:') === 0;
  let isRenderedInMainForm = !isRenderedInDataUrl;

  let cacheId = parseInt(Date.now());

  const DEFAULT_SCHEMA_TO_RENDER = `
    ! Navigation ${new Date().toLocaleString()}

    # Main Link Section
    google finance | finance.google.com

    # Secondary Section
    sample alert js | javascript://alert('hello')
    sample data url | data:text/html,%3Chtml%3E%0A%20%20%20%20%20%20%20%20%3Chead%3E%0A%20%20%20%20%20%20%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%20href%3D%22https%3A%2F%2Fsynle.github.io%2Flink%2Fassets%2Fnavs.css%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cmeta%20charset%3D'utf-8'%3E%0A%20%20%20%20%20%20%20%20%3C%2Fhead%3E%0A%20%20%20%20%20%20%20%20%3Cbody%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cscript%20src%3D%22https%3A%2F%2Fsynle.github.io%2Flink%2Fassets%2Fnavs.js%22%3E%3C%2Fscript%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cscript%20id%3D'schema'%20type%3D'schema'%3E!%20Data%20Test%20Navigation%0A%0A%23%20Main%20Section%0Agoogle%7Cgoogle.com%0A%3C%2Fscript%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20window.onViewLinks(window.getLinkDom(document.querySelector('%23schema').innerText.trim()))%3B%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fscript%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbody%3E%0A%20%20%20%20%20%20%3C%2Fhtml%3E

    # Notes
    \`\`\`
    TODO 1
    TODO 2
    \`\`\`

    # Tabs
    >>>tabName1|blockId1>>>tabName2|blockId2

    \`\`\`blockId1
    sample blockId1
    \`\`\`

    \`\`\`blockId2
    sample blockId2
    \`\`\`
  `
    .split('\n')
    .map((s) => s.trim())
    .join('\n');

  // react components
  function SearchBox(props) {
    const { onSearch } = props;

    return (
      <input
        id="search"
        list="autocompleteSearches"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="🔎︎ Search bookmark (prefix /fuzzyMatch)"
        autocomplete="off"
        spellcheck="false"
        autoFocus
        required
      />
    );
  }

  function SearchDisplay(props) {
    const { matchRegex, children } = props;
    return children;
  }

  function NavReadContainer(props) {
    const { schema, onSetViewMode, onSetSchema } = props;
    const [doms, setDoms] = useState('');
    const [searchText, setSearchText] = useState('');
    const [autocompleteSearches, setAutocompleteSearches] = useState([]);
    const [schemaCacheMap, setSchemaCacheMap] = useState({});
    const refContainer = useRef();

    // events
    const onEdit = () => {
      onSetViewMode('edit');
    };

    const onSearch = (newSearchText) => {
      setSearchText(newSearchText);
    };

    const onSubmitNavigationSearch = (e) => {
      e.preventDefault();

      if (refContainer && refContainer.current) {
        const doc = refContainer.current;

        const links = [...doc.querySelectorAll('.link:not(.hidden)')];

        // focus on the first link
        if (links.length > 0) {
          links[0].focus();
        }

        // only 1 result, then let's redirect
        if (links.length === 1 && links[0].href) {
          location.href = links[0].href;
        }
      }

      return false;
    };

    // generate the view dom
    useEffect(() => {
      const newAutocompleteSearches = new Set();
      const newDoms = [];
      const newSetSchemaCacheMap = {};

      // parse lines and generate views
      const lines = schema
        .trim()
        .split('\n')
        .filter((r) => r.indexOf('//') !== 0)
        .map((r) => r.trimEnd());

      if (lines[0][0] !== '!') {
        const headerSchemaSampleCode = `${TITLE_SPLIT} Unnamed Navigation - ${new Date().toLocaleString()}`;
        lines.unshift(headerSchemaSampleCode);
      }

      let blockBuffer = '';
      let isInABlock = false;
      let currentHeaderName = '';
      let blockId = '';
      let pageFavIcon = '📑';
      let pageTitle;

      let rawLinkHTML = lines.forEach((link) => {
        if (isInABlock) {
          // is in a block
          if (link.trim().indexOf(BLOCK_SPLIT) === 0) {
            // end of a block
            newDoms.push(
              <pre
                className="block"
                id={blockId}
                onDoubleClick={(e) => helper.onCopyToClipboard(e.target.innerText.trim(), true)}>
                {blockBuffer.trim()}
              </pre>,
            );
            isInABlock = false;
            blockBuffer = '';

            currentHeaderName = ''; // reset the header name

            blockId = '';
          } else {
            blockBuffer += link + '\n';
          }

          return;
        }

        if (link.trim().indexOf(FAV_ICON_SPLIT) === 0) {
          pageFavIcon = link.replace(/^[@]+/, '').trim();
        } else if (link.trim().indexOf(TITLE_SPLIT) === 0) {
          // page title
          const headerText = link.replace(TITLE_SPLIT, '').trim();
          pageTitle = headerText;
          newDoms.push(<h1 className="title">{headerText}</h1>);
        } else if (link.trim().indexOf(HEADER_SPLIT) === 0) {
          // section header
          const headerText = link.replace(HEADER_SPLIT, '').trim();
          newDoms.push(<h2 className="header">{headerText}</h2>);

          currentHeaderName = headerText;
        } else if (link.trim().indexOf(BLOCK_SPLIT) === 0) {
          // start a block
          isInABlock = true;
          if (link.length > BLOCK_SPLIT.length) {
            blockId = link.substr(blockId.indexOf(BLOCK_SPLIT) + BLOCK_SPLIT.length + 1);
          }
        } else if (link.trim().indexOf(TAB_SPLIT) === 0) {
          // is a tab >>>tabName1|blockId1>>>tabName2|blockId2
          let tabContent = [];
          let isFirstTab = true;
          link
            .split(TAB_SPLIT)
            .map((r) => r.trim())
            .filter((r) => !!r)
            .forEach((t) => {
              const [tabName, tabId] = t.split(TAB_TITLE_SPLIT);
              if (tabName && tabId) {
                tabContent.push(
                  <tab tabIndex="0" data-tab-id={tabId.trim()}>
                    {tabName.trim()}
                  </tab>,
                );
              }
            });

          newDoms.push(<tabs className="tabs">{tabContent}</tabs>);
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
              linkType = 'newTabLink';
            }
          } catch (err) {}

          if (!linkType) {
            // try parse as same tab link
            try {
              linkText = link.substr(0, link.indexOf(SAME_TAB_LINK_SPLIT)).trim();
              linkUrl = link
                .substr(link.indexOf(SAME_TAB_LINK_SPLIT) + SAME_TAB_LINK_SPLIT.length)
                .trim();

              if (linkUrl && linkText) {
                linkType = 'sameTabLink';
              }
            } catch (err) {}
          }

          // if found a link type...
          if (linkType) {
            if (
              linkUrl.indexOf('http://') !== 0 &&
              linkUrl.indexOf('https://') !== 0 &&
              linkUrl.indexOf('javascript://') !== 0 &&
              linkUrl.indexOf('data:') !== 0
            ) {
              // prepend the link url https://
              linkUrl = `https://${linkUrl}`;
            }

            const newCacheId = ++cacheId;

            if (linkUrl.indexOf('javascript://') === 0) {
              // js func link
              const jsFunc = linkUrl.replace('javascript://', '');
              schemaCacheMap[newCacheId] = jsFunc;
              newDoms.push(
                <button
                  className="link jsLink"
                  type="button"
                  onMouseDown={() => eval(schemaCacheMap[newCacheId])}
                  data-section={currentHeaderName}>
                  {linkText}
                </button>,
              );
            } else if (linkUrl.indexOf('data:') === 0) {
              // data url link
              schemaCacheMap[newCacheId] = linkUrl;
              newDoms.push(
                <button
                  className="link dataLink"
                  type="button"
                  onMouseDown={() => helper.navigateToDataUrl(schemaCacheMap[newCacheId])}
                  data-section={currentHeaderName}>
                  {linkText}
                </button>,
              );
            } else if (linkType === 'sameTabLink') {
              // same tab link
              schemaCacheMap[newCacheId] = linkUrl;
              newDoms.push(
                <a
                  className="link sameTabLink"
                  href={schemaCacheMap[newCacheId]}
                  data-section={currentHeaderName}>
                  {linkText}
                </a>,
              );
            } else {
              // new_tab_link
              schemaCacheMap[newCacheId] = linkUrl;
              newDoms.push(
                <a
                  className="link newTabLink"
                  target="_blank"
                  href={schemaCacheMap[newCacheId]}
                  data-section={currentHeaderName}>
                  {linkText}
                </a>,
              );
            }

            newAutocompleteSearches.add(linkText);
          }
        }
      });

      // insert the fav icon
      document.querySelector('#pageFavIcon') && document.querySelector('#pageFavIcon').remove();
      const favIconEncoded =
        encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><text x='0' y='14'>`,
        ) +
        pageFavIcon +
        encodeURIComponent(`</text></svg>`);
      document.head.insertAdjacentHTML(
        'beforeend',
        `<link id='pageFavIcon' data-fav-icon="${pageFavIcon}" rel="icon" href="data:image/svg+xml,${favIconEncoded}" />`,
      );

      // set the page title
      document.title = pageTitle;

      // update the doms
      setSchemaCacheMap(newSetSchemaCacheMap);
      setDoms(newDoms);
      setAutocompleteSearches([...newAutocompleteSearches]);
    }, [schema]);

    // handling search
    useEffect(() => {
      if (refContainer && refContainer.current) {
        const doc = refContainer.current;

        if (searchText.length === 0) {
          for (const elem of doc.querySelectorAll('.link')) {
            elem.classList.remove('hidden');
          }
          return;
        }

        // remove all non alphanumeric
        let exactMatchregex = new RegExp(searchText.replace(/"/g, ''), 'i');
        let matchRegex = exactMatchregex;
        if (searchText[0] === '/') {
          // fuzzy match
          const cleanedSearchText = searchText
            .replace(/[\W_]+/gi, ' ')
            .replace(/[ ][ ]+/, ' ')
            .trim();

          matchRegex = new RegExp('[ ]*' + cleanedSearchText.split('').join('[a-z0-9 -_]*'), 'i');
        }

        // show or hide
        for (const elem of doc.querySelectorAll('.link')) {
          let isHidden = true;

          const link = (elem.href || '')
            .replace(/http[s]/gi, '')
            .replace(/www/gi, '')
            .replace(/html/gi, '')
            .replace(/index/gi, '')
            .replace(/[/.]/gi, '');

          const text = elem.innerText || '';

          if (text.match(matchRegex)) {
            isHidden = false;
          } else if (elem.dataset.section && elem.dataset.section.match(exactMatchregex)) {
            isHidden = false;
          } else if (link.match(exactMatchregex)) {
            isHidden = false;
          }

          elem.classList.toggle('hidden', isHidden);
        }
      }
    }, [doms, searchText, refContainer.current]);

    // handling tabs
    useEffect(() => {
      if (refContainer && refContainer.current) {
        const doc = refContainer.current;

        const tabsList = [...doc.querySelectorAll('tabs')];

        for (const tabs of tabsList) {
          const tabChildren = [...tabs.querySelectorAll('tab')];
          for (const tab of tabChildren) {
            // hooking up the onclick
            tab.onclick = () => {
              for (const targetTab of tabChildren) {
                const targetTabId = targetTab.dataset.tabId;
                if (tab === targetTab) {
                  doc.querySelector(`#${tab.dataset.tabId}`).style.display = 'block';
                  tab.classList.add('selected');
                } else {
                  doc.querySelector(`#${targetTabId}`).style.display = 'none';
                  targetTab.classList.remove('selected');
                }
              }
            };
          }

          // trigger the first tab selection
          tabChildren[0].onclick();
        }
      }
    }, [doms, refContainer.current]);

    // render the main view
    if (!doms || doms.length === 0) {
      return null;
    }

    return (
      <>
        <div id="fav" ref={refContainer}>
          {doms}
          <form id="searchForm" onSubmit={(e) => onSubmitNavigationSearch(e)}>
            <SearchBox onSearch={onSearch} />
          </form>
          <datalist id="autocompleteSearches">
            {autocompleteSearches.map((search) => (
              <option key={search}>{search}</option>
            ))}
          </datalist>
        </div>
        <div className="footer">
          <button onClick={() => onEdit()}>Edit</button>
        </div>
      </>
    );
  }

  function NavEditContainer(props) {
    const { schema, onSetViewMode, onSetSchema } = props;
    const [bufferSchema, setBufferSchema] = useState(schema.trim());
    const [hasPendingChanges, setHasPendingChanges] = useState(false);
    const [bookmark, setBookmark] = useState('');

    // events
    const onApply = () => {
      onSetSchema(bufferSchema); // update schema
      onSetViewMode('read');

      //update the cache in the session storage
      helper.persistBufferSchema(bufferSchema); // commit the changes
    };

    const onCancel = () => {
      if (hasPendingChanges) {
        if (!confirm('Cancel?')) {
          return;
        }
      }

      onSetViewMode('read');
    };

    const onTest = () => {
      const base64URL = helper.getNavBookmarkletFromSchema(schema);
      helper.navigateToDataUrl(base64URL, true);
    };

    const onSetBufferSchema = (newBufferSchema) => {
      setBufferSchema(newBufferSchema);
      setHasPendingChanges(true);
    };

    const onZoomInput = (target) => {
      [...document.querySelectorAll('#input,#output')].forEach(
        (elem) => (elem.style.flexGrow = ''),
      );
      target.style.flexGrow = '1';
    };

    // effects
    useEffect(() => {
      // store it into cache
      helper.persistBufferSchema(schema);

      return () => {
        window.onbeforeunload = undefined;
      };
    }, []);

    // trigger the confirmation to save before unload
    useEffect(() => {
      if (hasPendingChanges) {
        window.onbeforeunload = function (e) {
          e.preventDefault();
          return (e.returnValue = 'You have unsaved changes. Do you want to continue with exit?');
        };
      }
    }, [hasPendingChanges]);

    useEffect(() => {
      setBookmark(helper.getNavBookmarkletFromSchema(bufferSchema));
    }, [bufferSchema]);

    // generate the view
    return (
      <div id="command">
        <div>
          <h1 className="title">Navigation Form</h1>
        </div>
        <div className="commandHeader">
          <button type="button" onClick={() => onApply()}>
            Apply
          </button>
          <button type="button" onClick={() => onCancel()}>
            Cancel
          </button>
          <div className="dropdown">
            <a className="dropdown-trigger">Actions</a>
            <div className="dropdown-content">
              <a target="_blank" href="https://synle.github.io/link/nav-generator.html?newNav">
                New
              </a>
              <a
                target="_blank"
                href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.js">
                JS Code
              </a>
              <a
                target="_blank"
                href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.css">
                CSS Code
              </a>
              <button type="button" onClick={() => onTest()}>
                Test
              </button>
            </div>
          </div>
        </div>
        <textarea
          id="input"
          wrap="soft"
          spellcheck="false"
          autoFocus
          value={bufferSchema}
          onFocus={(e) => onZoomInput(e.target)}
          onInput={(e) => onSetBufferSchema(e.target.value)}
          onDoubleClick={() => helper.onCopyToClipboard(bufferSchema, true)}></textarea>
        <textarea
          id="output"
          wrap="soft"
          spellcheck="false"
          value={bookmark}
          onFocus={(e) => onZoomInput(e.target)}
          onDoubleClick={() => helper.onCopyToClipboard(bookmark, true)}></textarea>
      </div>
    );
  }

  function NavCreateContainer(props) {
    const { schema, onSetViewMode, onSetSchema } = props;
    return <>create {schema}</>;
  }

  // main app starts here
  function App(props) {
    const [viewMode, setViewMode] = useState(props.viewMode); // read, edit, create
    const [schema, setSchema] = useState(props.schema);

    // events
    const onSetViewMode = (newView) => setViewMode(newView);
    const onSetSchema = (newSchema) => setSchema(newSchema);

    // render the proper views
    const allProps = { schema, onSetSchema, onSetViewMode };
    switch (viewMode) {
      case 'read':
        return <NavReadContainer {...allProps} />;
      case 'edit':
        return <NavEditContainer {...allProps} />;
      case 'create':
        return <NavCreateContainer {...allProps} />;
    }
  }

  // initialization
  // hooking up extra meta data
  document.head.insertAdjacentHTML(
    'beforeend',
    `
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta http-equiv="Cache-Control" content="no-cache" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="page-enter" content="revealtrans(duration=seconds,transition=num)" />
      <meta http-equiv="page-exit" content="revealtrans(duration=seconds,transition=num)" />
    `.trim(),
  );

  // app level events
  document.addEventListener(
    'keydown',
    (e) => {
      // handling enter and spacebar on focusable div
      const { key } = e;
      const target = e.target;

      if (target.onclick) {
        if (key === 'Enter' || key === ' ') {
          try {
            target.onclick.apply();
          } catch (err) {
            try {
              target.click();
            } catch (err) {}
          }
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      } else if (key === 'Escape' && document.querySelector('#promptModal')) {
        try {
          document.querySelector('#promptModal #promptInput').onblur();
        } catch (err) {}
      } else if (key === 'Escape' && document.querySelector('#alertModal')) {
        try {
          document.querySelector('#alertModal #alertBody').onblur();
        } catch (err) {}
      } else if (document.querySelector('#search')) {
        // special handling for ctrl + f to focus on searchbox
        const searchBox = document.querySelector('#search');
        if (searchBox) {
          if (key === 'f' && (e.ctrlKey || e.altKey || e.metaKey)) {
            searchBox.focus();
            e.preventDefault();
          }
        }
      }
    },
    true,
  );

  // find and parse the schema from script
  let inputSchema = helper.getPersistedBufferSchema() || '';
  let viewMode = 'read';

  if (location.search.includes('loadNav')) {
    // will wait for postmessage to populate this
    window.history.pushState('', '', '?');

    await new Promise((resolve) => {
      const _onHandlePostMessageEvent = (event) => {
        const { type } = event.data;
        const newSchema = event.data.schema;
        if (type === 'onViewLinks') {
          try {
            helper.persistBufferSchema(newSchema);
            inputSchema = newSchema;
            resolve();
          } catch (err) {}
        }
      };
      window.addEventListener('message', _onHandlePostMessageEvent);
    });
  } else if (location.search.includes('newNav')) {
    // render as edit mode for newNav
    window.history.pushState('', '', '?');
    helper.persistBufferSchema(DEFAULT_SCHEMA_TO_RENDER);
    inputSchema = DEFAULT_SCHEMA_TO_RENDER;
    viewMode = 'edit';
  } else if (window.fetchSchemaScript) {
    // fetch the schema from the override
    try {
      inputSchema = await window.fetchSchemaScript();
    } catch (err) {}
  } else {
    // use the schema script instead here...
    try {
      inputSchema = document.querySelector('#schema').innerText.trim();
    } catch (err) {}
  }

  ReactDOM.render(<App schema={inputSchema} viewMode={viewMode} />, document.body);
})();
