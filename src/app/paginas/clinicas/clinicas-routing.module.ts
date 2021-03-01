import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicasPage } from './clinicas.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicasPageRoutingModule {}
