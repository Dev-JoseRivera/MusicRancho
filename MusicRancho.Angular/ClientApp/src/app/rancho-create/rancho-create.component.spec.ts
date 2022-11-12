import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanchoCreateComponent } from './rancho-create.component';

describe('RanchoCreateComponent', () => {
  let component: RanchoCreateComponent;
  let fixture: ComponentFixture<RanchoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanchoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanchoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
