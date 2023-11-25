import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerProfesionalPage } from './per-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: PerProfesionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerProfesionalPageRoutingModule {}
