import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cities: {province:string, cities: {cityCode: string, cityName: string}[]}[] = [
    {
      province: "on",
      cities: [{cityCode: "tor", cityName: "Toronto"}, {cityCode: "bram", cityName: "Brampton"}]
    },
    {
      province: "qc",
      cities: [{cityCode: "mont", cityName: "Montreal"}, {cityCode: "qbc", cityName: "Quebec City"}]
    },
    {
      province: "ab",
      cities: [{cityCode: "cal", cityName: "Calgary"}, {cityCode: "edm", cityName: "Edmonton"}]
    }
  ];

  currentCityList: {cityCode: string, cityName: string}[] = [];

  @Input() set province(prov: string) {
    const citiesByProv = this.cities.find((data) => data.province === prov);
    if (citiesByProv) {
      this.currentCityList = citiesByProv.cities;
    } else {
      this.currentCityList = this.cities.find((data) => data.province === 'on').cities;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
