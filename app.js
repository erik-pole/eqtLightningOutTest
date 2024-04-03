function run(){
  console.log('hej3');
  try{
  jsforce.browser.login();
  }
  catch(error){console.error(error)}
}

run();
