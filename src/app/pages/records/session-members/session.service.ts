import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Session} from '../../../shared/interface/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) {
  }

  public getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>('assets/data/sessions.json');
  }
}
