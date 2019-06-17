import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  _countries: Subject<number> = new Subject();
  _departments: Subject<number> = new Subject();
  _cities: Subject<number> = new Subject();
  

  constructor() {
  }

  get countries() : Subject<any> {
    return this._countries;
  }
  set countries(src: Subject<any>) {
    this._countries = src;
  }

  get departments() : Subject<any> {
    return this._departments;
  }
  set departments(src: Subject<any>) {
    this._departments = src;
  }

  get cities() : Subject<any> {
    return this._cities;
  }
  set cities(src: Subject<any>) {
    this._cities = src;
  }

  loadCountries(){
    this.countries.next([
      { id: 1, name: "colombia" },
      { id: 2, name: "USA" },
    ]);
  }

  loadDepartments(countryId){
    let depts = [
      { id: 1, name: "Bogotá", countryId: 1 },
      { id: 2, name: "Valle del cauca", countryId: 1 },
    ];
    this.departments.next(depts.filter(elm => elm.countryId == countryId));
  }

  loadCities(departmentId){
    let cities = [
      { id: 1, name: "Bogotá", departmentId: 1 },
      { id: 2, name: "Cali", departmentId: 2 },
    ];
    this.cities.next(cities.filter(elm => elm.departmentId == departmentId));
  }

  setCountry(id){
    this.loadDepartments(id);
  }

  setDepartment(id){
    this.loadCities(id);
  }
}
