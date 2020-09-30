import {Component, OnInit} from '@angular/core';
import {RecordsService} from '../../shared/service/records.service';
import {Record} from '../../shared/interface/record';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  public map: Map<number, Record[]> = new Map<number, Record[]>();

  constructor(private recordsService: RecordsService) {
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.recordsService.getRecords().subscribe(value => {
      this.map = this.groupBy(value);
    });
  }

  private groupBy(value: Record[]): Map<number, Record[]> {
    const map = new Map<number, Record[]>();

    value.forEach(record => {
      const collection = map.get(record.session);
      if (!collection) {
        map.set(record.session, [record]);
      } else {
        collection.push(record);
      }
    });

    return map;
  }

}
