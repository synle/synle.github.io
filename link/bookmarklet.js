(function() {
    const fixLinkAppUrl = 'https://synle.github.io/link';

    try{
      location.href = `${fixLinkAppUrl}/#${location.href}`
    } catch(err){
      location.href = `${fixLinkAppUrl}`
    }
})();
