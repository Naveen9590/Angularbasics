import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipieitemComponent } from './recipieitem.component';

describe('RecipieitemComponent', () => {
  let component: RecipieitemComponent;
  let fixture: ComponentFixture<RecipieitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipieitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipieitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
