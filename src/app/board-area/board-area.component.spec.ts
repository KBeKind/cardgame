import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAreaComponent } from './board-area.component';

describe('BoardAreaComponent', () => {
  let component: BoardAreaComponent;
  let fixture: ComponentFixture<BoardAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
