import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {PropertiesProvider} from "../../providers/properties/properties";
import {PropertyPage} from "../property/property";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  properties : any[] =[];

  constructor(public navCtrl: NavController,
              private propertiesProvider: PropertiesProvider
             ) {

  }
  ngOnInit() {
    this.propertiesProvider.selectedProperties$.subscribe(properties => {
      this.properties = properties;
      console.log( this.properties);
    });
  }

  goToProperty(property) {
    this.navCtrl.push(PropertyPage, property);
  }
}
