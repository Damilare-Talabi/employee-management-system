// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4201';

export const environment = {
  production: false,
  Dynamsoft: {
    resourcesPath: 'assets/dwt-resources',
    // dwtProductKey: 't00891wAAAKFs7VjcTP0UG20tzpw0mVsqmlIukOMDImLaclVr8l5ReM0df50rg9RNaH7A9mwLt6khlmvJyIqEixQeDZAz0iBvgzHPOXcQA/gbSOY51F46ANDILMM=',
    dwtProductKey: "t0153KQMAAH7qk57teCqCgYxnc87/dLlfP48BBekexoyc+NYabsovbgBnP8zxNxtIlWztDhiaCA6GcmFKXhhZx2ji7kEuBmmGNDYMx6BUoXslm16d4cN8qpFmcFPnb+pbd+aL42JQpzM8YSQ2tT9j42Y+e8h+5t7whJHYuJk74/dZk/3jZgdry0wjwxNGYtMyX82bskjR/AM0n57J",
    uploadTargetURL: ''
  },
  application: {
    baseUrl: 'http://localhost:4201/',
    name: 'BranchEPMS',
    logoUrl: '',
  },
  oAuthConfig1: {
    issuer: 'https://localhost:7000', // IdentityServer url
    clientId: 'BranchEPMS_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'offline_access MyProjectName',
  },
  // oAuthConfig: {
  //   issuer: 'https://localhost:7000',
  //   redirectUri: baseUrl,
  //   clientId: 'BranchEPMS_App',
  //   responseType: 'code',
  //   scope: 'offline_access IdentityService AdminService SaaSService role email openid profile',
  //   requireHttps: true
  // },
  apis: {
    default: {
      url: 'https://localhost:7500',
      rootNamespace: 'ISTL.Branch.EPMS',
    }
  },  
  defaultauth: 'fakebackend',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
} //as Environment;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.