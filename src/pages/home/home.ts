import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SafariViewController } from '@ionic-native/safari-view-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message: string = null;
  subject: string = null;
  file: string = 'assets/pdf-sample.pdf';
  link: string = null;

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing, private safariViewController: SafariViewController) {  
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

  linkedInProfile() {
    this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {

        this.safariViewController.show({
          url: 'https://www.linkedin.com/in/jeremy-seabrook-71a04541/',
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#ff0000'
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') console.log('Closed');
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    }
  );
  }
}