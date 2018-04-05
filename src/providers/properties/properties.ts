import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
declare function require(url: string);



/*
  Generated class for the PropertiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PropertiesProvider {

    properties;
    api;

  constructor(public http: HttpClient) {
    console.log('Hello PropertiesProvider Provider');
    this.api = require('../../../api.config.json')
  }
  getProperties() {
    return this.http.get('http://index1.homeflow.co.uk/properties?api_key=' +this.api.key + '&search[London]');

  }
  getProperty(id) {
    return this.http.get('http://index1.homeflow.co.uk/properties'+id+'?api_key=' +this.api.key);

  }
}
