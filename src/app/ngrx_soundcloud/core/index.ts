import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api';
import { MEDIA_QUERY_PROVIDERS, MediaQueryResults, MediaQueryService } from './media-query';


export { ApiService, MediaQueryResults, MediaQueryService };
export * from './interfaces';


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ApiService,
    MEDIA_QUERY_PROVIDERS
  ]
})
export class CoreModule {}
