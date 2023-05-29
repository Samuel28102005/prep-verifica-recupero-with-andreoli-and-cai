import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirraComponent } from './birra.component';

describe('BirraComponent', () => {
  let component: BirraComponent;
  let fixture: ComponentFixture<BirraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirraComponent]
    });
    fixture = TestBed.createComponent(BirraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
