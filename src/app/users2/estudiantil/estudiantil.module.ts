import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiantilPageRoutingModule } from './estudiantil-routing.module';

import { EstudiantilPage } from './estudiantil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiantilPageRoutingModule
  ],
  declarations: [EstudiantilPage]
})
export class EstudiantilPageModule {}
