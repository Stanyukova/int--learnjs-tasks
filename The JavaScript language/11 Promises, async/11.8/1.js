async function loadJson(url) {
  
    let response = await fetch(url);
    
    if (response.status == 200)
      return response.json();
    
    throw new Error(response.status);
  }
    
  loadJson('user.json').catch(alert);