import {Component, OnInit} from '@angular/core';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ig = faInstagram;
  fb = faFacebook;

  ngOnInit(): void {
  }

}
