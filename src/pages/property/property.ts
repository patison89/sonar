import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PropertiesProvider} from "../../providers/properties/properties";

/**
 * Generated class for the PropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-property',
  templateUrl: 'property.html',
})
export class PropertyPage {

  property;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private propertiesProvider: PropertiesProvider) {


    this.property = this.navParams.data;

  }

  ngOnInit() {
   this.propertiesProvider.getProperty(this.property.property_id).subscribe(response => this.property = response);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyPage', this.property);


  }

}
