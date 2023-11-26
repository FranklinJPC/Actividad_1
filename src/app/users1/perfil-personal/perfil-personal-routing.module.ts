import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPersonalPage } from './perfil-personal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPersonalPageRoutingModule {}
