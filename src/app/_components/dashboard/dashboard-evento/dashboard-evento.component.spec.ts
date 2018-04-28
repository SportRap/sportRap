import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEventoComponent } from './dashboard-evento.component';

describe('EventoComponent', () => {
  let component: DashboardEventoComponent;
  let fixture: ComponentFixture<DashboardEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
