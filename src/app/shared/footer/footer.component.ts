import {Component, OnInit} from '@angular/core';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Globals} from '../../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ig = faInstagram;
  fb = faFacebook;

  constructor(public globals: Globals) {
  }

  ngOnInit(): void {
  }

}
