// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AocAppConfig } from '@atlantis-of-code/aoc-client/core/configs';

export const environment = {
  production: false
};

export const Config: AocAppConfig = {
  APP_ID: 'appTemplate', // Must match with server config
  PROGRAM_NAME: 'App Template',
  SERVER_URL: 'http://localhost:3000/',
  BASE_HREF: '/',
  MULTI_TENANCY: false,
  TAB_DEFAULT_MENU_ITEMS: ['/dashboard'], // Tabs to open at start
  DISABLE_COMPONENT_CACHE_FOR_ROUTES: [], // Tabs (or routes) that won't be cached/reused // TODO: these should be by default!
  DO_NOT_SHOW_AOC_FAVICON_IN_DEVMODE: false, // Optional, default is undefined which will be falsy
  LOGGER: {
    level: 'DEBUG'
  },
  PDFJS_URL: '/pdfjs-3.0.279-legacy-dist/web/viewer.html',
  LICENSE: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
