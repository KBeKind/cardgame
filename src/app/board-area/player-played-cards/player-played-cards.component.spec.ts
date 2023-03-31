import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPlayedCardsComponent } from './player-played-cards.component';

describe('PlayerPlayedCardsComponent', () => {
  let component: PlayerPlayedCardsComponent;
  let fixture: ComponentFixture<PlayerPlayedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPlayedCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerPlayedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
