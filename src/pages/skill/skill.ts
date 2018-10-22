import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {
  selectedSkill: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSkill = this.navParams.get("skillitem")
    console.log(this.selectedSkill)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillPage');
  }

}
