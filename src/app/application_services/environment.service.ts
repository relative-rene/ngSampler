import { environment } from './../../environments/environment';
export const ENVIRONMENT = new InjectionToken<{ [key: string]: any }>('environment');

import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private readonly environment: any;

  constructor(@Optional() @Inject(ENVIRONMENT) environment) {
    this.environment = environment !== null ? environment : {};
  }

  getValue(key: string, defaultValue?: any): any {
    return this.environment[key] || defaultValue;
  }
  
}
