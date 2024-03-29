if (!window.gmail) {
  // jquery /*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
  (function (e, t) {
    var n,
      r,
      i = typeof t,
      o = e.location,
      a = e.document,
      s = a.documentElement,
      l = e.jQuery,
      u = e.$,
      c = {},
      p = [],
      f = '1.10.2',
      d = p.concat,
      h = p.push,
      g = p.slice,
      m = p.indexOf,
      y = c.toString,
      v = c.hasOwnProperty,
      b = f.trim,
      x = function (e, t) {
        return new x.fn.init(e, t, r);
      },
      w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = /\S+/g,
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      E = /^[\],:{}\s]*$/,
      S = /(?:^|:|,)(?:\s*\[)+/g,
      A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      D = /^-ms-/,
      L = /-([\da-z])/gi,
      H = function (e, t) {
        return t.toUpperCase();
      },
      q = function (e) {
        (a.addEventListener || 'load' === e.type || 'complete' === a.readyState) && (_(), x.ready());
      },
      _ = function () {
        a.addEventListener
          ? (a.removeEventListener('DOMContentLoaded', q, !1), e.removeEventListener('load', q, !1))
          : (a.detachEvent('onreadystatechange', q), e.detachEvent('onload', q));
      };
    (x.fn = x.prototype =
      {
        jquery: f,
        constructor: x,
        init: function (e, n, r) {
          var i, o;
          if (!e) return this;
          if ('string' == typeof e) {
            if (
              ((i =
                '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e)),
              !i || (!i[1] && n))
            )
              return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            if (i[1]) {
              if (
                ((n = n instanceof x ? n[0] : n),
                x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)),
                k.test(i[1]) && x.isPlainObject(n))
              )
                for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
              return this;
            }
            if (((o = a.getElementById(i[2])), o && o.parentNode)) {
              if (o.id !== i[2]) return r.find(e);
              (this.length = 1), (this[0] = o);
            }
            return (this.context = a), (this.selector = e), this;
          }
          return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : x.isFunction(e)
            ? r.ready(e)
            : (e.selector !== t && ((this.selector = e.selector), (this.context = e.context)), x.makeArray(e, this));
        },
        selector: '',
        length: 0,
        toArray: function () {
          return g.call(this);
        },
        get: function (e) {
          return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function (e) {
          var t = x.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e, t) {
          return x.each(this, e, t);
        },
        ready: function (e) {
          return x.ready.promise().done(e), this;
        },
        slice: function () {
          return this.pushStack(g.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        map: function (e) {
          return this.pushStack(
            x.map(this, function (t, n) {
              return e.call(t, n, t);
            }),
          );
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: h,
        sort: [].sort,
        splice: [].splice,
      }),
      (x.fn.init.prototype = x.fn),
      (x.extend = x.fn.extend =
        function () {
          var e,
            n,
            r,
            i,
            o,
            a,
            s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
          for (
            'boolean' == typeof s && ((c = s), (s = arguments[1] || {}), (l = 2)),
              'object' == typeof s || x.isFunction(s) || (s = {}),
              u === l && ((s = this), --l);
            u > l;
            l++
          )
            if (null != (o = arguments[l]))
              for (i in o)
                (e = s[i]),
                  (r = o[i]),
                  s !== r &&
                    (c && r && (x.isPlainObject(r) || (n = x.isArray(r)))
                      ? (n ? ((n = !1), (a = e && x.isArray(e) ? e : [])) : (a = e && x.isPlainObject(e) ? e : {}),
                        (s[i] = x.extend(c, a, r)))
                      : r !== t && (s[i] = r));
          return s;
        }),
      x.extend({
        expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
        noConflict: function (t) {
          return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? x.readyWait++ : x.ready(!0);
        },
        ready: function (e) {
          if (e === !0 ? !--x.readyWait : !x.isReady) {
            if (!a.body) return setTimeout(x.ready);
            (x.isReady = !0),
              (e !== !0 && --x.readyWait > 0) ||
                (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger('ready').off('ready'));
          }
        },
        isFunction: function (e) {
          return 'function' === x.type(e);
        },
        isArray:
          Array.isArray ||
          function (e) {
            return 'array' === x.type(e);
          },
        isWindow: function (e) {
          return null != e && e == e.window;
        },
        isNumeric: function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function (e) {
          return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
            ? c[y.call(e)] || 'object'
            : typeof e;
        },
        isPlainObject: function (e) {
          var n;
          if (!e || 'object' !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
          try {
            if (e.constructor && !v.call(e, 'constructor') && !v.call(e.constructor.prototype, 'isPrototypeOf'))
              return !1;
          } catch (r) {
            return !1;
          }
          if (x.support.ownLast) for (n in e) return v.call(e, n);
          for (n in e);
          return n === t || v.call(e, n);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        error: function (e) {
          throw Error(e);
        },
        parseHTML: function (e, t, n) {
          if (!e || 'string' != typeof e) return null;
          'boolean' == typeof t && ((n = t), (t = !1)), (t = t || a);
          var r = k.exec(e),
            i = !n && [];
          return r
            ? [t.createElement(r[1])]
            : ((r = x.buildFragment([e], t, i)), i && x(i).remove(), x.merge([], r.childNodes));
        },
        parseJSON: function (n) {
          return e.JSON && e.JSON.parse
            ? e.JSON.parse(n)
            : null === n
            ? n
            : 'string' == typeof n && ((n = x.trim(n)), n && E.test(n.replace(A, '@').replace(j, ']').replace(S, '')))
            ? Function('return ' + n)()
            : (x.error('Invalid JSON: ' + n), t);
        },
        parseXML: function (n) {
          var r, i;
          if (!n || 'string' != typeof n) return null;
          try {
            e.DOMParser
              ? ((i = new DOMParser()), (r = i.parseFromString(n, 'text/xml')))
              : ((r = new ActiveXObject('Microsoft.XMLDOM')), (r.async = 'false'), r.loadXML(n));
          } catch (o) {
            r = t;
          }
          return (
            (r && r.documentElement && !r.getElementsByTagName('parsererror').length) || x.error('Invalid XML: ' + n), r
          );
        },
        noop: function () {},
        globalEval: function (t) {
          t &&
            x.trim(t) &&
            (
              e.execScript ||
              function (t) {
                e.eval.call(e, t);
              }
            )(t);
        },
        camelCase: function (e) {
          return e.replace(D, 'ms-').replace(L, H);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, n) {
          var r,
            i = 0,
            o = e.length,
            a = M(e);
          if (n) {
            if (a) {
              for (; o > i; i++) if (((r = t.apply(e[i], n)), r === !1)) break;
            } else for (i in e) if (((r = t.apply(e[i], n)), r === !1)) break;
          } else if (a) {
            for (; o > i; i++) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
          } else for (i in e) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
          return e;
        },
        trim:
          b && !b.call('\ufeff\u00a0')
            ? function (e) {
                return null == e ? '' : b.call(e);
              }
            : function (e) {
                return null == e ? '' : (e + '').replace(C, '');
              },
        makeArray: function (e, t) {
          var n = t || [];
          return null != e && (M(Object(e)) ? x.merge(n, 'string' == typeof e ? [e] : e) : h.call(n, e)), n;
        },
        inArray: function (e, t, n) {
          var r;
          if (t) {
            if (m) return m.call(t, e, n);
            for (r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0; r > n; n++)
              if (n in t && t[n] === e) return n;
          }
          return -1;
        },
        merge: function (e, n) {
          var r = n.length,
            i = e.length,
            o = 0;
          if ('number' == typeof r) for (; r > o; o++) e[i++] = n[o];
          else while (n[o] !== t) e[i++] = n[o++];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          var r,
            i = [],
            o = 0,
            a = e.length;
          for (n = !!n; a > o; o++) (r = !!t(e[o], o)), n !== r && i.push(e[o]);
          return i;
        },
        map: function (e, t, n) {
          var r,
            i = 0,
            o = e.length,
            a = M(e),
            s = [];
          if (a) for (; o > i; i++) (r = t(e[i], i, n)), null != r && (s[s.length] = r);
          else for (i in e) (r = t(e[i], i, n)), null != r && (s[s.length] = r);
          return d.apply([], s);
        },
        guid: 1,
        proxy: function (e, n) {
          var r, i, o;
          return (
            'string' == typeof n && ((o = e[n]), (n = e), (e = o)),
            x.isFunction(e)
              ? ((r = g.call(arguments, 2)),
                (i = function () {
                  return e.apply(n || this, r.concat(g.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || x.guid++),
                i)
              : t
          );
        },
        access: function (e, n, r, i, o, a, s) {
          var l = 0,
            u = e.length,
            c = null == r;
          if ('object' === x.type(r)) {
            o = !0;
            for (l in r) x.access(e, n, l, r[l], !0, a, s);
          } else if (
            i !== t &&
            ((o = !0),
            x.isFunction(i) || (s = !0),
            c &&
              (s
                ? (n.call(e, i), (n = null))
                : ((c = n),
                  (n = function (e, t, n) {
                    return c.call(x(e), n);
                  }))),
            n)
          )
            for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
          return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
        },
        now: function () {
          return new Date().getTime();
        },
        swap: function (e, t, n, r) {
          var i,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          i = n.apply(e, r || []);
          for (o in t) e.style[o] = a[o];
          return i;
        },
      }),
      (x.ready.promise = function (t) {
        if (!n)
          if (((n = x.Deferred()), 'complete' === a.readyState)) setTimeout(x.ready);
          else if (a.addEventListener) a.addEventListener('DOMContentLoaded', q, !1), e.addEventListener('load', q, !1);
          else {
            a.attachEvent('onreadystatechange', q), e.attachEvent('onload', q);
            var r = !1;
            try {
              r = null == e.frameElement && a.documentElement;
            } catch (i) {}
            r &&
              r.doScroll &&
              (function o() {
                if (!x.isReady) {
                  try {
                    r.doScroll('left');
                  } catch (e) {
                    return setTimeout(o, 50);
                  }
                  _(), x.ready();
                }
              })();
          }
        return n.promise(t);
      }),
      x.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
        c['[object ' + t + ']'] = t.toLowerCase();
      });
    function M(e) {
      var t = e.length,
        n = x.type(e);
      return x.isWindow(e)
        ? !1
        : 1 === e.nodeType && t
        ? !0
        : 'array' === n || ('function' !== n && (0 === t || ('number' == typeof t && t > 0 && t - 1 in e)));
    }
    (r = x(a)),
      (function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v,
          b = 'sizzle' + -new Date(),
          w = e.document,
          T = 0,
          C = 0,
          N = st(),
          k = st(),
          E = st(),
          S = !1,
          A = function (e, t) {
            return e === t ? ((S = !0), 0) : 0;
          },
          j = typeof t,
          D = 1 << 31,
          L = {}.hasOwnProperty,
          H = [],
          q = H.pop,
          _ = H.push,
          M = H.push,
          O = H.slice,
          F =
            H.indexOf ||
            function (e) {
              var t = 0,
                n = this.length;
              for (; n > t; t++) if (this[t] === e) return t;
              return -1;
            },
          B =
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
          P = '[\\x20\\t\\r\\n\\f]',
          R = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
          W = R.replace('w', 'w#'),
          $ =
            '\\[' +
            P +
            '*(' +
            R +
            ')' +
            P +
            '*(?:([*^$|!~]?=)' +
            P +
            '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' +
            W +
            ')|)|)' +
            P +
            '*\\]',
          I =
            ':(' +
            R +
            ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' +
            $.replace(3, 8) +
            ')*)|.*)\\)|)',
          z = RegExp('^' + P + '+|((?:^|[^\\\\])(?:\\\\.)*)' + P + '+$', 'g'),
          X = RegExp('^' + P + '*,' + P + '*'),
          U = RegExp('^' + P + '*([>+~]|' + P + ')' + P + '*'),
          V = RegExp(P + '*[+~]'),
          Y = RegExp('=' + P + '*([^\\]\'"]*)' + P + '*\\]', 'g'),
          J = RegExp(I),
          G = RegExp('^' + W + '$'),
          Q = {
            ID: RegExp('^#(' + R + ')'),
            CLASS: RegExp('^\\.(' + R + ')'),
            TAG: RegExp('^(' + R.replace('w', 'w*') + ')'),
            ATTR: RegExp('^' + $),
            PSEUDO: RegExp('^' + I),
            CHILD: RegExp(
              '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                P +
                '*(even|odd|(([+-]|)(\\d*)n|)' +
                P +
                '*(?:([+-]|)' +
                P +
                '*(\\d+)|))' +
                P +
                '*\\)|)',
              'i',
            ),
            bool: RegExp('^(?:' + B + ')$', 'i'),
            needsContext: RegExp(
              '^' +
                P +
                '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                P +
                '*((?:-\\d)?\\d*)' +
                P +
                '*\\)|)(?=[^-]|$)',
              'i',
            ),
          },
          K = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          et = /^(?:input|select|textarea|button)$/i,
          tt = /^h\d$/i,
          nt = /'|\\/g,
          rt = RegExp('\\\\([\\da-f]{1,6}' + P + '?|(' + P + ')|.)', 'ig'),
          it = function (e, t, n) {
            var r = '0x' + t - 65536;
            return r !== r || n
              ? t
              : 0 > r
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode(55296 | (r >> 10), 56320 | (1023 & r));
          };
        try {
          M.apply((H = O.call(w.childNodes)), w.childNodes), H[w.childNodes.length].nodeType;
        } catch (ot) {
          M = {
            apply: H.length
              ? function (e, t) {
                  _.apply(e, O.call(t));
                }
              : function (e, t) {
                  var n = e.length,
                    r = 0;
                  while ((e[n++] = t[r++]));
                  e.length = n - 1;
                },
          };
        }
        function at(e, t, n, i) {
          var o, a, s, l, u, c, d, m, y, x;
          if (((t ? t.ownerDocument || t : w) !== f && p(t), (t = t || f), (n = n || []), !e || 'string' != typeof e))
            return n;
          if (1 !== (l = t.nodeType) && 9 !== l) return [];
          if (h && !i) {
            if ((o = Z.exec(e)))
              if ((s = o[1])) {
                if (9 === l) {
                  if (((a = t.getElementById(s)), !a || !a.parentNode)) return n;
                  if (a.id === s) return n.push(a), n;
                } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)
                  return n.push(a), n;
              } else {
                if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)
                  return M.apply(n, t.getElementsByClassName(s)), n;
              }
            if (r.qsa && (!g || !g.test(e))) {
              if (((m = d = b), (y = t), (x = 9 === l && e), 1 === l && 'object' !== t.nodeName.toLowerCase())) {
                (c = mt(e)),
                  (d = t.getAttribute('id')) ? (m = d.replace(nt, '\\$&')) : t.setAttribute('id', m),
                  (m = "[id='" + m + "'] "),
                  (u = c.length);
                while (u--) c[u] = m + yt(c[u]);
                (y = (V.test(e) && t.parentNode) || t), (x = c.join(','));
              }
              if (x)
                try {
                  return M.apply(n, y.querySelectorAll(x)), n;
                } catch (T) {
                } finally {
                  d || t.removeAttribute('id');
                }
            }
          }
          return kt(e.replace(z, '$1'), t, n, i);
        }
        function st() {
          var e = [];
          function t(n, r) {
            return e.push((n += ' ')) > o.cacheLength && delete t[e.shift()], (t[n] = r);
          }
          return t;
        }
        function lt(e) {
          return (e[b] = !0), e;
        }
        function ut(e) {
          var t = f.createElement('div');
          try {
            return !!e(t);
          } catch (n) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function ct(e, t) {
          var n = e.split('|'),
            r = e.length;
          while (r--) o.attrHandle[n[r]] = t;
        }
        function pt(e, t) {
          var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
          if (r) return r;
          if (n) while ((n = n.nextSibling)) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function ft(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return 'input' === n && t.type === e;
          };
        }
        function dt(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ('input' === n || 'button' === n) && t.type === e;
          };
        }
        function ht(e) {
          return lt(function (t) {
            return (
              (t = +t),
              lt(function (n, r) {
                var i,
                  o = e([], n.length, t),
                  a = o.length;
                while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        (s = at.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? 'HTML' !== t.nodeName : !1;
          }),
          (r = at.support = {}),
          (p = at.setDocument =
            function (e) {
              var n = e ? e.ownerDocument || e : w,
                i = n.defaultView;
              return n !== f && 9 === n.nodeType && n.documentElement
                ? ((f = n),
                  (d = n.documentElement),
                  (h = !s(n)),
                  i &&
                    i.attachEvent &&
                    i !== i.top &&
                    i.attachEvent('onbeforeunload', function () {
                      p();
                    }),
                  (r.attributes = ut(function (e) {
                    return (e.className = 'i'), !e.getAttribute('className');
                  })),
                  (r.getElementsByTagName = ut(function (e) {
                    return e.appendChild(n.createComment('')), !e.getElementsByTagName('*').length;
                  })),
                  (r.getElementsByClassName = ut(function (e) {
                    return (
                      (e.innerHTML = "<div class='a'></div><div class='a i'></div>"),
                      (e.firstChild.className = 'i'),
                      2 === e.getElementsByClassName('i').length
                    );
                  })),
                  (r.getById = ut(function (e) {
                    return (d.appendChild(e).id = b), !n.getElementsByName || !n.getElementsByName(b).length;
                  })),
                  r.getById
                    ? ((o.find.ID = function (e, t) {
                        if (typeof t.getElementById !== j && h) {
                          var n = t.getElementById(e);
                          return n && n.parentNode ? [n] : [];
                        }
                      }),
                      (o.filter.ID = function (e) {
                        var t = e.replace(rt, it);
                        return function (e) {
                          return e.getAttribute('id') === t;
                        };
                      }))
                    : (delete o.find.ID,
                      (o.filter.ID = function (e) {
                        var t = e.replace(rt, it);
                        return function (e) {
                          var n = typeof e.getAttributeNode !== j && e.getAttributeNode('id');
                          return n && n.value === t;
                        };
                      })),
                  (o.find.TAG = r.getElementsByTagName
                    ? function (e, n) {
                        return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ('*' === e) {
                          while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (o.find.CLASS =
                    r.getElementsByClassName &&
                    function (e, n) {
                      return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t;
                    }),
                  (m = []),
                  (g = []),
                  (r.qsa = K.test(n.querySelectorAll)) &&
                    (ut(function (e) {
                      (e.innerHTML = "<select><option selected=''></option></select>"),
                        e.querySelectorAll('[selected]').length || g.push('\\[' + P + '*(?:value|' + B + ')'),
                        e.querySelectorAll(':checked').length || g.push(':checked');
                    }),
                    ut(function (e) {
                      var t = n.createElement('input');
                      t.setAttribute('type', 'hidden'),
                        e.appendChild(t).setAttribute('t', ''),
                        e.querySelectorAll("[t^='']").length && g.push('[*^$]=' + P + '*(?:\'\'|"")'),
                        e.querySelectorAll(':enabled').length || g.push(':enabled', ':disabled'),
                        e.querySelectorAll('*,:x'),
                        g.push(',.*:');
                    })),
                  (r.matchesSelector = K.test(
                    (y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector),
                  )) &&
                    ut(function (e) {
                      (r.disconnectedMatch = y.call(e, 'div')), y.call(e, "[s!='']:x"), m.push('!=', I);
                    }),
                  (g = g.length && RegExp(g.join('|'))),
                  (m = m.length && RegExp(m.join('|'))),
                  (v =
                    K.test(d.contains) || d.compareDocumentPosition
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t) while ((t = t.parentNode)) if (t === e) return !0;
                          return !1;
                        }),
                  (A = d.compareDocumentPosition
                    ? function (e, t) {
                        if (e === t) return (S = !0), 0;
                        var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                        return i
                          ? 1 & i || (!r.sortDetached && t.compareDocumentPosition(e) === i)
                            ? e === n || v(w, e)
                              ? -1
                              : t === n || v(w, t)
                              ? 1
                              : c
                              ? F.call(c, e) - F.call(c, t)
                              : 0
                            : 4 & i
                            ? -1
                            : 1
                          : e.compareDocumentPosition
                          ? -1
                          : 1;
                      }
                    : function (e, t) {
                        var r,
                          i = 0,
                          o = e.parentNode,
                          a = t.parentNode,
                          s = [e],
                          l = [t];
                        if (e === t) return (S = !0), 0;
                        if (!o || !a)
                          return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                        if (o === a) return pt(e, t);
                        r = e;
                        while ((r = r.parentNode)) s.unshift(r);
                        r = t;
                        while ((r = r.parentNode)) l.unshift(r);
                        while (s[i] === l[i]) i++;
                        return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
                      }),
                  n)
                : f;
            }),
          (at.matches = function (e, t) {
            return at(e, null, null, t);
          }),
          (at.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== f && p(e),
              (t = t.replace(Y, "='$1']")),
              !(!r.matchesSelector || !h || (m && m.test(t)) || (g && g.test(t))))
            )
              try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
              } catch (i) {}
            return at(t, f, null, [e]).length > 0;
          }),
          (at.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t);
          }),
          (at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()],
              a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t
              ? r.attributes || !h
                ? e.getAttribute(n)
                : (a = e.getAttributeNode(n)) && a.specified
                ? a.value
                : null
              : a;
          }),
          (at.error = function (e) {
            throw Error('Syntax error, unrecognized expression: ' + e);
          }),
          (at.uniqueSort = function (e) {
            var t,
              n = [],
              i = 0,
              o = 0;
            if (((S = !r.detectDuplicates), (c = !r.sortStable && e.slice(0)), e.sort(A), S)) {
              while ((t = e[o++])) t === e[o] && (i = n.push(o));
              while (i--) e.splice(n[i], 1);
            }
            return e;
          }),
          (a = at.getText =
            function (e) {
              var t,
                n = '',
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ('string' == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r]); r++) n += a(t);
              return n;
            }),
          (o = at.selectors =
            {
              cacheLength: 50,
              createPseudo: lt,
              match: Q,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(rt, it)),
                    (e[3] = (e[4] || e[5] || '').replace(rt, it)),
                    '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    'nth' === e[1].slice(0, 3)
                      ? (e[3] || at.error(e[0]),
                        (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                        (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                      : e[3] && at.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var n,
                    r = !e[5] && e[2];
                  return Q.CHILD.test(e[0])
                    ? null
                    : (e[3] && e[4] !== t
                        ? (e[2] = e[4])
                        : r &&
                          J.test(r) &&
                          (n = mt(r, !0)) &&
                          (n = r.indexOf(')', r.length - n) - r.length) &&
                          ((e[0] = e[0].slice(0, n)), (e[2] = r.slice(0, n))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(rt, it).toLowerCase();
                  return '*' === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = N[e + ' '];
                  return (
                    t ||
                    ((t = RegExp('(^|' + P + ')' + e + '(' + P + '|$)')) &&
                      N(e, function (e) {
                        return t.test(
                          ('string' == typeof e.className && e.className) ||
                            (typeof e.getAttribute !== j && e.getAttribute('class')) ||
                            '',
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = at.attr(r, e);
                    return null == i
                      ? '!=' === t
                      : t
                      ? ((i += ''),
                        '=' === t
                          ? i === n
                          : '!=' === t
                          ? i !== n
                          : '^=' === t
                          ? n && 0 === i.indexOf(n)
                          : '*=' === t
                          ? n && i.indexOf(n) > -1
                          : '$=' === t
                          ? n && i.slice(-n.length) === n
                          : '~=' === t
                          ? (' ' + i + ' ').indexOf(n) > -1
                          : '|=' === t
                          ? i === n || i.slice(0, n.length + 1) === n + '-'
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = 'nth' !== e.slice(0, 3),
                    a = 'last' !== e.slice(-4),
                    s = 'of-type' === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var u,
                          c,
                          p,
                          f,
                          d,
                          h,
                          g = o !== a ? 'nextSibling' : 'previousSibling',
                          m = t.parentNode,
                          y = s && t.nodeName.toLowerCase(),
                          v = !l && !s;
                        if (m) {
                          if (o) {
                            while (g) {
                              p = t;
                              while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                              h = g = 'only' === e && !h && 'nextSibling';
                            }
                            return !0;
                          }
                          if (((h = [a ? m.firstChild : m.lastChild]), a && v)) {
                            (c = m[b] || (m[b] = {})),
                              (u = c[e] || []),
                              (d = u[0] === T && u[1]),
                              (f = u[0] === T && u[2]),
                              (p = d && m.childNodes[d]);
                            while ((p = (++d && p && p[g]) || (f = d = 0) || h.pop()))
                              if (1 === p.nodeType && ++f && p === t) {
                                c[e] = [T, d, f];
                                break;
                              }
                          } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                          else
                            while ((p = (++d && p && p[g]) || (f = d = 0) || h.pop()))
                              if (
                                (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) &&
                                ++f &&
                                (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)
                              )
                                break;
                          return (f -= i), f === r || (0 === f % r && f / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error('unsupported pseudo: ' + e);
                  return r[b]
                    ? r(t)
                    : r.length > 1
                    ? ((n = [e, e, '', t]),
                      o.setFilters.hasOwnProperty(e.toLowerCase())
                        ? lt(function (e, n) {
                            var i,
                              o = r(e, t),
                              a = o.length;
                            while (a--) (i = F.call(e, o[a])), (e[i] = !(n[i] = o[a]));
                          })
                        : function (e) {
                            return r(e, 0, n);
                          })
                    : r;
                },
              },
              pseudos: {
                not: lt(function (e) {
                  var t = [],
                    n = [],
                    r = l(e.replace(z, '$1'));
                  return r[b]
                    ? lt(function (e, t, n, i) {
                        var o,
                          a = r(e, null, i, []),
                          s = e.length;
                        while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (t[0] = e), r(t, null, o, n), !n.pop();
                      };
                }),
                has: lt(function (e) {
                  return function (t) {
                    return at(e, t).length > 0;
                  };
                }),
                contains: lt(function (e) {
                  return function (t) {
                    return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
                  };
                }),
                lang: lt(function (e) {
                  return (
                    G.test(e || '') || at.error('unsupported lang: ' + e),
                    (e = e.replace(rt, it).toLowerCase()),
                    function (t) {
                      var n;
                      do
                        if ((n = h ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                          return (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + '-');
                      while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === d;
                },
                focus: function (e) {
                  return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function (e) {
                  return e.disabled === !1;
                },
                disabled: function (e) {
                  return e.disabled === !0;
                },
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeName > '@' || 3 === e.nodeType || 4 === e.nodeType) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !o.pseudos.empty(e);
                },
                header: function (e) {
                  return tt.test(e.nodeName);
                },
                input: function (e) {
                  return et.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ('input' === t && 'button' === e.type) || 'button' === t;
                },
                text: function (e) {
                  var t;
                  return (
                    'input' === e.nodeName.toLowerCase() &&
                    'text' === e.type &&
                    (null == (t = e.getAttribute('type')) || t.toLowerCase() === e.type)
                  );
                },
                first: ht(function () {
                  return [0];
                }),
                last: ht(function (e, t) {
                  return [t - 1];
                }),
                eq: ht(function (e, t, n) {
                  return [0 > n ? n + t : n];
                }),
                even: ht(function (e, t) {
                  var n = 0;
                  for (; t > n; n += 2) e.push(n);
                  return e;
                }),
                odd: ht(function (e, t) {
                  var n = 1;
                  for (; t > n; n += 2) e.push(n);
                  return e;
                }),
                lt: ht(function (e, t, n) {
                  var r = 0 > n ? n + t : n;
                  for (; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: ht(function (e, t, n) {
                  var r = 0 > n ? n + t : n;
                  for (; t > ++r; ) e.push(r);
                  return e;
                }),
              },
            }),
          (o.pseudos.nth = o.pseudos.eq);
        for (n in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          o.pseudos[n] = ft(n);
        for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n);
        function gt() {}
        (gt.prototype = o.filters = o.pseudos), (o.setFilters = new gt());
        function mt(e, t) {
          var n,
            r,
            i,
            a,
            s,
            l,
            u,
            c = k[e + ' '];
          if (c) return t ? 0 : c.slice(0);
          (s = e), (l = []), (u = o.preFilter);
          while (s) {
            (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push((i = []))),
              (n = !1),
              (r = U.exec(s)) &&
                ((n = r.shift()), i.push({ value: n, type: r[0].replace(z, ' ') }), (s = s.slice(n.length)));
            for (a in o.filter)
              !(r = Q[a].exec(s)) ||
                (u[a] && !(r = u[a](r))) ||
                ((n = r.shift()), i.push({ value: n, type: a, matches: r }), (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
        }
        function yt(e) {
          var t = 0,
            n = e.length,
            r = '';
          for (; n > t; t++) r += e[t].value;
          return r;
        }
        function vt(e, t, n) {
          var r = t.dir,
            o = n && 'parentNode' === r,
            a = C++;
          return t.first
            ? function (t, n, i) {
                while ((t = t[r])) if (1 === t.nodeType || o) return e(t, n, i);
              }
            : function (t, n, s) {
                var l,
                  u,
                  c,
                  p = T + ' ' + a;
                if (s) {
                  while ((t = t[r])) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                } else
                  while ((t = t[r]))
                    if (1 === t.nodeType || o)
                      if (((c = t[b] || (t[b] = {})), (u = c[r]) && u[0] === p)) {
                        if ((l = u[1]) === !0 || l === i) return l === !0;
                      } else if (((u = c[r] = [p]), (u[1] = e(t, n, s) || i), u[1] === !0)) return !0;
              };
        }
        function bt(e) {
          return e.length > 1
            ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function xt(e, t, n, r, i) {
          var o,
            a = [],
            s = 0,
            l = e.length,
            u = null != t;
          for (; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
          return a;
        }
        function wt(e, t, n, r, i, o) {
          return (
            r && !r[b] && (r = wt(r)),
            i && !i[b] && (i = wt(i, o)),
            lt(function (o, a, s, l) {
              var u,
                c,
                p,
                f = [],
                d = [],
                h = a.length,
                g = o || Nt(t || '*', s.nodeType ? [s] : s, []),
                m = !e || (!o && t) ? g : xt(g, f, e, s, l),
                y = n ? (i || (o ? e : h || r) ? [] : a) : m;
              if ((n && n(m, y, s, l), r)) {
                (u = xt(y, d)), r(u, [], s, l), (c = u.length);
                while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
              }
              if (o) {
                if (i || e) {
                  if (i) {
                    (u = []), (c = y.length);
                    while (c--) (p = y[c]) && u.push((m[c] = p));
                    i(null, (y = []), u, l);
                  }
                  c = y.length;
                  while (c--) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
                }
              } else (y = xt(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, l) : M.apply(a, y);
            })
          );
        }
        function Tt(e) {
          var t,
            n,
            r,
            i = e.length,
            a = o.relative[e[0].type],
            s = a || o.relative[' '],
            l = a ? 1 : 0,
            c = vt(
              function (e) {
                return e === t;
              },
              s,
              !0,
            ),
            p = vt(
              function (e) {
                return F.call(t, e) > -1;
              },
              s,
              !0,
            ),
            f = [
              function (e, n, r) {
                return (!a && (r || n !== u)) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
              },
            ];
          for (; i > l; l++)
            if ((n = o.relative[e[l].type])) f = [vt(bt(f), n)];
            else {
              if (((n = o.filter[e[l].type].apply(null, e[l].matches)), n[b])) {
                for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break;
                return wt(
                  l > 1 && bt(f),
                  l > 1 && yt(e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })).replace(z, '$1'),
                  n,
                  r > l && Tt(e.slice(l, r)),
                  i > r && Tt((e = e.slice(r))),
                  i > r && yt(e),
                );
              }
              f.push(n);
            }
          return bt(f);
        }
        function Ct(e, t) {
          var n = 0,
            r = t.length > 0,
            a = e.length > 0,
            s = function (s, l, c, p, d) {
              var h,
                g,
                m,
                y = [],
                v = 0,
                b = '0',
                x = s && [],
                w = null != d,
                C = u,
                N = s || (a && o.find.TAG('*', (d && l.parentNode) || l)),
                k = (T += null == C ? 1 : Math.random() || 0.1);
              for (w && ((u = l !== f && l), (i = n)); null != (h = N[b]); b++) {
                if (a && h) {
                  g = 0;
                  while ((m = e[g++]))
                    if (m(h, l, c)) {
                      p.push(h);
                      break;
                    }
                  w && ((T = k), (i = ++n));
                }
                r && ((h = !m && h) && v--, s && x.push(h));
              }
              if (((v += b), r && b !== v)) {
                g = 0;
                while ((m = t[g++])) m(x, y, l, c);
                if (s) {
                  if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p));
                  y = xt(y);
                }
                M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
              }
              return w && ((T = k), (u = C)), x;
            };
          return r ? lt(s) : s;
        }
        l = at.compile = function (e, t) {
          var n,
            r = [],
            i = [],
            o = E[e + ' '];
          if (!o) {
            t || (t = mt(e)), (n = t.length);
            while (n--) (o = Tt(t[n])), o[b] ? r.push(o) : i.push(o);
            o = E(e, Ct(i, r));
          }
          return o;
        };
        function Nt(e, t, n) {
          var r = 0,
            i = t.length;
          for (; i > r; r++) at(e, t[r], n);
          return n;
        }
        function kt(e, t, n, i) {
          var a,
            s,
            u,
            c,
            p,
            f = mt(e);
          if (!i && 1 === f.length) {
            if (
              ((s = f[0] = f[0].slice(0)),
              s.length > 2 && 'ID' === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type])
            ) {
              if (((t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0]), !t)) return n;
              e = e.slice(s.shift().value.length);
            }
            a = Q.needsContext.test(e) ? 0 : s.length;
            while (a--) {
              if (((u = s[a]), o.relative[(c = u.type)])) break;
              if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), (V.test(s[0].type) && t.parentNode) || t))) {
                if ((s.splice(a, 1), (e = i.length && yt(s)), !e)) return M.apply(n, i), n;
                break;
              }
            }
          }
          return l(e, f)(i, t, !h, n, V.test(e)), n;
        }
        (r.sortStable = b.split('').sort(A).join('') === b),
          (r.detectDuplicates = S),
          p(),
          (r.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement('div'));
          })),
          ut(function (e) {
            return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
          }) ||
            ct('type|href|height|width', function (e, n, r) {
              return r ? t : e.getAttribute(n, 'type' === n.toLowerCase() ? 1 : 2);
            }),
          (r.attributes &&
            ut(function (e) {
              return (
                (e.innerHTML = '<input/>'),
                e.firstChild.setAttribute('value', ''),
                '' === e.firstChild.getAttribute('value')
              );
            })) ||
            ct('value', function (e, n, r) {
              return r || 'input' !== e.nodeName.toLowerCase() ? t : e.defaultValue;
            }),
          ut(function (e) {
            return null == e.getAttribute('disabled');
          }) ||
            ct(B, function (e, n, r) {
              var i;
              return r
                ? t
                : (i = e.getAttributeNode(n)) && i.specified
                ? i.value
                : e[n] === !0
                ? n.toLowerCase()
                : null;
            }),
          (x.find = at),
          (x.expr = at.selectors),
          (x.expr[':'] = x.expr.pseudos),
          (x.unique = at.uniqueSort),
          (x.text = at.getText),
          (x.isXMLDoc = at.isXML),
          (x.contains = at.contains);
      })(e);
    var O = {};
    function F(e) {
      var t = (O[e] = {});
      return (
        x.each(e.match(T) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    (x.Callbacks = function (e) {
      e = 'string' == typeof e ? O[e] || F(e) : x.extend({}, e);
      var n,
        r,
        i,
        o,
        a,
        s,
        l = [],
        u = !e.once && [],
        c = function (t) {
          for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
            if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
              r = !1;
              break;
            }
          (n = !1), l && (u ? u.length && c(u.shift()) : r ? (l = []) : p.disable());
        },
        p = {
          add: function () {
            if (l) {
              var t = l.length;
              (function i(t) {
                x.each(t, function (t, n) {
                  var r = x.type(n);
                  'function' === r ? (e.unique && p.has(n)) || l.push(n) : n && n.length && 'string' !== r && i(n);
                });
              })(arguments),
                n ? (o = l.length) : r && ((s = t), c(r));
            }
            return this;
          },
          remove: function () {
            return (
              l &&
                x.each(arguments, function (e, t) {
                  var r;
                  while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
                }),
              this
            );
          },
          has: function (e) {
            return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
          },
          empty: function () {
            return (l = []), (o = 0), this;
          },
          disable: function () {
            return (l = u = r = t), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (u = t), r || p.disable(), this;
          },
          locked: function () {
            return !u;
          },
          fireWith: function (e, t) {
            return !l || (i && !u) || ((t = t || []), (t = [e, t.slice ? t.slice() : t]), n ? u.push(t) : c(t)), this;
          },
          fire: function () {
            return p.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return p;
    }),
      x.extend({
        Deferred: function (e) {
          var t = [
              ['resolve', 'done', x.Callbacks('once memory'), 'resolved'],
              ['reject', 'fail', x.Callbacks('once memory'), 'rejected'],
              ['notify', 'progress', x.Callbacks('memory')],
            ],
            n = 'pending',
            r = {
              state: function () {
                return n;
              },
              always: function () {
                return i.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return x
                  .Deferred(function (n) {
                    x.each(t, function (t, o) {
                      var a = o[0],
                        s = x.isFunction(e[t]) && e[t];
                      i[o[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && x.isFunction(e.promise)
                          ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                          : n[a + 'With'](this === r ? n.promise() : this, s ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? x.extend(e, r) : r;
              },
            },
            i = {};
          return (
            (r.pipe = r.then),
            x.each(t, function (e, o) {
              var a = o[2],
                s = o[3];
              (r[o[1]] = a.add),
                s &&
                  a.add(
                    function () {
                      n = s;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock,
                  ),
                (i[o[0]] = function () {
                  return i[o[0] + 'With'](this === i ? r : this, arguments), this;
                }),
                (i[o[0] + 'With'] = a.fireWith);
            }),
            r.promise(i),
            e && e.call(i, i),
            i
          );
        },
        when: function (e) {
          var t = 0,
            n = g.call(arguments),
            r = n.length,
            i = 1 !== r || (e && x.isFunction(e.promise)) ? r : 0,
            o = 1 === i ? e : x.Deferred(),
            a = function (e, t, n) {
              return function (r) {
                (t[e] = this),
                  (n[e] = arguments.length > 1 ? g.call(arguments) : r),
                  n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
              };
            },
            s,
            l,
            u;
          if (r > 1)
            for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)
              n[t] && x.isFunction(n[t].promise)
                ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s))
                : --i;
          return i || o.resolveWith(u, n), o.promise();
        },
      }),
      (x.support = (function (t) {
        var n,
          r,
          o,
          s,
          l,
          u,
          c,
          p,
          f,
          d = a.createElement('div');
        if (
          (d.setAttribute('className', 't'),
          (d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (n = d.getElementsByTagName('*') || []),
          (r = d.getElementsByTagName('a')[0]),
          !r || !r.style || !n.length)
        )
          return t;
        (s = a.createElement('select')),
          (u = s.appendChild(a.createElement('option'))),
          (o = d.getElementsByTagName('input')[0]),
          (r.style.cssText = 'top:1px;float:left;opacity:.5'),
          (t.getSetAttribute = 't' !== d.className),
          (t.leadingWhitespace = 3 === d.firstChild.nodeType),
          (t.tbody = !d.getElementsByTagName('tbody').length),
          (t.htmlSerialize = !!d.getElementsByTagName('link').length),
          (t.style = /top/.test(r.getAttribute('style'))),
          (t.hrefNormalized = '/a' === r.getAttribute('href')),
          (t.opacity = /^0.5/.test(r.style.opacity)),
          (t.cssFloat = !!r.style.cssFloat),
          (t.checkOn = !!o.value),
          (t.optSelected = u.selected),
          (t.enctype = !!a.createElement('form').enctype),
          (t.html5Clone = '<:nav></:nav>' !== a.createElement('nav').cloneNode(!0).outerHTML),
          (t.inlineBlockNeedsLayout = !1),
          (t.shrinkWrapBlocks = !1),
          (t.pixelPosition = !1),
          (t.deleteExpando = !0),
          (t.noCloneEvent = !0),
          (t.reliableMarginRight = !0),
          (t.boxSizingReliable = !0),
          (o.checked = !0),
          (t.noCloneChecked = o.cloneNode(!0).checked),
          (s.disabled = !0),
          (t.optDisabled = !u.disabled);
        try {
          delete d.test;
        } catch (h) {
          t.deleteExpando = !1;
        }
        (o = a.createElement('input')),
          o.setAttribute('value', ''),
          (t.input = '' === o.getAttribute('value')),
          (o.value = 't'),
          o.setAttribute('type', 'radio'),
          (t.radioValue = 't' === o.value),
          o.setAttribute('checked', 't'),
          o.setAttribute('name', 't'),
          (l = a.createDocumentFragment()),
          l.appendChild(o),
          (t.appendChecked = o.checked),
          (t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked),
          d.attachEvent &&
            (d.attachEvent('onclick', function () {
              t.noCloneEvent = !1;
            }),
            d.cloneNode(!0).click());
        for (f in { submit: !0, change: !0, focusin: !0 })
          d.setAttribute((c = 'on' + f), 't'), (t[f + 'Bubbles'] = c in e || d.attributes[c].expando === !1);
        (d.style.backgroundClip = 'content-box'),
          (d.cloneNode(!0).style.backgroundClip = ''),
          (t.clearCloneStyle = 'content-box' === d.style.backgroundClip);
        for (f in x(t)) break;
        return (
          (t.ownLast = '0' !== f),
          x(function () {
            var n,
              r,
              o,
              s =
                'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;',
              l = a.getElementsByTagName('body')[0];
            l &&
              ((n = a.createElement('div')),
              (n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px'),
              l.appendChild(n).appendChild(d),
              (d.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
              (o = d.getElementsByTagName('td')),
              (o[0].style.cssText = 'padding:0;margin:0;border:0;display:none'),
              (p = 0 === o[0].offsetHeight),
              (o[0].style.display = ''),
              (o[1].style.display = 'none'),
              (t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight),
              (d.innerHTML = ''),
              (d.style.cssText =
                'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;'),
              x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () {
                t.boxSizing = 4 === d.offsetWidth;
              }),
              e.getComputedStyle &&
                ((t.pixelPosition = '1%' !== (e.getComputedStyle(d, null) || {}).top),
                (t.boxSizingReliable = '4px' === (e.getComputedStyle(d, null) || { width: '4px' }).width),
                (r = d.appendChild(a.createElement('div'))),
                (r.style.cssText = d.style.cssText = s),
                (r.style.marginRight = r.style.width = '0'),
                (d.style.width = '1px'),
                (t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight))),
              typeof d.style.zoom !== i &&
                ((d.innerHTML = ''),
                (d.style.cssText = s + 'width:1px;padding:1px;display:inline;zoom:1'),
                (t.inlineBlockNeedsLayout = 3 === d.offsetWidth),
                (d.style.display = 'block'),
                (d.innerHTML = '<div></div>'),
                (d.firstChild.style.width = '5px'),
                (t.shrinkWrapBlocks = 3 !== d.offsetWidth),
                t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
              l.removeChild(n),
              (n = d = o = r = null));
          }),
          (n = s = l = u = r = o = null),
          t
        );
      })({}));
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;
    function R(e, n, r, i) {
      if (x.acceptData(e)) {
        var o,
          a,
          s = x.expando,
          l = e.nodeType,
          u = l ? x.cache : e,
          c = l ? e[s] : e[s] && s;
        if ((c && u[c] && (i || u[c].data)) || r !== t || 'string' != typeof n)
          return (
            c || (c = l ? (e[s] = p.pop() || x.guid++) : s),
            u[c] || (u[c] = l ? {} : { toJSON: x.noop }),
            ('object' == typeof n || 'function' == typeof n) &&
              (i ? (u[c] = x.extend(u[c], n)) : (u[c].data = x.extend(u[c].data, n))),
            (a = u[c]),
            i || (a.data || (a.data = {}), (a = a.data)),
            r !== t && (a[x.camelCase(n)] = r),
            'string' == typeof n ? ((o = a[n]), null == o && (o = a[x.camelCase(n)])) : (o = a),
            o
          );
      }
    }
    function W(e, t, n) {
      if (x.acceptData(e)) {
        var r,
          i,
          o = e.nodeType,
          a = o ? x.cache : e,
          s = o ? e[x.expando] : x.expando;
        if (a[s]) {
          if (t && (r = n ? a[s] : a[s].data)) {
            x.isArray(t)
              ? (t = t.concat(x.map(t, x.camelCase)))
              : t in r
              ? (t = [t])
              : ((t = x.camelCase(t)), (t = t in r ? [t] : t.split(' '))),
              (i = t.length);
            while (i--) delete r[t[i]];
            if (n ? !I(r) : !x.isEmptyObject(r)) return;
          }
          (n || (delete a[s].data, I(a[s]))) &&
            (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : (a[s] = null));
        }
      }
    }
    x.extend({
      cache: {},
      noData: {
        applet: !0,
        embed: !0,
        object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
      },
      hasData: function (e) {
        return (e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando]), !!e && !I(e);
      },
      data: function (e, t, n) {
        return R(e, t, n);
      },
      removeData: function (e, t) {
        return W(e, t);
      },
      _data: function (e, t, n) {
        return R(e, t, n, !0);
      },
      _removeData: function (e, t) {
        return W(e, t, !0);
      },
      acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
        var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
        return !t || (t !== !0 && e.getAttribute('classid') === t);
      },
    }),
      x.fn.extend({
        data: function (e, n) {
          var r,
            i,
            o = null,
            a = 0,
            s = this[0];
          if (e === t) {
            if (this.length && ((o = x.data(s)), 1 === s.nodeType && !x._data(s, 'parsedAttrs'))) {
              for (r = s.attributes; r.length > a; a++)
                (i = r[a].name), 0 === i.indexOf('data-') && ((i = x.camelCase(i.slice(5))), $(s, i, o[i]));
              x._data(s, 'parsedAttrs', !0);
            }
            return o;
          }
          return 'object' == typeof e
            ? this.each(function () {
                x.data(this, e);
              })
            : arguments.length > 1
            ? this.each(function () {
                x.data(this, e, n);
              })
            : s
            ? $(s, e, x.data(s, e))
            : null;
        },
        removeData: function (e) {
          return this.each(function () {
            x.removeData(this, e);
          });
        },
      });
    function $(e, n, r) {
      if (r === t && 1 === e.nodeType) {
        var i = 'data-' + n.replace(P, '-$1').toLowerCase();
        if (((r = e.getAttribute(i)), 'string' == typeof r)) {
          try {
            r =
              'true' === r
                ? !0
                : 'false' === r
                ? !1
                : 'null' === r
                ? null
                : +r + '' === r
                ? +r
                : B.test(r)
                ? x.parseJSON(r)
                : r;
          } catch (o) {}
          x.data(e, n, r);
        } else r = t;
      }
      return r;
    }
    function I(e) {
      var t;
      for (t in e) if (('data' !== t || !x.isEmptyObject(e[t])) && 'toJSON' !== t) return !1;
      return !0;
    }
    x.extend({
      queue: function (e, n, r) {
        var i;
        return e
          ? ((n = (n || 'fx') + 'queue'),
            (i = x._data(e, n)),
            r && (!i || x.isArray(r) ? (i = x._data(e, n, x.makeArray(r))) : i.push(r)),
            i || [])
          : t;
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = x.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = x._queueHooks(e, t),
          a = function () {
            x.dequeue(e, t);
          };
        'inprogress' === i && ((i = n.shift()), r--),
          i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          x._data(e, n) ||
          x._data(e, n, {
            empty: x.Callbacks('once memory').add(function () {
              x._removeData(e, t + 'queue'), x._removeData(e, n);
            }),
          })
        );
      },
    }),
      x.fn.extend({
        queue: function (e, n) {
          var r = 2;
          return (
            'string' != typeof e && ((n = e), (e = 'fx'), r--),
            r > arguments.length
              ? x.queue(this[0], e)
              : n === t
              ? this
              : this.each(function () {
                  var t = x.queue(this, e, n);
                  x._queueHooks(this, e), 'fx' === e && 'inprogress' !== t[0] && x.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            x.dequeue(this, e);
          });
        },
        delay: function (e, t) {
          return (
            (e = x.fx ? x.fx.speeds[e] || e : e),
            (t = t || 'fx'),
            this.queue(t, function (t, n) {
              var r = setTimeout(t, e);
              n.stop = function () {
                clearTimeout(r);
              };
            })
          );
        },
        clearQueue: function (e) {
          return this.queue(e || 'fx', []);
        },
        promise: function (e, n) {
          var r,
            i = 1,
            o = x.Deferred(),
            a = this,
            s = this.length,
            l = function () {
              --i || o.resolveWith(a, [a]);
            };
          'string' != typeof e && ((n = e), (e = t)), (e = e || 'fx');
          while (s--) (r = x._data(a[s], e + 'queueHooks')), r && r.empty && (i++, r.empty.add(l));
          return l(), o.promise(n);
        },
      });
    var z,
      X,
      U = /[\t\r\n\f]/g,
      V = /\r/g,
      Y = /^(?:input|select|textarea|button|object)$/i,
      J = /^(?:a|area)$/i,
      G = /^(?:checked|selected)$/i,
      Q = x.support.getSetAttribute,
      K = x.support.input;
    x.fn.extend({
      attr: function (e, t) {
        return x.access(this, x.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          x.removeAttr(this, e);
        });
      },
      prop: function (e, t) {
        return x.access(this, x.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return (
          (e = x.propFix[e] || e),
          this.each(function () {
            try {
              (this[e] = t), delete this[e];
            } catch (n) {}
          })
        );
      },
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 'string' == typeof e && e;
        if (x.isFunction(e))
          return this.each(function (t) {
            x(this).addClass(e.call(this, t, this.className));
          });
        if (l)
          for (t = (e || '').match(T) || []; s > a; a++)
            if (
              ((n = this[a]), (r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(U, ' ') : ' ')))
            ) {
              o = 0;
              while ((i = t[o++])) 0 > r.indexOf(' ' + i + ' ') && (r += i + ' ');
              n.className = x.trim(r);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 0 === arguments.length || ('string' == typeof e && e);
        if (x.isFunction(e))
          return this.each(function (t) {
            x(this).removeClass(e.call(this, t, this.className));
          });
        if (l)
          for (t = (e || '').match(T) || []; s > a; a++)
            if (
              ((n = this[a]), (r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(U, ' ') : '')))
            ) {
              o = 0;
              while ((i = t[o++])) while (r.indexOf(' ' + i + ' ') >= 0) r = r.replace(' ' + i + ' ', ' ');
              n.className = e ? x.trim(r) : '';
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return 'boolean' == typeof t && 'string' === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : x.isFunction(e)
          ? this.each(function (n) {
              x(this).toggleClass(e.call(this, n, this.className, t), t);
            })
          : this.each(function () {
              if ('string' === n) {
                var t,
                  r = 0,
                  o = x(this),
                  a = e.match(T) || [];
                while ((t = a[r++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              } else (n === i || 'boolean' === n) && (this.className && x._data(this, '__className__', this.className), (this.className = this.className || e === !1 ? '' : x._data(this, '__className__') || ''));
            });
      },
      hasClass: function (e) {
        var t = ' ' + e + ' ',
          n = 0,
          r = this.length;
        for (; r > n; n++)
          if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(U, ' ').indexOf(t) >= 0) return !0;
        return !1;
      },
      val: function (e) {
        var n,
          r,
          i,
          o = this[0];
        {
          if (arguments.length)
            return (
              (i = x.isFunction(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  ((o = i ? e.call(this, n, x(this).val()) : e),
                  null == o
                    ? (o = '')
                    : 'number' == typeof o
                    ? (o += '')
                    : x.isArray(o) &&
                      (o = x.map(o, function (e) {
                        return null == e ? '' : e + '';
                      })),
                  (r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]),
                  (r && 'set' in r && r.set(this, o, 'value') !== t) || (this.value = o));
              })
            );
          if (o)
            return (
              (r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]),
              r && 'get' in r && (n = r.get(o, 'value')) !== t
                ? n
                : ((n = o.value), 'string' == typeof n ? n.replace(V, '') : null == n ? '' : n)
            );
        }
      },
    }),
      x.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = x.find.attr(e, 'value');
              return null != t ? t : e.text;
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = 'select-one' === e.type || 0 > i,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                l = 0 > i ? s : o ? i : 0;
              for (; s > l; l++)
                if (
                  ((n = r[l]),
                  !(
                    (!n.selected && l !== i) ||
                    (x.support.optDisabled ? n.disabled : null !== n.getAttribute('disabled')) ||
                    (n.parentNode.disabled && x.nodeName(n.parentNode, 'optgroup'))
                  ))
                ) {
                  if (((t = x(n).val()), o)) return t;
                  a.push(t);
                }
              return a;
            },
            set: function (e, t) {
              var n,
                r,
                i = e.options,
                o = x.makeArray(t),
                a = i.length;
              while (a--) (r = i[a]), (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
        attr: function (e, n, r) {
          var o,
            a,
            s = e.nodeType;
          if (e && 3 !== s && 8 !== s && 2 !== s)
            return typeof e.getAttribute === i
              ? x.prop(e, n, r)
              : ((1 === s && x.isXMLDoc(e)) ||
                  ((n = n.toLowerCase()), (o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z))),
                r === t
                  ? o && 'get' in o && null !== (a = o.get(e, n))
                    ? a
                    : ((a = x.find.attr(e, n)), null == a ? t : a)
                  : null !== r
                  ? o && 'set' in o && (a = o.set(e, r, n)) !== t
                    ? a
                    : (e.setAttribute(n, r + ''), r)
                  : (x.removeAttr(e, n), t));
        },
        removeAttr: function (e, t) {
          var n,
            r,
            i = 0,
            o = t && t.match(T);
          if (o && 1 === e.nodeType)
            while ((n = o[i++]))
              (r = x.propFix[n] || n),
                x.expr.match.bool.test(n)
                  ? (K && Q) || !G.test(n)
                    ? (e[r] = !1)
                    : (e[x.camelCase('default-' + n)] = e[r] = !1)
                  : x.attr(e, n, ''),
                e.removeAttribute(Q ? n : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!x.support.radioValue && 'radio' === t && x.nodeName(e, 'input')) {
                var n = e.value;
                return e.setAttribute('type', t), n && (e.value = n), t;
              }
            },
          },
        },
        propFix: { for: 'htmlFor', class: 'className' },
        prop: function (e, n, r) {
          var i,
            o,
            a,
            s = e.nodeType;
          if (e && 3 !== s && 8 !== s && 2 !== s)
            return (
              (a = 1 !== s || !x.isXMLDoc(e)),
              a && ((n = x.propFix[n] || n), (o = x.propHooks[n])),
              r !== t
                ? o && 'set' in o && (i = o.set(e, r, n)) !== t
                  ? i
                  : (e[n] = r)
                : o && 'get' in o && null !== (i = o.get(e, n))
                ? i
                : e[n]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = x.find.attr(e, 'tabindex');
              return t ? parseInt(t, 10) : Y.test(e.nodeName) || (J.test(e.nodeName) && e.href) ? 0 : -1;
            },
          },
        },
      }),
      (X = {
        set: function (e, t, n) {
          return (
            t === !1
              ? x.removeAttr(e, n)
              : (K && Q) || !G.test(n)
              ? e.setAttribute((!Q && x.propFix[n]) || n, n)
              : (e[x.camelCase('default-' + n)] = e[n] = !0),
            n
          );
        },
      }),
      x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] =
          (K && Q) || !G.test(n)
            ? function (e, n, i) {
                var o = x.expr.attrHandle[n],
                  a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
                return (x.expr.attrHandle[n] = o), a;
              }
            : function (e, n, r) {
                return r ? t : e[x.camelCase('default-' + n)] ? n.toLowerCase() : null;
              };
      }),
      (K && Q) ||
        (x.attrHooks.value = {
          set: function (e, n, r) {
            return x.nodeName(e, 'input') ? ((e.defaultValue = n), t) : z && z.set(e, n, r);
          },
        }),
      Q ||
        ((z = {
          set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return (
              i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
              (i.value = n += ''),
              'value' === r || n === e.getAttribute(r) ? n : t
            );
          },
        }),
        (x.expr.attrHandle.id =
          x.expr.attrHandle.name =
          x.expr.attrHandle.coords =
            function (e, n, r) {
              var i;
              return r ? t : (i = e.getAttributeNode(n)) && '' !== i.value ? i.value : null;
            }),
        (x.valHooks.button = {
          get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t;
          },
          set: z.set,
        }),
        (x.attrHooks.contenteditable = {
          set: function (e, t, n) {
            z.set(e, '' === t ? !1 : t, n);
          },
        }),
        x.each(['width', 'height'], function (e, n) {
          x.attrHooks[n] = {
            set: function (e, r) {
              return '' === r ? (e.setAttribute(n, 'auto'), r) : t;
            },
          };
        })),
      x.support.hrefNormalized ||
        x.each(['href', 'src'], function (e, t) {
          x.propHooks[t] = {
            get: function (e) {
              return e.getAttribute(t, 4);
            },
          };
        }),
      x.support.style ||
        (x.attrHooks.style = {
          get: function (e) {
            return e.style.cssText || t;
          },
          set: function (e, t) {
            return (e.style.cssText = t + '');
          },
        }),
      x.support.optSelected ||
        (x.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
          },
        }),
      x.each(
        [
          'tabIndex',
          'readOnly',
          'maxLength',
          'cellSpacing',
          'cellPadding',
          'rowSpan',
          'colSpan',
          'useMap',
          'frameBorder',
          'contentEditable',
        ],
        function () {
          x.propFix[this.toLowerCase()] = this;
        },
      ),
      x.support.enctype || (x.propFix.enctype = 'encoding'),
      x.each(['radio', 'checkbox'], function () {
        (x.valHooks[this] = {
          set: function (e, n) {
            return x.isArray(n) ? (e.checked = x.inArray(x(e).val(), n) >= 0) : t;
          },
        }),
          x.support.checkOn ||
            (x.valHooks[this].get = function (e) {
              return null === e.getAttribute('value') ? 'on' : e.value;
            });
      });
    var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
      return !0;
    }
    function ot() {
      return !1;
    }
    function at() {
      try {
        return a.activeElement;
      } catch (e) {}
    }
    (x.event = {
      global: {},
      add: function (e, n, r, o, a) {
        var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v = x._data(e);
        if (v) {
          r.handler && ((c = r), (r = c.handler), (a = c.selector)),
            r.guid || (r.guid = x.guid++),
            (l = v.events) || (l = v.events = {}),
            (f = v.handle) ||
              ((f = v.handle =
                function (e) {
                  return typeof x === i || (e && x.event.triggered === e.type)
                    ? t
                    : x.event.dispatch.apply(f.elem, arguments);
                }),
              (f.elem = e)),
            (n = (n || '').match(T) || ['']),
            (u = n.length);
          while (u--)
            (s = rt.exec(n[u]) || []),
              (g = y = s[1]),
              (m = (s[2] || '').split('.').sort()),
              g &&
                ((p = x.event.special[g] || {}),
                (g = (a ? p.delegateType : p.bindType) || g),
                (p = x.event.special[g] || {}),
                (d = x.extend(
                  {
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join('.'),
                  },
                  c,
                )),
                (h = l[g]) ||
                  ((h = l[g] = []),
                  (h.delegateCount = 0),
                  (p.setup && p.setup.call(e, o, m, f) !== !1) ||
                    (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent('on' + g, f))),
                p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
                a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                (x.event.global[g] = !0));
          e = null;
        }
      },
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m = x.hasData(e) && x._data(e);
        if (m && (c = m.events)) {
          (t = (t || '').match(T) || ['']), (u = t.length);
          while (u--)
            if (((s = rt.exec(t[u]) || []), (d = g = s[1]), (h = (s[2] || '').split('.').sort()), d)) {
              (p = x.event.special[d] || {}),
                (d = (r ? p.delegateType : p.bindType) || d),
                (f = c[d] || []),
                (s = s[2] && RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
                (l = o = f.length);
              while (o--)
                (a = f[o]),
                  (!i && g !== a.origType) ||
                    (n && n.guid !== a.guid) ||
                    (s && !s.test(a.namespace)) ||
                    (r && r !== a.selector && ('**' !== r || !a.selector)) ||
                    (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
              l &&
                !f.length &&
                ((p.teardown && p.teardown.call(e, h, m.handle) !== !1) || x.removeEvent(e, d, m.handle), delete c[d]);
            } else for (d in c) x.event.remove(e, d + t[u], n, r, !0);
          x.isEmptyObject(c) && (delete m.handle, x._removeData(e, 'events'));
        }
      },
      trigger: function (n, r, i, o) {
        var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h = [i || a],
          g = v.call(n, 'type') ? n.type : n,
          m = v.call(n, 'namespace') ? n.namespace.split('.') : [];
        if (
          ((u = f = i = i || a),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !nt.test(g + x.event.triggered) &&
            (g.indexOf('.') >= 0 && ((m = g.split('.')), (g = m.shift()), m.sort()),
            (l = 0 > g.indexOf(':') && 'on' + g),
            (n = n[x.expando] ? n : new x.Event(g, 'object' == typeof n && n)),
            (n.isTrigger = o ? 2 : 3),
            (n.namespace = m.join('.')),
            (n.namespace_re = n.namespace ? RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
            (n.result = t),
            n.target || (n.target = i),
            (r = null == r ? [n] : x.makeArray(r, [n])),
            (p = x.event.special[g] || {}),
            o || !p.trigger || p.trigger.apply(i, r) !== !1))
        ) {
          if (!o && !p.noBubble && !x.isWindow(i)) {
            for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), (f = u);
            f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
          }
          d = 0;
          while ((u = h[d++]) && !n.isPropagationStopped())
            (n.type = d > 1 ? c : p.bindType || g),
              (s = (x._data(u, 'events') || {})[n.type] && x._data(u, 'handle')),
              s && s.apply(u, r),
              (s = l && u[l]),
              s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
          if (
            ((n.type = g),
            !o &&
              !n.isDefaultPrevented() &&
              (!p._default || p._default.apply(h.pop(), r) === !1) &&
              x.acceptData(i) &&
              l &&
              i[g] &&
              !x.isWindow(i))
          ) {
            (f = i[l]), f && (i[l] = null), (x.event.triggered = g);
            try {
              i[g]();
            } catch (y) {}
            (x.event.triggered = t), f && (i[l] = f);
          }
          return n.result;
        }
      },
      dispatch: function (e) {
        e = x.event.fix(e);
        var n,
          r,
          i,
          o,
          a,
          s = [],
          l = g.call(arguments),
          u = (x._data(this, 'events') || {})[e.type] || [],
          c = x.event.special[e.type] || {};
        if (((l[0] = e), (e.delegateTarget = this), !c.preDispatch || c.preDispatch.call(this, e) !== !1)) {
          (s = x.event.handlers.call(this, e, u)), (n = 0);
          while ((o = s[n++]) && !e.isPropagationStopped()) {
            (e.currentTarget = o.elem), (a = 0);
            while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
              (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
                ((e.handleObj = i),
                (e.data = i.data),
                (r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)),
                r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
          return c.postDispatch && c.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, n) {
        var r,
          i,
          o,
          a,
          s = [],
          l = n.delegateCount,
          u = e.target;
        if (l && u.nodeType && (!e.button || 'click' !== e.type))
          for (; u != this; u = u.parentNode || this)
            if (1 === u.nodeType && (u.disabled !== !0 || 'click' !== e.type)) {
              for (o = [], a = 0; l > a; a++)
                (i = n[a]),
                  (r = i.selector + ' '),
                  o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length),
                  o[r] && o.push(i);
              o.length && s.push({ elem: u, handlers: o });
            }
        return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
      },
      fix: function (e) {
        if (e[x.expando]) return e;
        var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];
        s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
          (r = s.props ? this.props.concat(s.props) : this.props),
          (e = new x.Event(o)),
          (t = r.length);
        while (t--) (n = r[t]), (e[n] = o[n]);
        return (
          e.target || (e.target = o.srcElement || a),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          (e.metaKey = !!e.metaKey),
          s.filter ? s.filter(e, o) : e
        );
      },
      props:
        'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
          ' ',
        ),
      fixHooks: {},
      keyHooks: {
        props: 'char charCode key keyCode'.split(' '),
        filter: function (e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
        },
      },
      mouseHooks: {
        props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
          ' ',
        ),
        filter: function (e, n) {
          var r,
            i,
            o,
            s = n.button,
            l = n.fromElement;
          return (
            null == e.pageX &&
              null != n.clientX &&
              ((i = e.target.ownerDocument || a),
              (o = i.documentElement),
              (r = i.body),
              (e.pageX =
                n.clientX +
                ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
                ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
              (e.pageY =
                n.clientY +
                ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
                ((o && o.clientTop) || (r && r.clientTop) || 0))),
            !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l),
            e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
            e
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== at() && this.focus)
              try {
                return this.focus(), !1;
              } catch (e) {}
          },
          delegateType: 'focusin',
        },
        blur: {
          trigger: function () {
            return this === at() && this.blur ? (this.blur(), !1) : t;
          },
          delegateType: 'focusout',
        },
        click: {
          trigger: function () {
            return x.nodeName(this, 'input') && 'checkbox' === this.type && this.click ? (this.click(), !1) : t;
          },
          _default: function (e) {
            return x.nodeName(e.target, 'a');
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== t && (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, n, r) {
        var i = x.extend(new x.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (x.removeEvent = a.removeEventListener
        ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1);
          }
        : function (e, t, n) {
            var r = 'on' + t;
            e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
          }),
      (x.Event = function (e, n) {
        return this instanceof x.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented || e.returnValue === !1 || (e.getPreventDefault && e.getPreventDefault())
                    ? it
                    : ot))
              : (this.type = e),
            n && x.extend(this, n),
            (this.timeStamp = (e && e.timeStamp) || x.now()),
            (this[x.expando] = !0),
            t)
          : new x.Event(e, n);
      }),
      (x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = it), e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = it), e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          (this.isImmediatePropagationStopped = it), this.stopPropagation();
        },
      }),
      x.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (e, t) {
        x.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (!i || (i !== r && !x.contains(r, i))) &&
                ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
              n
            );
          },
        };
      }),
      x.support.submitBubbles ||
        (x.event.special.submit = {
          setup: function () {
            return x.nodeName(this, 'form')
              ? !1
              : (x.event.add(this, 'click._submit keypress._submit', function (e) {
                  var n = e.target,
                    r = x.nodeName(n, 'input') || x.nodeName(n, 'button') ? n.form : t;
                  r &&
                    !x._data(r, 'submitBubbles') &&
                    (x.event.add(r, 'submit._submit', function (e) {
                      e._submit_bubble = !0;
                    }),
                    x._data(r, 'submitBubbles', !0));
                }),
                t);
          },
          postDispatch: function (e) {
            e._submit_bubble &&
              (delete e._submit_bubble,
              this.parentNode && !e.isTrigger && x.event.simulate('submit', this.parentNode, e, !0));
          },
          teardown: function () {
            return x.nodeName(this, 'form') ? !1 : (x.event.remove(this, '._submit'), t);
          },
        }),
      x.support.changeBubbles ||
        (x.event.special.change = {
          setup: function () {
            return Z.test(this.nodeName)
              ? (('checkbox' === this.type || 'radio' === this.type) &&
                  (x.event.add(this, 'propertychange._change', function (e) {
                    'checked' === e.originalEvent.propertyName && (this._just_changed = !0);
                  }),
                  x.event.add(this, 'click._change', function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1),
                      x.event.simulate('change', this, e, !0);
                  })),
                !1)
              : (x.event.add(this, 'beforeactivate._change', function (e) {
                  var t = e.target;
                  Z.test(t.nodeName) &&
                    !x._data(t, 'changeBubbles') &&
                    (x.event.add(t, 'change._change', function (e) {
                      !this.parentNode ||
                        e.isSimulated ||
                        e.isTrigger ||
                        x.event.simulate('change', this.parentNode, e, !0);
                    }),
                    x._data(t, 'changeBubbles', !0));
                }),
                t);
          },
          handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || ('radio' !== n.type && 'checkbox' !== n.type)
              ? e.handleObj.handler.apply(this, arguments)
              : t;
          },
          teardown: function () {
            return x.event.remove(this, '._change'), !Z.test(this.nodeName);
          },
        }),
      x.support.focusinBubbles ||
        x.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
          var n = 0,
            r = function (e) {
              x.event.simulate(t, e.target, x.event.fix(e), !0);
            };
          x.event.special[t] = {
            setup: function () {
              0 === n++ && a.addEventListener(e, r, !0);
            },
            teardown: function () {
              0 === --n && a.removeEventListener(e, r, !0);
            },
          };
        }),
      x.fn.extend({
        on: function (e, n, r, i, o) {
          var a, s;
          if ('object' == typeof e) {
            'string' != typeof n && ((r = r || n), (n = t));
            for (a in e) this.on(a, n, r, e[a], o);
            return this;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = t))
              : null == i && ('string' == typeof n ? ((i = r), (r = t)) : ((i = r), (r = n), (n = t))),
            i === !1)
          )
            i = ot;
          else if (!i) return this;
          return (
            1 === o &&
              ((s = i),
              (i = function (e) {
                return x().off(e), s.apply(this, arguments);
              }),
              (i.guid = s.guid || (s.guid = x.guid++))),
            this.each(function () {
              x.event.add(this, e, i, r, n);
            })
          );
        },
        one: function (e, t, n, r) {
          return this.on(e, t, n, r, 1);
        },
        off: function (e, n, r) {
          var i, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              x(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler),
              this
            );
          if ('object' == typeof e) {
            for (o in e) this.off(o, n, e[o]);
            return this;
          }
          return (
            (n === !1 || 'function' == typeof n) && ((r = n), (n = t)),
            r === !1 && (r = ot),
            this.each(function () {
              x.event.remove(this, e, r, n);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            x.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, n) {
          var r = this[0];
          return r ? x.event.trigger(e, n, r, !0) : t;
        },
      });
    var st = /^.[^:#\[\.,]*$/,
      lt = /^(?:parents|prev(?:Until|All))/,
      ut = x.expr.match.needsContext,
      ct = { children: !0, contents: !0, next: !0, prev: !0 };
    x.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ('string' != typeof e)
          return this.pushStack(
            x(e).filter(function () {
              for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0;
            }),
          );
        for (t = 0; i > t; t++) x.find(e, r[t], n);
        return (
          (n = this.pushStack(i > 1 ? x.unique(n) : n)), (n.selector = this.selector ? this.selector + ' ' + e : e), n
        );
      },
      has: function (e) {
        var t,
          n = x(e, this),
          r = n.length;
        return this.filter(function () {
          for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0;
        });
      },
      not: function (e) {
        return this.pushStack(ft(this, e || [], !0));
      },
      filter: function (e) {
        return this.pushStack(ft(this, e || [], !1));
      },
      is: function (e) {
        return !!ft(this, 'string' == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = ut.test(e) || 'string' != typeof e ? x(e, t || this.context) : 0;
        for (; i > r; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
              n = o.push(n);
              break;
            }
        return this.pushStack(o.length > 1 ? x.unique(o) : o);
      },
      index: function (e) {
        return e
          ? 'string' == typeof e
            ? x.inArray(this[0], x(e))
            : x.inArray(e.jquery ? e[0] : e, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        var n = 'string' == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
          r = x.merge(this.get(), n);
        return this.pushStack(x.unique(r));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    });
    function pt(e, t) {
      do e = e[t];
      while (e && 1 !== e.nodeType);
      return e;
    }
    x.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return x.dir(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return x.dir(e, 'parentNode', n);
        },
        next: function (e) {
          return pt(e, 'nextSibling');
        },
        prev: function (e) {
          return pt(e, 'previousSibling');
        },
        nextAll: function (e) {
          return x.dir(e, 'nextSibling');
        },
        prevAll: function (e) {
          return x.dir(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return x.dir(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return x.dir(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return x.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return x.sibling(e.firstChild);
        },
        contents: function (e) {
          return x.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
        },
      },
      function (e, t) {
        x.fn[e] = function (n, r) {
          var i = x.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (r = n),
            r && 'string' == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())),
            this.pushStack(i)
          );
        };
      },
    ),
      x.extend({
        filter: function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === r.nodeType
              ? x.find.matchesSelector(r, e)
                ? [r]
                : []
              : x.find.matches(
                  e,
                  x.grep(t, function (e) {
                    return 1 === e.nodeType;
                  }),
                )
          );
        },
        dir: function (e, n, r) {
          var i = [],
            o = e[n];
          while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))
            1 === o.nodeType && i.push(o), (o = o[n]);
          return i;
        },
        sibling: function (e, t) {
          var n = [];
          for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
      });
    function ft(e, t, n) {
      if (x.isFunction(t))
        return x.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        });
      if (t.nodeType)
        return x.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ('string' == typeof t) {
        if (st.test(t)) return x.filter(t, e, n);
        t = x.filter(t, e);
      }
      return x.grep(e, function (e) {
        return x.inArray(e, t) >= 0 !== n;
      });
    }
    function dt(e) {
      var t = ht.split('|'),
        n = e.createDocumentFragment();
      if (n.createElement) while (t.length) n.createElement(t.pop());
      return n;
    }
    var ht =
        'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp('<(?:' + ht + ')[\\s/>]', 'i'),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Ct = /^(?:checkbox|radio)$/i,
      Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = {
        option: [1, "<select multiple='multiple'>", '</select>'],
        legend: [1, '<fieldset>', '</fieldset>'],
        area: [1, '<map>', '</map>'],
        param: [1, '<object>', '</object>'],
        thead: [1, '<table>', '</table>'],
        tr: [2, '<table><tbody>', '</tbody></table>'],
        col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
        _default: x.support.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'],
      },
      jt = dt(a),
      Dt = jt.appendChild(a.createElement('div'));
    (At.optgroup = At.option),
      (At.tbody = At.tfoot = At.colgroup = At.caption = At.thead),
      (At.th = At.td),
      x.fn.extend({
        text: function (e) {
          return x.access(
            this,
            function (e) {
              return e === t
                ? x.text(this)
                : this.empty().append(((this[0] && this[0].ownerDocument) || a).createTextNode(e));
            },
            null,
            e,
            arguments.length,
          );
        },
        append: function () {
          return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Lt(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = Lt(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          var n,
            r = e ? x.filter(e, this) : this,
            i = 0;
          for (; null != (n = r[i]); i++)
            t || 1 !== n.nodeType || x.cleanData(Ft(n)),
              n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, 'script')), n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          var e,
            t = 0;
          for (; null != (e = this[t]); t++) {
            1 === e.nodeType && x.cleanData(Ft(e, !1));
            while (e.firstChild) e.removeChild(e.firstChild);
            e.options && x.nodeName(e, 'select') && (e.options.length = 0);
          }
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null == e ? !1 : e),
            (t = null == t ? e : t),
            this.map(function () {
              return x.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return x.access(
            this,
            function (e) {
              var n = this[0] || {},
                r = 0,
                i = this.length;
              if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, '') : t;
              if (
                !(
                  'string' != typeof e ||
                  Tt.test(e) ||
                  (!x.support.htmlSerialize && mt.test(e)) ||
                  (!x.support.leadingWhitespace && yt.test(e)) ||
                  At[(bt.exec(e) || ['', ''])[1].toLowerCase()]
                )
              ) {
                e = e.replace(vt, '<$1></$2>');
                try {
                  for (; i > r; r++)
                    (n = this[r] || {}), 1 === n.nodeType && (x.cleanData(Ft(n, !1)), (n.innerHTML = e));
                  n = 0;
                } catch (o) {}
              }
              n && this.empty().append(e);
            },
            null,
            e,
            arguments.length,
          );
        },
        replaceWith: function () {
          var e = x.map(this, function (e) {
              return [e.nextSibling, e.parentNode];
            }),
            t = 0;
          return (
            this.domManip(
              arguments,
              function (n) {
                var r = e[t++],
                  i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
              },
              !0,
            ),
            t ? this : this.remove()
          );
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, t, n) {
          e = d.apply([], e);
          var r,
            i,
            o,
            a,
            s,
            l,
            u = 0,
            c = this.length,
            p = this,
            f = c - 1,
            h = e[0],
            g = x.isFunction(h);
          if (g || (!(1 >= c || 'string' != typeof h || x.support.checkClone) && Nt.test(h)))
            return this.each(function (r) {
              var i = p.eq(r);
              g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
            });
          if (
            c &&
            ((l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this)),
            (r = l.firstChild),
            1 === l.childNodes.length && (l = r),
            r)
          ) {
            for (a = x.map(Ft(l, 'script'), Ht), o = a.length; c > u; u++)
              (i = l), u !== f && ((i = x.clone(i, !0, !0)), o && x.merge(a, Ft(i, 'script'))), t.call(this[u], i, u);
            if (o)
              for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)
                (i = a[u]),
                  kt.test(i.type || '') &&
                    !x._data(i, 'globalEval') &&
                    x.contains(s, i) &&
                    (i.src
                      ? x._evalUrl(i.src)
                      : x.globalEval((i.text || i.textContent || i.innerHTML || '').replace(St, '')));
            l = r = null;
          }
          return this;
        },
      });
    function Lt(e, t) {
      return x.nodeName(e, 'table') && x.nodeName(1 === t.nodeType ? t : t.firstChild, 'tr')
        ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody'))
        : e;
    }
    function Ht(e) {
      return (e.type = (null !== x.find.attr(e, 'type')) + '/' + e.type), e;
    }
    function qt(e) {
      var t = Et.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
    }
    function _t(e, t) {
      var n,
        r = 0;
      for (; null != (n = e[r]); r++) x._data(n, 'globalEval', !t || x._data(t[r], 'globalEval'));
    }
    function Mt(e, t) {
      if (1 === t.nodeType && x.hasData(e)) {
        var n,
          r,
          i,
          o = x._data(e),
          a = x._data(t, o),
          s = o.events;
        if (s) {
          delete a.handle, (a.events = {});
          for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]);
        }
        a.data && (a.data = x.extend({}, a.data));
      }
    }
    function Ot(e, t) {
      var n, r, i;
      if (1 === t.nodeType) {
        if (((n = t.nodeName.toLowerCase()), !x.support.noCloneEvent && t[x.expando])) {
          i = x._data(t);
          for (r in i.events) x.removeEvent(t, r, i.handle);
          t.removeAttribute(x.expando);
        }
        'script' === n && t.text !== e.text
          ? ((Ht(t).text = e.text), qt(t))
          : 'object' === n
          ? (t.parentNode && (t.outerHTML = e.outerHTML),
            x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))
          : 'input' === n && Ct.test(e.type)
          ? ((t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value))
          : 'option' === n
          ? (t.defaultSelected = t.selected = e.defaultSelected)
          : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue);
      }
    }
    x.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        x.fn[e] = function (e) {
          var n,
            r = 0,
            i = [],
            o = x(e),
            a = o.length - 1;
          for (; a >= r; r++) (n = r === a ? this : this.clone(!0)), x(o[r])[t](n), h.apply(i, n.get());
          return this.pushStack(i);
        };
      },
    );
    function Ft(e, n) {
      var r,
        o,
        a = 0,
        s =
          typeof e.getElementsByTagName !== i
            ? e.getElementsByTagName(n || '*')
            : typeof e.querySelectorAll !== i
            ? e.querySelectorAll(n || '*')
            : t;
      if (!s)
        for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)
          !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
      return n === t || (n && x.nodeName(e, n)) ? x.merge([e], s) : s;
    }
    function Bt(e) {
      Ct.test(e.type) && (e.defaultChecked = e.checked);
    }
    x.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          l = x.contains(e.ownerDocument, e);
        if (
          (x.support.html5Clone || x.isXMLDoc(e) || !mt.test('<' + e.nodeName + '>')
            ? (o = e.cloneNode(!0))
            : ((Dt.innerHTML = e.outerHTML), Dt.removeChild((o = Dt.firstChild))),
          !(
            (x.support.noCloneEvent && x.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            x.isXMLDoc(e)
          ))
        )
          for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
        if (t)
          if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
          else Mt(e, o);
        return (r = Ft(o, 'script')), r.length > 0 && _t(r, !l && Ft(e, 'script')), (r = s = i = null), o;
      },
      buildFragment: function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = e.length,
          f = dt(t),
          d = [],
          h = 0;
        for (; p > h; h++)
          if (((o = e[h]), o || 0 === o))
            if ('object' === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
            else if (wt.test(o)) {
              (s = s || f.appendChild(t.createElement('div'))),
                (l = (bt.exec(o) || ['', ''])[1].toLowerCase()),
                (c = At[l] || At._default),
                (s.innerHTML = c[1] + o.replace(vt, '<$1></$2>') + c[2]),
                (i = c[0]);
              while (i--) s = s.lastChild;
              if (
                (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                !x.support.tbody)
              ) {
                (o = 'table' !== l || xt.test(o) ? ('<table>' !== c[1] || xt.test(o) ? 0 : s) : s.firstChild),
                  (i = o && o.childNodes.length);
                while (i--) x.nodeName((u = o.childNodes[i]), 'tbody') && !u.childNodes.length && o.removeChild(u);
              }
              x.merge(d, s.childNodes), (s.textContent = '');
              while (s.firstChild) s.removeChild(s.firstChild);
              s = f.lastChild;
            } else d.push(t.createTextNode(o));
        s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, 'input'), Bt), (h = 0);
        while ((o = d[h++]))
          if (
            (!r || -1 === x.inArray(o, r)) &&
            ((a = x.contains(o.ownerDocument, o)), (s = Ft(f.appendChild(o), 'script')), a && _t(s), n)
          ) {
            i = 0;
            while ((o = s[i++])) kt.test(o.type || '') && n.push(o);
          }
        return (s = null), f;
      },
      cleanData: function (e, t) {
        var n,
          r,
          o,
          a,
          s = 0,
          l = x.expando,
          u = x.cache,
          c = x.support.deleteExpando,
          f = x.event.special;
        for (; null != (n = e[s]); s++)
          if ((t || x.acceptData(n)) && ((o = n[l]), (a = o && u[o]))) {
            if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
            u[o] &&
              (delete u[o],
              c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : (n[l] = null),
              p.push(o));
          }
      },
      _evalUrl: function (e) {
        return x.ajax({
          url: e,
          type: 'GET',
          dataType: 'script',
          async: !1,
          global: !1,
          throws: !0,
        });
      },
    }),
      x.fn.extend({
        wrapAll: function (e) {
          if (x.isFunction(e))
            return this.each(function (t) {
              x(this).wrapAll(e.call(this, t));
            });
          if (this[0]) {
            var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  var e = this;
                  while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                  return e;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (e) {
          return x.isFunction(e)
            ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = x(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = x.isFunction(e);
          return this.each(function (n) {
            x(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              x.nodeName(this, 'body') || x(this).replaceWith(this.childNodes);
            })
            .end();
        },
      });
    var Pt,
      Rt,
      Wt,
      $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp('^(' + w + ')(.*)$', 'i'),
      Yt = RegExp('^(' + w + ')(?!px)[a-z%]+$', 'i'),
      Jt = RegExp('^([+-])=(' + w + ')', 'i'),
      Gt = { BODY: 'block' },
      Qt = { position: 'absolute', visibility: 'hidden', display: 'block' },
      Kt = { letterSpacing: 0, fontWeight: 400 },
      Zt = ['Top', 'Right', 'Bottom', 'Left'],
      en = ['Webkit', 'O', 'Moz', 'ms'];
    function tn(e, t) {
      if (t in e) return t;
      var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;
      while (i--) if (((t = en[i] + n), t in e)) return t;
      return r;
    }
    function nn(e, t) {
      return (e = t || e), 'none' === x.css(e, 'display') || !x.contains(e.ownerDocument, e);
    }
    function rn(e, t) {
      var n,
        r,
        i,
        o = [],
        a = 0,
        s = e.length;
      for (; s > a; a++)
        (r = e[a]),
          r.style &&
            ((o[a] = x._data(r, 'olddisplay')),
            (n = r.style.display),
            t
              ? (o[a] || 'none' !== n || (r.style.display = ''),
                '' === r.style.display && nn(r) && (o[a] = x._data(r, 'olddisplay', ln(r.nodeName))))
              : o[a] ||
                ((i = nn(r)), ((n && 'none' !== n) || !i) && x._data(r, 'olddisplay', i ? n : x.css(r, 'display'))));
      for (a = 0; s > a; a++)
        (r = e[a]),
          r.style &&
            ((t && 'none' !== r.style.display && '' !== r.style.display) ||
              (r.style.display = t ? o[a] || '' : 'none'));
      return e;
    }
    x.fn.extend({
      css: function (e, n) {
        return x.access(
          this,
          function (e, n, r) {
            var i,
              o,
              a = {},
              s = 0;
            if (x.isArray(n)) {
              for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
              return a;
            }
            return r !== t ? x.style(e, n, r) : x.css(e, n);
          },
          e,
          n,
          arguments.length > 1,
        );
      },
      show: function () {
        return rn(this, !0);
      },
      hide: function () {
        return rn(this);
      },
      toggle: function (e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              nn(this) ? x(this).show() : x(this).hide();
            });
      },
    }),
      x.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Wt(e, 'opacity');
                return '' === n ? '1' : n;
              }
            },
          },
        },
        cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: { float: x.support.cssFloat ? 'cssFloat' : 'styleFloat' },
        style: function (e, n, r, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              a,
              s,
              l = x.camelCase(n),
              u = e.style;
            if (((n = x.cssProps[l] || (x.cssProps[l] = tn(u, l))), (s = x.cssHooks[n] || x.cssHooks[l]), r === t))
              return s && 'get' in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
            if (
              ((a = typeof r),
              'string' === a && (o = Jt.exec(r)) && ((r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n))), (a = 'number')),
              !(
                null == r ||
                ('number' === a && isNaN(r)) ||
                ('number' !== a || x.cssNumber[l] || (r += 'px'),
                x.support.clearCloneStyle || '' !== r || 0 !== n.indexOf('background') || (u[n] = 'inherit'),
                s && 'set' in s && (r = s.set(e, r, i)) === t)
              ))
            )
              try {
                u[n] = r;
              } catch (c) {}
          }
        },
        css: function (e, n, r, i) {
          var o,
            a,
            s,
            l = x.camelCase(n);
          return (
            (n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l))),
            (s = x.cssHooks[n] || x.cssHooks[l]),
            s && 'get' in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            'normal' === a && n in Kt && (a = Kt[n]),
            '' === r || r ? ((o = parseFloat(a)), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
          );
        },
      }),
      e.getComputedStyle
        ? ((Rt = function (t) {
            return e.getComputedStyle(t, null);
          }),
          (Wt = function (e, n, r) {
            var i,
              o,
              a,
              s = r || Rt(e),
              l = s ? s.getPropertyValue(n) || s[n] : t,
              u = e.style;
            return (
              s &&
                ('' !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)),
                Yt.test(l) &&
                  Ut.test(n) &&
                  ((i = u.width),
                  (o = u.minWidth),
                  (a = u.maxWidth),
                  (u.minWidth = u.maxWidth = u.width = l),
                  (l = s.width),
                  (u.width = i),
                  (u.minWidth = o),
                  (u.maxWidth = a))),
              l
            );
          }))
        : a.documentElement.currentStyle &&
          ((Rt = function (e) {
            return e.currentStyle;
          }),
          (Wt = function (e, n, r) {
            var i,
              o,
              a,
              s = r || Rt(e),
              l = s ? s[n] : t,
              u = e.style;
            return (
              null == l && u && u[n] && (l = u[n]),
              Yt.test(l) &&
                !zt.test(n) &&
                ((i = u.left),
                (o = e.runtimeStyle),
                (a = o && o.left),
                a && (o.left = e.currentStyle.left),
                (u.left = 'fontSize' === n ? '1em' : l),
                (l = u.pixelLeft + 'px'),
                (u.left = i),
                a && (o.left = a)),
              '' === l ? 'auto' : l
            );
          }));
    function on(e, t, n) {
      var r = Vt.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
    }
    function an(e, t, n, r, i) {
      var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
        a = 0;
      for (; 4 > o; o += 2)
        'margin' === n && (a += x.css(e, n + Zt[o], !0, i)),
          r
            ? ('content' === n && (a -= x.css(e, 'padding' + Zt[o], !0, i)),
              'margin' !== n && (a -= x.css(e, 'border' + Zt[o] + 'Width', !0, i)))
            : ((a += x.css(e, 'padding' + Zt[o], !0, i)),
              'padding' !== n && (a += x.css(e, 'border' + Zt[o] + 'Width', !0, i)));
      return a;
    }
    function sn(e, t, n) {
      var r = !0,
        i = 'width' === t ? e.offsetWidth : e.offsetHeight,
        o = Rt(e),
        a = x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, o);
      if (0 >= i || null == i) {
        if (((i = Wt(e, t, o)), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))) return i;
        (r = a && (x.support.boxSizingReliable || i === e.style[t])), (i = parseFloat(i) || 0);
      }
      return i + an(e, t, n || (a ? 'border' : 'content'), r, o) + 'px';
    }
    function ln(e) {
      var t = a,
        n = Gt[e];
      return (
        n ||
          ((n = un(e, t)),
          ('none' !== n && n) ||
            ((Pt = (
              Pt || x("<iframe frameborder='0' width='0' height='0'/>").css('cssText', 'display:block !important')
            ).appendTo(t.documentElement)),
            (t = (Pt[0].contentWindow || Pt[0].contentDocument).document),
            t.write('<!doctype html><html><body>'),
            t.close(),
            (n = un(e, t)),
            Pt.detach()),
          (Gt[e] = n)),
        n
      );
    }
    function un(e, t) {
      var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], 'display');
      return n.remove(), r;
    }
    x.each(['height', 'width'], function (e, n) {
      x.cssHooks[n] = {
        get: function (e, r, i) {
          return r
            ? 0 === e.offsetWidth && Xt.test(x.css(e, 'display'))
              ? x.swap(e, Qt, function () {
                  return sn(e, n, i);
                })
              : sn(e, n, i)
            : t;
        },
        set: function (e, t, r) {
          var i = r && Rt(e);
          return on(e, t, r ? an(e, n, r, x.support.boxSizing && 'border-box' === x.css(e, 'boxSizing', !1, i), i) : 0);
        },
      };
    }),
      x.support.opacity ||
        (x.cssHooks.opacity = {
          get: function (e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '')
              ? 0.01 * parseFloat(RegExp.$1) + ''
              : t
              ? '1'
              : '';
          },
          set: function (e, t) {
            var n = e.style,
              r = e.currentStyle,
              i = x.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
              o = (r && r.filter) || n.filter || '';
            (n.zoom = 1),
              ((t >= 1 || '' === t) &&
                '' === x.trim(o.replace($t, '')) &&
                n.removeAttribute &&
                (n.removeAttribute('filter'), '' === t || (r && !r.filter))) ||
                (n.filter = $t.test(o) ? o.replace($t, i) : o + ' ' + i);
          },
        }),
      x(function () {
        x.support.reliableMarginRight ||
          (x.cssHooks.marginRight = {
            get: function (e, n) {
              return n ? x.swap(e, { display: 'inline-block' }, Wt, [e, 'marginRight']) : t;
            },
          }),
          !x.support.pixelPosition &&
            x.fn.position &&
            x.each(['top', 'left'], function (e, n) {
              x.cssHooks[n] = {
                get: function (e, r) {
                  return r ? ((r = Wt(e, n)), Yt.test(r) ? x(e).position()[n] + 'px' : r) : t;
                },
              };
            });
      }),
      x.expr &&
        x.expr.filters &&
        ((x.expr.filters.hidden = function (e) {
          return (
            (0 >= e.offsetWidth && 0 >= e.offsetHeight) ||
            (!x.support.reliableHiddenOffsets && 'none' === ((e.style && e.style.display) || x.css(e, 'display')))
          );
        }),
        (x.expr.filters.visible = function (e) {
          return !x.expr.filters.hidden(e);
        })),
      x.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
        (x.cssHooks[e + t] = {
          expand: function (n) {
            var r = 0,
              i = {},
              o = 'string' == typeof n ? n.split(' ') : [n];
            for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          Ut.test(e) || (x.cssHooks[e + t].set = on);
      });
    var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
      serialize: function () {
        return x.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = x.prop(this, 'elements');
          return e ? x.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !x(this).is(':disabled') &&
              hn.test(this.nodeName) &&
              !dn.test(e) &&
              (this.checked || !Ct.test(e))
            );
          })
          .map(function (e, t) {
            var n = x(this).val();
            return null == n
              ? null
              : x.isArray(n)
              ? x.map(n, function (e) {
                  return { name: t.name, value: e.replace(fn, '\r\n') };
                })
              : { name: t.name, value: n.replace(fn, '\r\n') };
          })
          .get();
      },
    }),
      (x.param = function (e, n) {
        var r,
          i = [],
          o = function (e, t) {
            (t = x.isFunction(t) ? t() : null == t ? '' : t),
              (i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t));
          };
        if (
          (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
          x.isArray(e) || (e.jquery && !x.isPlainObject(e)))
        )
          x.each(e, function () {
            o(this.name, this.value);
          });
        else for (r in e) gn(r, e[r], n, o);
        return i.join('&').replace(cn, '+');
      });
    function gn(e, t, n, r) {
      var i;
      if (x.isArray(t))
        x.each(t, function (t, i) {
          n || pn.test(e) ? r(e, i) : gn(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r);
        });
      else if (n || 'object' !== x.type(t)) r(e, t);
      else for (i in t) gn(e + '[' + i + ']', t[i], n, r);
    }
    x.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' ',
      ),
      function (e, t) {
        x.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      },
    ),
      x.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
        },
      });
    var mn,
      yn,
      vn = x.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Nn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = x.fn.load,
      An = {},
      jn = {},
      Dn = '*/'.concat('*');
    try {
      yn = o.href;
    } catch (Ln) {
      (yn = a.createElement('a')), (yn.href = ''), (yn = yn.href);
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
      return function (t, n) {
        'string' != typeof t && ((n = t), (t = '*'));
        var r,
          i = 0,
          o = t.toLowerCase().match(T) || [];
        if (x.isFunction(n))
          while ((r = o[i++]))
            '+' === r[0] ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      };
    }
    function qn(e, n, r, i) {
      var o = {},
        a = e === jn;
      function s(l) {
        var u;
        return (
          (o[l] = !0),
          x.each(e[l] || [], function (e, l) {
            var c = l(n, r, i);
            return 'string' != typeof c || a || o[c] ? (a ? !(u = c) : t) : (n.dataTypes.unshift(c), s(c), !1);
          }),
          u
        );
      }
      return s(n.dataTypes[0]) || (!o['*'] && s('*'));
    }
    function _n(e, n) {
      var r,
        i,
        o = x.ajaxSettings.flatOptions || {};
      for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
      return r && x.extend(!0, e, r), e;
    }
    (x.fn.load = function (e, n, r) {
      if ('string' != typeof e && Sn) return Sn.apply(this, arguments);
      var i,
        o,
        a,
        s = this,
        l = e.indexOf(' ');
      return (
        l >= 0 && ((i = e.slice(l, e.length)), (e = e.slice(0, l))),
        x.isFunction(n) ? ((r = n), (n = t)) : n && 'object' == typeof n && (a = 'POST'),
        s.length > 0 &&
          x
            .ajax({ url: e, type: a, dataType: 'html', data: n })
            .done(function (e) {
              (o = arguments), s.html(i ? x('<div>').append(x.parseHTML(e)).find(i) : e);
            })
            .complete(
              r &&
                function (e, t) {
                  s.each(r, o || [e.responseText, t, e]);
                },
            ),
        this
      );
    }),
      x.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
        x.fn[t] = function (e) {
          return this.on(t, e);
        };
      }),
      x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: yn,
          type: 'GET',
          isLocal: Cn.test(mn[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          accepts: {
            '*': Dn,
            text: 'text/plain',
            html: 'text/html',
            xml: 'application/xml, text/xml',
            json: 'application/json, text/javascript',
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: {
            xml: 'responseXML',
            text: 'responseText',
            json: 'responseJSON',
          },
          converters: {
            '* text': String,
            'text html': !0,
            'text json': x.parseJSON,
            'text xml': x.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function (e, n) {
          'object' == typeof e && ((n = e), (e = t)), (n = n || {});
          var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            p = x.ajaxSetup({}, n),
            f = p.context || p,
            d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
            h = x.Deferred(),
            g = x.Callbacks('once memory'),
            m = p.statusCode || {},
            y = {},
            v = {},
            b = 0,
            w = 'canceled',
            C = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === b) {
                  if (!c) {
                    c = {};
                    while ((t = Tn.exec(a))) c[t[1].toLowerCase()] = t[2];
                  }
                  t = c[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === b ? a : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return b || ((e = v[n] = v[n] || e), (y[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return b || (p.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                  else C.always(e[C.status]);
                return this;
              },
              abort: function (e) {
                var t = e || w;
                return u && u.abort(t), k(0, t), this;
              },
            };
          if (
            ((h.promise(C).complete = g.add),
            (C.success = C.done),
            (C.error = C.fail),
            (p.url = ((e || p.url || yn) + '').replace(xn, '').replace(kn, mn[1] + '//')),
            (p.type = n.method || n.type || p.method || p.type),
            (p.dataTypes = x
              .trim(p.dataType || '*')
              .toLowerCase()
              .match(T) || ['']),
            null == p.crossDomain &&
              ((r = En.exec(p.url.toLowerCase())),
              (p.crossDomain = !(
                !r ||
                (r[1] === mn[1] &&
                  r[2] === mn[2] &&
                  (r[3] || ('http:' === r[1] ? '80' : '443')) === (mn[3] || ('http:' === mn[1] ? '80' : '443')))
              ))),
            p.data && p.processData && 'string' != typeof p.data && (p.data = x.param(p.data, p.traditional)),
            qn(An, p, n, C),
            2 === b)
          )
            return C;
          (l = p.global),
            l && 0 === x.active++ && x.event.trigger('ajaxStart'),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Nn.test(p.type)),
            (o = p.url),
            p.hasContent ||
              (p.data && ((o = p.url += (bn.test(o) ? '&' : '?') + p.data), delete p.data),
              p.cache === !1 &&
                (p.url = wn.test(o) ? o.replace(wn, '$1_=' + vn++) : o + (bn.test(o) ? '&' : '?') + '_=' + vn++)),
            p.ifModified &&
              (x.lastModified[o] && C.setRequestHeader('If-Modified-Since', x.lastModified[o]),
              x.etag[o] && C.setRequestHeader('If-None-Match', x.etag[o])),
            ((p.data && p.hasContent && p.contentType !== !1) || n.contentType) &&
              C.setRequestHeader('Content-Type', p.contentType),
            C.setRequestHeader(
              'Accept',
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Dn + '; q=0.01' : '')
                : p.accepts['*'],
            );
          for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
          if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
          w = 'abort';
          for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]);
          if ((u = qn(jn, p, n, C))) {
            (C.readyState = 1),
              l && d.trigger('ajaxSend', [C, p]),
              p.async &&
                p.timeout > 0 &&
                (s = setTimeout(function () {
                  C.abort('timeout');
                }, p.timeout));
            try {
              (b = 1), u.send(y, k);
            } catch (N) {
              if (!(2 > b)) throw N;
              k(-1, N);
            }
          } else k(-1, 'No Transport');
          function k(e, n, r, i) {
            var c,
              y,
              v,
              w,
              T,
              N = n;
            2 !== b &&
              ((b = 2),
              s && clearTimeout(s),
              (u = t),
              (a = i || ''),
              (C.readyState = e > 0 ? 4 : 0),
              (c = (e >= 200 && 300 > e) || 304 === e),
              r && (w = Mn(p, C, r)),
              (w = On(p, w, C, c)),
              c
                ? (p.ifModified &&
                    ((T = C.getResponseHeader('Last-Modified')),
                    T && (x.lastModified[o] = T),
                    (T = C.getResponseHeader('etag')),
                    T && (x.etag[o] = T)),
                  204 === e || 'HEAD' === p.type
                    ? (N = 'nocontent')
                    : 304 === e
                    ? (N = 'notmodified')
                    : ((N = w.state), (y = w.data), (v = w.error), (c = !v)))
                : ((v = N), (e || !N) && ((N = 'error'), 0 > e && (e = 0))),
              (C.status = e),
              (C.statusText = (n || N) + ''),
              c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
              C.statusCode(m),
              (m = t),
              l && d.trigger(c ? 'ajaxSuccess' : 'ajaxError', [C, p, c ? y : v]),
              g.fireWith(f, [C, N]),
              l && (d.trigger('ajaxComplete', [C, p]), --x.active || x.event.trigger('ajaxStop')));
          }
          return C;
        },
        getJSON: function (e, t, n) {
          return x.get(e, t, n, 'json');
        },
        getScript: function (e, n) {
          return x.get(e, t, n, 'script');
        },
      }),
      x.each(['get', 'post'], function (e, n) {
        x[n] = function (e, r, i, o) {
          return (
            x.isFunction(r) && ((o = o || i), (i = r), (r = t)),
            x.ajax({ url: e, type: n, dataType: o, data: r, success: i })
          );
        };
      });
    function Mn(e, n, r) {
      var i,
        o,
        a,
        s,
        l = e.contents,
        u = e.dataTypes;
      while ('*' === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader('Content-Type'));
      if (o)
        for (s in l)
          if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break;
          }
      if (u[0] in r) a = u[0];
      else {
        for (s in r) {
          if (!u[0] || e.converters[s + ' ' + u[0]]) {
            a = s;
            break;
          }
          i || (i = s);
        }
        a = a || i;
      }
      return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
    }
    function On(e, t, n, r) {
      var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();
      if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
      o = c.shift();
      while (o)
        if (
          (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (l = o),
          (o = c.shift()))
        )
          if ('*' === o) o = l;
          else if ('*' !== l && l !== o) {
            if (((a = u[l + ' ' + o] || u['* ' + o]), !a))
              for (i in u)
                if (((s = i.split(' ')), s[1] === o && (a = u[l + ' ' + s[0]] || u['* ' + s[0]]))) {
                  a === !0 ? (a = u[i]) : u[i] !== !0 && ((o = s[0]), c.unshift(s[1]));
                  break;
                }
            if (a !== !0)
              if (a && e['throws']) t = a(t);
              else
                try {
                  t = a(t);
                } catch (p) {
                  return {
                    state: 'parsererror',
                    error: a ? p : 'No conversion from ' + l + ' to ' + o,
                  };
                }
          }
      return { state: 'success', data: t };
    }
    x.ajaxSetup({
      accepts: {
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        'text script': function (e) {
          return x.globalEval(e), e;
        },
      },
    }),
      x.ajaxPrefilter('script', function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && ((e.type = 'GET'), (e.global = !1));
      }),
      x.ajaxTransport('script', function (e) {
        if (e.crossDomain) {
          var n,
            r = a.head || x('head')[0] || a.documentElement;
          return {
            send: function (t, i) {
              (n = a.createElement('script')),
                (n.async = !0),
                e.scriptCharset && (n.charset = e.scriptCharset),
                (n.src = e.url),
                (n.onload = n.onreadystatechange =
                  function (e, t) {
                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) &&
                      ((n.onload = n.onreadystatechange = null),
                      n.parentNode && n.parentNode.removeChild(n),
                      (n = null),
                      t || i(200, 'success'));
                  }),
                r.insertBefore(n, r.firstChild);
            },
            abort: function () {
              n && n.onload(t, !0);
            },
          };
        }
      });
    var Fn = [],
      Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
      jsonp: 'callback',
      jsonpCallback: function () {
        var e = Fn.pop() || x.expando + '_' + vn++;
        return (this[e] = !0), e;
      },
    }),
      x.ajaxPrefilter('json jsonp', function (n, r, i) {
        var o,
          a,
          s,
          l =
            n.jsonp !== !1 &&
            (Bn.test(n.url)
              ? 'url'
              : 'string' == typeof n.data &&
                !(n.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                Bn.test(n.data) &&
                'data');
        return l || 'jsonp' === n.dataTypes[0]
          ? ((o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback),
            l
              ? (n[l] = n[l].replace(Bn, '$1' + o))
              : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? '&' : '?') + n.jsonp + '=' + o),
            (n.converters['script json'] = function () {
              return s || x.error(o + ' was not called'), s[0];
            }),
            (n.dataTypes[0] = 'json'),
            (a = e[o]),
            (e[o] = function () {
              s = arguments;
            }),
            i.always(function () {
              (e[o] = a),
                n[o] && ((n.jsonpCallback = r.jsonpCallback), Fn.push(o)),
                s && x.isFunction(a) && a(s[0]),
                (s = a = t);
            }),
            'script')
          : t;
      });
    var Pn,
      Rn,
      Wn = 0,
      $n =
        e.ActiveXObject &&
        function () {
          var e;
          for (e in Pn) Pn[e](t, !0);
        };
    function In() {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    }
    function zn() {
      try {
        return new e.ActiveXObject('Microsoft.XMLHTTP');
      } catch (t) {}
    }
    (x.ajaxSettings.xhr = e.ActiveXObject
      ? function () {
          return (!this.isLocal && In()) || zn();
        }
      : In),
      (Rn = x.ajaxSettings.xhr()),
      (x.support.cors = !!Rn && 'withCredentials' in Rn),
      (Rn = x.support.ajax = !!Rn),
      Rn &&
        x.ajaxTransport(function (n) {
          if (!n.crossDomain || x.support.cors) {
            var r;
            return {
              send: function (i, o) {
                var a,
                  s,
                  l = n.xhr();
                if (
                  (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                  n.xhrFields)
                )
                  for (s in n.xhrFields) l[s] = n.xhrFields[s];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                  n.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
                try {
                  for (s in i) l.setRequestHeader(s, i[s]);
                } catch (u) {}
                l.send((n.hasContent && n.data) || null),
                  (r = function (e, i) {
                    var s, u, c, p;
                    try {
                      if (r && (i || 4 === l.readyState))
                        if (((r = t), a && ((l.onreadystatechange = x.noop), $n && delete Pn[a]), i))
                          4 !== l.readyState && l.abort();
                        else {
                          (p = {}),
                            (s = l.status),
                            (u = l.getAllResponseHeaders()),
                            'string' == typeof l.responseText && (p.text = l.responseText);
                          try {
                            c = l.statusText;
                          } catch (f) {
                            c = '';
                          }
                          s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : (s = p.text ? 200 : 404);
                        }
                    } catch (d) {
                      i || o(-1, d);
                    }
                    p && o(s, c, p, u);
                  }),
                  n.async
                    ? 4 === l.readyState
                      ? setTimeout(r)
                      : ((a = ++Wn),
                        $n && (Pn || ((Pn = {}), x(e).unload($n)), (Pn[a] = r)),
                        (l.onreadystatechange = r))
                    : r();
              },
              abort: function () {
                r && r(t, !0);
              },
            };
          }
        });
    var Xn,
      Un,
      Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp('^(?:([+-])=|)(' + w + ')([a-z%]*)$', 'i'),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = {
        '*': [
          function (e, t) {
            var n = this.createTween(e, t),
              r = n.cur(),
              i = Yn.exec(t),
              o = (i && i[3]) || (x.cssNumber[e] ? '' : 'px'),
              a = (x.cssNumber[e] || ('px' !== o && +r)) && Yn.exec(x.css(n.elem, e)),
              s = 1,
              l = 20;
            if (a && a[3] !== o) {
              (o = o || a[3]), (i = i || []), (a = +r || 1);
              do (s = s || '.5'), (a /= s), x.style(n.elem, e, a + o);
              while (s !== (s = n.cur() / r) && 1 !== s && --l);
            }
            return (
              i && ((a = n.start = +a || +r || 0), (n.unit = o), (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])), n
            );
          },
        ],
      };
    function Kn() {
      return (
        setTimeout(function () {
          Xn = t;
        }),
        (Xn = x.now())
      );
    }
    function Zn(e, t, n) {
      var r,
        i = (Qn[t] || []).concat(Qn['*']),
        o = 0,
        a = i.length;
      for (; a > o; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function er(e, t, n) {
      var r,
        i,
        o = 0,
        a = Gn.length,
        s = x.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (i) return !1;
          var t = Xn || Kn(),
            n = Math.max(0, u.startTime + u.duration - t),
            r = n / u.duration || 0,
            o = 1 - r,
            a = 0,
            l = u.tweens.length;
          for (; l > a; a++) u.tweens[a].run(o);
          return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
        },
        u = s.promise({
          elem: e,
          props: x.extend({}, t),
          opts: x.extend(!0, { specialEasing: {} }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Xn || Kn(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(r), r;
          },
          stop: function (t) {
            var n = 0,
              r = t ? u.tweens.length : 0;
            if (i) return this;
            for (i = !0; r > n; n++) u.tweens[n].run(1);
            return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
          },
        }),
        c = u.props;
      for (tr(c, u.opts.specialEasing); a > o; o++) if ((r = Gn[o].call(u, e, c, u.opts))) return r;
      return (
        x.map(c, Zn, u),
        x.isFunction(u.opts.start) && u.opts.start.call(e, u),
        x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
      );
    }
    function tr(e, t) {
      var n, r, i, o, a;
      for (n in e)
        if (
          ((r = x.camelCase(n)),
          (i = t[r]),
          (o = e[n]),
          x.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
          n !== r && ((e[r] = o), delete e[n]),
          (a = x.cssHooks[r]),
          a && 'expand' in a)
        ) {
          (o = a.expand(o)), delete e[r];
          for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
        } else t[r] = i;
    }
    x.Animation = x.extend(er, {
      tweener: function (e, t) {
        x.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.split(' '));
        var n,
          r = 0,
          i = e.length;
        for (; i > r; r++) (n = e[r]), (Qn[n] = Qn[n] || []), Qn[n].unshift(t);
      },
      prefilter: function (e, t) {
        t ? Gn.unshift(e) : Gn.push(e);
      },
    });
    function nr(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        l,
        u = this,
        c = {},
        p = e.style,
        f = e.nodeType && nn(e),
        d = x._data(e, 'fxshow');
      n.queue ||
        ((s = x._queueHooks(e, 'fx')),
        null == s.unqueued &&
          ((s.unqueued = 0),
          (l = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || l();
          })),
        s.unqueued++,
        u.always(function () {
          u.always(function () {
            s.unqueued--, x.queue(e, 'fx').length || s.empty.fire();
          });
        })),
        1 === e.nodeType &&
          ('height' in t || 'width' in t) &&
          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
          'inline' === x.css(e, 'display') &&
            'none' === x.css(e, 'float') &&
            (x.support.inlineBlockNeedsLayout && 'inline' !== ln(e.nodeName)
              ? (p.zoom = 1)
              : (p.display = 'inline-block'))),
        n.overflow &&
          ((p.overflow = 'hidden'),
          x.support.shrinkWrapBlocks ||
            u.always(function () {
              (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
            }));
      for (r in t)
        if (((i = t[r]), Vn.exec(i))) {
          if ((delete t[r], (o = o || 'toggle' === i), i === (f ? 'hide' : 'show'))) continue;
          c[r] = (d && d[r]) || x.style(e, r);
        }
      if (!x.isEmptyObject(c)) {
        d ? 'hidden' in d && (f = d.hidden) : (d = x._data(e, 'fxshow', {})),
          o && (d.hidden = !f),
          f
            ? x(e).show()
            : u.done(function () {
                x(e).hide();
              }),
          u.done(function () {
            var t;
            x._removeData(e, 'fxshow');
            for (t in c) x.style(e, t, c[t]);
          });
        for (r in c)
          (a = Zn(f ? d[r] : 0, r, u)),
            r in d || ((d[r] = a.start), f && ((a.end = a.start), (a.start = 'width' === r || 'height' === r ? 1 : 0)));
      }
    }
    function rr(e, t, n, r, i) {
      return new rr.prototype.init(e, t, n, r, i);
    }
    (x.Tween = rr),
      (rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || 'swing'),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (x.cssNumber[n] ? '' : 'px'));
        },
        cur: function () {
          var e = rr.propHooks[this.prop];
          return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = rr.propHooks[this.prop];
          return (
            (this.pos = t =
              this.options.duration
                ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
          );
        },
      }),
      (rr.prototype.init.prototype = rr.prototype),
      (rr.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop])
              ? ((t = x.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0)
              : e.elem[e.prop];
          },
          set: function (e) {
            x.fx.step[e.prop]
              ? x.fx.step[e.prop](e)
              : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop])
              ? x.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (rr.propHooks.scrollTop = rr.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      x.each(['toggle', 'show', 'hide'], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
          return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
        };
      }),
      x.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(nn).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var i = x.isEmptyObject(e),
            o = x.speed(t, n, r),
            a = function () {
              var t = er(this, x.extend({}, e), o);
              (i || x._data(this, 'finish')) && t.stop(!0);
            };
          return (a.finish = a), i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function (e, n, r) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(r);
          };
          return (
            'string' != typeof e && ((r = n), (n = e), (e = t)),
            n && e !== !1 && this.queue(e || 'fx', []),
            this.each(function () {
              var t = !0,
                n = null != e && e + 'queueHooks',
                o = x.timers,
                a = x._data(this);
              if (n) a[n] && a[n].stop && i(a[n]);
              else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
              for (n = o.length; n--; )
                o[n].elem !== this || (null != e && o[n].queue !== e) || (o[n].anim.stop(r), (t = !1), o.splice(n, 1));
              (t || !r) && x.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || 'fx'),
            this.each(function () {
              var t,
                n = x._data(this),
                r = n[e + 'queue'],
                i = n[e + 'queueHooks'],
                o = x.timers,
                a = r ? r.length : 0;
              for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
                o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      });
    function ir(e, t) {
      var n,
        r = { height: e },
        i = 0;
      for (t = t ? 1 : 0; 4 > i; i += 2 - t) (n = Zt[i]), (r['margin' + n] = r['padding' + n] = e);
      return t && (r.opacity = r.width = e), r;
    }
    x.each(
      {
        slideDown: ir('show'),
        slideUp: ir('hide'),
        slideToggle: ir('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        x.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      },
    ),
      (x.speed = function (e, t, n) {
        var r =
          e && 'object' == typeof e
            ? x.extend({}, e)
            : {
                complete: n || (!n && t) || (x.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !x.isFunction(t) && t),
              };
        return (
          (r.duration = x.fx.off
            ? 0
            : 'number' == typeof r.duration
            ? r.duration
            : r.duration in x.fx.speeds
            ? x.fx.speeds[r.duration]
            : x.fx.speeds._default),
          (null == r.queue || r.queue === !0) && (r.queue = 'fx'),
          (r.old = r.complete),
          (r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
          }),
          r
        );
      }),
      (x.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
      }),
      (x.timers = []),
      (x.fx = rr.prototype.init),
      (x.fx.tick = function () {
        var e,
          n = x.timers,
          r = 0;
        for (Xn = x.now(); n.length > r; r++) (e = n[r]), e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), (Xn = t);
      }),
      (x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start();
      }),
      (x.fx.interval = 13),
      (x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval));
      }),
      (x.fx.stop = function () {
        clearInterval(Un), (Un = null);
      }),
      (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (x.fx.step = {}),
      x.expr &&
        x.expr.filters &&
        (x.expr.filters.animated = function (e) {
          return x.grep(x.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
      (x.fn.offset = function (e) {
        if (arguments.length)
          return e === t
            ? this
            : this.each(function (t) {
                x.offset.setOffset(this, e, t);
              });
        var n,
          r,
          o = { top: 0, left: 0 },
          a = this[0],
          s = a && a.ownerDocument;
        if (s)
          return (
            (n = s.documentElement),
            x.contains(n, a)
              ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
                (r = or(s)),
                {
                  top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                  left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0),
                })
              : o
          );
      }),
      (x.offset = {
        setOffset: function (e, t, n) {
          var r = x.css(e, 'position');
          'static' === r && (e.style.position = 'relative');
          var i = x(e),
            o = i.offset(),
            a = x.css(e, 'top'),
            s = x.css(e, 'left'),
            l = ('absolute' === r || 'fixed' === r) && x.inArray('auto', [a, s]) > -1,
            u = {},
            c = {},
            p,
            f;
          l ? ((c = i.position()), (p = c.top), (f = c.left)) : ((p = parseFloat(a) || 0), (f = parseFloat(s) || 0)),
            x.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (u.top = t.top - o.top + p),
            null != t.left && (u.left = t.left - o.left + f),
            'using' in t ? t.using.call(e, u) : i.css(u);
        },
      }),
      x.fn.extend({
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = { top: 0, left: 0 },
              r = this[0];
            return (
              'fixed' === x.css(r, 'position')
                ? (t = r.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  x.nodeName(e[0], 'html') || (n = e.offset()),
                  (n.top += x.css(e[0], 'borderTopWidth', !0)),
                  (n.left += x.css(e[0], 'borderLeftWidth', !0))),
              {
                top: t.top - n.top - x.css(r, 'marginTop', !0),
                left: t.left - n.left - x.css(r, 'marginLeft', !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var e = this.offsetParent || s;
            while (e && !x.nodeName(e, 'html') && 'static' === x.css(e, 'position')) e = e.offsetParent;
            return e || s;
          });
        },
      }),
      x.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
          return x.access(
            this,
            function (e, i, o) {
              var a = or(e);
              return o === t
                ? a
                  ? n in a
                    ? a[n]
                    : a.document.documentElement[i]
                  : e[i]
                : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : (e[i] = o), t);
            },
            e,
            i,
            arguments.length,
            null,
          );
        };
      });
    function or(e) {
      return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    x.each({ Height: 'height', Width: 'width' }, function (e, n) {
      x.each({ padding: 'inner' + e, content: n, '': 'outer' + e }, function (r, i) {
        x.fn[i] = function (i, o) {
          var a = arguments.length && (r || 'boolean' != typeof i),
            s = r || (i === !0 || o === !0 ? 'margin' : 'border');
          return x.access(
            this,
            function (n, r, i) {
              var o;
              return x.isWindow(n)
                ? n.document.documentElement['client' + e]
                : 9 === n.nodeType
                ? ((o = n.documentElement),
                  Math.max(
                    n.body['scroll' + e],
                    o['scroll' + e],
                    n.body['offset' + e],
                    o['offset' + e],
                    o['client' + e],
                  ))
                : i === t
                ? x.css(n, r, s)
                : x.style(n, r, i, s);
            },
            n,
            a ? i : t,
            a,
            null,
          );
        };
      });
    }),
      (x.fn.size = function () {
        return this.length;
      }),
      (x.fn.andSelf = x.fn.addBack),
      'object' == typeof module && module && 'object' == typeof module.exports
        ? (module.exports = x)
        : ((e.jQuery = e.$ = x),
          'function' == typeof define &&
            define.amd &&
            define('jquery', [], function () {
              return x;
            }));
  })(window);

  // gmail js
  var Gmail = function (e) {
    var u;
    if (void 0 !== e) u = e;
    else if ('undefined' != typeof jQuery) u = jQuery;
    else
      try {
        u = require('jquery');
      } catch (e) {}
    var t = 'undefined' != typeof window ? window.opener : null;
    if (t)
      try {
        t.document.domain !== window.document.domain &&
          (console.warn('GmailJS: window.opener domain differs from window domain.'), (t = null));
      } catch (e) {
        console.warn('GmailJS: Unable to access window.opener!', e), (t = null);
      }
    var v = {
      get: {},
      observe: {},
      check: { data: {} },
      tools: {},
      tracker: {},
      dom: {},
      chat: {},
      compose: {},
      helper: { get: {} },
    };
    function r(e = 'Migrate to new API compatible with new Gmail to silence this warning!') {
      v.DISABLE_OLD_GMAIL_API_DEPRECATION_WARNINGS || console.warn('GmailJS: using deprecated API for old Gmail.', e);
    }
    (v.DISABLE_OLD_GMAIL_API_DEPRECATION_WARNINGS = !1),
      (v.version = '0.8.0'),
      (v.tracker.globals = 'undefined' != typeof GLOBALS ? GLOBALS : (t && t.GLOBALS) || []),
      (v.tracker.view_data = 'undefined' != typeof VIEW_DATA ? VIEW_DATA : (t && t.VIEW_DATA) || []),
      (v.tracker.ik = v.tracker.globals[9] || ''),
      (v.tracker.hangouts = void 0),
      (v.cache = {}),
      (v.cache.debug_xhr_fetch = !1),
      (v.cache.emailIdCache = {}),
      (v.cache.emailLegacyIdCache = {}),
      (v.cache.threadCache = {}),
      (v.get.last_active = function () {
        var e = v.tracker.globals[17][15];
        return {
          time: e[1],
          ip: e[3],
          mac_address: e[9],
          time_relative: e[10],
        };
      }),
      (v.get.loggedin_accounts = function () {
        var e,
          t,
          r,
          a = [],
          o = v.tracker.globals[17];
        for (e in o)
          if ('mla' === (r = o[e])[0]) {
            for (t in r[1])
              a.push({
                name: r[1][t][4],
                email: r[1][t][0],
                index: r[1][t][3],
              });
            return a;
          }
        return a;
      }),
      (v.get.user_email = function () {
        return v.tracker.globals[10];
      }),
      (v.get.manager_email = function () {
        return v.helper.get.is_delegated_inbox() ? v.get.delegated_to_email() : v.get.user_email();
      }),
      (v.get.delegated_to_email = function () {
        if (!v.helper.get.is_delegated_inbox()) return null;
        var e,
          t,
          r = '/u/',
          a = window.location.pathname,
          o = parseInt(a.substring(a.indexOf(r) + r.length), 10),
          n = v.get.loggedin_accounts();
        if (n && 0 < n.length) for (e in n) if ((t = n[e]).index === o) return t.email;
        return u(".gb_rb[href$='" + r + o + "'] .gb_yb")
          .text()
          .split(' ')[0];
      }),
      (v.helper.get.is_locale = function (e) {
        if (!e || 'string' != typeof e || e.length < 2) return !1;
        if (e.match(/[0-9]/)) return !1;
        e = e.slice(0, 2);
        return e.toLowerCase() === e || e.toUpperCase() === e;
      }),
      (v.helper.filter_locale = function (e) {
        return v.helper.get.is_locale(e) ? e.substring(0, 2).toLowerCase() : null;
      }),
      (v.helper.array_starts_with = function (e, t) {
        return !!(e && 0 < e.length && e[0] === t);
      }),
      (v.helper.get.array_sublist = function (e, t) {
        if (e)
          for (var r = 0; r < e.length; r++) {
            var a = e[r];
            if (v.helper.array_starts_with(a, t)) return a;
          }
        return null;
      }),
      (v.helper.get.locale_from_url_params = function (e) {
        if (e && e.indexOf && (0 === e.indexOf('https://') || 0 === e.indexOf('http://'))) {
          e = e.split('?');
          if (1 < e.length)
            for (var t = e[1].split('&'), r = 0; r < t.length; r++) {
              var a = t[r].split('=');
              if (2 === a.length && 'hl' === a[0]) return a[1];
            }
        }
        return null;
      }),
      (v.helper.get.locale_from_globals_item = function (e) {
        if (!e) return null;
        for (var t = 0; t < e.length; t++) {
          var r = e[t],
            r = v.helper.get.locale_from_url_params(r);
          if (r) return r;
        }
        return e[8];
      }),
      (v.get.localization = function () {
        var e = v.tracker.globals,
          t = v.helper.get.array_sublist(e[17], 'ui');
        if (null !== t && 8 < t.length) {
          t = v.helper.get.locale_from_globals_item(t);
          if ((t = v.helper.filter_locale(t))) return t;
        }
        if (null !== e[12]) {
          e = v.helper.get.locale_from_url_params(e[12]);
          if ((e = v.helper.filter_locale(e))) return e;
        }
        return null;
      }),
      (v.check.is_new_data_layer = function () {
        return 'true' === window.GM_SPT_ENABLED;
      }),
      (v.check.is_new_gui = function () {
        return 'true' === window.GM_RFT_ENABLED;
      }),
      (v.check.is_thread = function () {
        var e = u('.nH .if').children(':eq(1)').children().children(':eq(1)').children(),
          t = v.get.email_ids();
        return 1 < e.length || 1 < t.length;
      }),
      (v.dom.inbox_content = function () {
        return u('div[role=main]:first');
      }),
      (v.check.is_preview_pane = function () {
        var e = v.dom.inbox_content().find('[gh=tl]'),
          t = !1;
        return (
          e.each(function () {
            u(this).hasClass('aia') && (t = !0);
          }),
          t
        );
      }),
      (v.check.is_multiple_inbox = function () {
        return 1 < v.dom.inboxes().length;
      }),
      (v.check.is_horizontal_split = function () {
        return 0 === v.dom.inbox_content().find('[gh=tl]').find('.nn').length;
      }),
      (v.check.is_vertical_split = function () {
        return !1 === v.check.is_horizontal_split();
      }),
      (v.check.is_tabbed_inbox = function () {
        return 1 === u('.aKh').length;
      }),
      (v.check.is_right_side_chat = function () {
        var e = u('.ApVoH');
        return 0 !== e.length && ':wf' === e[0].getAttribute('aria-labelledby');
      }),
      (v.check.should_compose_fullscreen = function () {
        console.warn('gmail.js: This function is known to be unreliable, and may be deprecated in a future release.');
        var t = [];
        try {
          t = v.tracker.globals[17][4][1][32];
        } catch (e) {
          t = ['bx_scfs', 'false'];
        }
        return 'true' === t[1];
      }),
      (v.check.is_google_apps_user = function () {
        var e = v.get.user_email();
        return -1 === e.indexOf('gmail.com', e.length - 'gmail.com'.length);
      }),
      (v.get.storage_info = function () {
        var e = document.querySelector('.md.mj div'),
          t = e.querySelectorAll('span')[0].textContent.replace(/,/g, '.'),
          r = e.querySelectorAll('span')[1].textContent.replace(/,/g, '.'),
          e = (100 * parseFloat(t.replace(/[^0-9\.]/g, ''))) / parseFloat(r.replace(/[^0-9\.]/g, ''));
        return { used: t, total: r, percent: Math.floor(e) };
      }),
      (v.dom.inboxes = function () {
        return v.dom.inbox_content().find('[gh=tl]');
      }),
      (v.dom.email_subject = function () {
        for (var e = u('.hP'), t = 0; t < e.length; t++) if (u(e[t]).is(':visible')) return u(e[t]);
        return u();
      }),
      (v.get.email_subject = function () {
        return v.dom.email_subject().text();
      }),
      (v.dom.email_body = function () {
        return u('.nH.hx');
      }),
      (v.dom.toolbar = function () {
        for (var e = u("[gh='mtb']"); 1 === u(e).children().length; ) e = u(e).children().first();
        return e;
      }),
      (v.dom.right_toolbar = function () {
        for (var e = u("[gh='tm'] [gh='s']").parent(); 1 === u(e).children().length; ) e = u(e).children().first();
        return e;
      }),
      (v.check.is_inside_email = function () {
        if ('email' !== v.get.current_page() && !v.check.is_preview_pane()) return !1;
        for (var e = u('.ii.gt .a3s'), t = [], r = 0; r < e.length; r++) {
          var a = e[r].getAttribute('class').split(' ')[2];
          'undefined' !== a && void 0 !== a && t.push(e[r]);
        }
        return 0 < t.length;
      }),
      (v.check.is_plain_text = function () {
        for (var e = v.tracker.globals[17][4][1], t = 0; t < e.length; t++) {
          var r = e[t];
          if ('bx_cm' === r[0]) return '0' === r[1];
        }
        return !1;
      }),
      (v.dom.email_contents = function () {
        for (var e = u('.ii.gt div.a3s.aXjCH'), t = [], r = 0; r < e.length; r++) {
          var a = e[r].getAttribute('class').split(' ')[2],
            o = e[r].getAttribute('contenteditable');
          'undefined' !== a && void 0 !== a && 'true' !== o && t.push(e[r]);
        }
        return t;
      }),
      (v.get.email_ids = function () {
        if ((r(), v.check.is_inside_email())) {
          var e = v.get.email_data();
          return Object.keys(e.threads);
        }
        return [];
      }),
      (v.get.compose_ids = function () {
        for (var e = [], t = u('.M9 [name=draft]'), r = 0; r < t.length; r++)
          'undefined' !== t[r].value && e.push(t[r].value);
        return e;
      }),
      (v.get.thread_id = function () {
        r();
        var e = document.querySelector('h2[data-legacy-thread-id]');
        if (null !== e) return e.dataset.legacyThreadId;
      }),
      (v.get.email_id = function () {
        return r(), v.get.thread_id();
      }),
      (v.check.is_priority_inbox = function () {
        return 0 < u('.qh').length;
      }),
      (v.check.is_rapportive_installed = function () {
        return 1 === u('#rapportive-sidebar').length;
      }),
      (v.check.is_streak_installed = function () {
        return 0 < u("[id^='bentoBox'],[id*=' bentoBox'],[class*=' bentoBox'],[class*='bentoBox']").length;
      }),
      (v.check.is_anydo_installed = function () {
        return 0 < u("[id^='anydo'],[id*=' anydo'],[class*=' anydo'],[class*='anydo']").length;
      }),
      (v.check.is_boomerang_installed = function () {
        return 0 < u("[id^='b4g_'],[id*=' b4g_'],[class*=' b4g_'],[class*='b4g_']").length;
      }),
      (v.check.is_xobni_installed = function () {
        return 0 < u('#xobni_frame').length;
      }),
      (v.check.is_signal_installed = function () {
        return 0 < u("[id^='Signal'],[id*=' Signal'],[class*=' signal'],[class*='signal']").length;
      }),
      (v.check.are_shortcuts_enabled = function () {
        for (var e = void 0, t = !0, r = v.tracker.globals[17][4][1], a = 0; a < r.length; a++) {
          var o = r[a];
          if ('bx_hs' === o[0]) {
            e = o[1];
            break;
          }
        }
        return void 0 !== e && (t = { 0: !0, 1: !1 }[e]), t;
      }),
      (v.dom.get_left_sidebar_links = function () {
        return u('div[role=navigation] [title]');
      }),
      (v.dom.header = function () {
        return u('#gb');
      }),
      (v.dom.search_bar = function () {
        return u('[gh=sb]');
      }),
      (v.get.search_query = function () {
        return v.dom.search_bar().find('input')[0].value;
      }),
      (v.get.unread_inbox_emails = function () {
        return v.helper.get.navigation_count('inbox');
      }),
      (v.get.unread_draft_emails = function () {
        return v.helper.get.navigation_count('drafts');
      }),
      (v.get.unread_spam_emails = function () {
        return v.helper.get.navigation_count('spam');
      }),
      (v.get.unread_forum_emails = function () {
        return v.helper.get.navigation_count('forums');
      }),
      (v.get.unread_update_emails = function () {
        return v.helper.get.navigation_count('updates');
      }),
      (v.get.unread_promotion_emails = function () {
        return v.helper.get.navigation_count('promotions');
      }),
      (v.get.unread_social_emails = function () {
        return v.helper.get.navigation_count('social_updates');
      }),
      (v.helper.get.navigation_count = function (e) {
        e = v.tools.i18n(e);
        const t = u('div[role=navigation]').find("[title*='" + e + "']");
        if ((t || 0 < t.length) && -1 !== t[0].title.indexOf(e)) {
          e = parseInt(t[0].attributes['aria-label'].value.replace(/[^0-9]/g, ''));
          if (!isNaN(e)) return e;
        }
        return 0;
      }),
      (v.get.beta = function () {
        return { new_nav_bar: 0 === u('#gbz').length };
      }),
      (v.get.unread_emails = function () {
        return {
          inbox: v.get.unread_inbox_emails(),
          drafts: v.get.unread_draft_emails(),
          spam: v.get.unread_spam_emails(),
          forum: v.get.unread_forum_emails(),
          update: v.get.unread_update_emails(),
          promotions: v.get.unread_promotion_emails(),
          social: v.get.unread_social_emails(),
        };
      }),
      (v.tools.error = function (e) {
        if (!console) throw e;
        console.error(e);
      }),
      (v.tools.parse_url = function (e) {
        for (var t = /[?&]([^=#]+)=([^&#]*)/g, r = {}, a = t.exec(e); a; ) (r[a[1]] = a[2]), (a = t.exec(e));
        return r;
      }),
      (v.tools.sleep = function (e) {
        for (var t = new Date().getTime(); !(new Date().getTime() - t > e); );
      }),
      (v.tools.multitry = function (e, t, r, a, o, n) {
        if (void 0 !== o && t <= o) return n;
        o = void 0 === o ? 0 : o;
        n = r();
        if (a(n)) return n;
        v.tools.sleep(e), v.tools.multitry(e, t, r, a, o + 1, n);
      }),
      (v.tools.deparam = function (e, l) {
        var c =
            Array.isArray ||
            function (e) {
              return '[object Array]' === Object.prototype.toString.call(e);
            },
          d = {},
          u = { true: !0, false: !1, null: null };
        return (
          (function (e, t) {
            for (var r = [], a = 0; a < e.length; a++) r.push(t(e[a]));
          })(e.replace(/\+/g, ' ').split('&'), function (e, t) {
            var r,
              e = e.split('='),
              a = decodeURIComponent(e[0]),
              o = d,
              n = 0,
              i = a.split(']['),
              s = i.length - 1,
              s =
                /\[/.test(i[0]) && /\]$/.test(i[s])
                  ? ((i[s] = i[s].replace(/\]$/, '')), (i = i.shift().split('[').concat(i)).length - 1)
                  : 0;
            if (2 === e.length)
              if (
                ((r = decodeURIComponent(e[1])),
                l && (r = r && !isNaN(r) ? +r : 'undefined' === r ? void 0 : void 0 !== u[r] ? u[r] : r),
                s)
              )
                for (; n <= s; n++)
                  o = o[(a = '' === i[n] ? o.length : i[n])] =
                    n < s ? o[a] || (i[n + 1] && isNaN(i[n + 1]) ? {} : []) : r;
              else c(d[a]) ? d[a].push(r) : void 0 !== d[a] ? (d[a] = [d[a], r]) : (d[a] = r);
            else a && (d[a] = l ? void 0 : '');
          }),
          d
        );
      }),
      (v.tools.get_pathname_from_url = function (e) {
        if ('undefined' == typeof document) return e;
        {
          const t = document.createElement('a');
          return (t.href = e), t.pathname;
        }
      }),
      (v.tools.parse_actions = function (e, t) {
        if ('fup' === e.url.act || 'fuv' === e.url.act || e.body_is_object)
          return (
            !(!e.body_is_object || !v.observe.bound('upload_attachment')) && {
              upload_attachment: [e.body_params],
            }
          );
        e.url.search;
        var r = {},
          a = {
            tae: 'add_to_tasks',
            'rc_^i': 'archive',
            tr: 'delete',
            dm: 'delete_message_in_thread',
            dl: 'delete_forever',
            dc_: 'delete_label',
            dr: 'discard_draft',
            el: 'expand_categories',
            cffm: 'filter_messages_like_these',
            arl: 'label',
            mai: 'mark_as_important',
            mani: 'mark_as_not_important',
            us: 'mark_as_not_spam',
            sp: 'mark_as_spam',
            mt: 'move_label',
            ib: 'move_to_inbox',
            ig: 'mute',
            rd: 'read',
            sd: 'save_draft',
            sm: 'send_message',
            mo: 'show_newly_arrived_message',
            st: 'star',
            cs: 'undo_send',
            ug: 'unmute',
            ur: 'unread',
            xst: 'unstar',
            new_mail: 'new_email',
            poll: 'poll',
            refresh: 'refresh',
            rtr: 'restore_message_in_thread',
            open_email: 'open_email',
            toggle_threads: 'toggle_threads',
          };
        'string' == typeof e.url.ik && (v.tracker.ik = e.url.ik),
          'string' == typeof e.url.at && (v.tracker.at = e.url.at),
          'string' == typeof e.url.rid && -1 !== e.url.rid.indexOf('mail') && (v.tracker.rid = e.url.rid);
        var o = decodeURIComponent(e.url.act),
          n = e.body_params,
          i = 'string' == typeof n.t ? [n.t] : n.t,
          s = null;
        switch (o) {
          case 'cs':
          case 'ur':
          case 'rd':
          case 'tr':
          case 'sp':
          case 'us':
          case 'ib':
          case 'dl':
          case 'st':
          case 'xst':
          case 'mai':
          case 'mani':
          case 'ig':
          case 'ug':
          case 'dr':
          case 'mt':
          case 'cffm':
          case 'rc_^i':
            s = [i, e.url, e.body];
            break;
          case 'arl':
          case 'dc_':
            s = [i, e.url, e.body, e.url.acn];
            break;
          case 'sd':
            s = [i, e.url, n];
            break;
          case 'tae':
          case 'sm':
            s = [e.url, e.body, n];
            break;
          case 'el':
            s = [e.url, e.body, '1' === n.ex];
            break;
          case 'dm':
          case 'rtr':
          case 'mo':
            s = [n.m, e.url, e.body];
        }
        return (
          'string' == typeof e.url._reqid &&
            'tl' === e.url.view &&
            void 0 !== e.url.auto &&
            ((s = [e.url.th, e.url, e.body]), v.observe.bound('new_email') && (r.new_email = s)),
          ('cv' !== e.url.view && 'ad' !== e.url.view) ||
            'string' != typeof e.url.th ||
            'string' != typeof e.url.search ||
            void 0 !== e.url.rid ||
            ((s = [e.url.th, e.url, e.body]), v.observe.bound('open_email') && (r.open_email = s)),
          ('cv' !== e.url.view && 'ad' !== e.url.view) ||
            'object' != typeof e.url.th ||
            'string' != typeof e.url.search ||
            void 0 === e.url.rid ||
            ((s = [e.url.th, e.url, e.body]), v.observe.bound('toggle_threads') && (r.toggle_threads = s)),
          ('cv' !== e.url.view && 'ad' !== e.url.view) ||
            'string' != typeof e.url.th ||
            'string' != typeof e.url.search ||
            void 0 === e.url.rid ||
            (void 0 !== e.url.msgs &&
              ((s = [e.url.th, e.url, e.body]), v.observe.bound('toggle_threads') && (r.toggle_threads = s))),
          'string' == typeof e.url.SID &&
            'string' == typeof e.url.zx &&
            -1 !== e.body.indexOf('req0_') &&
            ((v.tracker.SID = e.url.SID), (s = [e.url, e.body, n]), v.observe.bound('poll') && (r.poll = s)),
          'string' == typeof e.url.ik &&
            'string' == typeof e.url.search &&
            0 === e.body.length &&
            'string' == typeof e.url._reqid &&
            ((s = [e.url, e.body, n]), v.observe.bound('refresh') && (r.refresh = s)),
          s && a[o] && v.observe.bound(a[o]) && (r[a[o]] = s),
          'POST' !== e.method ||
            ('string' != typeof e.url.SID && 'string' != typeof e.url.ik && 'string' != typeof e.url.act) ||
            (r.http_event = [e]),
          v.check.is_new_data_layer() && v.tools.parse_request_payload(e, r),
          r
        );
      }),
      (v.check.data.is_thread_id = function (e) {
        return e && 'string' == typeof e && /^thread-[a|f]:/.test(e);
      }),
      (v.check.data.is_thread = function (e) {
        return e && 'object' == typeof e && e[1] && v.check.data.is_thread_id(e[1]);
      }),
      (v.check.data.is_email_id = function (e) {
        return e && 'string' == typeof e && -1 === e.indexOf('bump-') && /^msg-[a|f]:/.test(e);
      }),
      (v.check.data.is_email = function (e) {
        return e && 'object' == typeof e && e[1] && v.check.data.is_email_id(e[1]);
      }),
      (v.check.data.is_legacy_email_id = function (e) {
        return e && 'string' == typeof e && /^[0-9a-f]{16,}$/.test(e);
      }),
      (v.check.data.is_action = function (e) {
        return v.check.data.is_first_type_action(e) || v.check.data.is_second_type_action(e);
      }),
      (v.check.data.is_first_type_action = function (e) {
        return e && e[1] && Array.isArray(e[1]) && 1 === e[1].length && 'string' == typeof e[1][0];
      }),
      (v.check.data.is_second_type_action = function (e) {
        return e && e[2] && Array.isArray(e[2]) && e[2].length && 'string' == typeof e[2][0];
      }),
      (v.check.data.is_smartlabels_array = function (e) {
        var t;
        if (!e || !Array.isArray(e) || 0 === e.length) return !1;
        for (t of e) {
          if ('string' != typeof t) return !1;
          if (!/^\^[a-z]+/.test(t)) return !1;
        }
        return !0;
      }),
      (v.check.data.is_json_string = function (e) {
        if (!e || 'string' != typeof e) return !1;
        let t = e.trim();
        return (t.startsWith('{') && t.endsWith('}')) || (t.startsWith('[') && t.endsWith(']'));
      }),
      (v.tools.get_thread_id = function (e) {
        return v.check.data.is_thread(e) && e[1];
      }),
      (v.tools.get_thread_data = function (e) {
        return e && e[2] && 'object' == typeof e[2] && e[2][7] && 'object' == typeof e[2][7] && e[2][7];
      }),
      (v.tools.get_action = function (e) {
        return v.tools.get_first_type_action(e) || v.tools.get_second_type_action(e);
      }),
      (v.tools.get_first_type_action = function (e) {
        return e && e[1] && e[1].join('');
      }),
      (v.tools.get_second_type_action = function (e) {
        return e && e[2] && e[2].join('');
      }),
      (v.tools.get_message_ids = function (e) {
        return e && e[3] && Array.isArray(e[3]) && e[3];
      }),
      (v.tools.extract_from_graph = function (e, t) {
        const a = [],
          o = function (e) {
            try {
              return t(e);
            } catch (e) {
              return !1;
            }
          },
          n = function (e) {
            if (o(e)) a.push(e);
            else
              for (var t in e) {
                t = e[t];
                if (o(t)) a.push(t);
                else if (Array.isArray(t)) for (var r of t) n(r, e);
                else 'object' == typeof t && n(t);
              }
          };
        return n(e), a;
      }),
      (v.tools.check_event_type = function (e) {
        var t = {
            '^a': 'archive',
            '^k': 'delete',
            '^x_': 'label',
            '^u^us': 'read',
            '^u': 'unread',
            '^us': 'new_email',
            '^o': 'open_email',
          },
          e = v.tools.get_thread_data(e);
        if (e && v.check.data.is_action(e)) {
          const r = v.tools.get_action(e);
          return r.startsWith('^x_') && v.check.data.is_first_type_action(e) ? t['^x_'] : t[r];
        }
        return null;
      }),
      (v.tools.parse_fd_bv_contacts = function (e) {
        if (!e || !Array.isArray(e)) return [];
        const t = [];
        for (var r of e) t.push(v.tools.parse_fd_bv_contact(r));
        return t;
      }),
      (v.tools.parse_fd_bv_contact = function (e) {
        try {
          return { name: e[3], address: e[2] };
        } catch (e) {
          return null;
        }
      }),
      (v.tools.parse_fd_attachments = function (e) {
        let t = [];
        if (Array.isArray(e))
          for (var r of e) {
            var a = r[1][4] || '';
            t.push({
              attachment_id: r[1][2],
              name: a[3],
              type: a[4],
              url: v.tools.check_fd_attachment_url(a[2]),
              size: Number.parseInt(a[5]),
            });
          }
        return t;
      }),
      (v.tools.check_fd_attachment_url = function (e) {
        var t = v.tracker.globals[7];
        return (e = e && t && e.indexOf(t) < 0 ? e.replace('/mail/?', t + '?') : e);
      }),
      (v.tools.parse_fd_request_html_payload = function (e) {
        let t = null;
        try {
          var r;
          for (r of e[2][6][2]) t = (t || '') + r[3][2];
        } catch (e) {}
        return t;
      }),
      (v.tools.parse_fd_embedded_json_content_html = function (e) {
        let t = null;
        try {
          var r;
          for (r of e[9][2]) t = (t || '') + r[3][2];
        } catch (e) {}
        return t;
      }),
      (v.tools.parse_fd_request_payload_get_email2 = function (e, t) {
        try {
          const r = e[2][2];
          return r.filter((e) => e[1] === t)[0];
        } catch (e) {
          return {};
        }
      }),
      (v.tools.parse_fd_embedded_json_get_email = function (e, t) {
        try {
          const r = e[2][5];
          return r.filter((e) => e[1] === t)[0];
        } catch (e) {
          return {};
        }
      }),
      (v.tools.parse_fd_request_payload = function (e) {
        var t,
          e = e[2];
        if (!e || !Array.isArray(e)) return null;
        try {
          const g = [];
          for (t of e) {
            var r,
              a = t[1];
            for (r of t[3]) {
              var o = r[1],
                n = v.tools.parse_fd_request_payload_get_email2(t, o),
                i = r[2][35],
                s = r[2][8],
                l = r[2][5],
                c = Number.parseInt(r[2][17]),
                d = new Date(c),
                u = v.tools.parse_fd_request_html_payload(r),
                _ = v.tools.parse_fd_attachments(r[2][14]),
                m = r[2][11][17];
              let e = v.tools.parse_fd_bv_contact(n[2]);
              e = e || { address: m, name: '' };
              var h = v.tools.parse_fd_bv_contacts(r[2][1]),
                f = v.tools.parse_fd_bv_contacts(r[2][2]),
                p = v.tools.parse_fd_bv_contacts(r[2][3]);
              const b = {
                id: o,
                legacy_email_id: i,
                thread_id: a,
                smtp_id: s,
                subject: l,
                timestamp: c,
                content_html: u,
                date: d,
                from: e,
                to: h,
                cc: f,
                bcc: p,
                attachments: _,
              };
              v.cache.debug_xhr_fetch && ((b.$email_node = r), (b.$thread_node = t)), g.push(b);
            }
          }
          return g;
        } catch (e) {
          return console.warn('Gmail.js encountered an error trying to parse email-data on fd request!', e), null;
        }
      }),
      (v.tools.parse_fd_embedded_json = function (e) {
        var t,
          e = e[2];
        if (!e || !Array.isArray(e)) return null;
        try {
          const g = [];
          for (t of e) {
            var r,
              a = t[2][4];
            for (r of t[2][5]) {
              var o = r[1],
                n = v.tools.parse_fd_embedded_json_get_email(t, o),
                i = r[56],
                s = r[14],
                l = r[8],
                c = Number.parseInt(r[18]),
                d = new Date(c),
                u = v.tools.parse_fd_embedded_json_content_html(r),
                _ = v.tools.parse_fd_attachments(r[12]),
                m = r[19][17];
              let e = v.tools.parse_fd_bv_contact(n[2]);
              e = e || { address: m, name: '' };
              var h = v.tools.parse_fd_bv_contacts(r[3]),
                f = v.tools.parse_fd_bv_contacts(r[4]),
                p = v.tools.parse_fd_bv_contacts(r[5]);
              const b = {
                id: o,
                legacy_email_id: i,
                thread_id: a,
                smtp_id: s,
                subject: l,
                timestamp: c,
                content_html: u,
                date: d,
                from: e,
                to: h,
                cc: f,
                bcc: p,
                attachments: _,
              };
              v.cache.debug_xhr_fetch && ((b.$email_node = r), (b.$thread_node = t)), g.push(b);
            }
          }
          return g;
        } catch (e) {
          return console.warn('Gmail.js encountered an error trying to parse email-data on embedded json!', e), null;
        }
      }),
      (v.tools.parse_bv_request_payload = function (e) {
        var t,
          e = e[3];
        if (!e || !Array.isArray(e)) return null;
        try {
          const u = [];
          for (t of e) {
            var r,
              a = t[1][1],
              o = t[1][4];
            for (r of t[1][5]) {
              var n = r[1],
                i = r[56],
                s = a,
                l = Number.parseInt(r[18]),
                c = new Date(l),
                d = [];
              const _ = {
                id: n,
                legacy_email_id: i,
                thread_id: o,
                smtp_id: '',
                subject: s,
                timestamp: l,
                content_html: '',
                date: c,
                from: {
                  address: void 0 !== r[2][2] ? r[2][2] : '',
                  name: void 0 !== r[2][3] ? r[2][3] : '',
                },
                to: [],
                cc: [],
                bcc: [],
                attachments: d,
              };
              v.cache.debug_xhr_fetch && ((_.$email_node = r), (_.$thread_node = t)), u.push(_);
            }
          }
          return u;
        } catch (e) {
          return console.warn('Gmail.js encountered an error trying to parse email-data on bv request!', e), null;
        }
      }),
      (v.tools.parse_bv_embedded_json = function (e) {
        var t,
          e = e[1][1];
        if (!e || !Array.isArray(e)) return null;
        try {
          const u = [];
          for (t of e) {
            var r,
              a = t[5][1],
              o = t[5][4];
            for (r of t[5][5]) {
              var n = r[1],
                i = r[56],
                s = a,
                l = Number.parseInt(r[18]),
                c = new Date(l),
                d = [];
              const _ = {
                id: n,
                legacy_email_id: i,
                thread_id: o,
                smtp_id: '',
                subject: s,
                timestamp: l,
                content_html: '',
                date: c,
                from: {
                  address: void 0 !== r[2][2] ? r[2][2] : '',
                  name: void 0 !== r[2][3] ? r[2][3] : '',
                },
                to: [],
                cc: [],
                bcc: [],
                attachments: d,
              };
              v.cache.debug_xhr_fetch && ((_.$email_node = r), (_.$thread_node = t)), u.push(_);
            }
          }
          return u;
        } catch (e) {
          return console.warn('Gmail.js encountered an error trying to parse email-data on bv request!', e), null;
        }
      }),
      (v.tools.parse_sent_message_html_payload = function (e) {
        let t = null;
        try {
          var r;
          for (r of e[9][2]) t = (t || '') + r[2];
        } catch (e) {}
        return t;
      }),
      (v.tools.parse_sent_message_attachments = function (e) {
        let t = [];
        if (Array.isArray(e))
          for (var r of e)
            t.push({
              id: r[5],
              name: r[2],
              type: r[1],
              url: r[6],
              size: Number.parseInt(r[3]),
            });
        return t;
      }),
      (v.tools.parse_sent_message_payload = function (e) {
        try {
          var t = e,
            r = t[1],
            a = t[8],
            o = Number.parseInt(t[7]),
            n = new Date(o),
            i = v.tools.parse_sent_message_html_payload(t),
            s = t[9][7],
            l = v.tools.parse_sent_message_attachments(t[12]);
          return {
            1: r,
            id: r,
            subject: a,
            timestamp: o,
            content_html: i,
            ishtml: s,
            date: n,
            from: v.tools.parse_fd_bv_contact(t[2]),
            to: v.tools.parse_fd_bv_contacts(t[3]),
            cc: v.tools.parse_fd_bv_contacts(t[4]),
            bcc: v.tools.parse_fd_bv_contacts(t[5]),
            attachments: l,
            email_node: e,
          };
        } catch (e) {
          return console.warn('Gmail.js encountered an error trying to parse sent message!', e), null;
        }
      }),
      (v.tools.parse_request_payload = function (t, r, e) {
        const a = v.tools.get_pathname_from_url(t.url_raw);
        if (e || a) {
          var o,
            n = (a || '').endsWith('/i/s'),
            i = (a || '').endsWith('/i/fd');
          if (e || i || n) {
            i && (r.load_email_data = [null]);
            const u = v.tools.extract_from_graph(t, v.check.data.is_thread);
            for (o of v.tools.extract_from_graph(t, v.check.data.is_email))
              for (var s in o) {
                let e = o[s];
                v.check.data.is_smartlabels_array(e) &&
                  ((s = v.tools.parse_sent_message_payload(o)),
                  -1 !== e.indexOf('^pfg')
                    ? (r.send_message = [t.url, t.body, s])
                    : -1 < e.indexOf('^scheduled') && (r.send_scheduled_message = [t.url, t.body, s]));
              }
            try {
              if (Array.isArray(u) && v.check.data.is_thread(u[0])) {
                var l = v.tools.check_event_type(u[0]);
                if (l) {
                  const _ = u.map((e) => v.tools.get_thread_data(e));
                  var c = u.map((e) => v.tools.get_thread_id(e)),
                    d = _.map((e) => v.tools.get_message_ids(e)).reduce((e, t) => e.concat(t), []);
                  r[l] = [null, t.url, t.body, d, c];
                }
              }
            } catch (e) {
              console.error('Error: ', e);
            }
          }
        }
      }),
      (v.tools.parse_response = function (t) {
        if (v.check.data.is_json_string(t))
          try {
            return JSON.parse(t);
          } catch (e) {}
        if (t.startsWith('<!DOCTYPE html') || -1 !== t.indexOf('display:inline-block')) return [];
        let r = [];
        try {
          for (
            t = (t = t.replace(/\n/g, ' ')).substring(t.indexOf("'") + 1, t.length);
            1 < t.replace(/\s/g, '').length;

          ) {
            let e = t.substring(0, t.indexOf('[')).replace(/\s/g, '');
            e = e || t.length;
            var a = parseInt(e, 10) - 2 + t.indexOf('['),
              o = t.substring(t.indexOf('['), a),
              n = JSON.parse(o);
            r.push(n), (t = (t = t.substring(t.indexOf('['), t.length)).substring(o.length, t.length));
          }
        } catch (e) {}
        return r;
      }),
      (v.tools.parse_attachment_url = function (e) {
        e = e.split(':');
        return { type: e[0], url: e[2] + ':' + e[3] };
      });
    e = function (e, t) {
      for (var r in t) e[r] = t[r];
    };
    (v.tools.parse_requests = function (e, t) {
      (e.url_raw = e.url),
        (e.url = v.tools.parse_url(e.url)),
        'object' == typeof e.body
          ? ((e.body_params = e.body), (e.body_is_object = !0))
          : v.check.data.is_json_string(e.body)
          ? (e.body_params = JSON.parse(e.body))
          : void 0 !== e.body
          ? (e.body_params = v.tools.deparam(e.body))
          : (e.body_params = {}),
        'object' != typeof v.tracker.events &&
          'object' != typeof v.tracker.actions &&
          ((v.tracker.events = []), (v.tracker.actions = [])),
        v.tracker.events.unshift(e);
      t = v.tools.parse_actions(e, t);
      return (
        'POST' === e.method && 'string' == typeof e.url.act && v.tracker.actions.unshift(e),
        50 < v.tracker.events.length && v.tracker.events.pop(),
        10 < v.tracker.actions.length && v.tracker.actions.pop(),
        t
      );
    }),
      (v.tools.patch = function (e, t) {
        t(e);
      }),
      (v.tools.cache_email_data = function (e, t) {
        if (null !== e) {
          const o = v.cache;
          let r = !1;
          ('fd_request_payload' !== t && 'fd_embedded_json' !== t) || (r = !0);
          for (let t of e) {
            (void 0 === o.emailIdCache[t.id] || r) &&
              ((o.emailIdCache[t.id] = t), (o.emailLegacyIdCache[t.legacy_email_id] = t));
            let e = o.threadCache[t.thread_id];
            var a;
            e || ((e = { thread_id: t.thread_id, emails: [] }), (o.threadCache[t.thread_id] = e)),
              0 === e.emails.filter((e) => e.id === t.id).length
                ? e.emails.push(t)
                : r && ((a = e.emails.findIndex((e) => e.id === t.id)), (e.emails[a] = t));
          }
        }
      }),
      (v.tools.xhr_watcher = function () {
        if (!v.tracker.xhr_init) {
          v.tracker.xhr_init = !0;
          const e = v.helper.get_xhr_window();
          v.tools.patch(e.XMLHttpRequest.prototype.open, (i) => {
            e.XMLHttpRequest.prototype.open = function (e, t, r, a, o) {
              var n = i.apply(this, arguments);
              return (this.xhrParams = { method: e.toString(), url: t.toString() }), n;
            };
          }),
            v.tools.patch(e.XMLHttpRequest.prototype.send, (n) => {
              e.XMLHttpRequest.prototype.send = function (e) {
                var r,
                  a,
                  o = !1;
                this.xhrParams && ((this.xhrParams.body = e), (o = v.tools.parse_requests(this.xhrParams, this))),
                  v.observe.trigger('before', o, this) &&
                    (e = v.check.is_new_data_layer()
                      ? (arguments[0] = this.xhrParams.body_is_object
                          ? this.xhrParams.body_params
                          : JSON.stringify(this.xhrParams.body_params))
                      : (arguments[0] = this.xhrParams.body_is_object
                          ? this.xhrParams.body_params
                          : u.param(this.xhrParams.body_params, !0).replace(/\+/g, '%20'))),
                  (v.observe.bound(o, 'after') || v.check.is_new_data_layer()) &&
                    ((r = this.onreadystatechange),
                    ((a = this).onreadystatechange = function (e) {
                      var t;
                      this.readyState === this.DONE &&
                        ('' === e.target.responseType || 'text' === e.target.responseType
                          ? (a.xhrResponse = v.tools.parse_response(e.target.responseText))
                          : (a.xhrResponse = e.target.response),
                        v.check.is_new_data_layer() &&
                          (!v.tools.get_pathname_from_url(a.xhrParams.url_raw).endsWith('/i/fd') ||
                            (null != (t = v.tools.parse_fd_request_payload(a.xhrResponse)) &&
                              (v.tools.cache_email_data(t, 'fd_request_payload'), (o.load_email_data = [t]))),
                          !v.tools.get_pathname_from_url(a.xhrParams.url_raw).endsWith('/i/bv') ||
                            (null != (t = v.tools.parse_bv_request_payload(a.xhrResponse)) &&
                              (v.tools.cache_email_data(t, 'bv_request_payload'), (o.load_email_data = [t])))),
                        v.observe.trigger('after', o, a)),
                        r && r.apply(this, arguments);
                    }));
                var t = n.apply(this, arguments);
                return v.observe.trigger('on', o, this), t;
              };
            });
        }
      }),
      (v.tools.embedded_data_watcher = function () {
        var r;
        v.tracker.embedded_data_init ||
          ((v.tracker.embedded_data_init = !0),
          (r = window._GM_setData),
          (window._GM_setData = function (e) {
            var t;
            void 0 !== e &&
              void 0 !== e.Cl6csf &&
              void 0 !== e.Cl6csf[0][2] &&
              ((t = v.tools.parse_fd_embedded_json(JSON.parse(e.Cl6csf[0][2]))),
              v.tools.cache_email_data(t, 'fd_embedded_json')),
              void 0 !== e &&
                void 0 !== e.a6jdv &&
                void 0 !== e.a6jdv[0][2] &&
                ((t = v.tools.parse_bv_embedded_json(JSON.parse(e.a6jdv[0][2]))),
                v.tools.cache_email_data(t, 'bv_embedded_json')),
              r(e);
          }));
      }),
      (v.helper.get_xhr_window = function () {
        if (v.check.is_new_gui()) return top;
        var e = null;
        return (
          top.document.getElementById('js_frame')
            ? (e = top.document.getElementById('js_frame'))
            : t && (e = t.top.document.getElementById('js_frame')),
          (e = e || (t ? t.top : top)).contentDocument ? e.contentDocument.defaultView : e
        );
      }),
      (v.observe.http_requests = function () {
        return v.tracker.events;
      }),
      (v.observe.actions = function () {
        return v.tracker.actions;
      }),
      (v.observe.bind = function (e, t, r) {
        'object' != typeof v.tracker.watchdog &&
          ((v.tracker.watchdog = { before: {}, on: {}, after: {}, dom: {} }), (v.tracker.bound = {})),
          'object' != typeof v.tracker.watchdog[e] && v.tools.error('api.observe.bind called with invalid type: ' + e),
          'dom' !== e && v.tools.xhr_watcher(),
          'object' != typeof v.tracker.watchdog[e][t] && (v.tracker.watchdog[e][t] = []),
          v.tracker.watchdog[e][t].push(r),
          (v.tracker.bound[t] = void 0 === v.tracker.bound[t] ? 1 : v.tracker.bound[t] + 1),
          (v.tracker.bound[e] = void 0 === v.tracker.bound[e] ? 1 : v.tracker.bound[e] + 1);
      }),
      (v.observe.on = function (e, t, r) {
        if (v.observe.on_dom(e, t)) return !0;
        v.observe.bind('on', e, t), r && v.observe.after(e, t);
      }),
      (v.observe.before = function (e, t) {
        v.observe.bind('before', e, t);
      }),
      (v.observe.after = function (e, t) {
        v.observe.bind('after', e, t);
      }),
      (v.observe.bound = function (e, r) {
        if ('object' != typeof v.tracker.watchdog) return !1;
        if (e) {
          if ('object' != typeof e) return r ? 'object' == typeof v.tracker.watchdog[r][e] : 0 < v.tracker.bound[e];
          var a = !1;
          return (
            u.each(e, function (e, t) {
              'object' == typeof v.tracker.watchdog[r][e] && (a = !0);
            }),
            a
          );
        }
        if (r) return 0 < v.tracker.bound[r];
        v.tools.error('api.observe.bound called with invalid args');
      }),
      (v.observe.off = function (t, e) {
        if ('object' != typeof v.tracker.watchdog) return !0;
        u.each(e ? [e] : ['before', 'on', 'after', 'dom'], function (e, r) {
          return (
            'object' != typeof v.tracker.watchdog[r] ||
            void (t
              ? 'object' == typeof v.tracker.watchdog[r][t] &&
                ((v.tracker.bound[t] -= v.tracker.watchdog[r][t].length),
                (v.tracker.bound[r] -= v.tracker.watchdog[r][t].length),
                delete v.tracker.watchdog[r][t])
              : u.each(v.tracker.watchdog[r], function (e, t) {
                  'object' == typeof v.tracker.watchdog[r][e] &&
                    ((v.tracker.bound[e] -= v.tracker.watchdog[r][e].length),
                    (v.tracker.bound[r] -= v.tracker.watchdog[r][e].length),
                    delete v.tracker.watchdog[r][e]);
                }))
          );
        });
      }),
      (v.observe.trigger = function (t, e, a) {
        if (!e) return !1;
        var o = !1;
        return (
          u.each(e, function (e, r) {
            (r = u.extend([], r)),
              'after' === t && r.push(a.xhrResponse),
              r.push(a),
              v.observe.bound(e, t) &&
                ((o = !0),
                u.each(v.tracker.watchdog[t][e], function (e, t) {
                  t.apply(void 0, r);
                }));
          }),
          o
        );
      }),
      (v.observe.trigger_dom = function (e, r, a) {
        (a =
          a ||
          function (e, t) {
            t(e);
          }),
          v.tracker.watchdog.dom[e] &&
            u.each(v.tracker.watchdog.dom[e], function (e, t) {
              a(r, t);
            });
      }),
      (v.observe.initialize_dom_observers = function () {
        (v.tracker.dom_observer_init = !0),
          (v.tracker.supported_observers = [
            'view_thread',
            'view_email',
            'load_email_menu',
            'recipient_change',
            'compose',
          ]),
          (v.tracker.dom_observers = {
            view_thread: {
              class: ['Bu', 'nH'],
              sub_selector: 'div.if',
              handler: function (e, t) {
                t((e = new v.dom.thread(e)));
              },
            },
            view_email: {
              class: ['Bu', 'nH', ''],
              sub_selector: 'div.adn',
              handler: function (e, t) {
                t((e = new v.dom.email(e)));
              },
            },
            load_email_menu: {
              class: 'J-N',
              selector: 'div[role=menu] div[role=menuitem]:first-child',
              handler: function (e, t) {
                t((e = e.closest('div[role=menu]')));
              },
            },
            recipient_change: {
              class: 'vR',
              handler: function (e, r) {
                'object' != typeof v.tracker.recipient_matches && (v.tracker.recipient_matches = []),
                  v.tracker.recipient_matches.push(e),
                  setTimeout(function () {
                    var e, t;
                    v.tracker.recipient_matches.length &&
                      ((t = (e = new v.dom.compose(v.tracker.recipient_matches[0].closest('div.M9'))).recipients()),
                      r(e, t, v.tracker.recipient_matches),
                      (v.tracker.recipient_matches = []));
                  }, 100);
              },
            },
            compose: {
              class: 'An',
              handler: function (e, t) {
                var r,
                  a = e;
                (e = e.closest('div.M9')).length &&
                  ((e = new v.dom.compose(e)).is_inline()
                    ? (r = 0 === e.find('input[name=subject]').val().indexOf('Fw') ? 'forward' : 'reply')
                    : ((r = 'compose'),
                      a
                        .closest('div.AD')
                        .find('.Ha')
                        .mouseup(function () {
                          return v.tracker.composeCancelledCallback && v.tracker.composeCancelledCallback(e), !0;
                        })),
                  t(e, r));
              },
            },
          }),
          v.tracker.custom_supported_observers &&
            (u.merge(v.tracker.supported_observers, v.tracker.custom_supported_observers),
            u.extend(!0, v.tracker.dom_observers, v.tracker.custom_dom_observers)),
          (v.tracker.dom_observer_map = {}),
          u.each(v.tracker.dom_observers, function (r, e) {
            u.isArray(e.class) || (e.class = [e.class]),
              u.each(e.class, function (e, t) {
                v.tracker.dom_observer_map[t] || (v.tracker.dom_observer_map[t] = []),
                  v.tracker.dom_observer_map[t].push(r);
              });
          });
      }),
      (v.observe.register = function (e, r) {
        v.tracker.dom_observer_init &&
          v.tools.error(
            'Error: Please register all custom DOM observers before binding handlers using gmail.observe.on etc',
          ),
          v.tracker.custom_supported_observers ||
            ((v.tracker.custom_supported_observers = []), (v.tracker.custom_dom_observers = {}));
        var a = {};
        'object' != typeof r || u.isArray(r)
          ? (a.class = r)
          : u.each(['class', 'selector', 'sub_selector', 'handler'], function (e, t) {
              r[t] && (a[t] = r[t]);
            }),
          v.tracker.custom_supported_observers.push(e),
          (v.tracker.custom_dom_observers[e] = a);
      });
    function o() {
      v.tracker.jackPreventionInstalled ||
        (window.addEventListener('click', (e) => {
          const t = (r = e).path ? r.path[0] : r.target;
          var r;
          if (t && t !== document.body) {
            const a = t.querySelector(':scope > .gmailjs');
            a && (a.click(), e.preventDefault());
          }
        }),
        (v.tracker.jackPreventionInstalled = !0));
    }
    (v.observe.on_dom = function (e, t) {
      if (
        (v.tracker.dom_observer_init || v.observe.initialize_dom_observers(),
        -1 < u.inArray(e, v.tracker.supported_observers))
      )
        return (
          v.tracker.observing_dom ||
            ((v.tracker.observing_dom = !0),
            u(window.document).on('DOMNodeInserted', function (e) {
              v.tools.insertion_observer(e.target, v.tracker.dom_observers, v.tracker.dom_observer_map);
            }),
            new MutationObserver(function (e) {
              for (var t = 0; t < e.length; t++)
                for (var r, a, o = e[t], n = o.removedNodes, i = 0; i < n.length; i++)
                  'vR' === n[i].className &&
                    ((r = v.tracker.dom_observer_map.vR),
                    (a = v.tracker.dom_observers.recipient_change.handler),
                    v.observe.trigger_dom(r, u(o.target), a));
            }).observe(document.body, { subtree: !0, childList: !0 })),
          v.observe.bind('dom', e, t),
          !0
        );
      if ('compose_cancelled' === e) v.tracker.composeCancelledCallback = t;
      else if ('load' === e) {
        if (v.dom.inbox_content().length) return o(), t();
        var r = 0,
          a = setInterval(function () {
            return 0 < v.dom.inbox_content().length
              ? (clearInterval(a), o(), t())
              : void (50 < ++r && (clearInterval(a), setTimeout(t, 5e3)));
          }, 200);
        return !0;
      }
    }),
      (v.tools.insertion_observer = function (n, i, s, e) {
        var t;
        v.tracker.dom_observer_map &&
          ((t = (t = n.className || '').trim ? t.trim().split(/\s+/) : []).length || t.push(''),
          u.each(t, function (e, t) {
            t = s[t];
            if (t)
              for (var r of t)
                if (r && v.tracker.watchdog.dom[r]) {
                  var a = u(n),
                    o = i[r];
                  if (o.selector && !a.is(o.selector)) return;
                  (a = o.sub_selector ? a.find(o.sub_selector) : a).length &&
                    ((o =
                      o.handler ||
                      function (e, t) {
                        t(e);
                      }),
                    v.observe.trigger_dom(r, a, o));
                }
          }));
      }),
      (v.tools.make_request = function (e, t, r) {
        (e = decodeURIComponent(e.replace(/%23/g, '#-#-#'))),
          (e = {
            type: (t = t || 'GET'),
            url: (e = encodeURI(e).replace(/#-#-#/gi, '%23')),
            async: !1,
            dataType: 'text',
          });
        return r && (e.cache = !1), u.ajax(e).responseText;
      }),
      (v.tools.make_request_async = function (e, t, a, o, r) {
        (e = decodeURIComponent(e.replace(/%23/g, '#-#-#'))),
          (e = {
            type: (t = t || 'GET'),
            url: (e = encodeURI(e).replace(/#-#-#/gi, '%23')),
            async: !0,
            dataType: 'text',
          });
        r && (e.cache = !1),
          u
            .ajax(e)
            .done(function (e, t, r) {
              a(r.responseText);
            })
            .fail(function (e, t, r) {
              console.error('Request Failed', r), 'function' == typeof o && o(e, t, r);
            });
      }),
      (v.tools.make_request_download_promise = function (e, o) {
        var t = Date.now();
        e += '&cacheCounter=' + t;
        let n = o ? 'arraybuffer' : 'text';
        return new Promise((r, t) => {
          const a = new XMLHttpRequest();
          a.open('GET', e, !0),
            (a.responseType = n),
            (a.onreadystatechange = () => {
              var e, t;
              a.readyState === XMLHttpRequest.DONE &&
                200 <= a.status &&
                a.status <= 302 &&
                (e = a.response) &&
                (o ? ((t = new Uint8Array(e)), r(t)) : r(e));
            }),
            (a.onerror = (e) => {
              t(e);
            }),
            a.send();
        });
      }),
      (v.tools.parse_view_data = function (e) {
        for (var t = [], r = [], a = 0; a < e.length; a++)
          if ('tb' === e[a][0]) for (var o = 0; o < e[a][2].length; o++) r.push(e[a][2][o]);
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          t.push({
            id: i[0],
            title: i[9],
            excerpt: i[10],
            time: i[15],
            sender: i[28],
            attachment: i[13],
            labels: i[5],
          });
        }
        return t;
      }),
      (v.helper.get.is_delegated_inbox = function () {
        return 1 === u('.identityUserDelegatedAccount').length;
      }),
      (v.helper.get.visible_emails_pre = function (e) {
        var t = v.get.current_page(),
          r =
            window.location.origin +
            window.location.pathname +
            '?ui=2&ik=' +
            v.tracker.ik +
            '&rid=' +
            v.tracker.rid +
            '&view=tl&num=120&rt=1',
          a = u('.aqK:visible .Dj').find('span:first').text().replace(',', '').replace('.', '').split('–')[0];
        r += a ? '&start=' + (a = parseInt(a - 1)) + '&sstart=' + a : '&start=0';
        var o = '';
        return (
          0 === t.indexOf('label/')
            ? (r += '&cat=' + t.split('/')[1] + '&search=cat')
            : 0 === t.indexOf('category/')
            ? (-1 !== t.indexOf('forums')
                ? (o = 'group')
                : -1 !== t.indexOf('updates')
                ? (o = 'notification')
                : -1 !== t.indexOf('promotion')
                ? (o = 'promo')
                : -1 !== t.indexOf('social') && (o = 'social'),
              (r += '&cat=^smartlabel_' + o + '&search=category'))
            : 0 === t.indexOf('search/')
            ? ((a = u('input[name=at]').val()), (r += '&qs=true&q=' + t.split('/')[1] + '&at=' + a + '&search=query'))
            : 'inbox' === t
            ? 'true' === u("div[aria-label='Social']").attr('aria-selected')
              ? (r += '&cat=^smartlabel_' + (o = 'social') + '&search=category')
              : 'true' === u("div[aria-label='Promotions']").attr('aria-selected')
              ? (r += '&cat=^smartlabel_' + (o = 'promo') + '&search=category')
              : 'true' === u("div[aria-label='Updates']").attr('aria-selected')
              ? (r += '&cat=^smartlabel_' + (o = 'notification') + '&search=category')
              : 'true' === u("div[aria-label='Forums']").attr('aria-selected')
              ? (r += '&cat=^smartlabel_' + (o = 'group') + '&search=category')
              : e
              ? (r += '&search=' + e)
              : v.check.is_google_apps_user()
              ? (r += '&search=inbox')
              : (r += '&search=mbox')
            : (r += '&search=' + t),
          r
        );
      }),
      (v.helper.get.visible_emails_post = function (e) {
        var t = [];
        if (!e) return t;
        var r,
          a,
          e = e.substring(e.indexOf('['), e.length),
          e = JSON.parse(e);
        for (r in ((v.tracker.view_data = e), v.tracker.view_data))
          'function' != typeof v.tracker.view_data[r] &&
            0 < (a = v.tools.parse_view_data(v.tracker.view_data[r])).length &&
            (function (e, t) {
              for (var r = 0; r < t.length; r++) {
                var a = t[r];
                e.push(a);
              }
            })(t, a);
        return t;
      }),
      (v.get.visible_emails = function (e) {
        (e = v.helper.get.visible_emails_pre(e)), (e = v.tools.make_request(e));
        return v.helper.get.visible_emails_post(e);
      }),
      (v.get.visible_emails_async = function (t, e) {
        e = v.helper.get.visible_emails_pre(e);
        v.tools.make_request_async(e, 'GET', function (e) {
          e = v.helper.get.visible_emails_post(e);
          t(e);
        });
      }),
      (v.get.selected_emails_data = function (e) {
        var t,
          r,
          a = [];
        return (
          v.check.is_inside_email()
            ? a.push(v.get.email_data())
            : u("[gh='tl'] div[role='checkbox'][aria-checked='true']").length &&
              ((t = null),
              (r = v.get.visible_emails(e)),
              u("[gh='tl'] div[role='checkbox']").each(function (e) {
                'true' === u(this).attr('aria-checked') && ((t = v.get.email_data(r[e].id)), a.push(t));
              })),
          a
        );
      }),
      (v.get.current_page = function (e) {
        e = (e = e || window.location.hash).split('#').pop().split('?').shift() || 'inbox';
        if (e.match(/\/[0-9a-zA-Z]{16,}$/gi)) return 'email';
        if (0 !== e.indexOf('search/') && 0 !== e.indexOf('category/') && 0 !== e.indexOf('label/'))
          return e.split('/').shift();
        e = e.split('/');
        return e[0] + '/' + e[1];
      }),
      (v.tools.infobox = function (e, t, r) {
        var a,
          o,
          n = u('.b8.UC');
        0 < n.length &&
          (n.stop(!1, !0),
          (a = n.find('.vh')),
          r ? a.html(e) : a.text(e),
          void 0 !== t
            ? ((o = n.attr('style')),
              n.removeAttr('style').fadeTo(t, 0, function () {
                u(this).attr('style', o);
              }))
            : n.removeAttr('style'));
      }),
      (v.tools.rerender = function (e) {
        var t = window.location.href,
          r = -1 !== window.location.hash.indexOf('/') ? t.replace(/#.*?\//, '#/') : t.replace(/#.*/, '#');
        window.location.replace(r),
          setTimeout(function () {
            window.location.replace(t), window.history.back(), e && e();
          }, 0);
      }),
      (v.tools.get_reply_to = function (e) {
        e = e ? e[4] : [];
        return 0 !== e.length ? v.tools.extract_email_address(e[0]) : null;
      }),
      (v.tools.parse_attachment_data = function (e) {
        if (!e[7] || !e[7][0]) return null;
        var t = '';
        'undefined' != typeof window && (t = window.location.origin + window.location.pathname);
        var r = e[7][0];
        v.tracker.attachment_data = r;
        for (var a = [], o = 0; o < r.length; o++) {
          var n = r[o];
          a.push({
            attachment_id: n[0],
            name: n[1],
            type: n[2],
            size: n[3],
            url: t + n[9],
          });
        }
        return a;
      }),
      (v.tools.parse_email_data = function (e) {
        var t,
          r = {};
        for (t in e) {
          var a = e[t];
          if (
            ('cs' === a[0] &&
              ((r.thread_id = a[1]),
              (r.first_email = a[8][0]),
              (r.last_email = a[2]),
              (r.total_emails = a[3]),
              (r.total_threads = a[8]),
              (r.people_involved = a[15]),
              (r.subject = a[23])),
            'ms' === a[0])
          ) {
            void 0 === r.threads && (r.threads = {}),
              (r.threads[a[1]] = {}),
              (r.threads[a[1]].is_deleted = a[9] && -1 < a[9].indexOf('^k')),
              (r.threads[a[1]].reply_to_id = a[2]),
              (r.threads[a[1]].from = a[5]),
              (r.threads[a[1]].from_email = a[6]),
              (r.threads[a[1]].timestamp = a[7]),
              (r.threads[a[1]].datetime = a[24]),
              (r.threads[a[1]].attachments = a[21].split(',')),
              (r.threads[a[1]].attachments_details = a[13] ? v.tools.parse_attachment_data(a[13]) : null),
              (r.threads[a[1]].subject = a[12]),
              (r.threads[a[1]].content_html = a[13] ? a[13][6] : a[8]),
              (r.threads[a[1]].to = a[13] ? a[13][1] : void 0 !== a[37] ? a[37][1] : []),
              (r.threads[a[1]].cc = a[13] ? a[13][2] : []),
              (r.threads[a[1]].bcc = a[13] ? a[13][3] : []),
              (r.threads[a[1]].reply_to = v.tools.get_reply_to(a[13])),
              (r.threads[a[1]].labels = a[9]);
            try {
              r.threads[a[1]].content_plain = a[13] ? u(a[13][6]).text() : a[8];
            } catch (e) {
              r.threads[a[1]].content_plain = a[13] ? a[13][6] : a[8];
            }
          }
        }
        return r;
      }),
      (v.helper.get.email_data_pre = function (e) {
        r('Migrate code to use gmail.new.get.email_data() to fix this problem.');
        var t = null;
        return (t =
          void 0 !== (e = v.check.is_inside_email() && void 0 === e ? v.get.thread_id() : e)
            ? window.location.origin +
              window.location.pathname +
              '?ui=2&ik=' +
              v.tracker.ik +
              '&rid=' +
              v.tracker.rid +
              '&view=cv&th=' +
              e +
              '&msgs=&mb=0&rt=1&search=inbox'
            : t);
      }),
      (v.helper.get.email_data_post = function (e) {
        if (!e) return {};
        (e = e.substring(e.indexOf('['), e.length)), (e = JSON.parse(e));
        return (v.tracker.email_data = e[0]), v.tools.parse_email_data(v.tracker.email_data);
      }),
      (v.get.email_data = function (e) {
        e = v.helper.get.email_data_pre(e);
        if (null === e) return {};
        e = v.tools.make_request(e);
        return v.helper.get.email_data_post(e);
      }),
      (v.get.email_data_async = function (e, t) {
        e = v.helper.get.email_data_pre(e);
        null !== e
          ? v.tools.make_request_async(e, 'GET', function (e) {
              e = v.helper.get.email_data_post(e);
              t(e);
            })
          : t({});
      }),
      (v.helper.get.legacy_email_id = function (e) {
        if (!e) return null;
        if (v.check.data.is_legacy_email_id(e)) return e;
        if (e.legacy_email_id) return e.legacy_email_id;
        if (v.check.data.is_email_id(e)) {
          console.warn(
            "GmailJS: Warning! Using new-style ID in method expecting legacy-style IDs! Attempting to resolve via cache, but there's no guarantee this will work!",
          );
          var t = v.cache.emailIdCache[e];
          return t && t.legacy_email_id;
        }
        return (e = e.$el && e.$el[0] ? e.$el[0] : e).dataset && e.dataset.legacyMessageId
          ? e.dataset.legacyMessageId
          : null;
      }),
      (v.helper.get.new_email_id = function (t) {
        if (!t) return null;
        if (v.check.data.is_email_id(t)) return t;
        if (t.id && !t.$el) return t.id;
        if (v.check.data.is_legacy_email_id(t)) {
          console.warn(
            "GmailJS: Warning! Using legacy-style ID in method expecting new-style IDs! Attempting to resolve via cache, but there's no guarantee this will work!",
          );
          var e = v.cache.emailLegacyIdCache[t];
          return e && e.id;
        }
        if ((t = t.$el && t.$el[0] ? t.$el[0] : t).dataset && t.dataset.messageId) {
          let e = t.dataset.messageId;
          return 0 === e.indexOf('#') && (e = e.substring(1)), e;
        }
        return null;
      }),
      (v.helper.get.thread_id = function (t) {
        if (!t) return null;
        if (v.check.data.is_thread_id(t)) return t;
        if (t.thread_id) return t.thread_id;
        if (v.check.data.is_email_id(t)) {
          console.warn(
            "GmailJS: Warning! Using email-ID in method expecting thread-ID! Attempting to resolve via cache, but there's no guarantee this will work!",
          );
          var e = v.cache.emailIdCache[t];
          return e && e.thread_id;
        }
        if (v.check.data.is_legacy_email_id(t)) {
          console.warn(
            "GmailJS: Warning! Using legacy-style ID in method expecting thread-ID! Attempting to resolve via cache, but there's no guarantee this will work!",
          );
          e = v.cache.emailLegacyIdCache[t];
          return e && e.thread_id;
        }
        if ((t = t.$el && t.$el[0] ? t.$el[0] : t).dataset && t.dataset.threadPermId) {
          let e = t.dataset.threadPermId;
          return 0 === e.indexOf('#') && (e = e.substring(1)), e;
        }
        if (t.dataset && t.dataset.messageId) {
          let e = t.dataset.messageId;
          0 === e.indexOf('#') && (e = e.substring(1)),
            console.warn(
              "GmailJS: Warning! Using DomEmail instance to lookup thread-ID. Attempting to resolve via cache, but there's no guarantee this will work!",
            );
          t = v.cache.emailIdCache[e];
          return t && t.thread_id;
        }
        return null;
      }),
      (v.helper.clean_thread_id = function (e) {
        return (e = e.startsWith('#') ? e.substring(1) : e);
      }),
      (v.helper.get.email_source_pre = function (e) {
        !e && v.check.is_inside_email() && (e = v.get.email_id());
        e = v.helper.get.legacy_email_id(e);
        return e
          ? window.location.origin + window.location.pathname + '?view=att&th=' + e + '&attid=0&disp=comp&safe=1&zw'
          : null;
      }),
      (v.get.email_source = function (e) {
        console.warn(
          'Gmail.js: This function has been deprecated and will be removed in an upcoming release! Please migrate to email_source_async or email_source_promise!',
        );
        e = v.helper.get.email_source_pre(e);
        return null !== e ? v.tools.make_request(e, 'GET', !0) : '';
      }),
      (v.get.email_source_async = function (e, t, r, a) {
        v.get.email_source_promise(e, a).then(t).catch(r);
      }),
      (v.get.email_source_promise = function (e, t) {
        e = v.helper.get.email_source_pre(e);
        return null !== e
          ? v.tools.make_request_download_promise(e, t)
          : new Promise((e, t) => {
              t('Unable to resolve URL for email source!');
            });
      }),
      (v.get.displayed_email_data = function () {
        var e = v.get.email_data();
        return (v.check.is_conversation_view() ? a : n)(e);
      }),
      (v.get.displayed_email_data_async = function (t) {
        v.get.email_data_async(void 0, function (e) {
          v.check.is_conversation_view() ? t(a(e)) : t(n(e));
        });
      });
    var a = function (e) {
        var t,
          r = e,
          a = r.threads,
          o = r.total_threads,
          n = 0 === (window.location.hash.split('#')[1] || '').indexOf('trash');
        for (t in a) {
          var i = a[t];
          (n ? i.is_deleted : !i.is_deleted) || (delete a[t], o.splice(o.indexOf(t), 1), r.total_emails--);
        }
        return r;
      },
      n = function (e) {
        var t,
          r = {};
        for (t in e.threads)
          if (document.querySelector("div[data-legacy-message-id='" + t + "']")) {
            var a = e.threads[t];
            (r.first_email = t),
              (r.last_email = t),
              (r.subject = e.subject),
              (r.threads = {}),
              (r.threads[t] = a),
              (r.total_emails = 1),
              (r.total_threads = [t]),
              (r.people_involved = []),
              r.people_involved.push([a.from, a.from_email]),
              a.to.forEach(function (e) {
                var t = v.tools.extract_email_address(e),
                  e = v.tools.extract_name(e.replace(t, '')) || '';
                r.people_involved.push([e, t]);
              });
            break;
          }
        return r;
      };
    (v.check.is_conversation_view = function () {
      if (v.check.is_new_data_layer()) return -1 !== v.tracker.globals[24].indexOf(7164);
      for (var e = void 0, t = v.tracker.globals[17][4][1], r = 0; r < t.length; r++) {
        var a = t[r];
        if ('bx_vmb' === a[0]) {
          e = a[1];
          break;
        }
      }
      return '0' === e || void 0 === e;
    }),
      (v.tools.extract_email_address = function (e) {
        e = e ? e.match(/[\+a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+/gi) : void 0;
        return e ? e[0] : void 0;
      }),
      (v.tools.extract_name = function (e) {
        e = e ? e.match(/[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF"._\s-]+/gi) : void 0;
        return e && e[0] ? e[0].trim() : void 0;
      }),
      (v.tools.i18n = function (e) {
        var t;
        switch (v.get.localization()) {
          case 'fr':
            t = {
              inbox: 'Boîte de réception',
              drafts: 'Brouillons',
              spam: 'Spam',
              forums: 'Forums',
              updates: 'Mises à jour',
              promotions: 'Promotions',
              social_updates: 'Réseaux sociaux',
            };
            break;
          case 'no':
            t = {
              inbox: 'Innboks',
              drafts: 'Utkast',
              spam: 'Søppelpost',
              forums: 'Forumer',
              updates: 'Oppdateringer',
              promotions: 'Reklame',
              social_updates: 'Sosialt',
            };
            break;
          case 'nl':
            t = {
              inbox: 'Postvak IN',
              drafts: 'Concepten',
              spam: 'Spam',
              forums: 'Forums',
              updates: 'Updates',
              promotions: 'Reclame',
              social_updates: 'Sociaal',
            };
            break;
          case 'it':
            t = {
              inbox: 'Posta in arrivo',
              drafts: 'Bozza',
              spam: 'Spam',
              forums: 'Forum',
              updates: 'Aggiornamenti',
              promotions: 'Promozioni',
              social_updates: 'Social',
            };
            break;
          case 'en':
          default:
            t = {
              inbox: 'Inbox',
              drafts: 'Drafts',
              spam: 'Spam',
              forums: 'Forums',
              updates: 'Updates',
              promotions: 'Promotions',
              social_updates: 'Social Updates',
            };
        }
        return t[e];
      });
    function i(e, t, r, a, o, n) {
      var i = u(document.createElement('div'));
      i.attr('class', 'G-Ni J-J5-Ji');
      var s = u(document.createElement('div')),
        l = 'T-I J-J5-Ji gmailjs ';
      return (
        s.attr('class', (l += null != o && '' !== o ? r + o : r + a)),
        s.html(e),
        s.click(t),
        u(document.createElement('div')).attr('class', 'asa'),
        i.html(s),
        n.append(i),
        i
      );
    }
    return (
      (v.tools.add_toolbar_button = function (e, t, r) {
        return i(e, t, 'lS ', 'T-I-ax7 ar7', r, v.dom.toolbar());
      }),
      (v.tools.add_right_toolbar_button = function (e, t, r) {
        return i(e, t, 'ash ', 'T-I-ax7 L3', r, v.dom.right_toolbar());
      }),
      (v.tools.add_compose_button = function (e, t, r, a) {
        var o = u(document.createElement('div')),
          n = 'T-I J-J5-Ji aoO T-I-atl L3 gmailjs gmailjscomposebutton ';
        return (
          void 0 !== a && (n += a),
          o.attr('class', n),
          o.attr('style', 'margin-left: 8px; max-width: 500px;'),
          o.html(t),
          o.click(r),
          e.find('.gU.Up  > .J-J5-Ji').append(o),
          o
        );
      }),
      (v.tools.add_attachment_button = function (e, t, r, a, o) {
        var n = u(document.createElement('div'));
        n.attr('class', 'T-I J-J5-Ji aQv T-I-ax7 L3'),
          n.attr('style', 'user-select: none;'),
          n.attr('aria-label', a),
          n.attr('data-tooltip', a);
        n.mouseover(function () {
          this.classList.add('T-I-JW');
        }),
          n.mouseout(function () {
            this.classList.remove('T-I-JW');
          });
        var i = u(document.createElement('div')),
          a = 'wtScjd J-J5-Ji aYr';
        return (
          r && (a += ' ' + r),
          i.attr('class', a),
          t && i.html(t),
          n.append(i),
          n.click(o),
          e.$el.find('div.aQw').append(n),
          n
        );
      }),
      (v.tools.remove_modal_window = function () {
        u('#gmailJsModalBackground').remove(), u('#gmailJsModalWindow').remove();
      }),
      (v.tools.add_modal_window = function (e, t, r, a, o, n, i) {
        (o = o || v.tools.remove_modal_window),
          (a = a || v.tools.remove_modal_window),
          (n = n || 'OK'),
          (i = i || 'Cancel');
        var s = u(document.createElement('div'));
        s.attr('id', 'gmailJsModalBackground'),
          s.attr('class', 'Kj-JD-Jh'),
          s.attr('aria-hidden', 'true'),
          s.attr('style', 'opacity:0.75;width:100%;height:100%;');
        var l = u(document.createElement('div'));
        l.attr('id', 'gmailJsModalWindow'),
          l.attr('class', 'Kj-JD'),
          l.attr('tabindex', '0'),
          l.attr('role', 'alertdialog'),
          l.attr('aria-labelledby', 'gmailJsModalWindowTitle'),
          l.attr('style', 'left:50%;top:50%;opacity:1;');
        var c = u(document.createElement('div'));
        c.attr('class', 'Kj-JD-K7 Kj-JD-K7-GIHV4');
        var d = u(document.createElement('span'));
        d.attr('id', 'gmailJsModalWindowTitle'), d.attr('class', 'Kj-JD-K7-K0'), d.attr('role', 'heading'), d.html(e);
        e = u(document.createElement('span'));
        e.attr('id', 'gmailJsModalWindowClose'),
          e.attr('class', 'Kj-JD-K7-Jq'),
          e.attr('role', 'button'),
          e.attr('tabindex', '0'),
          e.attr('aria-label', 'Close'),
          e.click(o),
          c.append(d),
          c.append(e);
        d = u(document.createElement('div'));
        d.attr('id', 'gmailJsModalWindowContent'), d.attr('class', 'Kj-JD-Jz'), d.html(t);
        e = u(document.createElement('div'));
        e.attr('class', 'Kj-JD-Jl');
        t = u(document.createElement('button'));
        t.attr('id', 'gmailJsModalWindowOk'),
          t.attr('class', 'J-at1-auR J-at1-atl'),
          t.attr('name', 'ok'),
          t.text(n),
          t.click(r);
        r = u(document.createElement('button'));
        r.attr('id', 'gmailJsModalWindowCancel'),
          r.attr('name', 'cancel'),
          r.text(i),
          r.click(a),
          e.append(t),
          e.append(r),
          l.append(c),
          l.append(d),
          l.append(e),
          u(document.body).append(s),
          u(document.body).append(l);
        s = function () {
          l.css({
            top: (u(window).height() - l.outerHeight()) / 2,
            left: (u(window).width() - l.outerWidth()) / 2,
          });
        };
        s(), l.on('DOMSubtreeModified', s), u(window).resize(s);
      }),
      (v.tools.toggle_minimize = function () {
        var e = u("[alt='Minimize']")[0];
        return !!e && (e.click(), !0);
      }),
      (v.chat.is_hangouts = function () {
        if (void 0 !== v.tracker.hangouts) return v.tracker.hangouts;
        var e = u('.dw');
        if (1 < e.length) throw 'Figuring out is hangouts - more than one dw classes found';
        if (0 === e.length) throw 'Figuring out is hangouts - no dw classes found';
        e = e[0];
        return 0 < u('.nH.aJl.nn', e).length
          ? (v.tracker.hangouts = !0)
          : 2 < u('.nH.nn', e).length
          ? (v.tracker.hangouts = !1)
          : void 0;
      }),
      (v.dom.visible_messages = function () {
        const n = [];
        return (
          u('tbody>tr.zA[role="row"]:visible', v.dom.inbox_content()).each((e, t) => {
            const r = u('*[email][name]', t);
            var a = u('*[role=link]', t),
              o = t.querySelector('span[data-thread-id]');
            n.push({
              from: { name: r.attr('name'), email: r.attr('email') },
              summary: a[0].innerText,
              thread_id: v.helper.clean_thread_id(o.dataset.threadId || ''),
              legacy_email_id: o.dataset.legacyMessageId,
              $el: u(t),
            });
          }),
          n
        );
      }),
      (v.dom.composes = function () {
        var r = [];
        return (
          u('div.M9').each(function (e, t) {
            r.push(new v.dom.compose(t));
          }),
          r
        );
      }),
      (v.dom.helper = {}),
      (v.dom.helper.trigger_address = function (e) {
        let t = e[0];
        e = new KeyboardEvent('keydown', {
          bubbles: !0,
          cancelable: !0,
          key: 'Tab',
          shiftKey: !0,
          keyCode: 9,
        });
        t.focus(), t.dispatchEvent(e);
      }),
      (v.dom.compose = function (e) {
        return this.constructor !== v.dom.compose
          ? new v.dom.compose(e)
          : (((e = u(e)) && (e.hasClass('M9') || e.hasClass('AD'))) ||
              v.tools.error('api.dom.compose called with invalid element'),
            (this.$el = e),
            this);
      }),
      e(v.dom.compose.prototype, {
        id: function () {
          return this.dom('id').val();
        },
        email_id: function () {
          let e = this.dom('draft').val();
          return e && e.startsWith('#') ? e.substring(1) : e;
        },
        thread_id: function () {
          var e = this.dom('thread').val() || '';
          return v.helper.clean_thread_id(e);
        },
        is_inline: function () {
          return 0 < this.$el.closest('td.Bu').length;
        },
        recipients: function (r) {
          var e = (r = 'object' != typeof r ? {} : r).type ? '[name=' + r.type + ']' : '',
            a = r.flat ? [] : { to: [], cc: [], bcc: [] };
          return (
            this.$el.find('.GS input[type=hidden]' + e).each(function (e, t) {
              r.flat ? a.push(t.value) : (a[t.name] || (a[t.name] = []), a[t.name].push(t.value));
            }),
            a
          );
        },
        to: function (e) {
          e = this.dom('to').val(e);
          return v.dom.helper.trigger_address(e), e;
        },
        cc: function (e) {
          if (e) {
            const t = this.dom('show_cc');
            t.click();
          }
          e = this.dom('cc').val(e);
          return v.dom.helper.trigger_address(e), e;
        },
        bcc: function (e) {
          if (e) {
            const t = this.dom('show_bcc');
            t.click();
          }
          e = this.dom('bcc').val(e);
          return v.dom.helper.trigger_address(e), e;
        },
        subject: function (e) {
          return e && this.dom('all_subjects').val(e), (e = this.dom('subjectbox').val()) || this.dom('subject').val();
        },
        from: function () {
          var e = this.dom('from');
          if (e.length) {
            e = e.val();
            if (e) return v.tools.extract_email_address(e);
          }
          return v.get.user_email();
        },
        body: function (e) {
          var t = this.dom('body');
          return e && t.html(e), t.html();
        },
        send: function () {
          return this.dom('send_button').click();
        },
        find: function (e) {
          return this.$el.find(e);
        },
        close: function () {
          const e = document.createEvent('Events');
          e.initEvent('keydown', !0, !0), (e.which = 27), (e.keyCode = 27);
          var t = this.dom('body');
          t.focus(), t[0].dispatchEvent(e);
        },
        dom: function (e) {
          if (!e) return this.$el;
          var t = {
            to: 'textarea[name=to]',
            cc: 'textarea[name=cc]',
            bcc: 'textarea[name=bcc]',
            id: 'input[name=composeid]',
            draft: 'input[name=draft]',
            thread: 'input[name=rt]',
            subject: 'input[name=subject]',
            subjectbox: 'input[name=subjectbox]',
            all_subjects: 'input[name=subjectbox], input[name=subject]',
            body: 'div[contenteditable=true]',
            quoted_reply: 'input[name=uet]',
            reply: 'M9',
            forward: 'M9',
            from: 'input[name=from]',
            send_button: 'div.T-I.T-I-atl:not(.gmailjscomposebutton)',
            show_cc: 'span.aB.gQ.pE',
            show_bcc: 'span.aB.gQ.pB',
          };
          return (
            t[e] || v.tools.error('Dom lookup failed. Unable to find config for "' + e + '"', t, e, t[e]),
            this.$el.find(t[e])
          );
        },
      }),
      (v.dom.email = function (e) {
        return this.constructor !== v.dom.email
          ? new v.dom.email(e)
          : ('string' == typeof e && v.check.data.is_legacy_email_id(e)
              ? ((this.id = e), (this.$el = u("div.adn[data-legacy-message-id='" + this.id + "']")))
              : 'string' == typeof e && v.check.data.is_email_id(e)
              ? ((t = document.querySelector("div.adn[data-message-id='" + e.replace('msg-f:', '\\#msg-f\\:') + "']")),
                (this.id = t.dataset.legacyMessageId),
                (this.$el = u(t)))
              : e && ((e.classList && e.classList.contains('adn')) || (e.hasClass && e.hasClass('adn')))
              ? ((this.$el = u(e)), (this.id = this.$el.data('legacyMessageId')))
              : v.tools.error('api.dom.email called with invalid element/id'),
            this);
        var t;
      }),
      e(v.dom.email.prototype, {
        body: function (e) {
          var t = this.dom('body');
          return e && t.html(e), t.html();
        },
        from: function (e, t) {
          var r = this.dom('from');
          return (
            e && r.attr('email', e),
            t && (r.attr('name', t), r.html(t)),
            { email: r.attr('email'), name: r.attr('name'), el: r }
          );
        },
        to: function (e) {
          var r;
          e &&
            (u.isArray(e) || (e = [e]),
            (r = []),
            u.each(e, function (e, t) {
              r.push(
                u('<span />')
                  .attr({ dir: 'ltr', email: t.email, name: t.name })
                  .addClass('g2')
                  .html(t.name)
                  .wrap('<p/>')
                  .parent()
                  .html(),
              );
            }),
            this.dom('to_wrapper').html('to ' + r.join(', ')));
          var t = [];
          return (
            this.dom('to').each(function () {
              var e = u(this);
              t.push({ email: e.attr('email'), name: e.attr('name'), el: e });
            }),
            t
          );
        },
        attachments: function () {
          var r = [];
          return (
            this.dom('attachments').each(function () {
              var e = u(this),
                t = {};
              (t.$el = e), (t.name = e.find('.aV3').html()), (t.size = e.find('.SaH2Ve').html());
              e = e.attr('download_url');
              e && ((e = v.tools.parse_attachment_url(e)), (t.url = e.url), (t.type = e.type)), r.push(t);
            }),
            r
          );
        },
        data: function () {
          var e;
          return (
            'object' != typeof v.dom.email_cache && (v.dom.email_cache = {}),
            v.dom.email_cache[this.id] ||
              ((e = v.get.email_data(this.id)),
              u.each(e.threads, function (e, t) {
                v.dom.email_cache[e] = t;
              })),
            v.dom.email_cache[this.id]
          );
        },
        source: function () {
          return v.get.email_source(this.id);
        },
        dom: function (e) {
          if (!e) return this.$el;
          var t = {
            body: 'div.a3s',
            from: 'span[email].gD',
            to: 'span[email].g2',
            to_wrapper: 'span.hb',
            timestamp: 'span.g3',
            star: 'div.zd',
            attachments: 'div.hq.gt div.aQH span.aZo',
            reply_button: 'div[role=button].aaq',
            menu_button: 'div[role=button].aap',
            details_button: 'div[role=button].ajz',
          };
          return t[e] || v.tools.error('Dom lookup failed. Unable to find config for "' + e + '"'), this.$el.find(t[e]);
        },
      }),
      (v.dom.thread = function (e) {
        return this.constructor !== v.dom.thread
          ? new v.dom.thread(e)
          : ((e && e.hasClass('if')) || v.tools.error('api.dom.thread called with invalid element/id'),
            (this.$el = e),
            this);
      }),
      e(v.dom.thread.prototype, {
        dom: function (e) {
          if (!e) return this.$el;
          var t = {
            opened_email: 'div.adn',
            subject: 'h2.hP',
            labels: 'div.hN',
          };
          return t[e] || v.tools.error('Dom lookup failed. Unable to find config for "' + e + '"'), this.$el.find(t[e]);
        },
      }),
      (v.compose.start_compose = function () {
        var e = document.getElementsByClassName('T-I T-I-KE L3')[0];
        return !!e && (e.click(), !0);
      }),
      (v.old = {}),
      (v.old.get = v.get),
      (v.new = {}),
      (v.new.get = {}),
      (v.new.get.email_id = function (e) {
        if (!e) {
          var t = document.querySelectorAll('.adn[data-message-id]');
          if (!t || 0 === t.length) return null;
          e = t[t.length - 1];
        }
        return v.helper.get.new_email_id(e);
      }),
      (v.new.get.thread_id = function () {
        var e = document.querySelector('[data-thread-perm-id]');
        return e ? e.dataset.threadPermId : null;
      }),
      (v.new.get.email_data = function (e) {
        e = e || v.new.get.email_id();
        e = v.helper.get.new_email_id(e);
        return e ? v.cache.emailIdCache[e] : null;
      }),
      (v.new.get.thread_data = function (e) {
        e = e || v.new.get.thread_id();
        e = v.helper.get.thread_id(e);
        return e ? v.cache.threadCache[e] : null;
      }),
      'undefined' != typeof document && v.tools.xhr_watcher(),
      'undefined' != typeof document && v.tools.embedded_data_watcher(),
      v
    );
  };
  'undefined' != typeof exports && (exports.Gmail = Gmail);

  // init
  window.gmail = Gmail();

  // moment
  !(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = t())
      : 'function' == typeof define && define.amd
      ? define(t)
      : (e.moment = t());
  })(this, function () {
    'use strict';
    var e, i;
    function f() {
      return e.apply(null, arguments);
    }
    function o(e) {
      return e instanceof Array || '[object Array]' === Object.prototype.toString.call(e);
    }
    function u(e) {
      return null != e && '[object Object]' === Object.prototype.toString.call(e);
    }
    function m(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function l(e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
      for (var t in e) if (m(e, t)) return;
      return 1;
    }
    function r(e) {
      return void 0 === e;
    }
    function h(e) {
      return 'number' == typeof e || '[object Number]' === Object.prototype.toString.call(e);
    }
    function a(e) {
      return e instanceof Date || '[object Date]' === Object.prototype.toString.call(e);
    }
    function d(e, t) {
      for (var n = [], s = 0; s < e.length; ++s) n.push(t(e[s], s));
      return n;
    }
    function c(e, t) {
      for (var n in t) m(t, n) && (e[n] = t[n]);
      return m(t, 'toString') && (e.toString = t.toString), m(t, 'valueOf') && (e.valueOf = t.valueOf), e;
    }
    function _(e, t, n, s) {
      return xt(e, t, n, s, !0).utc();
    }
    function y(e) {
      return (
        null == e._pf &&
          (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1,
          }),
        e._pf
      );
    }
    function g(e) {
      if (null == e._isValid) {
        var t = y(e),
          n = i.call(t.parsedDateParts, function (e) {
            return null != e;
          }),
          s =
            !isNaN(e._d.getTime()) &&
            t.overflow < 0 &&
            !t.empty &&
            !t.invalidEra &&
            !t.invalidMonth &&
            !t.invalidWeekday &&
            !t.weekdayMismatch &&
            !t.nullInput &&
            !t.invalidFormat &&
            !t.userInvalidated &&
            (!t.meridiem || (t.meridiem && n));
        if (
          (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
          null != Object.isFrozen && Object.isFrozen(e))
        )
          return s;
        e._isValid = s;
      }
      return e._isValid;
    }
    function w(e) {
      var t = _(NaN);
      return null != e ? c(y(t), e) : (y(t).userInvalidated = !0), t;
    }
    i = Array.prototype.some
      ? Array.prototype.some
      : function (e) {
          for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
            if (s in t && e.call(this, t[s], s, t)) return !0;
          return !1;
        };
    var p = (f.momentProperties = []),
      t = !1;
    function v(e, t) {
      var n, s, i;
      if (
        (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        r(t._i) || (e._i = t._i),
        r(t._f) || (e._f = t._f),
        r(t._l) || (e._l = t._l),
        r(t._strict) || (e._strict = t._strict),
        r(t._tzm) || (e._tzm = t._tzm),
        r(t._isUTC) || (e._isUTC = t._isUTC),
        r(t._offset) || (e._offset = t._offset),
        r(t._pf) || (e._pf = y(t)),
        r(t._locale) || (e._locale = t._locale),
        0 < p.length)
      )
        for (n = 0; n < p.length; n++) r((i = t[(s = p[n])])) || (e[s] = i);
      return e;
    }
    function k(e) {
      v(this, e),
        (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === t && ((t = !0), f.updateOffset(this), (t = !1));
    }
    function M(e) {
      return e instanceof k || (null != e && null != e._isAMomentObject);
    }
    function D(e) {
      !1 === f.suppressDeprecationWarnings &&
        'undefined' != typeof console &&
        console.warn &&
        console.warn('Deprecation warning: ' + e);
    }
    function n(i, r) {
      var a = !0;
      return c(function () {
        if ((null != f.deprecationHandler && f.deprecationHandler(null, i), a)) {
          for (var e, t, n = [], s = 0; s < arguments.length; s++) {
            if (((e = ''), 'object' == typeof arguments[s])) {
              for (t in ((e += '\n[' + s + '] '), arguments[0]))
                m(arguments[0], t) && (e += t + ': ' + arguments[0][t] + ', ');
              e = e.slice(0, -2);
            } else e = arguments[s];
            n.push(e);
          }
          D(i + '\nArguments: ' + Array.prototype.slice.call(n).join('') + '\n' + new Error().stack), (a = !1);
        }
        return r.apply(this, arguments);
      }, r);
    }
    var s,
      S = {};
    function Y(e, t) {
      null != f.deprecationHandler && f.deprecationHandler(e, t), S[e] || (D(t), (S[e] = !0));
    }
    function O(e) {
      return (
        ('undefined' != typeof Function && e instanceof Function) ||
        '[object Function]' === Object.prototype.toString.call(e)
      );
    }
    function b(e, t) {
      var n,
        s = c({}, e);
      for (n in t)
        m(t, n) &&
          (u(e[n]) && u(t[n])
            ? ((s[n] = {}), c(s[n], e[n]), c(s[n], t[n]))
            : null != t[n]
            ? (s[n] = t[n])
            : delete s[n]);
      for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = c({}, s[n]));
      return s;
    }
    function x(e) {
      null != e && this.set(e);
    }
    (f.suppressDeprecationWarnings = !1),
      (f.deprecationHandler = null),
      (s = Object.keys
        ? Object.keys
        : function (e) {
            var t,
              n = [];
            for (t in e) m(e, t) && n.push(t);
            return n;
          });
    function T(e, t, n) {
      var s = '' + Math.abs(e),
        i = t - s.length;
      return (0 <= e ? (n ? '+' : '') : '-') + Math.pow(10, Math.max(0, i)).toString().substr(1) + s;
    }
    var N =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      P = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      R = {},
      W = {};
    function C(e, t, n, s) {
      var i =
        'string' == typeof s
          ? function () {
              return this[s]();
            }
          : s;
      e && (W[e] = i),
        t &&
          (W[t[0]] = function () {
            return T(i.apply(this, arguments), t[1], t[2]);
          }),
        n &&
          (W[n] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), e);
          });
    }
    function U(e, t) {
      return e.isValid()
        ? ((t = H(t, e.localeData())),
          (R[t] =
            R[t] ||
            (function (s) {
              for (var e, i = s.match(N), t = 0, r = i.length; t < r; t++)
                W[i[t]]
                  ? (i[t] = W[i[t]])
                  : (i[t] = (e = i[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, ''));
              return function (e) {
                for (var t = '', n = 0; n < r; n++) t += O(i[n]) ? i[n].call(e, s) : i[n];
                return t;
              };
            })(t)),
          R[t](e))
        : e.localeData().invalidDate();
    }
    function H(e, t) {
      var n = 5;
      function s(e) {
        return t.longDateFormat(e) || e;
      }
      for (P.lastIndex = 0; 0 <= n && P.test(e); ) (e = e.replace(P, s)), (P.lastIndex = 0), --n;
      return e;
    }
    var F = {};
    function L(e, t) {
      var n = e.toLowerCase();
      F[n] = F[n + 's'] = F[t] = e;
    }
    function V(e) {
      return 'string' == typeof e ? F[e] || F[e.toLowerCase()] : void 0;
    }
    function G(e) {
      var t,
        n,
        s = {};
      for (n in e) m(e, n) && (t = V(n)) && (s[t] = e[n]);
      return s;
    }
    var E = {};
    function A(e, t) {
      E[e] = t;
    }
    function j(e) {
      return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    }
    function I(e) {
      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function Z(e) {
      var t = +e,
        n = 0;
      return 0 != t && isFinite(t) && (n = I(t)), n;
    }
    function z(t, n) {
      return function (e) {
        return null != e ? (q(this, t, e), f.updateOffset(this, n), this) : $(this, t);
      };
    }
    function $(e, t) {
      return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN;
    }
    function q(e, t, n) {
      e.isValid() &&
        !isNaN(n) &&
        ('FullYear' === t && j(e.year()) && 1 === e.month() && 29 === e.date()
          ? ((n = Z(n)), e._d['set' + (e._isUTC ? 'UTC' : '') + t](n, e.month(), xe(n, e.month())))
          : e._d['set' + (e._isUTC ? 'UTC' : '') + t](n));
    }
    var B,
      J = /\d/,
      Q = /\d\d/,
      X = /\d{3}/,
      K = /\d{4}/,
      ee = /[+-]?\d{6}/,
      te = /\d\d?/,
      ne = /\d\d\d\d?/,
      se = /\d\d\d\d\d\d?/,
      ie = /\d{1,3}/,
      re = /\d{1,4}/,
      ae = /[+-]?\d{1,6}/,
      oe = /\d+/,
      ue = /[+-]?\d+/,
      le = /Z|[+-]\d\d:?\d\d/gi,
      he = /Z|[+-]\d\d(?::?\d\d)?/gi,
      de =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    function ce(e, n, s) {
      B[e] = O(n)
        ? n
        : function (e, t) {
            return e && s ? s : n;
          };
    }
    function fe(e, t) {
      return m(B, e)
        ? B[e](t._strict, t._locale)
        : new RegExp(
            me(
              e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
                return t || n || s || i;
              }),
            ),
          );
    }
    function me(e) {
      return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    B = {};
    var _e = {};
    function ye(e, n) {
      var t,
        s = n;
      for (
        'string' == typeof e && (e = [e]),
          h(n) &&
            (s = function (e, t) {
              t[n] = Z(e);
            }),
          t = 0;
        t < e.length;
        t++
      )
        _e[e[t]] = s;
    }
    function ge(e, i) {
      ye(e, function (e, t, n, s) {
        (n._w = n._w || {}), i(e, n._w, n, s);
      });
    }
    var we,
      pe = 0,
      ve = 1,
      ke = 2,
      Me = 3,
      De = 4,
      Se = 5,
      Ye = 6,
      Oe = 7,
      be = 8;
    function xe(e, t) {
      if (isNaN(e) || isNaN(t)) return NaN;
      var n,
        s = ((t % (n = 12)) + n) % n;
      return (e += (t - s) / 12), 1 == s ? (j(e) ? 29 : 28) : 31 - ((s % 7) % 2);
    }
    (we = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (e) {
          for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1;
        }),
      C('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
      }),
      C('MMM', 0, 0, function (e) {
        return this.localeData().monthsShort(this, e);
      }),
      C('MMMM', 0, 0, function (e) {
        return this.localeData().months(this, e);
      }),
      L('month', 'M'),
      A('month', 8),
      ce('M', te),
      ce('MM', te, Q),
      ce('MMM', function (e, t) {
        return t.monthsShortRegex(e);
      }),
      ce('MMMM', function (e, t) {
        return t.monthsRegex(e);
      }),
      ye(['M', 'MM'], function (e, t) {
        t[ve] = Z(e) - 1;
      }),
      ye(['MMM', 'MMMM'], function (e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? (t[ve] = i) : (y(n).invalidMonth = e);
      });
    var Te = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      Ne = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Re = de,
      We = de;
    function Ce(e, t) {
      var n;
      if (!e.isValid()) return e;
      if ('string' == typeof t)
        if (/^\d+$/.test(t)) t = Z(t);
        else if (!h((t = e.localeData().monthsParse(t)))) return e;
      return (n = Math.min(e.date(), xe(e.year(), t))), e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n), e;
    }
    function Ue(e) {
      return null != e ? (Ce(this, e), f.updateOffset(this, !0), this) : $(this, 'Month');
    }
    function He() {
      function e(e, t) {
        return t.length - e.length;
      }
      for (var t, n = [], s = [], i = [], r = 0; r < 12; r++)
        (t = _([2e3, r])),
          n.push(this.monthsShort(t, '')),
          s.push(this.months(t, '')),
          i.push(this.months(t, '')),
          i.push(this.monthsShort(t, ''));
      for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++) (n[r] = me(n[r])), (s[r] = me(s[r]));
      for (r = 0; r < 24; r++) i[r] = me(i[r]);
      (this._monthsRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
        (this._monthsShortStrictRegex = new RegExp('^(' + n.join('|') + ')', 'i'));
    }
    function Fe(e) {
      return j(e) ? 366 : 365;
    }
    C('Y', 0, 0, function () {
      var e = this.year();
      return e <= 9999 ? T(e, 4) : '+' + e;
    }),
      C(0, ['YY', 2], 0, function () {
        return this.year() % 100;
      }),
      C(0, ['YYYY', 4], 0, 'year'),
      C(0, ['YYYYY', 5], 0, 'year'),
      C(0, ['YYYYYY', 6, !0], 0, 'year'),
      L('year', 'y'),
      A('year', 1),
      ce('Y', ue),
      ce('YY', te, Q),
      ce('YYYY', re, K),
      ce('YYYYY', ae, ee),
      ce('YYYYYY', ae, ee),
      ye(['YYYYY', 'YYYYYY'], pe),
      ye('YYYY', function (e, t) {
        t[pe] = 2 === e.length ? f.parseTwoDigitYear(e) : Z(e);
      }),
      ye('YY', function (e, t) {
        t[pe] = f.parseTwoDigitYear(e);
      }),
      ye('Y', function (e, t) {
        t[pe] = parseInt(e, 10);
      }),
      (f.parseTwoDigitYear = function (e) {
        return Z(e) + (68 < Z(e) ? 1900 : 2e3);
      });
    var Le = z('FullYear', !0);
    function Ve(e) {
      var t, n;
      return (
        e < 100 && 0 <= e
          ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
            (t = new Date(Date.UTC.apply(null, n))),
            isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
          : (t = new Date(Date.UTC.apply(null, arguments))),
        t
      );
    }
    function Ge(e, t, n) {
      var s = 7 + t - n;
      return s - ((7 + Ve(e, 0, s).getUTCDay() - t) % 7) - 1;
    }
    function Ee(e, t, n, s, i) {
      var r,
        a = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + Ge(e, s, i),
        o = a <= 0 ? Fe((r = e - 1)) + a : a > Fe(e) ? ((r = e + 1), a - Fe(e)) : ((r = e), a);
      return { year: r, dayOfYear: o };
    }
    function Ae(e, t, n) {
      var s,
        i,
        r = Ge(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
      return (
        a < 1
          ? (s = a + je((i = e.year() - 1), t, n))
          : a > je(e.year(), t, n)
          ? ((s = a - je(e.year(), t, n)), (i = e.year() + 1))
          : ((i = e.year()), (s = a)),
        { week: s, year: i }
      );
    }
    function je(e, t, n) {
      var s = Ge(e, t, n),
        i = Ge(e + 1, t, n);
      return (Fe(e) - s + i) / 7;
    }
    C('w', ['ww', 2], 'wo', 'week'),
      C('W', ['WW', 2], 'Wo', 'isoWeek'),
      L('week', 'w'),
      L('isoWeek', 'W'),
      A('week', 5),
      A('isoWeek', 5),
      ce('w', te),
      ce('ww', te, Q),
      ce('W', te),
      ce('WW', te, Q),
      ge(['w', 'ww', 'W', 'WW'], function (e, t, n, s) {
        t[s.substr(0, 1)] = Z(e);
      });
    function Ie(e, t) {
      return e.slice(t, 7).concat(e.slice(0, t));
    }
    C('d', 0, 'do', 'day'),
      C('dd', 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e);
      }),
      C('ddd', 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e);
      }),
      C('dddd', 0, 0, function (e) {
        return this.localeData().weekdays(this, e);
      }),
      C('e', 0, 0, 'weekday'),
      C('E', 0, 0, 'isoWeekday'),
      L('day', 'd'),
      L('weekday', 'e'),
      L('isoWeekday', 'E'),
      A('day', 11),
      A('weekday', 11),
      A('isoWeekday', 11),
      ce('d', te),
      ce('e', te),
      ce('E', te),
      ce('dd', function (e, t) {
        return t.weekdaysMinRegex(e);
      }),
      ce('ddd', function (e, t) {
        return t.weekdaysShortRegex(e);
      }),
      ce('dddd', function (e, t) {
        return t.weekdaysRegex(e);
      }),
      ge(['dd', 'ddd', 'dddd'], function (e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? (t.d = i) : (y(n).invalidWeekday = e);
      }),
      ge(['d', 'e', 'E'], function (e, t, n, s) {
        t[s] = Z(e);
      });
    var Ze = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      ze = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      $e = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      qe = de,
      Be = de,
      Je = de;
    function Qe() {
      function e(e, t) {
        return t.length - e.length;
      }
      for (var t, n, s, i, r = [], a = [], o = [], u = [], l = 0; l < 7; l++)
        (t = _([2e3, 1]).day(l)),
          (n = me(this.weekdaysMin(t, ''))),
          (s = me(this.weekdaysShort(t, ''))),
          (i = me(this.weekdays(t, ''))),
          r.push(n),
          a.push(s),
          o.push(i),
          u.push(n),
          u.push(s),
          u.push(i);
      r.sort(e),
        a.sort(e),
        o.sort(e),
        u.sort(e),
        (this._weekdaysRegex = new RegExp('^(' + u.join('|') + ')', 'i')),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = new RegExp('^(' + o.join('|') + ')', 'i')),
        (this._weekdaysShortStrictRegex = new RegExp('^(' + a.join('|') + ')', 'i')),
        (this._weekdaysMinStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i'));
    }
    function Xe() {
      return this.hours() % 12 || 12;
    }
    function Ke(e, t) {
      C(e, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), t);
      });
    }
    function et(e, t) {
      return t._meridiemParse;
    }
    C('H', ['HH', 2], 0, 'hour'),
      C('h', ['hh', 2], 0, Xe),
      C('k', ['kk', 2], 0, function () {
        return this.hours() || 24;
      }),
      C('hmm', 0, 0, function () {
        return '' + Xe.apply(this) + T(this.minutes(), 2);
      }),
      C('hmmss', 0, 0, function () {
        return '' + Xe.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
      }),
      C('Hmm', 0, 0, function () {
        return '' + this.hours() + T(this.minutes(), 2);
      }),
      C('Hmmss', 0, 0, function () {
        return '' + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
      }),
      Ke('a', !0),
      Ke('A', !1),
      L('hour', 'h'),
      A('hour', 13),
      ce('a', et),
      ce('A', et),
      ce('H', te),
      ce('h', te),
      ce('k', te),
      ce('HH', te, Q),
      ce('hh', te, Q),
      ce('kk', te, Q),
      ce('hmm', ne),
      ce('hmmss', se),
      ce('Hmm', ne),
      ce('Hmmss', se),
      ye(['H', 'HH'], Me),
      ye(['k', 'kk'], function (e, t, n) {
        var s = Z(e);
        t[Me] = 24 === s ? 0 : s;
      }),
      ye(['a', 'A'], function (e, t, n) {
        (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
      }),
      ye(['h', 'hh'], function (e, t, n) {
        (t[Me] = Z(e)), (y(n).bigHour = !0);
      }),
      ye('hmm', function (e, t, n) {
        var s = e.length - 2;
        (t[Me] = Z(e.substr(0, s))), (t[De] = Z(e.substr(s))), (y(n).bigHour = !0);
      }),
      ye('hmmss', function (e, t, n) {
        var s = e.length - 4,
          i = e.length - 2;
        (t[Me] = Z(e.substr(0, s))), (t[De] = Z(e.substr(s, 2))), (t[Se] = Z(e.substr(i))), (y(n).bigHour = !0);
      }),
      ye('Hmm', function (e, t, n) {
        var s = e.length - 2;
        (t[Me] = Z(e.substr(0, s))), (t[De] = Z(e.substr(s)));
      }),
      ye('Hmmss', function (e, t, n) {
        var s = e.length - 4,
          i = e.length - 2;
        (t[Me] = Z(e.substr(0, s))), (t[De] = Z(e.substr(s, 2))), (t[Se] = Z(e.substr(i)));
      });
    var tt = z('Hours', !0);
    var nt,
      st = {
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L',
        },
        longDateFormat: {
          LTS: 'h:mm:ss A',
          LT: 'h:mm A',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A',
        },
        invalidDate: 'Invalid date',
        ordinal: '%d',
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          w: 'a week',
          ww: '%d weeks',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years',
        },
        months: Te,
        monthsShort: Ne,
        week: { dow: 0, doy: 6 },
        weekdays: Ze,
        weekdaysMin: $e,
        weekdaysShort: ze,
        meridiemParse: /[ap]\.?m?\.?/i,
      },
      it = {},
      rt = {};
    function at(e) {
      return e ? e.toLowerCase().replace('_', '-') : e;
    }
    function ot(e) {
      for (var t, n, s, i, r = 0; r < e.length; ) {
        for (t = (i = at(e[r]).split('-')).length, n = (n = at(e[r + 1])) ? n.split('-') : null; 0 < t; ) {
          if ((s = ut(i.slice(0, t).join('-')))) return s;
          if (
            n &&
            n.length >= t &&
            (function (e, t) {
              for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1) if (e[s] !== t[s]) return s;
              return n;
            })(i, n) >=
              t - 1
          )
            break;
          t--;
        }
        r++;
      }
      return nt;
    }
    function ut(t) {
      var e;
      if (void 0 === it[t] && 'undefined' != typeof module && module && module.exports)
        try {
          (e = nt._abbr), require('./locale/' + t), lt(e);
        } catch (e) {
          it[t] = null;
        }
      return it[t];
    }
    function lt(e, t) {
      var n;
      return (
        e &&
          ((n = r(t) ? dt(e) : ht(e, t))
            ? (nt = n)
            : 'undefined' != typeof console &&
              console.warn &&
              console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
        nt._abbr
      );
    }
    function ht(e, t) {
      if (null === t) return delete it[e], null;
      var n,
        s = st;
      if (((t.abbr = e), null != it[e]))
        Y(
          'defineLocaleOverride',
          'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.',
        ),
          (s = it[e]._config);
      else if (null != t.parentLocale)
        if (null != it[t.parentLocale]) s = it[t.parentLocale]._config;
        else {
          if (null == (n = ut(t.parentLocale)))
            return (
              rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({ name: e, config: t }), null
            );
          s = n._config;
        }
      return (
        (it[e] = new x(b(s, t))),
        rt[e] &&
          rt[e].forEach(function (e) {
            ht(e.name, e.config);
          }),
        lt(e),
        it[e]
      );
    }
    function dt(e) {
      var t;
      if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return nt;
      if (!o(e)) {
        if ((t = ut(e))) return t;
        e = [e];
      }
      return ot(e);
    }
    function ct(e) {
      var t,
        n = e._a;
      return (
        n &&
          -2 === y(e).overflow &&
          ((t =
            n[ve] < 0 || 11 < n[ve]
              ? ve
              : n[ke] < 1 || n[ke] > xe(n[pe], n[ve])
              ? ke
              : n[Me] < 0 || 24 < n[Me] || (24 === n[Me] && (0 !== n[De] || 0 !== n[Se] || 0 !== n[Ye]))
              ? Me
              : n[De] < 0 || 59 < n[De]
              ? De
              : n[Se] < 0 || 59 < n[Se]
              ? Se
              : n[Ye] < 0 || 999 < n[Ye]
              ? Ye
              : -1),
          y(e)._overflowDayOfYear && (t < pe || ke < t) && (t = ke),
          y(e)._overflowWeeks && -1 === t && (t = Oe),
          y(e)._overflowWeekday && -1 === t && (t = be),
          (y(e).overflow = t)),
        e
      );
    }
    var ft =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      mt =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      _t = /Z|[+-]\d\d(?::?\d\d)?/,
      yt = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, !1],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
        ['YYYYDDD', /\d{7}/],
        ['YYYYMM', /\d{6}/, !1],
        ['YYYY', /\d{4}/, !1],
      ],
      gt = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/],
      ],
      wt = /^\/?Date\((-?\d+)/i,
      pt =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      vt = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
    function kt(e) {
      var t,
        n,
        s,
        i,
        r,
        a,
        o = e._i,
        u = ft.exec(o) || mt.exec(o);
      if (u) {
        for (y(e).iso = !0, t = 0, n = yt.length; t < n; t++)
          if (yt[t][1].exec(u[1])) {
            (i = yt[t][0]), (s = !1 !== yt[t][2]);
            break;
          }
        if (null == i) return void (e._isValid = !1);
        if (u[3]) {
          for (t = 0, n = gt.length; t < n; t++)
            if (gt[t][1].exec(u[3])) {
              r = (u[2] || ' ') + gt[t][0];
              break;
            }
          if (null == r) return void (e._isValid = !1);
        }
        if (!s && null != r) return void (e._isValid = !1);
        if (u[4]) {
          if (!_t.exec(u[4])) return void (e._isValid = !1);
          a = 'Z';
        }
        (e._f = i + (r || '') + (a || '')), Ot(e);
      } else e._isValid = !1;
    }
    function Mt(e, t, n, s, i, r) {
      var a = [
        (function (e) {
          var t = parseInt(e, 10);
          {
            if (t <= 49) return 2e3 + t;
            if (t <= 999) return 1900 + t;
          }
          return t;
        })(e),
        Ne.indexOf(t),
        parseInt(n, 10),
        parseInt(s, 10),
        parseInt(i, 10),
      ];
      return r && a.push(parseInt(r, 10)), a;
    }
    function Dt(e) {
      var t,
        n,
        s,
        i,
        r = pt.exec(
          e._i
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, ''),
        );
      if (r) {
        if (
          ((t = Mt(r[4], r[3], r[2], r[5], r[6], r[7])),
          (n = r[1]),
          (s = t),
          (i = e),
          n &&
            ze.indexOf(n) !== new Date(s[0], s[1], s[2]).getDay() &&
            ((y(i).weekdayMismatch = !0), !void (i._isValid = !1)))
        )
          return;
        (e._a = t),
          (e._tzm = (function (e, t, n) {
            if (e) return vt[e];
            if (t) return 0;
            var s = parseInt(n, 10),
              i = s % 100;
            return 60 * ((s - i) / 100) + i;
          })(r[8], r[9], r[10])),
          (e._d = Ve.apply(null, e._a)),
          e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          (y(e).rfc2822 = !0);
      } else e._isValid = !1;
    }
    function St(e, t, n) {
      return null != e ? e : null != t ? t : n;
    }
    function Yt(e) {
      var t,
        n,
        s,
        i,
        r,
        a,
        o,
        u = [];
      if (!e._d) {
        for (
          a = e,
            o = new Date(f.now()),
            s = a._useUTC
              ? [o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()]
              : [o.getFullYear(), o.getMonth(), o.getDate()],
            e._w &&
              null == e._a[ke] &&
              null == e._a[ve] &&
              (function (e) {
                var t, n, s, i, r, a, o, u, l;
                null != (t = e._w).GG || null != t.W || null != t.E
                  ? ((r = 1),
                    (a = 4),
                    (n = St(t.GG, e._a[pe], Ae(Tt(), 1, 4).year)),
                    (s = St(t.W, 1)),
                    ((i = St(t.E, 1)) < 1 || 7 < i) && (u = !0))
                  : ((r = e._locale._week.dow),
                    (a = e._locale._week.doy),
                    (l = Ae(Tt(), r, a)),
                    (n = St(t.gg, e._a[pe], l.year)),
                    (s = St(t.w, l.week)),
                    null != t.d
                      ? ((i = t.d) < 0 || 6 < i) && (u = !0)
                      : null != t.e
                      ? ((i = t.e + r), (t.e < 0 || 6 < t.e) && (u = !0))
                      : (i = r));
                s < 1 || s > je(n, r, a)
                  ? (y(e)._overflowWeeks = !0)
                  : null != u
                  ? (y(e)._overflowWeekday = !0)
                  : ((o = Ee(n, s, i, r, a)), (e._a[pe] = o.year), (e._dayOfYear = o.dayOfYear));
              })(e),
            null != e._dayOfYear &&
              ((r = St(e._a[pe], s[pe])),
              (e._dayOfYear > Fe(r) || 0 === e._dayOfYear) && (y(e)._overflowDayOfYear = !0),
              (n = Ve(r, 0, e._dayOfYear)),
              (e._a[ve] = n.getUTCMonth()),
              (e._a[ke] = n.getUTCDate())),
            t = 0;
          t < 3 && null == e._a[t];
          ++t
        )
          e._a[t] = u[t] = s[t];
        for (; t < 7; t++) e._a[t] = u[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
        24 === e._a[Me] && 0 === e._a[De] && 0 === e._a[Se] && 0 === e._a[Ye] && ((e._nextDay = !0), (e._a[Me] = 0)),
          (e._d = (
            e._useUTC
              ? Ve
              : function (e, t, n, s, i, r, a) {
                  var o;
                  return (
                    e < 100 && 0 <= e
                      ? ((o = new Date(e + 400, t, n, s, i, r, a)), isFinite(o.getFullYear()) && o.setFullYear(e))
                      : (o = new Date(e, t, n, s, i, r, a)),
                    o
                  );
                }
          ).apply(null, u)),
          (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
          null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          e._nextDay && (e._a[Me] = 24),
          e._w && void 0 !== e._w.d && e._w.d !== i && (y(e).weekdayMismatch = !0);
      }
    }
    function Ot(e) {
      if (e._f !== f.ISO_8601)
        if (e._f !== f.RFC_2822) {
          (e._a = []), (y(e).empty = !0);
          for (
            var t, n, s, i, r, a, o, u = '' + e._i, l = u.length, h = 0, d = H(e._f, e._locale).match(N) || [], c = 0;
            c < d.length;
            c++
          )
            (n = d[c]),
              (t = (u.match(fe(n, e)) || [])[0]) &&
                (0 < (s = u.substr(0, u.indexOf(t))).length && y(e).unusedInput.push(s),
                (u = u.slice(u.indexOf(t) + t.length)),
                (h += t.length)),
              W[n]
                ? (t ? (y(e).empty = !1) : y(e).unusedTokens.push(n),
                  (r = n),
                  (o = e),
                  null != (a = t) && m(_e, r) && _e[r](a, o._a, o, r))
                : e._strict && !t && y(e).unusedTokens.push(n);
          (y(e).charsLeftOver = l - h),
            0 < u.length && y(e).unusedInput.push(u),
            e._a[Me] <= 12 && !0 === y(e).bigHour && 0 < e._a[Me] && (y(e).bigHour = void 0),
            (y(e).parsedDateParts = e._a.slice(0)),
            (y(e).meridiem = e._meridiem),
            (e._a[Me] = (function (e, t, n) {
              var s;
              if (null == n) return t;
              return null != e.meridiemHour
                ? e.meridiemHour(t, n)
                : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t);
            })(e._locale, e._a[Me], e._meridiem)),
            null !== (i = y(e).era) && (e._a[pe] = e._locale.erasConvertYear(i, e._a[pe])),
            Yt(e),
            ct(e);
        } else Dt(e);
      else kt(e);
    }
    function bt(e) {
      var t,
        n,
        s = e._i,
        i = e._f;
      return (
        (e._locale = e._locale || dt(e._l)),
        null === s || (void 0 === i && '' === s)
          ? w({ nullInput: !0 })
          : ('string' == typeof s && (e._i = s = e._locale.preparse(s)),
            M(s)
              ? new k(ct(s))
              : (a(s)
                  ? (e._d = s)
                  : o(i)
                  ? (function (e) {
                      var t,
                        n,
                        s,
                        i,
                        r,
                        a,
                        o = !1;
                      if (0 === e._f.length) return (y(e).invalidFormat = !0), (e._d = new Date(NaN));
                      for (i = 0; i < e._f.length; i++)
                        (r = 0),
                          (a = !1),
                          (t = v({}, e)),
                          null != e._useUTC && (t._useUTC = e._useUTC),
                          (t._f = e._f[i]),
                          Ot(t),
                          g(t) && (a = !0),
                          (r += y(t).charsLeftOver),
                          (r += 10 * y(t).unusedTokens.length),
                          (y(t).score = r),
                          o
                            ? r < s && ((s = r), (n = t))
                            : (null == s || r < s || a) && ((s = r), (n = t), a && (o = !0));
                      c(e, n || t);
                    })(e)
                  : i
                  ? Ot(e)
                  : r((n = (t = e)._i))
                  ? (t._d = new Date(f.now()))
                  : a(n)
                  ? (t._d = new Date(n.valueOf()))
                  : 'string' == typeof n
                  ? (function (e) {
                      var t = wt.exec(e._i);
                      null === t
                        ? (kt(e),
                          !1 === e._isValid &&
                            (delete e._isValid,
                            Dt(e),
                            !1 === e._isValid &&
                              (delete e._isValid, e._strict ? (e._isValid = !1) : f.createFromInputFallback(e))))
                        : (e._d = new Date(+t[1]));
                    })(t)
                  : o(n)
                  ? ((t._a = d(n.slice(0), function (e) {
                      return parseInt(e, 10);
                    })),
                    Yt(t))
                  : u(n)
                  ? (function (e) {
                      var t, n;
                      e._d ||
                        ((n = void 0 === (t = G(e._i)).day ? t.date : t.day),
                        (e._a = d([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (e) {
                          return e && parseInt(e, 10);
                        })),
                        Yt(e));
                    })(t)
                  : h(n)
                  ? (t._d = new Date(n))
                  : f.createFromInputFallback(t),
                g(e) || (e._d = null),
                e))
      );
    }
    function xt(e, t, n, s, i) {
      var r,
        a = {};
      return (
        (!0 !== t && !1 !== t) || ((s = t), (t = void 0)),
        (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
        ((u(e) && l(e)) || (o(e) && 0 === e.length)) && (e = void 0),
        (a._isAMomentObject = !0),
        (a._useUTC = a._isUTC = i),
        (a._l = n),
        (a._i = e),
        (a._f = t),
        (a._strict = s),
        (r = new k(ct(bt(a))))._nextDay && (r.add(1, 'd'), (r._nextDay = void 0)),
        r
      );
    }
    function Tt(e, t, n, s) {
      return xt(e, t, n, s, !1);
    }
    (f.createFromInputFallback = n(
      'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
      function (e) {
        e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
      },
    )),
      (f.ISO_8601 = function () {}),
      (f.RFC_2822 = function () {});
    var Nt = n(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
          var e = Tt.apply(null, arguments);
          return this.isValid() && e.isValid() ? (e < this ? this : e) : w();
        },
      ),
      Pt = n(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
          var e = Tt.apply(null, arguments);
          return this.isValid() && e.isValid() ? (this < e ? this : e) : w();
        },
      );
    function Rt(e, t) {
      var n, s;
      if ((1 === t.length && o(t[0]) && (t = t[0]), !t.length)) return Tt();
      for (n = t[0], s = 1; s < t.length; ++s) (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
      return n;
    }
    var Wt = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
    function Ct(e) {
      var t = G(e),
        n = t.year || 0,
        s = t.quarter || 0,
        i = t.month || 0,
        r = t.week || t.isoWeek || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        h = t.millisecond || 0;
      (this._isValid = (function (e) {
        var t,
          n,
          s = !1;
        for (t in e) if (m(e, t) && (-1 === we.call(Wt, t) || (null != e[t] && isNaN(e[t])))) return !1;
        for (n = 0; n < Wt.length; ++n)
          if (e[Wt[n]]) {
            if (s) return !1;
            parseFloat(e[Wt[n]]) !== Z(e[Wt[n]]) && (s = !0);
          }
        return !0;
      })(t)),
        (this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60),
        (this._days = +a + 7 * r),
        (this._months = +i + 3 * s + 12 * n),
        (this._data = {}),
        (this._locale = dt()),
        this._bubble();
    }
    function Ut(e) {
      return e instanceof Ct;
    }
    function Ht(e) {
      return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function Ft(e, n) {
      C(e, 0, 0, function () {
        var e = this.utcOffset(),
          t = '+';
        return e < 0 && ((e = -e), (t = '-')), t + T(~~(e / 60), 2) + n + T(~~e % 60, 2);
      });
    }
    Ft('Z', ':'),
      Ft('ZZ', ''),
      ce('Z', he),
      ce('ZZ', he),
      ye(['Z', 'ZZ'], function (e, t, n) {
        (n._useUTC = !0), (n._tzm = Vt(he, e));
      });
    var Lt = /([\+\-]|\d\d)/gi;
    function Vt(e, t) {
      var n,
        s,
        i = (t || '').match(e);
      return null === i
        ? null
        : 0 === (s = 60 * (n = ((i[i.length - 1] || []) + '').match(Lt) || ['-', 0, 0])[1] + Z(n[2]))
        ? 0
        : '+' === n[0]
        ? s
        : -s;
    }
    function Gt(e, t) {
      var n, s;
      return t._isUTC
        ? ((n = t.clone()),
          (s = (M(e) || a(e) ? e.valueOf() : Tt(e).valueOf()) - n.valueOf()),
          n._d.setTime(n._d.valueOf() + s),
          f.updateOffset(n, !1),
          n)
        : Tt(e).local();
    }
    function Et(e) {
      return -Math.round(e._d.getTimezoneOffset());
    }
    function At() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    f.updateOffset = function () {};
    var jt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
      It =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Zt(e, t) {
      var n,
        s,
        i,
        r = e,
        a = null;
      return (
        Ut(e)
          ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
          : h(e) || !isNaN(+e)
          ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
          : (a = jt.exec(e))
          ? ((n = '-' === a[1] ? -1 : 1),
            (r = {
              y: 0,
              d: Z(a[ke]) * n,
              h: Z(a[Me]) * n,
              m: Z(a[De]) * n,
              s: Z(a[Se]) * n,
              ms: Z(Ht(1e3 * a[Ye])) * n,
            }))
          : (a = It.exec(e))
          ? ((n = '-' === a[1] ? -1 : 1),
            (r = {
              y: zt(a[2], n),
              M: zt(a[3], n),
              w: zt(a[4], n),
              d: zt(a[5], n),
              h: zt(a[6], n),
              m: zt(a[7], n),
              s: zt(a[8], n),
            }))
          : null == r
          ? (r = {})
          : 'object' == typeof r &&
            ('from' in r || 'to' in r) &&
            ((i = (function (e, t) {
              var n;
              if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 };
              (t = Gt(t, e)),
                e.isBefore(t)
                  ? (n = $t(e, t))
                  : (((n = $t(t, e)).milliseconds = -n.milliseconds), (n.months = -n.months));
              return n;
            })(Tt(r.from), Tt(r.to))),
            ((r = {}).ms = i.milliseconds),
            (r.M = i.months)),
        (s = new Ct(r)),
        Ut(e) && m(e, '_locale') && (s._locale = e._locale),
        Ut(e) && m(e, '_isValid') && (s._isValid = e._isValid),
        s
      );
    }
    function zt(e, t) {
      var n = e && parseFloat(e.replace(',', '.'));
      return (isNaN(n) ? 0 : n) * t;
    }
    function $t(e, t) {
      var n = {};
      return (
        (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
        e.clone().add(n.months, 'M').isAfter(t) && --n.months,
        (n.milliseconds = t - e.clone().add(n.months, 'M')),
        n
      );
    }
    function qt(s, i) {
      return function (e, t) {
        var n;
        return (
          null === t ||
            isNaN(+t) ||
            (Y(
              i,
              'moment().' +
                i +
                '(period, number) is deprecated. Please use moment().' +
                i +
                '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.',
            ),
            (n = e),
            (e = t),
            (t = n)),
          Bt(this, Zt(e, t), s),
          this
        );
      };
    }
    function Bt(e, t, n, s) {
      var i = t._milliseconds,
        r = Ht(t._days),
        a = Ht(t._months);
      e.isValid() &&
        ((s = null == s || s),
        a && Ce(e, $(e, 'Month') + a * n),
        r && q(e, 'Date', $(e, 'Date') + r * n),
        i && e._d.setTime(e._d.valueOf() + i * n),
        s && f.updateOffset(e, r || a));
    }
    (Zt.fn = Ct.prototype),
      (Zt.invalid = function () {
        return Zt(NaN);
      });
    var Jt = qt(1, 'add'),
      Qt = qt(-1, 'subtract');
    function Xt(e) {
      return 'string' == typeof e || e instanceof String;
    }
    function Kt(e) {
      return (
        M(e) ||
        a(e) ||
        Xt(e) ||
        h(e) ||
        (function (t) {
          var e = o(t),
            n = !1;
          e &&
            (n =
              0 ===
              t.filter(function (e) {
                return !h(e) && Xt(t);
              }).length);
          return e && n;
        })(e) ||
        (function (e) {
          var t,
            n,
            s = u(e) && !l(e),
            i = !1,
            r = [
              'years',
              'year',
              'y',
              'months',
              'month',
              'M',
              'days',
              'day',
              'd',
              'dates',
              'date',
              'D',
              'hours',
              'hour',
              'h',
              'minutes',
              'minute',
              'm',
              'seconds',
              'second',
              's',
              'milliseconds',
              'millisecond',
              'ms',
            ];
          for (t = 0; t < r.length; t += 1) (n = r[t]), (i = i || m(e, n));
          return s && i;
        })(e) ||
        null == e
      );
    }
    function en(e, t) {
      if (e.date() < t.date()) return -en(t, e);
      var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        s = e.clone().add(n, 'months'),
        i = t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, 'months')) : (t - s) / (e.clone().add(1 + n, 'months') - s);
      return -(n + i) || 0;
    }
    function tn(e) {
      var t;
      return void 0 === e ? this._locale._abbr : (null != (t = dt(e)) && (this._locale = t), this);
    }
    (f.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'), (f.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
    var nn = n(
      'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
      function (e) {
        return void 0 === e ? this.localeData() : this.locale(e);
      },
    );
    function sn() {
      return this._locale;
    }
    var rn = 126227808e5;
    function an(e, t) {
      return ((e % t) + t) % t;
    }
    function on(e, t, n) {
      return e < 100 && 0 <= e ? new Date(e + 400, t, n) - rn : new Date(e, t, n).valueOf();
    }
    function un(e, t, n) {
      return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - rn : Date.UTC(e, t, n);
    }
    function ln(e, t) {
      return t.erasAbbrRegex(e);
    }
    function hn() {
      for (var e = [], t = [], n = [], s = [], i = this.eras(), r = 0, a = i.length; r < a; ++r)
        t.push(me(i[r].name)),
          e.push(me(i[r].abbr)),
          n.push(me(i[r].narrow)),
          s.push(me(i[r].name)),
          s.push(me(i[r].abbr)),
          s.push(me(i[r].narrow));
      (this._erasRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
        (this._erasNameRegex = new RegExp('^(' + t.join('|') + ')', 'i')),
        (this._erasAbbrRegex = new RegExp('^(' + e.join('|') + ')', 'i')),
        (this._erasNarrowRegex = new RegExp('^(' + n.join('|') + ')', 'i'));
    }
    function dn(e, t) {
      C(0, [e, e.length], 0, t);
    }
    function cn(e, t, n, s, i) {
      var r;
      return null == e
        ? Ae(this, s, i).year
        : ((r = je(e, s, i)) < t && (t = r),
          function (e, t, n, s, i) {
            var r = Ee(e, t, n, s, i),
              a = Ve(r.year, 0, r.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
          }.call(this, e, t, n, s, i));
    }
    C('N', 0, 0, 'eraAbbr'),
      C('NN', 0, 0, 'eraAbbr'),
      C('NNN', 0, 0, 'eraAbbr'),
      C('NNNN', 0, 0, 'eraName'),
      C('NNNNN', 0, 0, 'eraNarrow'),
      C('y', ['y', 1], 'yo', 'eraYear'),
      C('y', ['yy', 2], 0, 'eraYear'),
      C('y', ['yyy', 3], 0, 'eraYear'),
      C('y', ['yyyy', 4], 0, 'eraYear'),
      ce('N', ln),
      ce('NN', ln),
      ce('NNN', ln),
      ce('NNNN', function (e, t) {
        return t.erasNameRegex(e);
      }),
      ce('NNNNN', function (e, t) {
        return t.erasNarrowRegex(e);
      }),
      ye(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (e, t, n, s) {
        var i = n._locale.erasParse(e, s, n._strict);
        i ? (y(n).era = i) : (y(n).invalidEra = e);
      }),
      ce('y', oe),
      ce('yy', oe),
      ce('yyy', oe),
      ce('yyyy', oe),
      ce('yo', function (e, t) {
        return t._eraYearOrdinalRegex || oe;
      }),
      ye(['y', 'yy', 'yyy', 'yyyy'], pe),
      ye(['yo'], function (e, t, n, s) {
        var i;
        n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)),
          n._locale.eraYearOrdinalParse ? (t[pe] = n._locale.eraYearOrdinalParse(e, i)) : (t[pe] = parseInt(e, 10));
      }),
      C(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
      }),
      C(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
      }),
      dn('gggg', 'weekYear'),
      dn('ggggg', 'weekYear'),
      dn('GGGG', 'isoWeekYear'),
      dn('GGGGG', 'isoWeekYear'),
      L('weekYear', 'gg'),
      L('isoWeekYear', 'GG'),
      A('weekYear', 1),
      A('isoWeekYear', 1),
      ce('G', ue),
      ce('g', ue),
      ce('GG', te, Q),
      ce('gg', te, Q),
      ce('GGGG', re, K),
      ce('gggg', re, K),
      ce('GGGGG', ae, ee),
      ce('ggggg', ae, ee),
      ge(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, s) {
        t[s.substr(0, 2)] = Z(e);
      }),
      ge(['gg', 'GG'], function (e, t, n, s) {
        t[s] = f.parseTwoDigitYear(e);
      }),
      C('Q', 0, 'Qo', 'quarter'),
      L('quarter', 'Q'),
      A('quarter', 7),
      ce('Q', J),
      ye('Q', function (e, t) {
        t[ve] = 3 * (Z(e) - 1);
      }),
      C('D', ['DD', 2], 'Do', 'date'),
      L('date', 'D'),
      A('date', 9),
      ce('D', te),
      ce('DD', te, Q),
      ce('Do', function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
      }),
      ye(['D', 'DD'], ke),
      ye('Do', function (e, t) {
        t[ke] = Z(e.match(te)[0]);
      });
    var fn = z('Date', !0);
    C('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
      L('dayOfYear', 'DDD'),
      A('dayOfYear', 4),
      ce('DDD', ie),
      ce('DDDD', X),
      ye(['DDD', 'DDDD'], function (e, t, n) {
        n._dayOfYear = Z(e);
      }),
      C('m', ['mm', 2], 0, 'minute'),
      L('minute', 'm'),
      A('minute', 14),
      ce('m', te),
      ce('mm', te, Q),
      ye(['m', 'mm'], De);
    var mn = z('Minutes', !1);
    C('s', ['ss', 2], 0, 'second'),
      L('second', 's'),
      A('second', 15),
      ce('s', te),
      ce('ss', te, Q),
      ye(['s', 'ss'], Se);
    var _n,
      yn,
      gn = z('Seconds', !1);
    for (
      C('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
      }),
        C(0, ['SS', 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }),
        C(0, ['SSS', 3], 0, 'millisecond'),
        C(0, ['SSSS', 4], 0, function () {
          return 10 * this.millisecond();
        }),
        C(0, ['SSSSS', 5], 0, function () {
          return 100 * this.millisecond();
        }),
        C(0, ['SSSSSS', 6], 0, function () {
          return 1e3 * this.millisecond();
        }),
        C(0, ['SSSSSSS', 7], 0, function () {
          return 1e4 * this.millisecond();
        }),
        C(0, ['SSSSSSSS', 8], 0, function () {
          return 1e5 * this.millisecond();
        }),
        C(0, ['SSSSSSSSS', 9], 0, function () {
          return 1e6 * this.millisecond();
        }),
        L('millisecond', 'ms'),
        A('millisecond', 16),
        ce('S', ie, J),
        ce('SS', ie, Q),
        ce('SSS', ie, X),
        _n = 'SSSS';
      _n.length <= 9;
      _n += 'S'
    )
      ce(_n, oe);
    function wn(e, t) {
      t[Ye] = Z(1e3 * ('0.' + e));
    }
    for (_n = 'S'; _n.length <= 9; _n += 'S') ye(_n, wn);
    (yn = z('Milliseconds', !1)), C('z', 0, 0, 'zoneAbbr'), C('zz', 0, 0, 'zoneName');
    var pn = k.prototype;
    function vn(e) {
      return e;
    }
    (pn.add = Jt),
      (pn.calendar = function (e, t) {
        1 === arguments.length &&
          (arguments[0]
            ? Kt(arguments[0])
              ? ((e = arguments[0]), (t = void 0))
              : (function (e) {
                  for (
                    var t = u(e) && !l(e),
                      n = !1,
                      s = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
                      i = 0;
                    i < s.length;
                    i += 1
                  )
                    n = n || m(e, s[i]);
                  return t && n;
                })(arguments[0]) && ((t = arguments[0]), (e = void 0))
            : (t = e = void 0));
        var n = e || Tt(),
          s = Gt(n, this).startOf('day'),
          i = f.calendarFormat(this, s) || 'sameElse',
          r = t && (O(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(r || this.localeData().calendar(i, this, Tt(n)));
      }),
      (pn.clone = function () {
        return new k(this);
      }),
      (pn.diff = function (e, t, n) {
        var s, i, r;
        if (!this.isValid()) return NaN;
        if (!(s = Gt(e, this)).isValid()) return NaN;
        switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = V(t)))) {
          case 'year':
            r = en(this, s) / 12;
            break;
          case 'month':
            r = en(this, s);
            break;
          case 'quarter':
            r = en(this, s) / 3;
            break;
          case 'second':
            r = (this - s) / 1e3;
            break;
          case 'minute':
            r = (this - s) / 6e4;
            break;
          case 'hour':
            r = (this - s) / 36e5;
            break;
          case 'day':
            r = (this - s - i) / 864e5;
            break;
          case 'week':
            r = (this - s - i) / 6048e5;
            break;
          default:
            r = this - s;
        }
        return n ? r : I(r);
      }),
      (pn.endOf = function (e) {
        var t, n;
        if (void 0 === (e = V(e)) || 'millisecond' === e || !this.isValid()) return this;
        switch (((n = this._isUTC ? un : on), e)) {
          case 'year':
            t = n(this.year() + 1, 0, 1) - 1;
            break;
          case 'quarter':
            t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case 'month':
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
          case 'week':
            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
          case 'isoWeek':
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
          case 'day':
          case 'date':
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case 'hour':
            (t = this._d.valueOf()), (t += 36e5 - an(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1);
            break;
          case 'minute':
            (t = this._d.valueOf()), (t += 6e4 - an(t, 6e4) - 1);
            break;
          case 'second':
            (t = this._d.valueOf()), (t += 1e3 - an(t, 1e3) - 1);
            break;
        }
        return this._d.setTime(t), f.updateOffset(this, !0), this;
      }),
      (pn.format = function (e) {
        e = e || (this.isUtc() ? f.defaultFormatUtc : f.defaultFormat);
        var t = U(this, e);
        return this.localeData().postformat(t);
      }),
      (pn.from = function (e, t) {
        return this.isValid() && ((M(e) && e.isValid()) || Tt(e).isValid())
          ? Zt({ to: this, from: e }).locale(this.locale()).humanize(!t)
          : this.localeData().invalidDate();
      }),
      (pn.fromNow = function (e) {
        return this.from(Tt(), e);
      }),
      (pn.to = function (e, t) {
        return this.isValid() && ((M(e) && e.isValid()) || Tt(e).isValid())
          ? Zt({ from: this, to: e }).locale(this.locale()).humanize(!t)
          : this.localeData().invalidDate();
      }),
      (pn.toNow = function (e) {
        return this.to(Tt(), e);
      }),
      (pn.get = function (e) {
        return O(this[(e = V(e))]) ? this[e]() : this;
      }),
      (pn.invalidAt = function () {
        return y(this).overflow;
      }),
      (pn.isAfter = function (e, t) {
        var n = M(e) ? e : Tt(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ('millisecond' === (t = V(t) || 'millisecond')
            ? this.valueOf() > n.valueOf()
            : n.valueOf() < this.clone().startOf(t).valueOf())
        );
      }),
      (pn.isBefore = function (e, t) {
        var n = M(e) ? e : Tt(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ('millisecond' === (t = V(t) || 'millisecond')
            ? this.valueOf() < n.valueOf()
            : this.clone().endOf(t).valueOf() < n.valueOf())
        );
      }),
      (pn.isBetween = function (e, t, n, s) {
        var i = M(e) ? e : Tt(e),
          r = M(t) ? t : Tt(t);
        return (
          !!(this.isValid() && i.isValid() && r.isValid()) &&
          ('(' === (s = s || '()')[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) &&
          (')' === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
        );
      }),
      (pn.isSame = function (e, t) {
        var n,
          s = M(e) ? e : Tt(e);
        return (
          !(!this.isValid() || !s.isValid()) &&
          ('millisecond' === (t = V(t) || 'millisecond')
            ? this.valueOf() === s.valueOf()
            : ((n = s.valueOf()), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        );
      }),
      (pn.isSameOrAfter = function (e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
      }),
      (pn.isSameOrBefore = function (e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
      }),
      (pn.isValid = function () {
        return g(this);
      }),
      (pn.lang = nn),
      (pn.locale = tn),
      (pn.localeData = sn),
      (pn.max = Pt),
      (pn.min = Nt),
      (pn.parsingFlags = function () {
        return c({}, y(this));
      }),
      (pn.set = function (e, t) {
        if ('object' == typeof e)
          for (
            var n = (function (e) {
                var t,
                  n = [];
                for (t in e) m(e, t) && n.push({ unit: t, priority: E[t] });
                return (
                  n.sort(function (e, t) {
                    return e.priority - t.priority;
                  }),
                  n
                );
              })((e = G(e))),
              s = 0;
            s < n.length;
            s++
          )
            this[n[s].unit](e[n[s].unit]);
        else if (O(this[(e = V(e))])) return this[e](t);
        return this;
      }),
      (pn.startOf = function (e) {
        var t, n;
        if (void 0 === (e = V(e)) || 'millisecond' === e || !this.isValid()) return this;
        switch (((n = this._isUTC ? un : on), e)) {
          case 'year':
            t = n(this.year(), 0, 1);
            break;
          case 'quarter':
            t = n(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case 'month':
            t = n(this.year(), this.month(), 1);
            break;
          case 'week':
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
          case 'isoWeek':
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
          case 'day':
          case 'date':
            t = n(this.year(), this.month(), this.date());
            break;
          case 'hour':
            (t = this._d.valueOf()), (t -= an(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
            break;
          case 'minute':
            (t = this._d.valueOf()), (t -= an(t, 6e4));
            break;
          case 'second':
            (t = this._d.valueOf()), (t -= an(t, 1e3));
            break;
        }
        return this._d.setTime(t), f.updateOffset(this, !0), this;
      }),
      (pn.subtract = Qt),
      (pn.toArray = function () {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
      }),
      (pn.toObject = function () {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds(),
        };
      }),
      (pn.toDate = function () {
        return new Date(this.valueOf());
      }),
      (pn.toISOString = function (e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year()
          ? U(n, t ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ')
          : O(Date.prototype.toISOString)
          ? t
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace('Z', U(n, 'Z'))
          : U(n, t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }),
      (pn.inspect = function () {
        if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
        var e,
          t,
          n,
          s = 'moment',
          i = '';
        return (
          this.isLocal() || ((s = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'), (i = 'Z')),
          (e = '[' + s + '("]'),
          (t = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
          (n = i + '[")]'),
          this.format(e + t + '-MM-DD[T]HH:mm:ss.SSS' + n)
        );
      }),
      'undefined' != typeof Symbol &&
        null != Symbol.for &&
        (pn[Symbol.for('nodejs.util.inspect.custom')] = function () {
          return 'Moment<' + this.format() + '>';
        }),
      (pn.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }),
      (pn.toString = function () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
      }),
      (pn.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }),
      (pn.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }),
      (pn.creationData = function () {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict,
        };
      }),
      (pn.eraName = function () {
        for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
          if (((e = this.clone().startOf('day').valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].name;
          if (t[n].until <= e && e <= t[n].since) return t[n].name;
        }
        return '';
      }),
      (pn.eraNarrow = function () {
        for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
          if (((e = this.clone().startOf('day').valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].narrow;
          if (t[n].until <= e && e <= t[n].since) return t[n].narrow;
        }
        return '';
      }),
      (pn.eraAbbr = function () {
        for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) {
          if (((e = this.clone().startOf('day').valueOf()), t[n].since <= e && e <= t[n].until)) return t[n].abbr;
          if (t[n].until <= e && e <= t[n].since) return t[n].abbr;
        }
        return '';
      }),
      (pn.eraYear = function () {
        for (var e, t, n = this.localeData().eras(), s = 0, i = n.length; s < i; ++s)
          if (
            ((e = n[s].since <= n[s].until ? 1 : -1),
            (t = this.clone().startOf('day').valueOf()),
            (n[s].since <= t && t <= n[s].until) || (n[s].until <= t && t <= n[s].since))
          )
            return (this.year() - f(n[s].since).year()) * e + n[s].offset;
        return this.year();
      }),
      (pn.year = Le),
      (pn.isLeapYear = function () {
        return j(this.year());
      }),
      (pn.weekYear = function (e) {
        return cn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }),
      (pn.isoWeekYear = function (e) {
        return cn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
      }),
      (pn.quarter = pn.quarters =
        function (e) {
          return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + (this.month() % 3));
        }),
      (pn.month = Ue),
      (pn.daysInMonth = function () {
        return xe(this.year(), this.month());
      }),
      (pn.week = pn.weeks =
        function (e) {
          var t = this.localeData().week(this);
          return null == e ? t : this.add(7 * (e - t), 'd');
        }),
      (pn.isoWeek = pn.isoWeeks =
        function (e) {
          var t = Ae(this, 1, 4).week;
          return null == e ? t : this.add(7 * (e - t), 'd');
        }),
      (pn.weeksInYear = function () {
        var e = this.localeData()._week;
        return je(this.year(), e.dow, e.doy);
      }),
      (pn.weeksInWeekYear = function () {
        var e = this.localeData()._week;
        return je(this.weekYear(), e.dow, e.doy);
      }),
      (pn.isoWeeksInYear = function () {
        return je(this.year(), 1, 4);
      }),
      (pn.isoWeeksInISOWeekYear = function () {
        return je(this.isoWeekYear(), 1, 4);
      }),
      (pn.date = fn),
      (pn.day = pn.days =
        function (e) {
          if (!this.isValid()) return null != e ? this : NaN;
          var t,
            n,
            s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != e
            ? ((t = e),
              (n = this.localeData()),
              (e =
                'string' != typeof t
                  ? t
                  : isNaN(t)
                  ? 'number' == typeof (t = n.weekdaysParse(t))
                    ? t
                    : null
                  : parseInt(t, 10)),
              this.add(e - s, 'd'))
            : s;
        }),
      (pn.weekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, 'd');
      }),
      (pn.isoWeekday = function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this.day() || 7;
        var t,
          n,
          s =
            ((t = e),
            (n = this.localeData()),
            'string' == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
        return this.day(this.day() % 7 ? s : s - 7);
      }),
      (pn.dayOfYear = function (e) {
        var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return null == e ? t : this.add(e - t, 'd');
      }),
      (pn.hour = pn.hours = tt),
      (pn.minute = pn.minutes = mn),
      (pn.second = pn.seconds = gn),
      (pn.millisecond = pn.milliseconds = yn),
      (pn.utcOffset = function (e, t, n) {
        var s,
          i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? i : Et(this);
        if ('string' == typeof e) {
          if (null === (e = Vt(he, e))) return this;
        } else Math.abs(e) < 16 && !n && (e *= 60);
        return (
          !this._isUTC && t && (s = Et(this)),
          (this._offset = e),
          (this._isUTC = !0),
          null != s && this.add(s, 'm'),
          i !== e &&
            (!t || this._changeInProgress
              ? Bt(this, Zt(e - i, 'm'), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0), f.updateOffset(this, !0), (this._changeInProgress = null))),
          this
        );
      }),
      (pn.utc = function (e) {
        return this.utcOffset(0, e);
      }),
      (pn.local = function (e) {
        return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(Et(this), 'm')), this;
      }),
      (pn.parseZone = function () {
        var e;
        return (
          null != this._tzm
            ? this.utcOffset(this._tzm, !1, !0)
            : 'string' == typeof this._i && (null != (e = Vt(le, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)),
          this
        );
      }),
      (pn.hasAlignedHourOffset = function (e) {
        return !!this.isValid() && ((e = e ? Tt(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0);
      }),
      (pn.isDST = function () {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        );
      }),
      (pn.isLocal = function () {
        return !!this.isValid() && !this._isUTC;
      }),
      (pn.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC;
      }),
      (pn.isUtc = At),
      (pn.isUTC = At),
      (pn.zoneAbbr = function () {
        return this._isUTC ? 'UTC' : '';
      }),
      (pn.zoneName = function () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
      }),
      (pn.dates = n('dates accessor is deprecated. Use date instead.', fn)),
      (pn.months = n('months accessor is deprecated. Use month instead', Ue)),
      (pn.years = n('years accessor is deprecated. Use year instead', Le)),
      (pn.zone = n(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        function (e, t) {
          return null != e ? ('string' != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
        },
      )),
      (pn.isDSTShifted = n(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        function () {
          if (!r(this._isDSTShifted)) return this._isDSTShifted;
          var e,
            t = {};
          return (
            v(t, this),
            (t = bt(t))._a
              ? ((e = (t._isUTC ? _ : Tt)(t._a)),
                (this._isDSTShifted =
                  this.isValid() &&
                  0 <
                    (function (e, t, n) {
                      for (
                        var s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0, a = 0;
                        a < s;
                        a++
                      )
                        ((n && e[a] !== t[a]) || (!n && Z(e[a]) !== Z(t[a]))) && r++;
                      return r + i;
                    })(t._a, e.toArray())))
              : (this._isDSTShifted = !1),
            this._isDSTShifted
          );
        },
      ));
    var kn = x.prototype;
    function Mn(e, t, n, s) {
      var i = dt(),
        r = _().set(s, t);
      return i[n](r, e);
    }
    function Dn(e, t, n) {
      if ((h(e) && ((t = e), (e = void 0)), (e = e || ''), null != t)) return Mn(e, t, n, 'month');
      for (var s = [], i = 0; i < 12; i++) s[i] = Mn(e, i, n, 'month');
      return s;
    }
    function Sn(e, t, n, s) {
      t =
        ('boolean' == typeof e
          ? h(t) && ((n = t), (t = void 0))
          : ((t = e), (e = !1), h((n = t)) && ((n = t), (t = void 0))),
        t || '');
      var i,
        r = dt(),
        a = e ? r._week.dow : 0,
        o = [];
      if (null != n) return Mn(t, (n + a) % 7, s, 'day');
      for (i = 0; i < 7; i++) o[i] = Mn(t, (i + a) % 7, s, 'day');
      return o;
    }
    (kn.calendar = function (e, t, n) {
      var s = this._calendar[e] || this._calendar.sameElse;
      return O(s) ? s.call(t, n) : s;
    }),
      (kn.longDateFormat = function (e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n
          ? t
          : ((this._longDateFormat[e] = n
              .match(N)
              .map(function (e) {
                return 'MMMM' === e || 'MM' === e || 'DD' === e || 'dddd' === e ? e.slice(1) : e;
              })
              .join('')),
            this._longDateFormat[e]);
      }),
      (kn.invalidDate = function () {
        return this._invalidDate;
      }),
      (kn.ordinal = function (e) {
        return this._ordinal.replace('%d', e);
      }),
      (kn.preparse = vn),
      (kn.postformat = vn),
      (kn.relativeTime = function (e, t, n, s) {
        var i = this._relativeTime[n];
        return O(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
      }),
      (kn.pastFuture = function (e, t) {
        var n = this._relativeTime[0 < e ? 'future' : 'past'];
        return O(n) ? n(t) : n.replace(/%s/i, t);
      }),
      (kn.set = function (e) {
        var t, n;
        for (n in e) m(e, n) && (O((t = e[n])) ? (this[n] = t) : (this['_' + n] = t));
        (this._config = e),
          (this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source,
          ));
      }),
      (kn.eras = function (e, t) {
        for (var n, s = this._eras || dt('en')._eras, i = 0, r = s.length; i < r; ++i) {
          switch (typeof s[i].since) {
            case 'string':
              (n = f(s[i].since).startOf('day')), (s[i].since = n.valueOf());
              break;
          }
          switch (typeof s[i].until) {
            case 'undefined':
              s[i].until = 1 / 0;
              break;
            case 'string':
              (n = f(s[i].until).startOf('day').valueOf()), (s[i].until = n.valueOf());
              break;
          }
        }
        return s;
      }),
      (kn.erasParse = function (e, t, n) {
        var s,
          i,
          r,
          a,
          o,
          u = this.eras();
        for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)
          if (((r = u[s].name.toUpperCase()), (a = u[s].abbr.toUpperCase()), (o = u[s].narrow.toUpperCase()), n))
            switch (t) {
              case 'N':
              case 'NN':
              case 'NNN':
                if (a === e) return u[s];
                break;
              case 'NNNN':
                if (r === e) return u[s];
                break;
              case 'NNNNN':
                if (o === e) return u[s];
                break;
            }
          else if (0 <= [r, a, o].indexOf(e)) return u[s];
      }),
      (kn.erasConvertYear = function (e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return void 0 === t ? f(e.since).year() : f(e.since).year() + (t - e.offset) * n;
      }),
      (kn.erasAbbrRegex = function (e) {
        return m(this, '_erasAbbrRegex') || hn.call(this), e ? this._erasAbbrRegex : this._erasRegex;
      }),
      (kn.erasNameRegex = function (e) {
        return m(this, '_erasNameRegex') || hn.call(this), e ? this._erasNameRegex : this._erasRegex;
      }),
      (kn.erasNarrowRegex = function (e) {
        return m(this, '_erasNarrowRegex') || hn.call(this), e ? this._erasNarrowRegex : this._erasRegex;
      }),
      (kn.months = function (e, t) {
        return e
          ? o(this._months)
            ? this._months[e.month()]
            : this._months[(this._months.isFormat || Pe).test(t) ? 'format' : 'standalone'][e.month()]
          : o(this._months)
          ? this._months
          : this._months.standalone;
      }),
      (kn.monthsShort = function (e, t) {
        return e
          ? o(this._monthsShort)
            ? this._monthsShort[e.month()]
            : this._monthsShort[Pe.test(t) ? 'format' : 'standalone'][e.month()]
          : o(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }),
      (kn.monthsParse = function (e, t, n) {
        var s, i, r;
        if (this._monthsParseExact)
          return function (e, t, n) {
            var s,
              i,
              r,
              a = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)
                (r = _([2e3, s])),
                  (this._shortMonthsParse[s] = this.monthsShort(r, '').toLocaleLowerCase()),
                  (this._longMonthsParse[s] = this.months(r, '').toLocaleLowerCase());
            return n
              ? 'MMM' === t
                ? -1 !== (i = we.call(this._shortMonthsParse, a))
                  ? i
                  : null
                : -1 !== (i = we.call(this._longMonthsParse, a))
                ? i
                : null
              : 'MMM' === t
              ? -1 !== (i = we.call(this._shortMonthsParse, a)) || -1 !== (i = we.call(this._longMonthsParse, a))
                ? i
                : null
              : -1 !== (i = we.call(this._longMonthsParse, a)) || -1 !== (i = we.call(this._shortMonthsParse, a))
              ? i
              : null;
          }.call(this, e, t, n);
        for (
          this._monthsParse || ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
            s = 0;
          s < 12;
          s++
        ) {
          if (
            ((i = _([2e3, s])),
            n &&
              !this._longMonthsParse[s] &&
              ((this._longMonthsParse[s] = new RegExp('^' + this.months(i, '').replace('.', '') + '$', 'i')),
              (this._shortMonthsParse[s] = new RegExp('^' + this.monthsShort(i, '').replace('.', '') + '$', 'i'))),
            n ||
              this._monthsParse[s] ||
              ((r = '^' + this.months(i, '') + '|^' + this.monthsShort(i, '')),
              (this._monthsParse[s] = new RegExp(r.replace('.', ''), 'i'))),
            n && 'MMMM' === t && this._longMonthsParse[s].test(e))
          )
            return s;
          if (n && 'MMM' === t && this._shortMonthsParse[s].test(e)) return s;
          if (!n && this._monthsParse[s].test(e)) return s;
        }
      }),
      (kn.monthsRegex = function (e) {
        return this._monthsParseExact
          ? (m(this, '_monthsRegex') || He.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
          : (m(this, '_monthsRegex') || (this._monthsRegex = We),
            this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
      }),
      (kn.monthsShortRegex = function (e) {
        return this._monthsParseExact
          ? (m(this, '_monthsRegex') || He.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (m(this, '_monthsShortRegex') || (this._monthsShortRegex = Re),
            this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
      }),
      (kn.week = function (e) {
        return Ae(e, this._week.dow, this._week.doy).week;
      }),
      (kn.firstDayOfYear = function () {
        return this._week.doy;
      }),
      (kn.firstDayOfWeek = function () {
        return this._week.dow;
      }),
      (kn.weekdays = function (e, t) {
        var n = o(this._weekdays)
          ? this._weekdays
          : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? 'format' : 'standalone'];
        return !0 === e ? Ie(n, this._week.dow) : e ? n[e.day()] : n;
      }),
      (kn.weekdaysMin = function (e) {
        return !0 === e ? Ie(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
      }),
      (kn.weekdaysShort = function (e) {
        return !0 === e
          ? Ie(this._weekdaysShort, this._week.dow)
          : e
          ? this._weekdaysShort[e.day()]
          : this._weekdaysShort;
      }),
      (kn.weekdaysParse = function (e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact)
          return function (e, t, n) {
            var s,
              i,
              r,
              a = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0;
                s < 7;
                ++s
              )
                (r = _([2e3, 1]).day(s)),
                  (this._minWeekdaysParse[s] = this.weekdaysMin(r, '').toLocaleLowerCase()),
                  (this._shortWeekdaysParse[s] = this.weekdaysShort(r, '').toLocaleLowerCase()),
                  (this._weekdaysParse[s] = this.weekdays(r, '').toLocaleLowerCase());
            return n
              ? 'dddd' === t
                ? -1 !== (i = we.call(this._weekdaysParse, a))
                  ? i
                  : null
                : 'ddd' === t
                ? -1 !== (i = we.call(this._shortWeekdaysParse, a))
                  ? i
                  : null
                : -1 !== (i = we.call(this._minWeekdaysParse, a))
                ? i
                : null
              : 'dddd' === t
              ? -1 !== (i = we.call(this._weekdaysParse, a)) ||
                -1 !== (i = we.call(this._shortWeekdaysParse, a)) ||
                -1 !== (i = we.call(this._minWeekdaysParse, a))
                ? i
                : null
              : 'ddd' === t
              ? -1 !== (i = we.call(this._shortWeekdaysParse, a)) ||
                -1 !== (i = we.call(this._weekdaysParse, a)) ||
                -1 !== (i = we.call(this._minWeekdaysParse, a))
                ? i
                : null
              : -1 !== (i = we.call(this._minWeekdaysParse, a)) ||
                -1 !== (i = we.call(this._weekdaysParse, a)) ||
                -1 !== (i = we.call(this._shortWeekdaysParse, a))
              ? i
              : null;
          }.call(this, e, t, n);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            s = 0;
          s < 7;
          s++
        ) {
          if (
            ((i = _([2e3, 1]).day(s)),
            n &&
              !this._fullWeekdaysParse[s] &&
              ((this._fullWeekdaysParse[s] = new RegExp('^' + this.weekdays(i, '').replace('.', '\\.?') + '$', 'i')),
              (this._shortWeekdaysParse[s] = new RegExp(
                '^' + this.weekdaysShort(i, '').replace('.', '\\.?') + '$',
                'i',
              )),
              (this._minWeekdaysParse[s] = new RegExp('^' + this.weekdaysMin(i, '').replace('.', '\\.?') + '$', 'i'))),
            this._weekdaysParse[s] ||
              ((r = '^' + this.weekdays(i, '') + '|^' + this.weekdaysShort(i, '') + '|^' + this.weekdaysMin(i, '')),
              (this._weekdaysParse[s] = new RegExp(r.replace('.', ''), 'i'))),
            n && 'dddd' === t && this._fullWeekdaysParse[s].test(e))
          )
            return s;
          if (n && 'ddd' === t && this._shortWeekdaysParse[s].test(e)) return s;
          if (n && 'dd' === t && this._minWeekdaysParse[s].test(e)) return s;
          if (!n && this._weekdaysParse[s].test(e)) return s;
        }
      }),
      (kn.weekdaysRegex = function (e) {
        return this._weekdaysParseExact
          ? (m(this, '_weekdaysRegex') || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (m(this, '_weekdaysRegex') || (this._weekdaysRegex = qe),
            this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
      }),
      (kn.weekdaysShortRegex = function (e) {
        return this._weekdaysParseExact
          ? (m(this, '_weekdaysRegex') || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (m(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = Be),
            this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
      }),
      (kn.weekdaysMinRegex = function (e) {
        return this._weekdaysParseExact
          ? (m(this, '_weekdaysRegex') || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (m(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Je),
            this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
      }),
      (kn.isPM = function (e) {
        return 'p' === (e + '').toLowerCase().charAt(0);
      }),
      (kn.meridiem = function (e, t, n) {
        return 11 < e ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
      }),
      lt('en', {
        eras: [
          {
            since: '0001-01-01',
            until: 1 / 0,
            offset: 1,
            name: 'Anno Domini',
            narrow: 'AD',
            abbr: 'AD',
          },
          {
            since: '0000-12-31',
            until: -1 / 0,
            offset: 1,
            name: 'Before Christ',
            narrow: 'BC',
            abbr: 'BC',
          },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 === Z((e % 100) / 10) ? 'th' : 1 == t ? 'st' : 2 == t ? 'nd' : 3 == t ? 'rd' : 'th');
        },
      }),
      (f.lang = n('moment.lang is deprecated. Use moment.locale instead.', lt)),
      (f.langData = n('moment.langData is deprecated. Use moment.localeData instead.', dt));
    var Yn = Math.abs;
    function On(e, t, n, s) {
      var i = Zt(t, n);
      return (
        (e._milliseconds += s * i._milliseconds), (e._days += s * i._days), (e._months += s * i._months), e._bubble()
      );
    }
    function bn(e) {
      return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function xn(e) {
      return (4800 * e) / 146097;
    }
    function Tn(e) {
      return (146097 * e) / 4800;
    }
    function Nn(e) {
      return function () {
        return this.as(e);
      };
    }
    var Pn = Nn('ms'),
      Rn = Nn('s'),
      Wn = Nn('m'),
      Cn = Nn('h'),
      Un = Nn('d'),
      Hn = Nn('w'),
      Fn = Nn('M'),
      Ln = Nn('Q'),
      Vn = Nn('y');
    function Gn(e) {
      return function () {
        return this.isValid() ? this._data[e] : NaN;
      };
    }
    var En = Gn('milliseconds'),
      An = Gn('seconds'),
      jn = Gn('minutes'),
      In = Gn('hours'),
      Zn = Gn('days'),
      zn = Gn('months'),
      $n = Gn('years');
    var qn = Math.round,
      Bn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
    function Jn(e, t, n, s) {
      var i = Zt(e).abs(),
        r = qn(i.as('s')),
        a = qn(i.as('m')),
        o = qn(i.as('h')),
        u = qn(i.as('d')),
        l = qn(i.as('M')),
        h = qn(i.as('w')),
        d = qn(i.as('y')),
        c =
          (r <= n.ss ? ['s', r] : r < n.s && ['ss', r]) ||
          (a <= 1 && ['m']) ||
          (a < n.m && ['mm', a]) ||
          (o <= 1 && ['h']) ||
          (o < n.h && ['hh', o]) ||
          (u <= 1 && ['d']) ||
          (u < n.d && ['dd', u]);
      return (
        null != n.w && (c = c || (h <= 1 && ['w']) || (h < n.w && ['ww', h])),
        ((c = c || (l <= 1 && ['M']) || (l < n.M && ['MM', l]) || (d <= 1 && ['y']) || ['yy', d])[2] = t),
        (c[3] = 0 < +e),
        (c[4] = s),
        function (e, t, n, s, i) {
          return i.relativeTime(t || 1, !!n, e, s);
        }.apply(null, c)
      );
    }
    var Qn = Math.abs;
    function Xn(e) {
      return (0 < e) - (e < 0) || +e;
    }
    function Kn() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var e,
        t,
        n,
        s,
        i,
        r,
        a,
        o,
        u = Qn(this._milliseconds) / 1e3,
        l = Qn(this._days),
        h = Qn(this._months),
        d = this.asSeconds();
      return d
        ? ((e = I(u / 60)),
          (t = I(e / 60)),
          (u %= 60),
          (e %= 60),
          (n = I(h / 12)),
          (h %= 12),
          (s = u ? u.toFixed(3).replace(/\.?0+$/, '') : ''),
          (i = d < 0 ? '-' : ''),
          (r = Xn(this._months) !== Xn(d) ? '-' : ''),
          (a = Xn(this._days) !== Xn(d) ? '-' : ''),
          (o = Xn(this._milliseconds) !== Xn(d) ? '-' : ''),
          i +
            'P' +
            (n ? r + n + 'Y' : '') +
            (h ? r + h + 'M' : '') +
            (l ? a + l + 'D' : '') +
            (t || e || u ? 'T' : '') +
            (t ? o + t + 'H' : '') +
            (e ? o + e + 'M' : '') +
            (u ? o + s + 'S' : ''))
        : 'P0D';
    }
    var es = Ct.prototype;
    return (
      (es.isValid = function () {
        return this._isValid;
      }),
      (es.abs = function () {
        var e = this._data;
        return (
          (this._milliseconds = Yn(this._milliseconds)),
          (this._days = Yn(this._days)),
          (this._months = Yn(this._months)),
          (e.milliseconds = Yn(e.milliseconds)),
          (e.seconds = Yn(e.seconds)),
          (e.minutes = Yn(e.minutes)),
          (e.hours = Yn(e.hours)),
          (e.months = Yn(e.months)),
          (e.years = Yn(e.years)),
          this
        );
      }),
      (es.add = function (e, t) {
        return On(this, e, t, 1);
      }),
      (es.subtract = function (e, t) {
        return On(this, e, t, -1);
      }),
      (es.as = function (e) {
        if (!this.isValid()) return NaN;
        var t,
          n,
          s = this._milliseconds;
        if ('month' === (e = V(e)) || 'quarter' === e || 'year' === e)
          switch (((t = this._days + s / 864e5), (n = this._months + xn(t)), e)) {
            case 'month':
              return n;
            case 'quarter':
              return n / 3;
            case 'year':
              return n / 12;
          }
        else
          switch (((t = this._days + Math.round(Tn(this._months))), e)) {
            case 'week':
              return t / 7 + s / 6048e5;
            case 'day':
              return t + s / 864e5;
            case 'hour':
              return 24 * t + s / 36e5;
            case 'minute':
              return 1440 * t + s / 6e4;
            case 'second':
              return 86400 * t + s / 1e3;
            case 'millisecond':
              return Math.floor(864e5 * t) + s;
            default:
              throw new Error('Unknown unit ' + e);
          }
      }),
      (es.asMilliseconds = Pn),
      (es.asSeconds = Rn),
      (es.asMinutes = Wn),
      (es.asHours = Cn),
      (es.asDays = Un),
      (es.asWeeks = Hn),
      (es.asMonths = Fn),
      (es.asQuarters = Ln),
      (es.asYears = Vn),
      (es.valueOf = function () {
        return this.isValid()
          ? this._milliseconds + 864e5 * this._days + (this._months % 12) * 2592e6 + 31536e6 * Z(this._months / 12)
          : NaN;
      }),
      (es._bubble = function () {
        var e,
          t,
          n,
          s,
          i,
          r = this._milliseconds,
          a = this._days,
          o = this._months,
          u = this._data;
        return (
          (0 <= r && 0 <= a && 0 <= o) || (r <= 0 && a <= 0 && o <= 0) || ((r += 864e5 * bn(Tn(o) + a)), (o = a = 0)),
          (u.milliseconds = r % 1e3),
          (e = I(r / 1e3)),
          (u.seconds = e % 60),
          (t = I(e / 60)),
          (u.minutes = t % 60),
          (n = I(t / 60)),
          (u.hours = n % 24),
          (a += I(n / 24)),
          (o += i = I(xn(a))),
          (a -= bn(Tn(i))),
          (s = I(o / 12)),
          (o %= 12),
          (u.days = a),
          (u.months = o),
          (u.years = s),
          this
        );
      }),
      (es.clone = function () {
        return Zt(this);
      }),
      (es.get = function (e) {
        return (e = V(e)), this.isValid() ? this[e + 's']() : NaN;
      }),
      (es.milliseconds = En),
      (es.seconds = An),
      (es.minutes = jn),
      (es.hours = In),
      (es.days = Zn),
      (es.weeks = function () {
        return I(this.days() / 7);
      }),
      (es.months = zn),
      (es.years = $n),
      (es.humanize = function (e, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var n,
          s,
          i = !1,
          r = Bn;
        return (
          'object' == typeof e && ((t = e), (e = !1)),
          'boolean' == typeof e && (i = e),
          'object' == typeof t && ((r = Object.assign({}, Bn, t)), null != t.s && null == t.ss && (r.ss = t.s - 1)),
          (n = this.localeData()),
          (s = Jn(this, !i, r, n)),
          i && (s = n.pastFuture(+this, s)),
          n.postformat(s)
        );
      }),
      (es.toISOString = Kn),
      (es.toString = Kn),
      (es.toJSON = Kn),
      (es.locale = tn),
      (es.localeData = sn),
      (es.toIsoString = n('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', Kn)),
      (es.lang = nn),
      C('X', 0, 0, 'unix'),
      C('x', 0, 0, 'valueOf'),
      ce('x', ue),
      ce('X', /[+-]?\d+(\.\d{1,3})?/),
      ye('X', function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e));
      }),
      ye('x', function (e, t, n) {
        n._d = new Date(Z(e));
      }),
      (f.version = '2.29.1'),
      (e = Tt),
      (f.fn = pn),
      (f.min = function () {
        return Rt('isBefore', [].slice.call(arguments, 0));
      }),
      (f.max = function () {
        return Rt('isAfter', [].slice.call(arguments, 0));
      }),
      (f.now = function () {
        return Date.now ? Date.now() : +new Date();
      }),
      (f.utc = _),
      (f.unix = function (e) {
        return Tt(1e3 * e);
      }),
      (f.months = function (e, t) {
        return Dn(e, t, 'months');
      }),
      (f.isDate = a),
      (f.locale = lt),
      (f.invalid = w),
      (f.duration = Zt),
      (f.isMoment = M),
      (f.weekdays = function (e, t, n) {
        return Sn(e, t, n, 'weekdays');
      }),
      (f.parseZone = function () {
        return Tt.apply(null, arguments).parseZone();
      }),
      (f.localeData = dt),
      (f.isDuration = Ut),
      (f.monthsShort = function (e, t) {
        return Dn(e, t, 'monthsShort');
      }),
      (f.weekdaysMin = function (e, t, n) {
        return Sn(e, t, n, 'weekdaysMin');
      }),
      (f.defineLocale = ht),
      (f.updateLocale = function (e, t) {
        var n, s, i;
        return (
          null != t
            ? ((i = st),
              null != it[e] && null != it[e].parentLocale
                ? it[e].set(b(it[e]._config, t))
                : (null != (s = ut(e)) && (i = s._config),
                  (t = b(i, t)),
                  null == s && (t.abbr = e),
                  ((n = new x(t)).parentLocale = it[e]),
                  (it[e] = n)),
              lt(e))
            : null != it[e] &&
              (null != it[e].parentLocale
                ? ((it[e] = it[e].parentLocale), e === lt() && lt(e))
                : null != it[e] && delete it[e]),
          it[e]
        );
      }),
      (f.locales = function () {
        return s(it);
      }),
      (f.weekdaysShort = function (e, t, n) {
        return Sn(e, t, n, 'weekdaysShort');
      }),
      (f.normalizeUnits = V),
      (f.relativeTimeRounding = function (e) {
        return void 0 === e ? qn : 'function' == typeof e && ((qn = e), !0);
      }),
      (f.relativeTimeThreshold = function (e, t) {
        return void 0 !== Bn[e] && (void 0 === t ? Bn[e] : ((Bn[e] = t), 's' === e && (Bn.ss = t - 1), !0));
      }),
      (f.calendarFormat = function (e, t) {
        var n = e.diff(t, 'days', !0);
        return n < -6
          ? 'sameElse'
          : n < -1
          ? 'lastWeek'
          : n < 0
          ? 'lastDay'
          : n < 1
          ? 'sameDay'
          : n < 2
          ? 'nextDay'
          : n < 7
          ? 'nextWeek'
          : 'sameElse';
      }),
      (f.prototype = pn),
      (f.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'GGGG-[W]WW',
        MONTH: 'YYYY-MM',
      }),
      f
    );
  });
}

async function logEventToCalendar() {
  try {
    const text = gmail.get.email_subject().trim();

    // body
    const emailDom = gmail.dom.email(gmail.get.email_id());
    const contentDom = document.createElement('span');
    contentDom.innerHTML = emailDom.body() || '';
    const details = contentDom.innerText
      .replace(/\.[ ]+/g, '.\n')
      .split('\n')
      .map((s) => s.trim())
      .join('\n')
      .replace(/[\n\r ][\n\r ]+/g, '\n\n')
      .trim();
    contentDom.remove();

    const DATE_TIME_FORMAT_TO = 'YYYYMMDDTkkmm00Z'; // 20210305T163000Z
    const dateFrom = moment(emailDom.data().timestamp).format(DATE_TIME_FORMAT_TO);
    const dateTo = moment(emailDom.data().timestamp).add(1, 'hours').format(DATE_TIME_FORMAT_TO);

    const location = '';

    if (text) {
      // window.open(`https://synle.github.io/cal?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(details)}`)
      window.open(
        `https://calendar.google.com/calendar/u/0/r/eventedit?dates=${dateFrom}/${dateTo}&trp=true&text=${encodeURIComponent(
          text,
        )}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(details)}`,
      );
    }
  } catch (err) {}
}

// add button to page
if (!document.querySelector('#btnLogToEvent')) {
  const btns = [...document.querySelectorAll('div')].filter((r) => r.innerText.trim() === 'More');
  const btn = btns[btns.length - 1];
  if (btn) {
    btn.insertAdjacentHTML('afterend', `<button id='btnLogToEvent'>Log to Event</button>`);
    document.querySelector('#btnLogToEvent').addEventListener('click', () => logEventToCalendar());
  }
}

// do work
(async function () {
  logEventToCalendar();
})();
