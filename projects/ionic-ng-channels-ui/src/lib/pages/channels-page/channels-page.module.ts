import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsPageRoutingModule } from './channels-page-routing.module';
import { ChannelsPageComponent } from './channels-page.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { LoaderComponentModule } from 'vicky-ionic-ng-lib';
import { ChannelsModule } from '../../components/channels/channels.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChannelsPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    ChannelsPageRoutingModule,
    LoaderComponentModule,
    ChannelsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ChannelsPageComponent,
  ]
})
export class ChannelsPageModule {
}
