import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PropertiesProvider} from "../../providers/properties/properties";

/**
 * Generated class for the PropertySearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

export interface Response {
   result: Object;
}

@Component({
  selector: 'property-search',
  templateUrl: 'property-search.html'
})
export class PropertySearch {
  form: FormGroup;
  prices: number[];
  bedNumbers: number[];
  properties: any[];

  constructor(private formBuilder: FormBuilder,
              private  propertiesProvider: PropertiesProvider
              ) {
    console.log('Hello PropertySearchComponent Component');

    this.prices = [50000, 75000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 550000, 600000, 650000, 700000];
    this.bedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.buildForm();
  }



  private buildForm() {
    this.form = this.formBuilder.group({

      location: ['', Validators.required],
      minPrice: [''],
      maxPrice: [''],
      minBeds: [''],
      maxBeds: [''],
      type: ['']
    });

  }

  submit(value) {
    this.propertiesProvider.getProperties(value.location).subscribe((response : Response) => {this.properties = response.result.properties.elements;
    console.log(this.properties)});

  }
}
