import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../location.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-magic-select',
  templateUrl: './magic-select.component.html',
  styleUrls: ['./magic-select.component.scss']
})
export class MagicSelectComponent implements OnInit {

  @Input() private category: any = "";
  @Input() private title: any = [];

  options: any;

  constructor(private ls: LocationService) {
    
  }

  ngOnInit() {
    this.ls[this.category].subscribe( (options) => {
      this.options = options;
    });

    this.ls.loadCountries();
  }

  changeValue(e){
    switch (this.category) {
      case "countries":
        this.ls.setCountry(e.target.value);
        break;
      case "departments":
          this.ls.setDepartment(e.target.value);
        break;
    }
  }


}
