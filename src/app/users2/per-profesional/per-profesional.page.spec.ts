import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerProfesionalPage } from './per-profesional.page';

describe('PerProfesionalPage', () => {
  let component: PerProfesionalPage;
  let fixture: ComponentFixture<PerProfesionalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
