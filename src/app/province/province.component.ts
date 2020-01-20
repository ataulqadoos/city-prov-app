import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {

  provinces: {key: string, value: string}[] =
    [
      {key: "", value: ""},
      {key: "on", value: "Ontario"},
      {key: "qc", value: "Quebec"},
      {key: "ab", value: "Alberta"}
    ];

  @Output() provinceSelectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(event: any) {
    this.provinceSelectedEvent.emit(event.target.value);
  }

}
