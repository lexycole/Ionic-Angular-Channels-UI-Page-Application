import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ChannelItemComponent } from '../channel-item/channel-item.component';
import { ChannelPopoverPageModule } from '../../pages/channel-popover-page/channel-popover-page.module';

@NgModule({
  declarations: [
    ChannelItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    ChannelPopoverPageModule,
  ],
  exports: [
    ChannelItemComponent,
  ]
})
export class ChannelItemModule { }
