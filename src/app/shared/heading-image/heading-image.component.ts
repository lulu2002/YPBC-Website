import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading-image',
  templateUrl: './heading-image.component.html',
  styleUrls: ['./heading-image.component.scss']
})
export class HeadingImageComponent implements OnInit {

  @Input() imgPath: string;

  ngOnInit(): void {
  }

  getBgStyle(): string {
    return `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${this.imgPath}')`;
  }

}
