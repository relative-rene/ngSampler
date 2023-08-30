import { Injectable } from '@angular/core';
import { HttpClient } from './http-client.service';
///// NOTICE DEPRECATE THIS UNSED AS OF 2/26/2017
@Injectable()
export class UtilityService {
  commentMessage = '';
  constructor(private http: HttpClient) { }

  getGivingCategoryList() {
    return [
      'ANIMALS',
      'ARTS, CULTURE, HUMANITIES',
      'COMMUNITY DEVELOPMENT',
      'EDUCATION',
      'HEALTH',
      'HUMAN AND CIVIL RIGHTS',
      'INTERNATIONAL',
      'RELIGION',
      'RESEARCH AND PUBLIC POLICY'
    ];
  }

  getGivingTagSuggestionsList() {
    return [
      'COOL',
      'NEW',
      'TRENDY',
      'HEALTHY',
      'EXERCISE',
      'DAYTIME',
      'NIGHTTIME'];
  }
}
