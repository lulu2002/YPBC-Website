import {Component, OnInit} from '@angular/core';
import {SessionService} from './session.service';
import {Session} from '../../../shared/interface/session';

@Component({
  selector: 'app-session-members',
  templateUrl: './session-members.component.html',
  styleUrls: ['./session-members.component.scss']
})
export class SessionMembersComponent implements OnInit {

  sessions: Session[] = [];

  constructor(sessionService: SessionService) {
    sessionService.getSessions().subscribe(value => {
      this.sessions = value;
    });
  }

  ngOnInit(): void {
  }

}
