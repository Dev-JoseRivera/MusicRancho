import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanchoComponent } from './rancho.component';

describe('RanchoComponent', () => {
  let component: RanchoComponent;
  let fixture: ComponentFixture<RanchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanchoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
