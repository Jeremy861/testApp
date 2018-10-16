import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SkillPage } from '../skill/skill';

/**
 * Generated class for the PresentationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presentation',
  templateUrl: 'presentation.html'
})
export class PresentationPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
  }

  display(item: String){
    console.log(item)
    if(item !=''){
      this.navCtrl.push(SkillPage, {skill: item});
    }
  }

}
