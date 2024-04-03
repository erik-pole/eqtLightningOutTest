function run(){
  console.log('hej2');
  try{
  jsforce.browser.init({
  clientId: '3MVG9xj60O9CjKHqAR6xaaX9u0JgiHcSo.P3c.i3Z6SRtOgiwUxIOQvy6EgSbassifvmoB8Gvt722lSqpIUq0',
  redirectUri: 'https://test.salesforce.com'
});
  }
  catch(error){console.error(error)}
}

run();
