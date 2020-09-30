import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Record} from '../interface/record';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {
  }

  public getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>('assets/data/records.json');
  }
}
