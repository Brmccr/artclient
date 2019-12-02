export const environment = {
  production: true,
  apiUrl: 'http://localhost:4000'
};

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'kcp-pieclient.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://jab-artdep-server.herokuapp.com/'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:4200';
}

// The production environment config contains variables required to run the application in production. 
// This enables you to build the application with a different configuration for each different environment 
// (e.g. production & development) without updating the app code. When you build the application for 
// production with the command ng build --prod, the output environment.ts is replaced with environment.prod.ts.
