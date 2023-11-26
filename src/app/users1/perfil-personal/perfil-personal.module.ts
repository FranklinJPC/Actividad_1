import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPersonalPageRoutingModule } from './perfil-personal-routing.module';

import { PerfilPersonalPage } from './perfil-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPersonalPageRoutingModule
  ],
  declarations: [PerfilPersonalPage]
})
export class PerfilPersonalPageModule {}
