import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsPageComponent } from './channels-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: ChannelsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsPageRoutingModule { }