import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Response} from "../../models/response";
import {Subject} from "rxjs/Subject";
declare function require(url: string);



/*
  Generated class for the PropertiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PropertiesProvider {

  properties: any[];
  api;
  selectedProperties$ =  new Subject<any>();

  constructor(public http: HttpClient) {
    this.api = require('../../../api.config.json')
  }
  getProperties() {
    return this.http.get('http://index1.homeflow.co.uk/properties?api_key=' +this.api.key + '&search[London]');

  }
  getProperty(id) {
    return this.http.get('http://index1.homeflow.co.uk/properties'+id+'?api_key=' +this.api.key);

  }
  getSelected(value) {
    let selectedProperties :any[] = [];
    //get all properties
    this.getProperties().subscribe((response: Response)=> {
      this.properties = response.result.properties.elements;
      //iterate through properties and check if match criteria
      this.properties.forEach(property => {
        if (property.display_address.toLowerCase().includes(value.location.toLowerCase())
          && property.price_value >= value.minPrice
          && property.price_value <= value.maxPrice
          && property.bedrooms >= value.minBeds){
          selectedProperties.push(property);
        }

      });
      this.selectedProperties$.next(selectedProperties);
      return this.selectedProperties$;

    });
  }
}
