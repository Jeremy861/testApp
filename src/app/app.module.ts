import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PresentationPage } from '../pages/presentation/presentation';
import { FormPage } from '../pages/form/form';
import { SkillPage } from '../pages/skill/skill';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SafariViewController } from '@ionic-native/safari-view-controller';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PresentationPage,
    FormPage,
    SkillPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PresentationPage,
    FormPage,
    SkillPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SafariViewController,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}

//platformBrowserDynamic().bootstrapModule(AppModule);
