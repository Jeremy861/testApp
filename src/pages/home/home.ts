import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message: string = null;
  subject: string = null;
  file: string = 'assets/pdf-sample.pdf';
  link: string = null;

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {  
  }

  share(){
    //console.log(item)
    this.socialSharing.share(this.message, this.subject, this.file, this.link)
    .then(() => {
      // Sharing is possible
      }).catch(() => {
      // Sharing is not possible
      });
  }
}