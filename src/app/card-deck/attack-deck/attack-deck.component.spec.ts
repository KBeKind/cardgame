import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackDeckComponent } from './attack-deck.component';

describe('AttackDeckComponent', () => {
  let component: AttackDeckComponent;
  let fixture: ComponentFixture<AttackDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
