import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import { IntroComponent } from './home/intro/intro.component';
import { IntroVideoComponent } from './home/intro-video/intro-video.component';
import { IntroTwoComponent } from './home/intro-two/intro-two.component';
import { SeniorExpComponent } from './home/senior-exp/senior-exp.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './home/contact/contact.component';
import { RecordsComponent } from './records/records.component';
import {TabsModule} from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [HomeComponent, IntroComponent, IntroVideoComponent, IntroTwoComponent, SeniorExpComponent, ContactComponent, RecordsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    FontAwesomeModule,
    TabsModule
  ]
})
export class PagesModule {
}
