// hook up custom event
function getStrongPassword() {
  function _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function _getLetters() {
    const chars = [
      ...new Set(
        `
            ABCDEFGHJKMNPQRSTUVWXYZ
            abcdefghjkmnpqrstuvwxyz
            234567890-=
            @#$%^&*()+
            [];',./
            {}|:"<>?"
        `.replace(/[ \n\t]/g, ''),
      ),
    ];
    return chars;
  }

  function getPassword(minLength = 20) {
    let passwordLength = minLength;
    let password = '';
    const letters = _getLetters();
    while (passwordLength > 0) {
      passwordLength--;
      try {
        password += letters[_getRandomInt(0, letters.length)] || '';
      } catch (err) {}
    }
    return password;
  }

  // dispatch event to copy text to clipboard
  const eventAppCopyTextToClipboard = new Event('AppCopyTextToClipboard');
  eventAppCopyTextToClipboard.text = getPassword();
  document.dispatchEvent(eventAppCopyTextToClipboard);
}

document.addEventListener('AppFullyLoaded', async (e) => {
  const { renderSchema } = e;

  const SITE_SCHEMA = `
  ! Sy's Favorites
  @ 🧑

  # stock
  //webull | webull.com/quote
  //seeking alpha | seekingalpha.com
  //motley fool | fool.com
  //cnbc stocklist | cnbc.com/watchlist/#!/watchlist/1958898
  google finance stocklist | google.com/finance/portfolio/watchlist
  yahoo finance | finance.yahoo.com
  market watch | marketwatch.com
  cnbc | cnbc.com
  //wallstreet bets | reddit.com/r/wallstreetbets
  //thetagang | reddit.com/r/thetagang
  nasdaq | nasdaq.com
  zacks | zacks.com

  # general news
  google news | news.google.com/topstories
  lifehacker | lifehacker.com
  engadget | engadget.com
  verge | theverge.com
  tech crunch | techcrunch.com
  hacker news | hn.svelte.dev/top/1
  echojs | echojs.com

  # shopping and deals
  amazon | amazon.com
  costco | costco.com
  woot | woot.com
  slickdeals | slickdeals.net
  dealnews | dealnews.com
  //reddit misc deals | reddit.com/r/deals
  //reddit laptop deals | reddit.com/r/LaptopDeals/new

  # movies
  plex | app.plex.tv
  netflix | netflix.com
  disney +| disneyplus.com
  prime video | amazon.com/gp/video
  youtube | youtube.com

  # personal
  synle | /
  github repositories | github.com/synle?tab=repositories
  email | mail.google.com/mail
  calendar | calendar.google.com/calendar
  code spaces | github.com/codespaces

  # utils and misc
  ip location | whatismyipaddress.com
  bashrc | /app/setup-bash-profile.html
  port forwarding | /app/port-forwarding.html
  fix link | /app/fix-link.html
  nav bookmark generator ||| /app/nav-generator?newNav
  prettier playground | prettier.io/playground
  home router config | 192.168.1.1
  torrent | bit.ly/3pVvM2N
  Strong Password | javascript://getStrongPassword()
`
    .split('\n')
    .map((s) => s.trim())
    .join('\n');

  async function getHostMappingSchema() {
    let HOST_MAPPING_BLOCK_SCHEMA = '';
    try {
      const hostMappingApiResponse = fetch(
        `https://raw.githubusercontent.com/synle/bashrc/master/software/metadata/ip-address.config`,
      ).then((r) => r.text());
      const HOSTNAMES_GROUPED_BY_ID = await hostMappingApiResponse.then((r) =>
        r
          .split('\n')
          .filter((s) => !!s.trim() && s.indexOf('=') !== 0)
          .map((s) => {
            const [hostIp, ...hostNames] = s
              .split(/[\:,]/gi)
              .map((s) => s.trim())
              .filter((s) => s);
            return `${hostIp}\n${hostNames.join('\n')}\n`;
          })
          .join('\n'),
      );
      const HOSTNAMES_MAPPINGS = await hostMappingApiResponse.then((r) =>
        r
          .split('\n')
          .filter((s) => !!s.trim() && s.indexOf('=') !== 0)
          .map((s) => {
            const [hostIp, ...hostNames] = s
              .split(/[\:,]/gi)
              .map((s) => s.trim())
              .filter((s) => s);
            return hostNames.map((hostName) => `${hostIp} ${hostName}`).join('\n');
          })
          .join('\n'),
      );
      HOST_MAPPING_BLOCK_SCHEMA = `
      # Host Mappings
      Host Mapping Ip Config|https://github.com/synle/bashrc/blob/master/software/metadata/ip-address.config
      >>> Host Files Location|tabHostDir >>> Host IPs|tabHostNamesGroupedByIp >>> /etc/hosts Mapping|tabHostMappings
      \`\`\`tabHostDir
      # Windows
      c:\\Windows\\System32\\Drivers\\etc\\hosts

      # Linux
      sudo vim /etc/hosts
      \`\`\`

      \`\`\`tabHostNamesGroupedByIp
      ${HOSTNAMES_GROUPED_BY_ID}
      \`\`\`

      \`\`\`tabHostMappings
      # Sy Home Hosts
      ${HOSTNAMES_MAPPINGS}
      # END Sy Home Hosts
      \`\`\`
    `
        .split('\n')
        .map((s) => s.trim())
        .join('\n');
    } catch (err) {}

    return HOST_MAPPING_BLOCK_SCHEMA;
  }

  if (typeof renderSchema === 'function') {
    renderSchema(`
    ${SITE_SCHEMA}
    ${await getHostMappingSchema()}
  `);
  }
});
