import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProvinceService} from '../province.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {

  provinces: {key: string, value: string}[] =
    [
      {key: '', value: ''},
      {key: 'on', value: 'Ontario'},
      {key: 'qc', value: 'Quebec'},
      {key: 'ab', value: 'Alberta'}
    ];

  constructor(private provinceService: ProvinceService) { }

  ngOnInit() {
  }

  onSelect(province) {
    this.provinceService.provinceSelected(province);
  }

}
