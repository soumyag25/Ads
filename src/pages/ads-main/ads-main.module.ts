import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdsMainPage } from './ads-main';

@NgModule({
  declarations: [
    AdsMainPage,
  ],
  imports: [
    IonicPageModule.forChild(AdsMainPage),
  ],
})
export class AdsMainPageModule {}
