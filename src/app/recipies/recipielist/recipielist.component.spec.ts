import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipielistComponent } from './recipielist.component';

describe('RecipielistComponent', () => {
  let component: RecipielistComponent;
  let fixture: ComponentFixture<RecipielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipielistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
