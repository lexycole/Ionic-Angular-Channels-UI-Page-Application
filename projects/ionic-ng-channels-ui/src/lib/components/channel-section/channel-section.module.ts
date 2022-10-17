import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelSectionComponent } from './channel-section.component';
import { ChannelListModule } from '../channel-list/channel-list.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ChannelSectionComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ChannelListModule,
  ],
  exports: [
    ChannelSectionComponent,
  ]

})
export class ChannelSectionModule { }
