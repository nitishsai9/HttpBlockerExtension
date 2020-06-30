
chrome.webRequest.onBeforeRequest.addListener(


    function({url}) { 
        if(url.startsWith('http:')){
            return {cancel:true};
        }
      else{
        return {cancel:false } ;
      }
    
    },

    {urls:["<all_urls>"]},
    ["blocking"]
  
  
  
    );