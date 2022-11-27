import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuckingChildComponent } from './fucking-child.component';

describe('FuckingChildComponent', () => {
  let component: FuckingChildComponent;
  let fixture: ComponentFixture<FuckingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuckingChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuckingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
