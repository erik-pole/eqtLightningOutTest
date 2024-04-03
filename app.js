function run(){
  console.log('hej');
  jsforce.browser.init({
  clientId: 'test',
  redirectUri: 'test',
  proxyUrl: 'test'
});
}

run();
