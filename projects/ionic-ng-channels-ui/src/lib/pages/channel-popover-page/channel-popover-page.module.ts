import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { ChannelPopoverPageComponent } from './channel-popover-page.component';
import { ChannelPopoverPageRoutingModule } from './channel-popover-page-routing.module';

@NgModule({
  declarations: [
    ChannelPopoverPageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ChannelPopoverPageRoutingModule,
  ],
  exports: [
    ChannelPopoverPageComponent,
  ]
})
export class ChannelPopoverPageModule { }
