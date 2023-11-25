import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'estudiantil',
    loadChildren: () => import('./users2/estudiantil/estudiantil.module').then( m => m.EstudiantilPageModule)
  },
  {
    path: 'form-academica',
    loadChildren: () => import('./users2/form-academica/form-academica.module').then( m => m.FormAcademicaPageModule)
  },
  {
    path: 'per-profesional',
    loadChildren: () => import('./users2/per-profesional/per-profesional.module').then( m => m.PerProfesionalPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./users2/habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  },
  {
    path: 'destacados',
    loadChildren: () => import('./users2/destacados/destacados.module').then( m => m.DestacadosPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./users2/contactos/contactos.module').then( m => m.ContactosPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
