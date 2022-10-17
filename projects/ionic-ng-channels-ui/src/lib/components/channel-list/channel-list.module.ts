import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ChannelItemComponent } from '../channel-item/channel-item.component';
import { ChannelListComponent } from './channel-list.component';
import { ChannelItemModule } from '../channel-item/channel-item.module';

@NgModule({
  declarations: [
    ChannelListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    ChannelItemModule,
  ],
  exports: [
    ChannelListComponent,
  ]
})
export class ChannelListModule { }
