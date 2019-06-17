import { Component } from '@angular/core';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services';
  countries: any = []
  departments: any = []
  cities: any = []

  constructor(private ls: LocationService){
    this.countries = this.ls.countries;
    console.log(this.ls.location);
    
  }

  changeCountry(e){
    let country = this.ls.getCountry(e);
    this.ls.setCountry(country);
    this.departments = this.ls.getDepartments(this.ls.location.country.id);
  }

  changeDepartment(e){
    let department = this.ls.getDepartment(e);
    this.ls.setDepartment(department);
    console.log(
     this.ls.getCities(this.ls.location.department.id)
    );
  }

  changeCity(e){
    console.log(e);
  }
}
