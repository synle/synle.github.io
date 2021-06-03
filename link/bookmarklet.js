const fixLinkAppUrl = 'https://synle.github.io/link';

try{
  try{
    location.href = `${fixLinkAppUrl}/#${location.href}`
  } catch(err){
    location.href = `${fixLinkAppUrl}`
  }
} catch(err){
  alert('Error: ' + err);
}

// output
// javascript:(function()%7Bconst%20fixLinkAppUrl%20%3D%20'https%3A%2F%2Fsynle.github.io%2Flink'%3B%0A%0Atry%7B%0A%20%20try%7B%0A%20%20%20%20location.href%20%3D%20%60%24%7BfixLinkAppUrl%7D%2F%23%24%7Blocation.href%7D%60%0A%20%20%7D%20catch(err)%7B%0A%20%20%20%20location.href%20%3D%20%60%24%7BfixLinkAppUrl%7D%60%0A%20%20%7D%0A%7D%20catch(err)%7B%0A%20%20alert('Error%3A%20'%20%2B%20err)%3B%0A%7D%7D)()%3B

