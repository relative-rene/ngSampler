import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// import { bootstrapApplication } from "@angular/platform-browser";
// import { provideState, provideStore } from '@ngrx/store';
// import { RegisterComponent } from "./app/application_components/register/register.component";
// // import { appRoutes } from './app/app.routes';
// import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { importProvidersFrom, isDevMode } from '@angular/core';
// import { authFeatureKey, authReducer } from './app/store/reducers';
// import { provideEffects } from "@ngrx/effects";
// import { provideHttpClient } from "@angular/common/http";
// import * as authEffects from './app/store/effects';
// import { AppModule } from "./app/app.module";

// bootstrapApplication(RegisterComponent, {
//   providers: [
//     importProvidersFrom(AppModule),
//     provideHttpClient(),
//     // provideRouter(appRoutes), 
//     provideStore(),
//     provideState(authFeatureKey, authReducer),
//     provideEffects(authEffects),
//     provideStoreDevtools({
//       maxAge: 25,
//       logOnly: !isDevMode(),
//       autoPause: true,
//       trace: false,
//       traceLimit: 75
//     })]
// })