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

@NgModule({
  declarations: [HomeComponent, IntroComponent, IntroVideoComponent, IntroTwoComponent, SeniorExpComponent, ContactComponent],
    imports: [
        CommonModule,
        SharedModule,
        CarouselModule,
        FontAwesomeModule
    ]
})
export class PagesModule {
}
