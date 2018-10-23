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
  skillslist: Array<{title: string, note: string, icon: string, description: string, category: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.skillslist = 
    [{title: 'Html', note: '05', icon:'hand', description:'Azerty', category:"webskills"},
    {title: 'CSS', note: '05', icon:'hand', description:'Azerty', category:'webskills'},
    {title: 'JavaScript', note: '05', icon:'hand', description:'Azerty', category:'webskills'},
    {title: 'Photoshop', note: '05', icon:'hand', description:'Azerty', category:'webskills'},
    {title: 'Java', note: '05', icon:'hand', description:'Azerty', category:'mobileskills'},
    {title: 'Swift', note: '05', icon:'hand', description:'Azerty', category:'mobileskills'},
    {title: 'TypeScript', note: '05', icon:'hand', description:'Azerty', category:'mobileskills'},
    {title: 'Xml', note: '05', icon:'hand', description:'Azerty', category:'mobileskills'},
    {title: 'Winbooks', note: '05', icon:'hand', description:'Azerty', category:'accountingskills'},
    {title: 'Bob50', note: '05', icon:'hand', description:'Azerty', category:'accountingskills'},
    {title: 'Excel', note: '05', icon:'hand', description:'Azerty', category:'accountingskills'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
  }

  display(event, skillitem){
    //console.log(item)    
    this.navCtrl.push(SkillPage, {skillitem: skillitem});
  }

}
