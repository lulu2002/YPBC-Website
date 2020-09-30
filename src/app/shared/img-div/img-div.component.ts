import {Component, Input, OnInit} from '@angular/core';
import {Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-img-div',
  templateUrl: './img-div.component.html',
  styleUrls: ['./img-div.component.scss']
})
export class ImgDivComponent implements OnInit {

  @Input() src: string;

  ngOnInit(): void {
  }

}
