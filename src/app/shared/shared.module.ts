import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeadingImageComponent} from './heading-image/heading-image.component';
import {ImgDivComponent} from './img-div/img-div.component';
import { FooterComponent } from './footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [NavbarComponent, HeadingImageComponent, ImgDivComponent, FooterComponent],
    exports: [
        NavbarComponent,
        HeadingImageComponent,
        ImgDivComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
}
