import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCardSidebarComponent } from './current-card-sidebar.component';

describe('CurrentCardSidebarComponent', () => {
  let component: CurrentCardSidebarComponent;
  let fixture: ComponentFixture<CurrentCardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCardSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
