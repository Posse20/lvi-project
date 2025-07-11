import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritesComponent } from './writes.component';

describe('WritesComponent', () => {
  let component: WritesComponent;
  let fixture: ComponentFixture<WritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
