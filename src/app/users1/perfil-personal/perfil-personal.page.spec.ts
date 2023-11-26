import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPersonalPage } from './perfil-personal.page';

describe('PerfilPersonalPage', () => {
  let component: PerfilPersonalPage;
  let fixture: ComponentFixture<PerfilPersonalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilPersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
