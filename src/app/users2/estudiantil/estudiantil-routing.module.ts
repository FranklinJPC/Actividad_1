import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantilPage } from './estudiantil.page';

const routes: Routes = [
  {
    path: '',
    component: EstudiantilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantilPageRoutingModule {}
