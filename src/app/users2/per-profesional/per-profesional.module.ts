import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerProfesionalPageRoutingModule } from './per-profesional-routing.module';

import { PerProfesionalPage } from './per-profesional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerProfesionalPageRoutingModule
  ],
  declarations: [PerProfesionalPage]
})
export class PerProfesionalPageModule {}
