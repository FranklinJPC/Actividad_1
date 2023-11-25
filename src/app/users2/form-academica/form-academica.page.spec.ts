import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAcademicaPage } from './form-academica.page';

describe('FormAcademicaPage', () => {
  let component: FormAcademicaPage;
  let fixture: ComponentFixture<FormAcademicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormAcademicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
