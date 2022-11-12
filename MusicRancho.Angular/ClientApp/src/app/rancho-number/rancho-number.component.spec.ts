import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanchoNumberComponent } from './rancho-number.component';

describe('RanchoNumberComponent', () => {
  let component: RanchoNumberComponent;
  let fixture: ComponentFixture<RanchoNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanchoNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanchoNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
