import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChannelPopoverPageComponent } from '../../pages/channel-popover-page/channel-popover-page.component';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { IChannelItem } from '../../abstracts/interfaces/channel.interface';
import { ChannelsDataBrokerConfigItemIndcIconConfig, ChannelsDataBrokerConfigItemIndcImageConfig } from '../../abstracts/interfaces/channels-data-broker-config.interface';
import { ACTION_SHEET_FUNCTION, ACTION_SHEET_OPTIONS } from 'app-base-lib';


export enum NEW_MESSAGE_COUNT { COUNT = 0, CHANNEL };

@Component({
  selector: 'channels-ui-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.css']
})

export class ChannelItemComponent implements OnInit {
  NEW_MESSAGE_COUNT = NEW_MESSAGE_COUNT;

  @Input() count!: NEW_MESSAGE_COUNT;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  @Input() channelItem!: IChannelItem;
  @Input() indicatorConfig!: ChannelsDataBrokerConfigItemIndcIconConfig | ChannelsDataBrokerConfigItemIndcImageConfig;

  @Input() actionSheetTitle!: string;

  @Input() actionSheetFunction!: ACTION_SHEET_FUNCTION;

  @Input() deletable!: boolean;

  @Input() editable!: boolean;

  @Input() cancel!: boolean;

  constructor(
    public actionSheetController: ActionSheetController) {
  }

  ngOnInit(): void {
  }

  async presentActionSheet() {

    const buttons: ACTION_SHEET_OPTIONS['buttons'] = [];

    buttons.push({
      id: 'edit',
      label: 'Edit',
      role: 'update',
    });
    buttons.push({
      id: 'delete',
      label: 'Delete',
      role: 'delete',
    });

    buttons.push({
      id: 'cancel',
      label: 'Cancel',
      role: 'cancel',
    });

    const resp = await this.actionSheetFunction({
      title: this.actionSheetTitle,
      buttons
    });

    resp.onEnd.then((result) => {
      if (result.id == 'edit') {
        this.editFunc();
      }
      else if (result.id == 'delete') {
        this.deleteFunc();
      }
    });

  }

  private deleteFunc() {
    this.delete.emit();
  }

  private editFunc() {
    this.edit.emit();
  }

}