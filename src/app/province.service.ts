import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private provinceSelectedSubject = new Subject<string>();
  provinceSelectedObservable = this.provinceSelectedSubject.asObservable();

  constructor() {
  }

  provinceSelected(province) {
    this.provinceSelectedSubject.next(province);
  }
}
