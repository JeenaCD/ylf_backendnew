import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IppoComponent } from './ippo.component';

describe('IppoComponent', () => {
  let component: IppoComponent;
  let fixture: ComponentFixture<IppoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IppoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IppoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
