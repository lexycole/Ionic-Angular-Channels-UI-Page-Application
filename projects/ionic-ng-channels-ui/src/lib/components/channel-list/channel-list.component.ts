import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { ACTION_SHEET_FUNCTION } from 'app-base-lib';
import { IChannelItem, IChannelSection } from '../../abstracts/interfaces/channel.interface';
import { ChannelsDataBrokerConfigItemIndcIconConfig, ChannelsDataBrokerConfigItemIndcImageConfig } from '../../abstracts/interfaces/channels-data-broker-config.interface';

@Component({
  selector: 'channels-ui-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})

export class ChannelListComponent implements OnInit {
  @Output() edit = new EventEmitter<IChannelSection>();
  @Output() delete = new EventEmitter<IChannelSection>();

  @Input() actionSheetFunction!: ACTION_SHEET_FUNCTION;

  @Input() channelItems!: IChannelItem[];

  @Input()
  deletable!: boolean;

  @Input()
  editable!: boolean;

  @Input() indicatorConfig!: ChannelsDataBrokerConfigItemIndcIconConfig | ChannelsDataBrokerConfigItemIndcImageConfig;

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  link!: IChannelSection[];

  deleteFunc(link: IChannelSection) {
    this.delete.emit(link);
  }

  editFunc(link: IChannelSection) {
    this.edit.emit(link);
  }

}