import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ChannelSectionModule } from '../channel-section/channel-section.module';

@NgModule({
  declarations: [
    ChannelsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    ChannelSectionModule
  ],
  exports: [
    ChannelsComponent,
  ]

})
export class ChannelsModule { }
