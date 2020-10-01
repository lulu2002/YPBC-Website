import {Component, OnInit} from '@angular/core';
import {faBaseballBall} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() {
  }

  baseball = faBaseballBall;

  ngOnInit(): void {
  }

}
