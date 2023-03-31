import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCurrentCardComponent } from './player-current-card.component';

describe('PlayerCurrentCardComponent', () => {
  let component: PlayerCurrentCardComponent;
  let fixture: ComponentFixture<PlayerCurrentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCurrentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCurrentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
