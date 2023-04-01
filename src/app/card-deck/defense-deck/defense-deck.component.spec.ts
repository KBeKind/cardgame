import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseDeckComponent } from './defense-deck.component';

describe('DefenseDeckComponent', () => {
  let component: DefenseDeckComponent;
  let fixture: ComponentFixture<DefenseDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefenseDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefenseDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
