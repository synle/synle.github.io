"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    // react components
    function SearchBox(props) {
        var onSearch = props.onSearch;
        return (<input id="search" list="autocompleteSearches" onChange={function (e) { return onSearch(e.target.value); }} placeholder="🔎︎ Search bookmark (prefix /fuzzyMatch)" autocomplete="off" spellcheck="false" autoFocus required/>);
    }
    function SearchDisplay(props) {
        var matchRegex = props.matchRegex, children = props.children;
        return children;
    }
    function NavReadContainer(props) {
        var schema = props.schema, onSetViewMode = props.onSetViewMode, onSetSchema = props.onSetSchema;
        var _a = (0, react_1.useState)(''), doms = _a[0], setDoms = _a[1];
        var _b = (0, react_1.useState)(''), searchText = _b[0], setSearchText = _b[1];
        var _c = (0, react_1.useState)([]), autocompleteSearches = _c[0], setAutocompleteSearches = _c[1];
        var _d = (0, react_1.useState)({}), schemaCacheMap = _d[0], setSchemaCacheMap = _d[1];
        var refContainer = (0, react_1.useRef)();
        // events
        var onEdit = function () {
            onSetViewMode('edit');
        };
        var onSearch = function (newSearchText) {
            setSearchText(newSearchText);
        };
        var onSubmitNavigationSearch = function (e) {
            e.preventDefault();
            if (refContainer && refContainer.current) {
                var doc = refContainer.current;
                var links = __spreadArray([], doc.querySelectorAll('.link:not(.hidden)'), true);
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
        (0, react_1.useEffect)(function () {
            var newAutocompleteSearches = new Set();
            var newDoms = [];
            var newSetSchemaCacheMap = {};
            // parse lines and generate views
            var lines = schema
                .trim()
                .split('\n')
                .filter(function (r) { return r.indexOf('//') !== 0; })
                .map(function (r) { return r.trimEnd(); });
            if (lines[0][0] !== '!') {
                var headerSchemaSampleCode = TITLE_SPLIT + " Unnamed Navigation - " + new Date().toLocaleString();
                lines.unshift(headerSchemaSampleCode);
            }
            var blockBuffer = '';
            var isInABlock = false;
            var currentHeaderName = '';
            var blockId = '';
            var pageFavIcon = '📑';
            var pageTitle;
            var rawLinkHTML = lines.forEach(function (link) {
                if (isInABlock) {
                    // is in a block
                    if (link.trim().indexOf(BLOCK_SPLIT) === 0) {
                        // end of a block
                        newDoms.push(<pre className="block" id={blockId} onDoubleClick={function (e) { return helper.onCopyToClipboard(e.target.innerText.trim(), true); }}>
                {blockBuffer.trim()}
              </pre>);
                        isInABlock = false;
                        blockBuffer = '';
                        currentHeaderName = ''; // reset the header name
                        blockId = '';
                    }
                    else {
                        blockBuffer += link + '\n';
                    }
                    return;
                }
                if (link.trim().indexOf(FAV_ICON_SPLIT) === 0) {
                    pageFavIcon = link.replace(/^[@]+/, '').trim();
                }
                else if (link.trim().indexOf(TITLE_SPLIT) === 0) {
                    // page title
                    var headerText = link.replace(TITLE_SPLIT, '').trim();
                    pageTitle = headerText;
                    newDoms.push(<h1 className="title">{headerText}</h1>);
                }
                else if (link.trim().indexOf(HEADER_SPLIT) === 0) {
                    // section header
                    var headerText = link.replace(HEADER_SPLIT, '').trim();
                    newDoms.push(<h2 className="header">{headerText}</h2>);
                    currentHeaderName = headerText;
                }
                else if (link.trim().indexOf(BLOCK_SPLIT) === 0) {
                    // start a block
                    isInABlock = true;
                    if (link.length > BLOCK_SPLIT.length) {
                        blockId = link.substr(blockId.indexOf(BLOCK_SPLIT) + BLOCK_SPLIT.length + 1);
                    }
                }
                else if (link.trim().indexOf(TAB_SPLIT) === 0) {
                    // is a tab >>>tabName1|blockId1>>>tabName2|blockId2
                    var tabContent_1 = [];
                    var isFirstTab = true;
                    link
                        .split(TAB_SPLIT)
                        .map(function (r) { return r.trim(); })
                        .filter(function (r) { return !!r; })
                        .forEach(function (t) {
                        var _a = t.split(TAB_TITLE_SPLIT), tabName = _a[0], tabId = _a[1];
                        if (tabName && tabId) {
                            tabContent_1.push(<tab tabIndex="0" data-tab-id={tabId.trim()}>
                    {tabName.trim()}
                  </tab>);
                        }
                    });
                    newDoms.push(<tabs className="tabs">{tabContent_1}</tabs>);
                }
                else {
                    // anything else is a link
                    var linkType = void 0;
                    var linkText = void 0, linkUrl = void 0;
                    try {
                        // try parse as new tab link
                        linkText = link.substr(0, link.indexOf(NEW_TAB_LINK_SPLIT)).trim();
                        linkUrl = link
                            .substr(link.indexOf(NEW_TAB_LINK_SPLIT) + NEW_TAB_LINK_SPLIT.length)
                            .trim();
                        if (linkUrl && linkText) {
                            linkType = 'newTabLink';
                        }
                    }
                    catch (err) { }
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
                        }
                        catch (err) { }
                    }
                    // if found a link type...
                    if (linkType) {
                        if (linkUrl.indexOf('http://') !== 0 &&
                            linkUrl.indexOf('https://') !== 0 &&
                            linkUrl.indexOf('javascript://') !== 0 &&
                            linkUrl.indexOf('data:') !== 0) {
                            // prepend the link url https://
                            linkUrl = "https://" + linkUrl;
                        }
                        var newCacheId_1 = ++cacheId;
                        if (linkUrl.indexOf('javascript://') === 0) {
                            // js func link
                            var jsFunc = linkUrl.replace('javascript://', '');
                            schemaCacheMap[newCacheId_1] = jsFunc;
                            newDoms.push(<button className="link jsLink" type="button" onMouseDown={function () { return eval(schemaCacheMap[newCacheId_1]); }} data-section={currentHeaderName}>
                  {linkText}
                </button>);
                        }
                        else if (linkUrl.indexOf('data:') === 0) {
                            // data url link
                            schemaCacheMap[newCacheId_1] = linkUrl;
                            newDoms.push(<button className="link dataLink" type="button" onMouseDown={function () { return helper.navigateToDataUrl(schemaCacheMap[newCacheId_1]); }} data-section={currentHeaderName}>
                  {linkText}
                </button>);
                        }
                        else if (linkType === 'sameTabLink') {
                            // same tab link
                            schemaCacheMap[newCacheId_1] = linkUrl;
                            newDoms.push(<a className="link sameTabLink" href={schemaCacheMap[newCacheId_1]} data-section={currentHeaderName}>
                  {linkText}
                </a>);
                        }
                        else {
                            // new_tab_link
                            schemaCacheMap[newCacheId_1] = linkUrl;
                            newDoms.push(<a className="link newTabLink" target="_blank" href={schemaCacheMap[newCacheId_1]} data-section={currentHeaderName}>
                  {linkText}
                </a>);
                        }
                        newAutocompleteSearches.add(linkText);
                    }
                }
            });
            // insert the fav icon
            document.querySelector('#pageFavIcon') && document.querySelector('#pageFavIcon').remove();
            var favIconEncoded = encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><text x='0' y='14'>") +
                pageFavIcon +
                encodeURIComponent("</text></svg>");
            document.head.insertAdjacentHTML('beforeend', "<link id='pageFavIcon' data-fav-icon=\"" + pageFavIcon + "\" rel=\"icon\" href=\"data:image/svg+xml," + favIconEncoded + "\" />");
            // set the page title
            document.title = pageTitle;
            // update the doms
            setSchemaCacheMap(newSetSchemaCacheMap);
            setDoms(newDoms);
            setAutocompleteSearches(__spreadArray([], newAutocompleteSearches, true));
        }, [schema]);
        // handling search
        (0, react_1.useEffect)(function () {
            if (refContainer && refContainer.current) {
                var doc = refContainer.current;
                if (searchText.length === 0) {
                    for (var _i = 0, _a = doc.querySelectorAll('.link'); _i < _a.length; _i++) {
                        var elem = _a[_i];
                        elem.classList.remove('hidden');
                    }
                    return;
                }
                // remove all non alphanumeric
                var exactMatchregex = new RegExp(searchText.replace(/"/g, ''), 'i');
                var matchRegex = exactMatchregex;
                if (searchText[0] === '/') {
                    // fuzzy match
                    var cleanedSearchText = searchText
                        .replace(/[\W_]+/gi, ' ')
                        .replace(/[ ][ ]+/, ' ')
                        .trim();
                    matchRegex = new RegExp('[ ]*' + cleanedSearchText.split('').join('[a-z0-9 -_]*'), 'i');
                }
                // show or hide
                for (var _b = 0, _c = doc.querySelectorAll('.link'); _b < _c.length; _b++) {
                    var elem = _c[_b];
                    var isHidden = true;
                    var link = (elem.href || '')
                        .replace(/http[s]/gi, '')
                        .replace(/www/gi, '')
                        .replace(/html/gi, '')
                        .replace(/index/gi, '')
                        .replace(/[/.]/gi, '');
                    var text = elem.innerText || '';
                    if (text.match(matchRegex)) {
                        isHidden = false;
                    }
                    else if (elem.dataset.section && elem.dataset.section.match(exactMatchregex)) {
                        isHidden = false;
                    }
                    else if (link.match(exactMatchregex)) {
                        isHidden = false;
                    }
                    elem.classList.toggle('hidden', isHidden);
                }
            }
        }, [doms, searchText, refContainer.current]);
        // handling tabs
        (0, react_1.useEffect)(function () {
            if (refContainer && refContainer.current) {
                var doc_1 = refContainer.current;
                var tabsList = __spreadArray([], doc_1.querySelectorAll('tabs'), true);
                var _loop_1 = function (tabs) {
                    var tabChildren = __spreadArray([], tabs.querySelectorAll('tab'), true);
                    var _loop_2 = function (tab) {
                        // hooking up the onclick
                        tab.onclick = function () {
                            for (var _i = 0, tabChildren_2 = tabChildren; _i < tabChildren_2.length; _i++) {
                                var targetTab = tabChildren_2[_i];
                                var targetTabId = targetTab.dataset.tabId;
                                if (tab === targetTab) {
                                    doc_1.querySelector("#" + tab.dataset.tabId).style.display = 'block';
                                    tab.classList.add('selected');
                                }
                                else {
                                    doc_1.querySelector("#" + targetTabId).style.display = 'none';
                                    targetTab.classList.remove('selected');
                                }
                            }
                        };
                    };
                    for (var _a = 0, tabChildren_1 = tabChildren; _a < tabChildren_1.length; _a++) {
                        var tab = tabChildren_1[_a];
                        _loop_2(tab);
                    }
                    // trigger the first tab selection
                    tabChildren[0].onclick();
                };
                for (var _i = 0, tabsList_1 = tabsList; _i < tabsList_1.length; _i++) {
                    var tabs = tabsList_1[_i];
                    _loop_1(tabs);
                }
            }
        }, [doms, refContainer.current]);
        // render the main view
        if (!doms || doms.length === 0) {
            return null;
        }
        return (<>
        <div id="fav" ref={refContainer}>
          {doms}
          <form id="searchForm" onSubmit={function (e) { return onSubmitNavigationSearch(e); }}>
            <SearchBox onSearch={onSearch}/>
          </form>
          <datalist id="autocompleteSearches">
            {autocompleteSearches.map(function (search) { return (<option key={search}>{search}</option>); })}
          </datalist>
        </div>
        <div className="footer">
          <button onClick={function () { return onEdit(); }}>Edit</button>
        </div>
      </>);
    }
    function NavEditContainer(props) {
        var schema = props.schema, onSetViewMode = props.onSetViewMode, onSetSchema = props.onSetSchema;
        var _a = (0, react_1.useState)(schema.trim()), bufferSchema = _a[0], setBufferSchema = _a[1];
        var _b = (0, react_1.useState)(false), hasPendingChanges = _b[0], setHasPendingChanges = _b[1];
        var _c = (0, react_1.useState)(''), bookmark = _c[0], setBookmark = _c[1];
        // events
        var onApply = function () {
            onSetSchema(bufferSchema); // update schema
            onSetViewMode('read');
            //update the cache in the session storage
            helper.persistBufferSchema(bufferSchema); // commit the changes
        };
        var onCancel = function () {
            if (hasPendingChanges) {
                if (!confirm('Cancel?')) {
                    return;
                }
            }
            onSetViewMode('read');
        };
        var onTest = function () {
            var base64URL = helper.getNavBookmarkletFromSchema(schema);
            helper.navigateToDataUrl(base64URL, true);
        };
        var onSetBufferSchema = function (newBufferSchema) {
            setBufferSchema(newBufferSchema);
            setHasPendingChanges(true);
        };
        var onZoomInput = function (target) {
            __spreadArray([], document.querySelectorAll('#input,#output'), true).forEach(function (elem) { return (elem.style.flexGrow = ''); });
            target.style.flexGrow = '1';
        };
        // effects
        (0, react_1.useEffect)(function () {
            // store it into cache
            helper.persistBufferSchema(schema);
            return function () {
                window.onbeforeunload = undefined;
            };
        }, []);
        // trigger the confirmation to save before unload
        (0, react_1.useEffect)(function () {
            if (hasPendingChanges) {
                window.onbeforeunload = function (e) {
                    e.preventDefault();
                    return (e.returnValue = 'You have unsaved changes. Do you want to continue with exit?');
                };
            }
        }, [hasPendingChanges]);
        (0, react_1.useEffect)(function () {
            setBookmark(helper.getNavBookmarkletFromSchema(bufferSchema));
        }, [bufferSchema]);
        // generate the view
        return (<div id="command">
        <div>
          <h1 className="title">Navigation Form</h1>
        </div>
        <div className="commandHeader">
          <button type="button" onClick={function () { return onApply(); }}>
            Apply
          </button>
          <button type="button" onClick={function () { return onCancel(); }}>
            Cancel
          </button>
          <div className="dropdown">
            <a className="dropdown-trigger">Actions</a>
            <div className="dropdown-content">
              <a target="_blank" href="https://synle.github.io/link/nav-generator.html?newNav">
                New
              </a>
              <a target="_blank" href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.js">
                JS Code
              </a>
              <a target="_blank" href="https://github.com/synle/synle.github.io/blob/master/link/assets/navs.css">
                CSS Code
              </a>
              <button type="button" onClick={function () { return onTest(); }}>
                Test
              </button>
            </div>
          </div>
        </div>
        <textarea id="input" wrap="soft" spellcheck="false" autoFocus value={bufferSchema} onFocus={function (e) { return onZoomInput(e.target); }} onInput={function (e) { return onSetBufferSchema(e.target.value); }} onDoubleClick={function () { return helper.onCopyToClipboard(bufferSchema, true); }}></textarea>
        <textarea id="output" wrap="soft" spellcheck="false" value={bookmark} onFocus={function (e) { return onZoomInput(e.target); }} onDoubleClick={function () { return helper.onCopyToClipboard(bookmark, true); }}></textarea>
      </div>);
    }
    function NavCreateContainer(props) {
        var schema = props.schema, onSetViewMode = props.onSetViewMode, onSetSchema = props.onSetSchema;
        return <>create {schema}</>;
    }
    // main app starts here
    function App(props) {
        var _a = (0, react_1.useState)('read'), view = _a[0], setViewMode = _a[1]; // read, edit, create
        var _b = (0, react_1.useState)(props.schemaFromScript || helper.getPersistedBufferSchema()), schema = _b[0], setSchema = _b[1];
        // effects
        (0, react_1.useEffect)(function () {
            if (isRenderedInMainForm) {
                if (location.search.includes('newNav')) {
                    // render as edit mode for newNav
                    window.history.pushState('', '', '?');
                    helper.persistBufferSchema(DEFAULT_SCHEMA_TO_RENDER);
                    setSchema(DEFAULT_SCHEMA_TO_RENDER);
                    setViewMode('edit');
                }
            }
            var _onHandlePostMessageEvent = function (event) {
                var type = event.data.type;
                var newSchema = event.data.schema;
                if (type === 'onViewLinks') {
                    try {
                        helper.persistBufferSchema(newSchema);
                        setSchema(newSchema); // render with new data
                        window.removeEventListener('message', _onHandlePostMessageEvent);
                    }
                    catch (err) { }
                }
            };
            window.addEventListener('message', _onHandlePostMessageEvent);
        }, []);
        // events
        var onSetViewMode = function (newView) { return setViewMode(newView); };
        var onSetSchema = function (newSchema) { return setSchema(newSchema); };
        // render the proper views
        var allProps = { schema: schema, onSetSchema: onSetSchema, onSetViewMode: onSetViewMode };
        switch (view) {
            case 'read':
                return <NavReadContainer {...allProps}/>;
            case 'edit':
                return <NavEditContainer {...allProps}/>;
            case 'create':
                return <NavCreateContainer {...allProps}/>;
        }
    }
    var SAME_TAB_LINK_SPLIT, NEW_TAB_LINK_SPLIT, HEADER_SPLIT, TITLE_SPLIT, BLOCK_SPLIT, TAB_SPLIT, TAB_TITLE_SPLIT, FAV_ICON_SPLIT, isRenderedInDataUrl, isRenderedInMainForm, cacheId, DEFAULT_SCHEMA_TO_RENDER, schemaFromScript, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                SAME_TAB_LINK_SPLIT = '|';
                NEW_TAB_LINK_SPLIT = '|||';
                HEADER_SPLIT = '#';
                TITLE_SPLIT = '!';
                BLOCK_SPLIT = '```';
                TAB_SPLIT = '>>>';
                TAB_TITLE_SPLIT = '|';
                FAV_ICON_SPLIT = '@';
                isRenderedInDataUrl = location.href.indexOf('data:') === 0;
                isRenderedInMainForm = !isRenderedInDataUrl;
                cacheId = parseInt(Date.now());
                DEFAULT_SCHEMA_TO_RENDER = ("\n    ! Navigation " + new Date().toLocaleString() + "\n\n    # Main Link Section\n    google finance | finance.google.com\n\n    # Secondary Section\n    sample alert js | javascript://alert('hello')\n    sample data url | data:text/html,%3Chtml%3E%0A%20%20%20%20%20%20%20%20%3Chead%3E%0A%20%20%20%20%20%20%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text%2Fcss%22%20href%3D%22https%3A%2F%2Fsynle.github.io%2Flink%2Fassets%2Fnavs.css%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cmeta%20charset%3D'utf-8'%3E%0A%20%20%20%20%20%20%20%20%3C%2Fhead%3E%0A%20%20%20%20%20%20%20%20%3Cbody%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cscript%20src%3D%22https%3A%2F%2Fsynle.github.io%2Flink%2Fassets%2Fnavs.js%22%3E%3C%2Fscript%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cscript%20id%3D'schema'%20type%3D'schema'%3E!%20Data%20Test%20Navigation%0A%0A%23%20Main%20Section%0Agoogle%7Cgoogle.com%0A%3C%2Fscript%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20window.onViewLinks(window.getLinkDom(document.querySelector('%23schema').innerText.trim()))%3B%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fscript%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbody%3E%0A%20%20%20%20%20%20%3C%2Fhtml%3E\n\n    # Notes\n    ```\n    TODO 1\n    TODO 2\n    ```\n\n    # Tabs\n    >>>tabName1|blockId1>>>tabName2|blockId2\n\n    ```blockId1\n    sample blockId1\n    ```\n\n    ```blockId2\n    sample blockId2\n    ```\n  ")
                    .split('\n')
                    .map(function (s) { return s.trim(); })
                    .join('\n');
                // initialization
                // hooking up extra meta data
                document.head.insertAdjacentHTML('beforeend', "\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\" />\n      <meta http-equiv=\"Cache-Control\" content=\"no-cache\" />\n      <meta http-equiv=\"Pragma\" content=\"no-cache\" />\n      <meta http-equiv=\"page-enter\" content=\"revealtrans(duration=seconds,transition=num)\" />\n      <meta http-equiv=\"page-exit\" content=\"revealtrans(duration=seconds,transition=num)\" />\n    ".trim());
                // app level events
                document.addEventListener('keydown', function (e) {
                    // handling enter and spacebar on focusable div
                    var key = e.key;
                    var target = e.target;
                    if (target.onclick) {
                        // if (key === 'Enter' || key === ' ') {
                        //   target.onclick.apply(target);
                        //   e.preventDefault();
                        //   e.stopPropagation();
                        //   return;
                        // }
                    }
                    else if (key === 'Escape' && document.querySelector('#promptModal')) {
                        try {
                            document.querySelector('#promptModal #promptInput').onblur();
                        }
                        catch (err) { }
                    }
                    else if (key === 'Escape' && document.querySelector('#alertModal')) {
                        try {
                            document.querySelector('#alertModal #alertBody').onblur();
                        }
                        catch (err) { }
                    }
                    else if (document.querySelector('#search')) {
                        // special handling for ctrl + f to focus on searchbox
                        var searchBox = document.querySelector('#search');
                        if (searchBox) {
                            if (key === 'f' && (e.ctrlKey || e.altKey || e.metaKey)) {
                                searchBox.focus();
                                e.preventDefault();
                            }
                        }
                    }
                }, true);
                schemaFromScript = '';
                if (!window.fetchSchemaScript) return [3 /*break*/, 5];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, window.fetchSchemaScript()];
            case 2:
                schemaFromScript = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                try {
                    schemaFromScript = document.querySelector('#schema').innerText.trim();
                }
                catch (err) { }
                _a.label = 6;
            case 6:
                react_dom_1["default"].render(<App schemaFromScript={schemaFromScript}/>, document.body);
                return [2 /*return*/];
        }
    });
}); })();
