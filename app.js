function run(){
  console.log('hej6');
  try{
    jsforce.browser.init({
      clientId: '3MVG9xj60O9CjKHqAR6xaaX9u0JgiHcSo.P3c.i3Z6SRtOgiwUxIOQvy6EgSbassifvmoB8Gvt722lSqpIUq0',
      redirectUri: 'https://erik-pole.github.io/eqtLightningOutTest/',
      proxyUrl: 'https://rocky-falls-04834-0aad17553ffc.herokuapp.com/proxy/'
    });
    console.log('Before login call');
    jsforce.browser.login();
    console.log('After login call');
    
    jsforce.browser.on('connect', function(connection) {
      console.log('Connected to Salesforce!', connection);
      let accessToken = connection.accessToken;
      console.log('Access Token:', accessToken);
    });
    
    jsforce.browser.on('disconnect', function() {
      console.log('Disconnected from Salesforce');
    });
    
    jsforce.browser.on('error', function(error) {
      console.log('Error', error);
    });

  }
  catch(error){console.error(error)}
}

run();
