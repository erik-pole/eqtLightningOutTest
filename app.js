function run(){
  console.log('hej5');
  try{
    jsforce.browser.init({
      clientId: '3MVG9xj60O9CjKHqAR6xaaX9u0JgiHcSo.P3c.i3Z6SRtOgiwUxIOQvy6EgSbassifvmoB8Gvt722lSqpIUq0',
      redirectUri: 'https://erik-pole.github.io/eqtLightningOutTest/'
    });
    jsforce.browser.login();
    jsforce.browser.on('connect', function(connection) {
      console.log('Connected to Salesforce!');
      // Access token is available in connection.accessToken
      let accessToken = connection.accessToken;
      console.log(accessToken);
      // Call the function to render your Lightning Out component with the access token
      //renderLightningOutComponent({ accessToken: accessToken });
    });
  }
  catch(error){console.error(error)}
}

run();
