import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-magic-select',
  templateUrl: './magic-select.component.html',
  styleUrls: ['./magic-select.component.scss']
})
export class MagicSelectComponent implements OnInit {

  @Input() private options: any = [];
  @Input() private title: any = [];

  @Output() dataSelected: EventEmitter<any> = new EventEmitter();

  constructor(private ls: LocationService) {
  }

  ngOnInit() {
    
  }

  changeValue(e){
    this.dataSelected.emit(e.target.value);
  }

}
