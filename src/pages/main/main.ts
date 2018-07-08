import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CalenderPage } from '../calender/calender';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController) {


  }

  otherpage() {
    this.navCtrl.push(CalenderPage);
  }




  myDate: String = new Date().toISOString();


}
