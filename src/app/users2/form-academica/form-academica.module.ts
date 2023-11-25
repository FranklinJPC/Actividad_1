import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAcademicaPageRoutingModule } from './form-academica-routing.module';

import { FormAcademicaPage } from './form-academica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAcademicaPageRoutingModule
  ],
  declarations: [FormAcademicaPage]
})
export class FormAcademicaPageModule {}
