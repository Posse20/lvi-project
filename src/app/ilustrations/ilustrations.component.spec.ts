import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlustrationsComponent } from './ilustrations.component';

describe('IlustrationsComponent', () => {
  let component: IlustrationsComponent;
  let fixture: ComponentFixture<IlustrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlustrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlustrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
