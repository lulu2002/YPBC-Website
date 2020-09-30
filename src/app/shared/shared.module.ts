import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeadingImageComponent} from './heading-image/heading-image.component';
import {ImgDivComponent} from './img-div/img-div.component';


@NgModule({
  declarations: [NavbarComponent, HeadingImageComponent, ImgDivComponent],
  exports: [
    NavbarComponent,
    HeadingImageComponent,
    ImgDivComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class SharedModule {
}
