import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Album', url: '/folder/inbox', icon: 'image' },
  ];
  public appPages1 = [
    { title: 'Perfil Personal', url: 'perfil_personal', icon: 'people'},
    { title: 'Formación Académica', url: 'forma_academica', icon: 'school' },
    { title: 'Habilidades ', url: 'habilidades', icon: 'desktop' },
    { title: 'Contacto', url: 'contacto', icon: 'call' }
  ]
  public appPages2 = [
    { title: 'Acerca de Mi', url: 'estudiantil', icon: 'people'},
    { title: 'Formación Académica', url: 'form-academica', icon: 'school' },
    { title: 'Perfil Profesional ', url: 'per-profesional', icon: 'desktop' },
    { title: 'Habilidades Técnicas', url: 'habilidades', icon: 'bookmarks' },
    { title: 'Proyectos Destacados', url: 'destacados', icon: 'extension-puzzle' },
    { title: 'Contactos', url: 'contactos', icon: 'call' },
  ];
  
  constructor() {}
}
