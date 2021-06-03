(function() {
    const fixLinkAppUrl = 'https://synle.github.io/link';

    try{
      location.href = `${fixLinkAppUrl}/#${location.href}`
    } catch(err){
      location.href = `${fixLinkAppUrl}`
    }
})();

// output
// javascript:(function()%7B(function()%20%7B%0A%20%20%20%20const%20fixLinkAppUrl%20%3D%20'https%3A%2F%2Fsynle.github.io%2Flink'%3B%0A%0A%20%20%20%20try%7B%0A%20%20%20%20%20%20location.href%20%3D%20%60%24%7BfixLinkAppUrl%7D%2F%23%24%7Blocation.href%7D%60%0A%20%20%20%20%7D%20catch(err)%7B%0A%20%20%20%20%20%20location.href%20%3D%20%60%24%7BfixLinkAppUrl%7D%60%0A%20%20%20%20%7D%0A%7D)()%3B%7D)()%3B
