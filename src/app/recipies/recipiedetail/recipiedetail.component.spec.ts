import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiedetailComponent } from './recipiedetail.component';

describe('RecipiedetailComponent', () => {
  let component: RecipiedetailComponent;
  let fixture: ComponentFixture<RecipiedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipiedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipiedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
