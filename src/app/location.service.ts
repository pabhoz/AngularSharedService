import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  countries: any = [];
  departments: any = [];
  cities: any = [];

  _country: Subject<number> = new Subject();

  constructor() {

    this.countries = [
      { id: 1, name: "colombia" },
      { id: 2, name: "USA" },
    ];

    this.departments = [
      { id: 1, name: "Bogotá", countryId: 1 },
      { id: 2, name: "Valle del cauca", countryId: 1 },
    ];

    this.cities = [
      { id: 1, name: "Bogotá", departmentId: 1 },
      { id: 2, name: "Cali", departmentId: 2 },
    ];

  }

  get country() : Subject<number> {
    return this._country;
  }
  set country(src: Subject<number>) {
    this._country = src;
  }

  setCountry(n: number) {
    this.country.next(n);
  }
/*
  location = {
    country: { id: null, name: "" },
    department: { id: null, name: "" },
    city: { id: null, name: "" }
  }

  loaded = {
    countries: [],
    departments: [],
    cities: []
  }

  constructor() {

    this.countries = [
      { id: 1, name: "colombia" },
      { id: 2, name: "USA" },
    ];

    this.departments = [
      { id: 1, name: "Bogotá", countryId: 1 },
      { id: 2, name: "Valle del cauca", countryId: 1 },
    ];

    this.cities = [
      { id: 1, name: "Bogotá", departmentId: 1 },
      { id: 2, name: "Cali", departmentId: 2 },
    ];

    this.loaded.countries = this.countries;

  }
  getElementById(elements, id) {
    let element = elements.find((element) => {
      return element.id == id;
    })
    return element;
  }

  getCountries() {
    return this.countries;
  }
  getCountry(id) {
    return this.getElementById(this.countries, id);
  }
  setCountry(country) {
    this.location.country = country;
  }

  getDepartments(countryId) {
    return this.departments.filter( element => element.countryId = countryId)
  }

  getDepartment(id) {
    return this.getElementById(this.departments, id);
  }
  setDepartment(department) {
    this.location.department = department;
  }

  getCities(departmentId) {
    return this.cities.filter( element => element.departmentId = departmentId)
  }
  setCity(city) {
    this.location.city = city;
  }
  */
}
