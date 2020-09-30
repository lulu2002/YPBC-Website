import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import { IntroComponent } from './home/intro/intro.component';
import { IntroVideoComponent } from './home/intro-video/intro-video.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent, IntroVideoComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule {
}
