import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentCurrentCardComponent } from './opponent-current-card.component';

describe('OpponentCurrentCardComponent', () => {
  let component: OpponentCurrentCardComponent;
  let fixture: ComponentFixture<OpponentCurrentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentCurrentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpponentCurrentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
