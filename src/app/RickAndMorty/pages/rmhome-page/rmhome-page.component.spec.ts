import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RMhomePageComponent } from './rmhome-page.component';

describe('RMhomePageComponent', () => {
  let component: RMhomePageComponent;
  let fixture: ComponentFixture<RMhomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RMhomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RMhomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
