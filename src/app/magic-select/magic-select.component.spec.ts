import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicSelectComponent } from './magic-select.component';

describe('MagicSelectComponent', () => {
  let component: MagicSelectComponent;
  let fixture: ComponentFixture<MagicSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
