import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDropdownComponent } from './my-dropdown.component';

describe('MyDropdownComponent', () => {
  let component: MyDropdownComponent;
  let fixture: ComponentFixture<MyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
