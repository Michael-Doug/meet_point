import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetPointComponent } from './meet-point.component';

describe('MeetPointComponent', () => {
  let component: MeetPointComponent;
  let fixture: ComponentFixture<MeetPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetPointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
