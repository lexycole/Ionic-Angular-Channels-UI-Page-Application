import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChannelEditorPageRoutingModule } from './channel-editor-page-routing.module';
import { ChannelEditorPageComponent } from './channel-editor-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChannelEditorPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    ChannelEditorPageRoutingModule
  ],
  exports: [
    ChannelEditorPageComponent
  ]
})
export class ChannelEditorPageModule { }
