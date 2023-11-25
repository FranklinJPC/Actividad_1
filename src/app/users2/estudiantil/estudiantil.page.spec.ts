import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiantilPage } from './estudiantil.page';

describe('EstudiantilPage', () => {
  let component: EstudiantilPage;
  let fixture: ComponentFixture<EstudiantilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstudiantilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
