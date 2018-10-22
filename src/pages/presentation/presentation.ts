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
  mySkills = 'webskills'
  webskills: Array<{title: string, note: string, icon: string, description: string}>;
  mobileskills: Array<{title: string, note: string, icon: string, description: string}>;
  accountingskills: Array<{title: string, note: string, icon: string, description: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.webskills = 
    [{title: 'Html', note: '05', icon:'hand', description:'Azerty'},
    {title: 'CSS', note: '05', icon:'hand', description:'Azerty'},
    {title: 'JavaScript', note: '05', icon:'hand', description:'Azerty'},
    {title: 'Photoshop', note: '05', icon:'hand', description:'Azerty'}];

    this.mobileskills =
    [{title: 'Java', note: '05', icon:'hand', description:'Azerty'},
    {title: 'Swift', note: '05', icon:'hand', description:'Azerty'},
    {title: 'TypeScript', note: '05', icon:'hand', description:'Azerty'},
    {title: 'Xml', note: '05', icon:'hand', description:'Azerty'}];

    this.accountingskills =
    [{title: 'Winbooks', note: '05', icon:'hand', description:'Azerty'},
    {title: 'Bob50', note: '05', icon:'hand', description:'Azerty'},
    {title: 'Excel', note: '05', icon:'hand', description:'Azerty'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
  }

  display(event, skillitem){
    //console.log(item)    
    this.navCtrl.push(SkillPage, {skillitem: skillitem});
  }

}
