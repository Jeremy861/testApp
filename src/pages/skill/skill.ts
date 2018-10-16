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
  skill;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.skill = this.navParams.get("skill")
    console.log(this.skill)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillPage');
  }

}
