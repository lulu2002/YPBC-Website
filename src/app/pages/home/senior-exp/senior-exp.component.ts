import {Component, OnInit} from '@angular/core';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-senior-exp',
  templateUrl: './senior-exp.component.html',
  styleUrls: ['./senior-exp.component.scss']
})
export class SeniorExpComponent implements OnInit {

  quote = faQuoteLeft;

  ngOnInit(): void {

  }

}
