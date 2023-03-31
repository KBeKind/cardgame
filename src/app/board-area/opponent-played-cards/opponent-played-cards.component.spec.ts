import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentPlayedCardsComponent } from './opponent-played-cards.component';

describe('OpponentPlayedCardsComponent', () => {
  let component: OpponentPlayedCardsComponent;
  let fixture: ComponentFixture<OpponentPlayedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentPlayedCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpponentPlayedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
